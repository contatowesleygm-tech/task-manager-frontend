import { useEffect, useState, type FormEvent } from 'react';
import {
  Activity, ArrowLeft, CalendarDays, CheckCircle2, ListChecks, LoaderCircle,
  PauseCircle, Plus, Save, Trash2,
} from 'lucide-react';
import {
  Button, ButtonRow, ChecklistRow, Columns, Field, FooterActions, Filter,
  ItemEditor, ItemInput, ItemRow, Meta, Muted, NumberBubble, PageTitle, Panel,
  PanelTitle, PreviewBox, PreviewHeading, Status, TwoFields,
} from '../components/ui';
import type { CreateTaskPayload, Task, TaskFrequency, TaskId, TaskPriority, UpdateTaskPayload } from '../types';
import { getTaskFrequency } from '../utils/taskFrequency';

interface TaskDetailsPageProps {
  task?: Task;
  loading: boolean;
  saving: boolean;
  onBack: () => void;
  onSave: (payload: UpdateTaskPayload) => Promise<boolean>;
  onDelete: (taskId: TaskId) => void;
  onSetActive: (taskId: TaskId, isActive: boolean) => Promise<boolean>;
  onValidationError: (message: string) => void;
  statusChanging: boolean;
}

const displayDate = (value?: string | null) => value
  ? new Date(`${value.slice(0, 10)}T12:00:00`).toLocaleDateString('pt-BR')
  : 'Não definida';

export default function TaskDetailsPage({
  task, loading, saving, onBack, onSave, onDelete, onSetActive, onValidationError,
  statusChanging,
}: TaskDetailsPageProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<TaskPriority>('medium');
  const [frequency, setFrequency] = useState<TaskFrequency>('diaria');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    if (!task) return;
    setTitle(task.title);
    setDescription(task.description ?? '');
    setPriority(task.priority ?? 'medium');
    setFrequency(getTaskFrequency(task.frequencia) ?? 'diaria');
    setStartDate(task.start_date.slice(0, 10));
    setEndDate(task.end_date?.slice(0, 10) ?? '');
    setItems([...task.items]
      .sort((a, b) => a.sort_order - b.sort_order)
      .map(item => item.title));
  }, [task?.id]);

  function updateItem(index: number, value: string) {
    setItems(current => current.map((item, itemIndex) => itemIndex === index ? value : item));
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

    const payload: CreateTaskPayload = {
      title: title.trim(),
      description: description.trim() || null,
      priority,
      frequencia: frequency,
      start_date: startDate || undefined,
      end_date: endDate || null,
      items: cleanItems,
    };
    await onSave(payload);
  }

  if (loading && !task) {
    return <Panel><Muted>Carregando tarefa...</Muted></Panel>;
  }

  if (!task) {
    return (
      <>
        <PageTitle><div><h1>Tarefa não encontrada</h1><p>Não foi possível localizar essa tarefa na listagem.</p></div></PageTitle>
        <Button onClick={onBack}><ArrowLeft />Voltar para tarefas</Button>
      </>
    );
  }

  return (
    <>
      <PageTitle>
        <div><h1>Editar tarefa</h1><p>Atualize os mesmos campos disponíveis na criação.</p></div>
        <Button onClick={onBack}><ArrowLeft />Voltar para tarefas</Button>
      </PageTitle>
      <Columns>
        <Panel>
          <ButtonRow style={{ alignItems: 'center', justifyContent: 'space-between', marginBottom: 22 }}>
            <div>
              <PanelTitle style={{ marginBottom: 8 }}>Tarefa · ID {task.id}</PanelTitle>
              <Status $done={task.is_active}>{task.is_active ? 'Ativa' : 'Desativada'}</Status>
            </div>
            <Button
              type="button"
              $variant={task.is_active ? 'danger' : 'primary'}
              disabled={statusChanging}
              onClick={() => { void onSetActive(task.id, !task.is_active); }}
            >
              {statusChanging
                ? <LoaderCircle className="spin" />
                : task.is_active ? <PauseCircle /> : <CheckCircle2 />}
              {statusChanging ? 'Atualizando...' : task.is_active ? 'Desativar tarefa' : 'Ativar tarefa'}
            </Button>
          </ButtonRow>
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
              Itens da tarefa * <ListChecks size={15} color="#7b8ba3" />
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
                    aria-label={`Remover item ${index + 1}`}
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
              <Button type="button" onClick={onBack}>Cancelar</Button>
              <Button type="button" $variant="danger" onClick={() => onDelete(task.id)}><Trash2 />Excluir tarefa</Button>
              <Button type="submit" $variant="primary" disabled={saving}>
                {saving ? <LoaderCircle className="spin" /> : <Save />}
                {saving ? 'Salvando...' : 'Salvar alterações'}
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
              <span><Activity size={15} style={{ verticalAlign: 'middle', marginRight: 7 }} />Prioridade: {({ high: 'Alta', medium: 'Média', low: 'Baixa' } as const)[priority]}</span>
              <span><Activity size={15} style={{ verticalAlign: 'middle', marginRight: 7 }} />Frequência: {frequency === 'diaria' ? 'Dia' : frequency === 'semana' ? 'Semana' : 'Mês'}</span>
              <span><Activity size={15} style={{ verticalAlign: 'middle', marginRight: 7 }} />Status: {task.is_active ? 'Ativa' : 'Desativada'}</span>
            </Meta>
          </PreviewBox>
          <PanelTitle>Itens da tarefa</PanelTitle>
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
