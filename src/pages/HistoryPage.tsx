import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { CalendarDays, CheckCircle2, ChevronLeft, ChevronRight, Clock3, History, LoaderCircle, ListChecks, TrendingUp } from 'lucide-react';
import styled from 'styled-components';
import {
  Button, EmptyState, Field, Filter, PageTitle, Panel, Status,
} from '../components/ui';
import type { DailyHistoryDay, DailyHistoryPeriod, DailyTaskRecord } from '../types';

const HistoryLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(260px, .7fr) minmax(0, 1.5fr);
  align-items: start;
  gap: 18px;
  @media (max-width: 850px) { grid-template-columns: 1fr; }
`;

const OverviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 18px;
  @media (max-width: 620px) { grid-template-columns: 1fr; }
`;

const OverviewCard = styled.div`
  display: grid;
  grid-template-columns: 38px minmax(0, 1fr);
  align-items: center;
  gap: 11px;
  padding: 14px 15px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: linear-gradient(135deg, var(--surface), var(--surface-raised));
  box-shadow: 0 4px 14px rgba(23, 38, 61, .03);
  svg { width: 18px; height: 18px; color: var(--primary); }
  > span { display: grid; width: 38px; height: 38px; place-items: center; border-radius: 11px; background: color-mix(in srgb, var(--primary) 16%, var(--surface)); }
  small { display: block; color: var(--muted); font-size: 11px; }
  strong { display: block; margin-top: 2px; color: var(--text); font-size: 20px; }
`;

const ProgressTrack = styled.div`
  height: 6px;
  margin-top: 9px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--border);
  div { height: 100%; border-radius: inherit; background: linear-gradient(90deg, var(--primary), #46ad82); }
`;

const SectionTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 9px;
  margin: 0 0 15px;
  color: var(--text);
  font-size: 16px;
  svg { color: var(--primary); }
`;

const DetailHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 15px;
  @media (max-width: 520px) { flex-direction: column; }
`;

const DetailStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  color: #71819a;
  font-size: 11px;
`;

const StatPill = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 5px 8px;
  border-radius: 999px;
  background: var(--surface-raised);
`;

const DayList = styled.div`
  display: grid;
  gap: 9px;
`;

const DayButton = styled.button<{ $active: boolean }>`
  display: grid;
  width: 100%;
  gap: 7px;
  padding: 13px;
  border: 1px solid ${({ $active }) => $active ? 'var(--primary)' : 'var(--border)'};
  border-radius: 10px;
  color: var(--text);
  background: ${({ $active }) => $active ? 'color-mix(in srgb, var(--primary) 14%, var(--surface))' : 'var(--surface)'};
  text-align: left;
  cursor: pointer;
  &:hover { border-color: var(--primary); }
  &:focus-visible { outline: 3px solid #b8d0fb; outline-offset: 1px; }
`;

const DayHeader = styled.span`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  font-size: 13px;
  font-weight: 750;
  text-transform: capitalize;
`;

const DaySummary = styled.span`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  color: var(--muted);
  font-size: 11px;
`;

const PaginationRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 14px;
  color: var(--muted);
  font-size: 11px;
`;

const DayItems = styled.div`
  display: grid;
  gap: 8px;
`;

const HistoryItem = styled.div<{ $completed: boolean }>`
  display: grid;
  grid-template-columns: 20px minmax(0, 1fr) auto;
  align-items: start;
  gap: 9px;
  padding: 11px 12px;
  border: 1px solid ${({ $completed }) => $completed ? '#d8eee2' : 'var(--border)'};
  border-radius: 9px;
  background: ${({ $completed }) => $completed ? '#f5fbf7' : 'var(--surface-raised)'};
  > svg { margin-top: 1px; color: ${({ $completed }) => $completed ? '#21875c' : '#9aa7b8'}; }
`;

const ItemDetails = styled.div`
  min-width: 0;
  strong { display: block; color: var(--text); font-size: 12px; line-height: 1.45; overflow-wrap: anywhere; }
  span { display: block; margin-top: 3px; color: var(--muted); font-size: 11px; }
`;

const ItemTime = styled.time`
  color: var(--muted);
  font-size: 11px;
  white-space: nowrap;
`;

interface HistoryPageProps {
  mode: 'daily' | 'week' | 'month';
  days: DailyHistoryDay[];
  periods: DailyHistoryPeriod[];
  selectedDay?: DailyHistoryDay;
  selectedPeriod?: DailyHistoryPeriod;
  selectedDate: string;
  dayDetails: DailyTaskRecord[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
  loading: boolean;
  detailLoading: boolean;
  referenceDate?: string;
  onModeChange: (mode: 'daily' | 'week' | 'month') => void;
  onPeriodSearch: (date?: string) => void;
  onSelectDate: (date: string) => void;
  onSelectPeriod: (period: DailyHistoryPeriod) => void;
  onPageChange: (page: number) => void;
}

function dateKey(value: string): string {
  return value.slice(0, 10);
}

function displayDate(value: string): string {
  return new Date(`${dateKey(value)}T12:00:00`).toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function displayTime(value?: string | null): string {
  return value ? new Date(value).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) : '';
}

function completionPercent(completed: number, total: number): number {
  return total > 0 ? Math.round(completed / total * 100) : 0;
}

export default function HistoryPage({
  mode, days, periods, selectedDay, selectedPeriod, selectedDate, dayDetails, pagination,
  loading, detailLoading, referenceDate, onModeChange, onPeriodSearch, onSelectDate,
  onSelectPeriod, onPageChange,
}: HistoryPageProps) {
  const [periodDate, setPeriodDate] = useState(() => referenceDate ?? dateKey(new Date().toISOString()));
  const itemsByTask = useMemo(() => dayDetails.map(record => ({
    ...record,
    items: record.items,
  })), [dayDetails]);

  useEffect(() => {
    if (referenceDate) setPeriodDate(referenceDate);
  }, [referenceDate]);

  function handlePeriodSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (periodDate) onPeriodSearch(periodDate);
  }

  const overview = mode === 'daily' ? selectedDay : selectedPeriod;
  const overviewCompleted = overview?.completed_items ?? 0;
  const overviewPending = overview?.pending_items ?? 0;
  const overviewTotal = overviewCompleted + overviewPending;
  const overviewPercent = overview?.completion_percentage == null
    ? completionPercent(overviewCompleted, overviewTotal)
    : Math.round(overview.completion_percentage);

  return (
    <>
      <PageTitle>
        <div>
          <h1>Histórico {mode === 'week' ? 'semanal' : mode === 'month' ? 'mensal' : 'diário'}</h1>
          <p>Consulte o que foi concluído e o que ficou pendente em cada período.</p>
        </div>
      </PageTitle>

      <Panel style={{ marginBottom: 18 }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', flexWrap: 'wrap', gap: 12 }}>
          <Field style={{ minWidth: 220, marginBottom: 0 }}>Visualização
            <Filter value={mode} onChange={event => onModeChange(event.target.value as 'daily' | 'week' | 'month')}>
              <option value="daily">Por dia</option>
              <option value="week">Por semana</option>
              <option value="month">Por mês</option>
            </Filter>
          </Field>
          {(
            <form onSubmit={handlePeriodSearch} style={{ display: 'flex', alignItems: 'flex-end', gap: 10, flexWrap: 'wrap' }}>
              <Field style={{ minWidth: 200, marginBottom: 0 }}>{mode === 'daily' ? 'Data do dia' : 'Data da semana ou mês'}
                <input
                  type="date"
                  value={periodDate}
                  onChange={event => setPeriodDate(event.target.value)}
                  required
                />
              </Field>
              <Button type="submit" $variant="primary" disabled={loading}>Consultar período</Button>
              {referenceDate && (
                <Button type="button" disabled={loading} onClick={() => onPeriodSearch()}>
                  Limpar data
                </Button>
              )}
            </form>
          )}
        </div>
      </Panel>

      <OverviewGrid aria-label="Resumo do histórico">
        <OverviewCard>
          <span><CalendarDays /></span>
          <div><small>{mode === 'daily' ? 'Dia selecionado' : mode === 'week' ? 'Semana selecionada' : 'Mês selecionado'}</small><strong>{overview ? overviewTotal : '—'}</strong></div>
        </OverviewCard>
        <OverviewCard>
          <span><CheckCircle2 /></span>
          <div><small>Itens concluídos</small><strong>{overview ? overviewCompleted : '—'}</strong></div>
        </OverviewCard>
        <OverviewCard>
          <span><TrendingUp /></span>
          <div><small>Progresso</small><strong>{overview ? `${overviewPercent}%` : '—'}</strong></div>
        </OverviewCard>
      </OverviewGrid>

      <HistoryLayout>
        <Panel>
          <SectionTitle>
            <Clock3 size={18} />{mode === 'week' ? 'Dias da semana' : mode === 'month' ? 'Dias do mês' : 'Dias anteriores'}
          </SectionTitle>
          {loading ? (
            <EmptyState><LoaderCircle /><p>Carregando histórico...</p></EmptyState>
          ) : (mode === 'daily' ? days.length === 0 : periods.length === 0) ? (
            <EmptyState>
              <History size={30} />
              <h3>{mode === 'daily' ? 'Sem histórico anterior' : 'Nenhum período encontrado'}</h3>
              <p>{mode === 'daily' ? 'Os registros diários anteriores aparecerão aqui.' : 'Os períodos com registros históricos aparecerão aqui.'}</p>
            </EmptyState>
          ) : (
            <>
              <DayList>
                {mode === 'daily'
                  ? days.map(day => (
                    <DayButton
                      key={dateKey(day.date)}
                      type="button"
                      $active={dateKey(selectedDate) === dateKey(day.date)}
                      aria-pressed={dateKey(selectedDate) === dateKey(day.date)}
                      onClick={() => onSelectDate(dateKey(day.date))}
                    >
                      <DayHeader>
                        <span>{displayDate(day.date)}</span>
                        <CalendarDays size={15} />
                      </DayHeader>
                      <DaySummary>
                        <span>{day.completed_items} concluídas · {day.pending_items} pendentes</span>
                        <span>{day.completion_percentage == null ? '—' : `${Math.round(day.completion_percentage)}%`}</span>
                      </DaySummary>
                      <ProgressTrack><div style={{ width: `${day.completion_percentage == null ? completionPercent(day.completed_items, day.completed_items + day.pending_items) : Math.round(day.completion_percentage)}%` }} /></ProgressTrack>
                    </DayButton>
                  ))
                  : periods.map(period => (
                    <DayButton
                      key={dateKey(period.start_date)}
                      type="button"
                      $active={dateKey(selectedPeriod?.start_date ?? '') === dateKey(period.start_date)}
                      aria-pressed={dateKey(selectedPeriod?.start_date ?? '') === dateKey(period.start_date)}
                      onClick={() => onSelectPeriod(period)}
                    >
                      <DayHeader>
                        <span>{mode === 'week' ? 'Semana' : 'Mês'}: {displayDate(period.start_date)} – {displayDate(period.end_date)}</span>
                        <CalendarDays size={15} />
                      </DayHeader>
                      <DaySummary>
                        <span>{period.completed_items} concluídas · {period.pending_items} pendentes</span>
                        <span>{period.completion_percentage == null ? '—' : `${Math.round(period.completion_percentage)}%`}</span>
                      </DaySummary>
                      <ProgressTrack><div style={{ width: `${period.completion_percentage == null ? completionPercent(period.completed_items, period.completed_items + period.pending_items) : Math.round(period.completion_percentage)}%` }} /></ProgressTrack>
                    </DayButton>
                  ))}
              </DayList>
              <PaginationRow>
                <span>{pagination.total} {mode === 'daily' ? (pagination.total === 1 ? 'dia' : 'dias') : (pagination.total === 1 ? 'período' : 'períodos')} · Página {pagination.page} de {pagination.totalPages || 1}</span>
                <div style={{ display: 'flex', gap: 6 }}>
                  <Button
                    type="button"
                    aria-label="Página anterior do histórico"
                    disabled={!pagination.hasPreviousPage || loading}
                    onClick={() => onPageChange(pagination.page - 1)}
                  >
                    <ChevronLeft />
                  </Button>
                  <Button
                    type="button"
                    aria-label="Próxima página do histórico"
                    disabled={!pagination.hasNextPage || loading}
                    onClick={() => onPageChange(pagination.page + 1)}
                  >
                    <ChevronRight />
                  </Button>
                </div>
              </PaginationRow>
            </>
          )}
        </Panel>

        <Panel>
          <DetailHeader>
            <SectionTitle>
            <ListChecks size={18} />
            {selectedPeriod
              ? `${mode === 'week' ? 'Semana' : 'Mês'}: ${displayDate(selectedPeriod.start_date)} – ${displayDate(selectedPeriod.end_date)}`
              : selectedDate ? displayDate(selectedDate) : 'Detalhes do dia'}
            </SectionTitle>
            {overview && <DetailStats><StatPill>{overviewCompleted} concluídas</StatPill><StatPill>{overviewPending} pendentes</StatPill></DetailStats>}
          </DetailHeader>
          {detailLoading ? (
            <EmptyState><LoaderCircle /><p>Carregando atividades do dia...</p></EmptyState>
          ) : !selectedDate ? (
            <EmptyState><CalendarDays size={30} /><p>Selecione um dia para ver as atividades.</p></EmptyState>
          ) : itemsByTask.length === 0 ? (
            <EmptyState>
              <CheckCircle2 size={30} />
              <h3>Nenhuma atividade registrada</h3>
              <p>Não foram encontrados itens para este dia.</p>
            </EmptyState>
          ) : (
            <div style={{ display: 'grid', gap: 16 }}>
              {itemsByTask.map(record => (
                <section key={String(record.task_id)} aria-label={record.task_title}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, marginBottom: 8 }}>
                    <strong style={{ color: '#273850', fontSize: 13 }}>{record.task_title}</strong>
                    <Status $done={record.completed_items === record.total_items && record.total_items > 0}>
                      {record.completed_items}/{record.total_items} concluídas
                    </Status>
                  </div>
                  <DayItems>
                    {record.items.map(item => (
                      <HistoryItem key={item.id} $completed={item.is_completed}>
                        {item.is_completed ? <CheckCircle2 size={17} /> : <span aria-hidden="true">•</span>}
                        <ItemDetails>
                          <strong>{item.title}</strong>
                          <span>
                            {item.is_completed ? 'Concluída' : 'Pendente'}
                            {item.record_date ? ` · ${displayDate(item.record_date)}` : ''}
                          </span>
                        </ItemDetails>
                        {item.completed_at && <ItemTime>{displayTime(item.completed_at)}</ItemTime>}
                      </HistoryItem>
                    ))}
                  </DayItems>
                </section>
              ))}
            </div>
          )}
        </Panel>
      </HistoryLayout>
    </>
  );
}
