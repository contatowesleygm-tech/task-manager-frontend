import { useCallback, useEffect, useState, type FormEvent } from 'react';
import axios from 'axios';
import {
  CalendarDays, Check, LoaderCircle, Pause, Pencil, Play, Plus, Receipt, Repeat, ShoppingBag, Trash2, Wallet, X,
} from 'lucide-react';
import styled from 'styled-components';
import { Button, EmptyState, Field, Modal, Panel, PanelTitle, PageHero } from '../components/ui';
import ConfirmDialog from '../components/ui/ConfirmDialog';
import {
  createExpense, deleteExpense, getExpenseCategories, getExpenses, getExpenseSummary, updateExpense,
} from '../api';
import type {
  Expense, ExpenseCategory, ExpenseFilters, ExpensePayload, ExpenseSummary, ExpenseType, PaginatedExpenses,
} from '../types';

const Page = styled.div`
  display: grid;
  gap: 20px;
`;

const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 13px;
  @media (max-width: 720px) { grid-template-columns: 1fr; }
`;

const SummaryCard = styled(Panel)`
  padding: 18px;
  small { display: block; color: var(--muted); font-size: 11px; }
  strong { display: block; margin-top: 4px; color: var(--text); font-size: 23px; }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(250px, .6fr);
  gap: 18px;
  align-items: start;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`;

const CategoryRow = styled.div`
  display: grid;
  gap: 6px;
  margin-bottom: 13px;
  > div:first-child { display: flex; justify-content: space-between; gap: 8px; color: var(--text); font-size: 12px; }
  > div:first-child span { color: var(--muted); }
`;

const CategoryTrack = styled.div`
  height: 8px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--surface-raised);
  > div { height: 100%; border-radius: inherit; background: var(--primary); }
`;

const Toolbar = styled.form`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr)) auto;
  align-items: end;
  gap: 10px;
  padding: 15px;
  margin-bottom: 17px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--surface-raised);
  ${Field} { margin: 0; }
  @media (max-width: 900px) { grid-template-columns: 1fr 1fr; }
  @media (max-width: 480px) { grid-template-columns: 1fr; }
`;

const List = styled.div`
  display: grid;
  gap: 11px;
`;

const Card = styled.article<{ $inactive: boolean }>`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 15px;
  padding: 16px;
  border: 1px solid var(--border);
  border-left: 3px solid var(--primary);
  border-radius: 15px;
  background: var(--surface);
  box-shadow: 0 5px 16px var(--shadow);
  opacity: ${({ $inactive }) => $inactive ? 0.6 : 1};
  h3 { margin: 0; color: var(--text); font-size: 15px; overflow-wrap: anywhere; }
  p { margin: 6px 0 0; color: var(--muted); font-size: 12px; line-height: 1.55; white-space: pre-wrap; overflow-wrap: anywhere; }
  @media (max-width: 620px) { grid-template-columns: 1fr; }
`;

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px 14px;
  margin-top: 10px;
  color: var(--muted);
  font-size: 11px;
  span { display: inline-flex; align-items: center; gap: 5px; }
  svg { width: 14px; height: 14px; }
`;

const Aside = styled.div`
  display: grid;
  justify-items: end;
  align-content: space-between;
  gap: 12px;
  > strong { color: var(--text); font-size: 18px; }
  @media (max-width: 620px) { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; }
`;

const Actions = styled.div`
  display: flex;
  gap: 6px;
`;

const IconButton = styled.button`
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border: 1px solid var(--border);
  border-radius: 9px;
  color: var(--muted);
  background: var(--surface-raised);
  cursor: pointer;
  &:hover { color: var(--primary); border-color: var(--primary); }
  &[data-danger='true']:hover { color: var(--error); background: var(--error-soft); }
  svg { width: 15px; height: 15px; }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 14px;
  ${Field}:first-child, ${Field}:last-of-type { grid-column: 1 / -1; }
  @media (max-width: 620px) { grid-template-columns: 1fr; ${Field} { grid-column: auto; } }
`;

const FormActions = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: flex-end;
  gap: 9px;
`;

const PaginationBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 16px;
  color: var(--muted);
  font-size: 12px;
`;

interface FormState {
  name: string;
  expense_type: ExpenseType;
  category: string;
  amount: string;
  expense_date: string;
  due_day: string;
  is_active: boolean;
  notes: string;
}

const typeLabels: Record<ExpenseType, string> = { compra: 'Compra', fixa: 'Fixa mensal' };

const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

function money(value: number | string | undefined): string {
  return currency.format(Number(value) || 0);
}

function currentMonth(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
}

function today(): string {
  const now = new Date();
  return `${currentMonth()}-${String(now.getDate()).padStart(2, '0')}`;
}

function readableDate(value: string): string {
  return new Date(`${value.slice(0, 10)}T12:00:00`).toLocaleDateString('pt-BR');
}

function emptyForm(): FormState {
  return {
    name: '', expense_type: 'compra', category: '', amount: '', expense_date: today(),
    due_day: '', is_active: true, notes: '',
  };
}

function formFrom(expense: Expense): FormState {
  return {
    name: expense.name,
    expense_type: expense.expense_type,
    category: expense.category,
    amount: String(Number(expense.amount)),
    expense_date: expense.expense_date?.slice(0, 10) ?? '',
    due_day: expense.due_day == null ? '' : String(expense.due_day),
    is_active: expense.is_active,
    notes: expense.notes ?? '',
  };
}

function makePayload(form: FormState): ExpensePayload {
  const amount = Number(form.amount.replace(',', '.'));
  if (!Number.isFinite(amount) || amount <= 0) throw new Error('Informe um valor maior que zero.');
  const payload: ExpensePayload = {
    name: form.name.trim(),
    expense_type: form.expense_type,
    amount,
    is_active: form.is_active,
    notes: form.notes.trim() || null,
  };
  if (form.category.trim()) payload.category = form.category.trim();
  if (form.expense_type === 'compra') {
    if (!form.expense_date) throw new Error('Informe a data da compra.');
    payload.expense_date = form.expense_date;
  } else {
    const day = Number(form.due_day);
    if (!Number.isInteger(day) || day < 1 || day > 31) throw new Error('O dia de vencimento deve ser de 1 a 31.');
    payload.due_day = day;
  }
  return payload;
}

function getErrorMessage(error: unknown, fallback: string): string {
  if (error instanceof Error && !axios.isAxiosError(error)) return error.message;
  if (axios.isAxiosError<{ error?: string }>(error)) return error.response?.data?.error || fallback;
  return fallback;
}

export default function ExpensesPage() {
  const [result, setResult] = useState<PaginatedExpenses>();
  const [summary, setSummary] = useState<ExpenseSummary>();
  const [categories, setCategories] = useState<ExpenseCategory[]>([]);
  const [month, setMonth] = useState(currentMonth());
  const [filters, setFilters] = useState<ExpenseFilters>({ page: 1, limit: 20 });
  const [draft, setDraft] = useState({ type: '', category: '', active: '', search: '' });
  const [form, setForm] = useState<FormState>(emptyForm);
  const [editing, setEditing] = useState<Expense | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [pendingDelete, setPendingDelete] = useState<Expense | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [refreshVersion, setRefreshVersion] = useState(0);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError('');
    Promise.all([
      getExpenses({ ...filters, month }),
      getExpenseSummary(month),
      getExpenseCategories(),
    ]).then(([loaded, loadedSummary, loadedCategories]) => {
      if (!active) return;
      setResult(loaded);
      setSummary(loadedSummary);
      setCategories(loadedCategories);
    }).catch(loadError => {
      if (active) setError(getErrorMessage(loadError, 'Não foi possível carregar as despesas.'));
    }).finally(() => {
      if (active) setLoading(false);
    });
    return () => { active = false; };
  }, [filters, month, refreshVersion]);

  function openCreate() {
    setEditing(null);
    setForm(emptyForm());
    setFormOpen(true);
  }

  const closeForm = useCallback(() => setFormOpen(false), []);

  function openEdit(expense: Expense) {
    setEditing(expense);
    setForm(formFrom(expense));
    setFormOpen(true);
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setNotice('');
    setSaving(true);
    try {
      const payload = makePayload(form);
      if (editing) await updateExpense(editing.id, payload);
      else await createExpense(payload);
      setFormOpen(false);
      setEditing(null);
      setNotice(editing ? 'Despesa atualizada.' : 'Despesa cadastrada.');
      setRefreshVersion(version => version + 1);
    } catch (saveError) {
      setError(getErrorMessage(saveError, 'Não foi possível salvar a despesa.'));
    } finally {
      setSaving(false);
    }
  }

  async function toggleActive(expense: Expense) {
    setError('');
    setNotice('');
    try {
      await updateExpense(expense.id, { is_active: !expense.is_active });
      setRefreshVersion(version => version + 1);
    } catch (toggleError) {
      setError(getErrorMessage(toggleError, 'Não foi possível alterar a despesa.'));
    }
  }

  async function confirmDelete() {
    if (!pendingDelete) return;
    setError('');
    setNotice('');
    try {
      await deleteExpense(pendingDelete.id);
      setNotice('Despesa removida.');
      setRefreshVersion(version => version + 1);
    } catch (deleteError) {
      setError(getErrorMessage(deleteError, 'Não foi possível excluir a despesa.'));
    } finally {
      setPendingDelete(null);
    }
  }

  function applyFilters(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFilters({
      type: (draft.type || undefined) as ExpenseType | undefined,
      category: draft.category || undefined,
      active: draft.active ? draft.active === 'true' : undefined,
      search: draft.search.trim() || undefined,
      page: 1,
      limit: 20,
    });
  }

  const expenses = result?.data ?? [];
  const pagination = result?.pagination;
  const total = Number(summary?.total) || 0;

  return (
    <Page>
      <PageHero>
        <div>
          <span><Receipt size={14} /> Controle de despesas</span>
          <h1>Para onde vai seu dinheiro.</h1>
          <p>Registre compras e contas fixas mensais e veja quanto cada categoria pesa no seu mês.</p>
        </div>
        <Button type="button" $variant="primary" onClick={openCreate}><Plus />Nova despesa</Button>
      </PageHero>

      {error && <Panel role="alert" style={{ color: 'var(--error)', padding: 14 }}>{error}</Panel>}
      {notice && <Panel role="status" style={{ color: 'var(--primary-strong)', padding: 14 }}>{notice}</Panel>}

      <SummaryGrid aria-label="Resumo das despesas do mês">
        <SummaryCard><small>Contas fixas ativas</small><strong>{money(summary?.fixed_total)}</strong></SummaryCard>
        <SummaryCard><small>Compras do mês</small><strong>{money(summary?.purchases_total)}</strong></SummaryCard>
        <SummaryCard><small>Total do mês</small><strong>{money(summary?.total)}</strong></SummaryCard>
        {summary?.comparison && (() => {
          const diff = Number(summary.comparison.difference) || 0;
          const pct = summary.comparison.change_percentage;
          return (
            <SummaryCard>
              <small>Vs. mês anterior ({summary.comparison.previous_month})</small>
              <strong style={{ color: diff > 0 ? 'var(--error)' : diff < 0 ? 'var(--primary-strong)' : undefined }}>
                {diff > 0 ? '+' : ''}{money(diff)}{pct === null || pct === undefined ? '' : ` (${Number(pct) > 0 ? '+' : ''}${Number(pct).toFixed(2)}%)`}
              </strong>
            </SummaryCard>
          );
        })()}
        {summary?.top_category && (
          <SummaryCard>
            <small>Maior gasto: {summary.top_category.category}</small>
            <strong>{money(summary.top_category.total)} ({Number(summary.top_category.percentage).toFixed(2)}%)</strong>
          </SummaryCard>
        )}
      </SummaryGrid>

      <ContentGrid>
        <Panel>
          <PanelTitle><Wallet size={19} />Despesas</PanelTitle>
          <Modal
            open={formOpen}
            title={editing ? 'Editar despesa' : 'Nova despesa'}
            icon={editing ? <Pencil size={18} /> : <Plus size={18} />}
            busy={saving}
            onClose={closeForm}
          >
              <Form onSubmit={event => { void submit(event); }}>
                <Field htmlFor="expense-name">Nome *
                  <input id="expense-name" maxLength={160} value={form.name} onChange={event => setForm(current => ({ ...current, name: event.target.value }))} placeholder="Ex.: Aluguel" required />
                </Field>
                <Field htmlFor="expense-type">Tipo *
                  <select id="expense-type" value={form.expense_type} onChange={event => setForm(current => ({ ...current, expense_type: event.target.value as ExpenseType }))}>
                    <option value="compra">Compra (pontual)</option>
                    <option value="fixa">Fixa (mensal)</option>
                  </select>
                </Field>
                <Field htmlFor="expense-amount">Valor (R$) *
                  <input id="expense-amount" type="number" min={0.01} step="0.01" value={form.amount} onChange={event => setForm(current => ({ ...current, amount: event.target.value }))} required />
                </Field>
                {form.expense_type === 'compra' ? (
                  <Field htmlFor="expense-date">Data da compra *
                    <input id="expense-date" type="date" value={form.expense_date} onChange={event => setForm(current => ({ ...current, expense_date: event.target.value }))} required />
                  </Field>
                ) : (
                  <Field htmlFor="expense-due">Dia do vencimento *
                    <input id="expense-due" type="number" min={1} max={31} step={1} value={form.due_day} onChange={event => setForm(current => ({ ...current, due_day: event.target.value }))} required />
                  </Field>
                )}
                <Field htmlFor="expense-category">Categoria
                  <input id="expense-category" list="expense-categories" maxLength={60} value={form.category} onChange={event => setForm(current => ({ ...current, category: event.target.value }))} placeholder="Outros" />
                  <datalist id="expense-categories">
                    {categories.map(item => <option key={item.category} value={item.category} />)}
                  </datalist>
                </Field>
                <Field htmlFor="expense-active">Situação
                  <select id="expense-active" value={String(form.is_active)} onChange={event => setForm(current => ({ ...current, is_active: event.target.value === 'true' }))}>
                    <option value="true">Ativa</option>
                    <option value="false">Pausada</option>
                  </select>
                </Field>
                <Field htmlFor="expense-notes">Observações
                  <textarea id="expense-notes" maxLength={2000} value={form.notes} onChange={event => setForm(current => ({ ...current, notes: event.target.value }))} />
                </Field>
                <FormActions>
                  <Button type="button" onClick={closeForm} disabled={saving}><X />Cancelar</Button>
                  <Button type="submit" $variant="primary" disabled={saving}>{saving ? <LoaderCircle /> : <Check />}{editing ? 'Salvar alterações' : 'Cadastrar'}</Button>
                </FormActions>
              </Form>
          </Modal>


          <Toolbar onSubmit={applyFilters}>
            <Field htmlFor="filter-month">Mês das compras
              <input id="filter-month" type="month" value={month} onChange={event => { setMonth(event.target.value || currentMonth()); setFilters(current => ({ ...current, page: 1 })); }} />
            </Field>
            <Field htmlFor="filter-type">Tipo
              <select id="filter-type" value={draft.type} onChange={event => setDraft(current => ({ ...current, type: event.target.value }))}>
                <option value="">Todos</option>
                <option value="compra">Compras</option>
                <option value="fixa">Fixas</option>
              </select>
            </Field>
            <Field htmlFor="filter-category">Categoria
              <select id="filter-category" value={draft.category} onChange={event => setDraft(current => ({ ...current, category: event.target.value }))}>
                <option value="">Todas</option>
                {categories.map(item => <option key={item.category} value={item.category}>{item.category}</option>)}
              </select>
            </Field>
            <Field htmlFor="filter-search">Buscar
              <input id="filter-search" value={draft.search} onChange={event => setDraft(current => ({ ...current, search: event.target.value }))} placeholder="Nome" />
            </Field>
            <Button type="submit"><CalendarDays />Filtrar</Button>
          </Toolbar>

          {loading ? (
            <EmptyState><LoaderCircle /><p>Carregando despesas...</p></EmptyState>
          ) : expenses.length ? (
            <List>
              {expenses.map(expense => (
                <Card key={String(expense.id)} $inactive={!expense.is_active}>
                  <div>
                    <h3>{expense.name}</h3>
                    {expense.notes && <p>{expense.notes}</p>}
                    <Meta>
                      <span>{expense.expense_type === 'fixa' ? <Repeat /> : <ShoppingBag />}{typeLabels[expense.expense_type]}</span>
                      <span>{expense.category}</span>
                      {expense.expense_type === 'fixa' && expense.due_day != null && <span><CalendarDays />Vence dia {expense.due_day}</span>}
                      {expense.expense_type === 'compra' && expense.expense_date && <span><CalendarDays />{readableDate(expense.expense_date)}</span>}
                      {!expense.is_active && <span>Pausada</span>}
                    </Meta>
                  </div>
                  <Aside>
                    <strong>{money(expense.amount)}</strong>
                    <Actions>
                      {expense.expense_type === 'fixa' && (
                        <IconButton type="button" title={expense.is_active ? 'Pausar' : 'Reativar'} aria-label={`${expense.is_active ? 'Pausar' : 'Reativar'} ${expense.name}`} onClick={() => { void toggleActive(expense); }}>
                          {expense.is_active ? <Pause /> : <Play />}
                        </IconButton>
                      )}
                      <IconButton type="button" title="Editar" aria-label={`Editar ${expense.name}`} onClick={() => openEdit(expense)}><Pencil /></IconButton>
                      <IconButton type="button" data-danger="true" title="Excluir" aria-label={`Excluir ${expense.name}`} onClick={() => setPendingDelete(expense)}><Trash2 /></IconButton>
                    </Actions>
                  </Aside>
                </Card>
              ))}
            </List>
          ) : result ? (
            <EmptyState><Receipt size={30} /><h3>Nenhuma despesa encontrada</h3><p>Cadastre uma compra ou conta fixa para começar.</p><Button type="button" $variant="primary" onClick={openCreate}><Plus />Nova despesa</Button></EmptyState>
          ) : null}

          {pagination && pagination.total > 0 && (
            <PaginationBar>
              <span>{pagination.total} despesas · página {pagination.page} de {Math.max(pagination.totalPages, 1)}</span>
              <div style={{ display: 'flex', gap: 7 }}>
                <Button type="button" disabled={!pagination.hasPreviousPage || loading} onClick={() => setFilters(current => ({ ...current, page: Math.max((current.page ?? 1) - 1, 1) }))}>Anterior</Button>
                <Button type="button" disabled={!pagination.hasNextPage || loading} onClick={() => setFilters(current => ({ ...current, page: (current.page ?? 1) + 1 }))}>Próxima</Button>
              </div>
            </PaginationBar>
          )}
        </Panel>

        <Panel>
          <PanelTitle><Wallet size={19} />Por categoria</PanelTitle>
          {summary?.by_category.length ? summary.by_category.map(item => {
            const value = Number(item.total) || 0;
            return (
              <CategoryRow key={item.category}>
                <div><strong>{item.category}</strong><span>{money(value)}{item.percentage !== undefined ? ` · ${Number(item.percentage).toFixed(1)}%` : ''}</span></div>
                <CategoryTrack><div style={{ width: `${total > 0 ? Math.min((value / total) * 100, 100) : 0}%` }} /></CategoryTrack>
              </CategoryRow>
            );
          }) : <p style={{ margin: 0, color: 'var(--muted)', fontSize: 12 }}>Sem despesas neste mês.</p>}

          {summary?.daily_spending?.length ? (() => {
            const max = Math.max(...summary.daily_spending.map(day => Number(day.total) || 0), 0);
            return (
              <>
                <PanelTitle style={{ marginTop: 18 }}><Wallet size={19} />Compras por dia</PanelTitle>
                {summary.daily_spending.map(day => {
                  const value = Number(day.total) || 0;
                  return (
                    <CategoryRow key={day.date}>
                      <div><strong>{day.date.slice(8, 10)}/{day.date.slice(5, 7)}</strong><span>{money(value)}</span></div>
                      <CategoryTrack><div style={{ width: `${max > 0 ? (value / max) * 100 : 0}%` }} /></CategoryTrack>
                    </CategoryRow>
                  );
                })}
              </>
            );
          })() : null}
        </Panel>
      </ContentGrid>

      <ConfirmDialog
        open={pendingDelete !== null}
        title="Excluir despesa?"
        description={pendingDelete ? `“${pendingDelete.name}” será removida permanentemente.` : ''}
        confirmLabel="Excluir"
        busy={false}
        onConfirm={() => { void confirmDelete(); }}
        onCancel={() => setPendingDelete(null)}
      />
    </Page>
  );
}
