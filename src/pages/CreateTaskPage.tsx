import { useState, type FormEvent } from 'react';
import { Activity, CalendarDays, CircleHelp, LoaderCircle, Plus, Save, Trash2, X, ListChecks } from 'lucide-react';
import {
  Button, ChecklistRow, Columns, Field, FooterActions, ItemEditor, ItemInput,
  ItemRow, Meta, Muted, NumberBubble, PageTitle, Panel, PanelTitle, PreviewBox,
  PreviewHeading, Status, TwoFields, Filter,
} from '../components/ui';
import type { CreateTaskPayload, TaskFrequency, TaskPriority } from '../types';

interface CreateTaskPageProps {
  saving: boolean;
  onCreate: (payload: CreateTaskPayload) => Promise<boolean>;
  onValidationError: (message: string) => void;
}

const today = () => new Date().toISOString().slice(0, 10);
const displayDate = (value?: string | null) => value
  ? new Date(`${value.slice(0, 10)}T12:00:00`).toLocaleDateString('pt-BR')
  : 'Não definida';

export default function CreateTaskPage({
  saving, onCreate, onValidationError,
}: CreateTaskPageProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<TaskPriority>('medium');
  const [frequency, setFrequency] = useState<TaskFrequency>('diaria');
  const [startDate, setStartDate] = useState(today());
  const [endDate, setEndDate] = useState('');
  const [items, setItems] = useState(['', '']);

  function updateItem(index: number, value: string) {
    setItems(current => current.map((item, itemIndex) => itemIndex === index ? value : item));
  }

  function resetForm() {
    setTitle('');
    setDescription('');
    setPriority('medium');
    setFrequency('diaria');
    setStartDate(today());
    setEndDate('');
    setItems(['', '']);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onValidationError('');
    const cleanItems = items.map(item => item.trim()).filter(Boolean);
    if (!title.trim()) {
      onValidationError('Informe o título da tarefa.');
      return;
    }
    if (!cleanItems.length) {
      onValidationError('Adicione pelo menos um item à tarefa.');
      return;
    }
    if (endDate && startDate && endDate < startDate) {
      onValidationError('A data final não pode ser anterior à data inicial.');
      return;
    }

    const created = await onCreate({
      title: title.trim(),
      description: description.trim() || null,
      priority,
      frequencia: frequency,
      start_date: startDate || undefined,
      end_date: endDate || null,
      items: cleanItems,
    });
    if (created) resetForm();
  }

  return (
    <>
      <PageTitle><div><h1>Nova tarefa</h1><p>Organize seu dia adicionando tarefas e atividades.</p></div></PageTitle>
      <Columns>
        <Panel>
          <PanelTitle><Plus size={19} color="var(--primary)" /> Criar tarefa</PanelTitle>
          <form onSubmit={event => void handleSubmit(event)}>
            <Field>Título da tarefa *
              <input value={title} onChange={event => setTitle(event.target.value)} maxLength={200} placeholder="Ex.: Estudar programação" required />
            </Field>
            <Field>Descrição <small>(opcional)</small>
              <textarea value={description} onChange={event => setDescription(event.target.value)} maxLength={10000} placeholder="Descreva o objetivo desta tarefa..." />
            </Field>
            <Field>Prioridade
              <Filter value={priority} onChange={event => setPriority(event.target.value as TaskPriority)}>
                <option value="high">Alta</option>
                <option value="medium">Média</option>
                <option value="low">Baixa</option>
              </Filter>
            </Field>
            <Field>Frequência
              <Filter value={frequency} onChange={event => setFrequency(event.target.value as TaskFrequency)}>
                <option value="diaria">Dia</option>
                <option value="semana">Semana</option>
                <option value="mensal">Mês</option>
              </Filter>
            </Field>
            <TwoFields>
              <Field>Data de início
                <input type="date" value={startDate} onChange={event => setStartDate(event.target.value)} />
              </Field>
              <Field>Data de fim <small>(opcional)</small>
                <input type="date" min={startDate || undefined} value={endDate} onChange={event => setEndDate(event.target.value)} />
              </Field>
            </TwoFields>
            <PanelTitle style={{ marginTop: 8, marginBottom: 6 }}>
              Itens da tarefa * <CircleHelp size={15} color="var(--muted)" />
            </PanelTitle>
            <Muted>Adicione as atividades que você quer acompanhar.</Muted>
            <ItemEditor>
              {items.map((item, index) => (
                <ItemRow key={index}>
                  <NumberBubble>{index + 1}</NumberBubble>
                  <ItemInput
                    aria-label={`Item ${index + 1}`}
                    value={item}
                    maxLength={200}
                    onChange={event => updateItem(index, event.target.value)}
                    placeholder="Nome da atividade"
                  />
                  <Button
                    type="button"
                    $variant="danger"
                    aria-label="Remover item"
                    disabled={items.length <= 1}
                    onClick={() => setItems(current => current.filter((_, itemIndex) => itemIndex !== index))}
                  >
                    <Trash2 />
                  </Button>
                </ItemRow>
              ))}
              <div>
                <Button
                  type="button"
                  onClick={() => setItems(current => current.length < 100 ? [...current, ''] : current)}
                  disabled={items.length >= 100}
                >
                  <Plus />Adicionar item
                </Button>
              </div>
            </ItemEditor>
            <FooterActions>
              <Button type="button" onClick={resetForm}><X />Limpar</Button>
              <Button type="submit" $variant="primary" disabled={saving}>
                {saving ? <LoaderCircle className="spin" /> : <Save />}
                {saving ? 'Salvando...' : 'Salvar tarefa'}
              </Button>
            </FooterActions>
          </form>
        </Panel>
        <Panel>
          <PanelTitle>Prévia da tarefa</PanelTitle>
          <PreviewBox>
            <PreviewHeading><ListChecks size={23} />{title.trim() || 'Título da tarefa'}</PreviewHeading>
            <Muted>{description.trim() || 'A descrição aparecerá aqui.'}</Muted>
            <Meta>
              <span><CalendarDays size={15} style={{ verticalAlign: 'middle', marginRight: 7 }} />Início: {displayDate(startDate)}</span>
              <span><CalendarDays size={15} style={{ verticalAlign: 'middle', marginRight: 7 }} />Fim: {displayDate(endDate)}</span>
              <span><Activity size={15} style={{ verticalAlign: 'middle', marginRight: 7 }} />Frequência: {frequency === 'diaria' ? 'Dia' : frequency === 'semana' ? 'Semana' : 'Mês'}</span>
              <span><Activity size={15} style={{ verticalAlign: 'middle', marginRight: 7 }} />Status: Ativa</span>
            </Meta>
          </PreviewBox>
          <PanelTitle>Itens adicionados</PanelTitle>
          {items.some(item => item.trim()) ? items.map((item, index) => (
            item.trim() && (
              <ChecklistRow key={index}>
                <input type="checkbox" disabled />
                <span>{item}</span>
                <Status>Pendente</Status>
              </ChecklistRow>
            )
          )) : <Muted>Os itens aparecerão aqui enquanto você digita.</Muted>}
        </Panel>
      </Columns>
    </>
  );
}
