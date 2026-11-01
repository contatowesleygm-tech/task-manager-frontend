import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react';
import { createPortal } from 'react-dom';
import {
  Ban, Bell, BellRing, Cake, CalendarDays, Check, ChevronLeft, ChevronRight, Clock3,
  LoaderCircle, Pencil, Plus, Save, Trash2, X,
} from 'lucide-react';
import styled, { keyframes } from 'styled-components';
import {
  ActionToast, Button, EmptyState, Field, Filter, Filters, PageTitle, Panel, PanelTitle, Status,
} from '../components/ui';
import type { AlertVariant } from '../components/ui';
import type {
  ScheduleAlert, ScheduleEvent, ScheduleEventStatus, ScheduleEventType, SchedulePayload,
  ScheduleQuery, TaskId,
} from '../types';

const pageEnter = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`;

const cardEnter = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`;

const loaderPulse = keyframes`
  0%, 100% { transform: scale(.88); opacity: .48; }
  50% { transform: scale(1.08); opacity: 1; }
`;

const loaderFloat = keyframes`
  0%, 100% { transform: translateY(0) rotate(-4deg); }
  50% { transform: translateY(-8px) rotate(4deg); }
`;

const AnimatedPage = styled.div`
  animation: ${pageEnter} .35s ease-out both;
  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

const ScheduleLoader = styled.div`
  display: grid; justify-items: center; gap: 12px; min-height: 150px; place-content: center; color: var(--muted); text-align: center;
  p { margin: 0; font-size: 12px; }
  @media (prefers-reduced-motion: reduce) { &, * { animation: none !important; } }
`;

const LoaderVisual = styled.div`
  position: relative; display: grid; width: 68px; height: 68px; place-items: center; color: var(--primary);
  background: color-mix(in srgb, var(--primary) 18%, var(--surface)); border-radius: 50%; box-shadow: 0 10px 24px var(--shadow); animation: ${loaderFloat} 2.2s ease-in-out infinite;
  svg { position: relative; z-index: 1; width: 27px; height: 27px; }
  &::before, &::after { position: absolute; inset: -8px; border: 1px solid rgba(67,128,238,.28); border-radius: 50%; content: ''; animation: ${loaderPulse} 2s ease-out infinite; }
  &::after { inset: -17px; border-color: rgba(67,128,238,.14); animation-delay: .35s; }
`;

const Events = styled.div`
  display: grid;
  gap: 12px;
  margin-top: 18px;
  & > article { animation: ${cardEnter} .3s ease-out both; }
  & > article:nth-child(2) { animation-delay: 40ms; }
  & > article:nth-child(3) { animation-delay: 80ms; }
  & > article:nth-child(4) { animation-delay: 120ms; }
  & > article:nth-child(n+5) { animation-delay: 160ms; }
  @media (prefers-reduced-motion: reduce) { & > article { animation: none; } }
`;

const EventCard = styled.article`
  display: grid;
  grid-template-columns: 52px minmax(0, 1fr) auto;
  gap: 14px;
  align-items: start;
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--surface);
  @media (max-width: 620px) { grid-template-columns: 42px minmax(0, 1fr); }
`;

const EventIcon = styled.div<{ $type: ScheduleEventType }>`
  display: grid;
  width: 46px;
  height: 46px;
  place-items: center;
  border-radius: 13px;
  color: ${({ $type }) => $type === 'aniversario' ? 'var(--warning)' : $type === 'lembrete' ? 'var(--info)' : 'var(--success)'};
  background: ${({ $type }) => $type === 'aniversario' ? 'var(--warning-soft)' : $type === 'lembrete' ? 'var(--info-soft)' : 'var(--success-soft)'};
  svg { width: 21px; height: 21px; }
  @media (max-width: 620px) { width: 40px; height: 40px; }
`;

const EventInfo = styled.div`
  min-width: 0;
  h3 { margin: 0; color: var(--text); font-size: 15px; overflow-wrap: anywhere; }
  p { margin: 5px 0 0; color: var(--muted); font-size: 12px; line-height: 1.5; white-space: pre-wrap; overflow-wrap: anywhere; }
`;

const EventMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 12px;
  margin-top: 9px;
  color: var(--muted);
  font-size: 11px;
  svg { width: 14px; height: 14px; }
`;

const EventActions = styled.div`
  display: flex;
  gap: 7px;
  @media (max-width: 620px) { grid-column: 2; }
`;

const IconButton = styled.button`
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--muted);
  background: var(--surface-raised);
  cursor: pointer;
  &:disabled { opacity: .55; cursor: not-allowed; }
  &:hover { color: var(--primary); background: var(--surface); }
  &[data-danger='true']:hover { color: var(--error); background: var(--error-soft); }
  svg { width: 16px; height: 16px; }
`;

const EventForm = styled(Panel)`
  width: min(680px, calc(100vw - 32px));
  max-height: min(88vh, 760px);
  overflow-y: auto;
  margin: 0;
  padding: 24px;
  box-shadow: 0 24px 70px rgba(20, 38, 66, .22);
  animation: ${pageEnter} .22s ease-out both;
  @media (max-width: 620px) { width: calc(100vw - 20px); padding: 18px; max-height: 92vh; }
`;

const ModalOverlay = styled.div`
  position: fixed; z-index: 1000; inset: 0; display: grid; place-items: center; padding: 16px;
  background: rgba(19, 31, 51, .48); backdrop-filter: blur(5px); animation: ${pageEnter} .18s ease-out both;
`;

const ModalHeader = styled.div`
  display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; margin-bottom: 14px;
`;

const ModalClose = styled.button`
  display: grid; width: 34px; height: 34px; flex: 0 0 auto; place-items: center;
  border: 1px solid var(--border); border-radius: 9px; color: var(--muted); background: var(--surface); cursor: pointer;
  &:hover { color: var(--primary); background: var(--surface-raised); }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0 16px;
  @media (max-width: 620px) { grid-template-columns: 1fr; }
`;

const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 9px;
  flex-wrap: wrap;
  margin-top: 18px;
`;

const RepeatChoice = styled.label`
  display: flex;
  align-items: center;
  gap: 9px;
  margin: 0 0 18px;
  color: var(--text);
  font-size: 13px;
  input { width: 16px; height: 16px; accent-color: var(--primary); }
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 18px;
  color: var(--muted);
  font-size: 12px;
`;

const AlertReason = styled.span`
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 5px 9px;
  color: var(--warning);
  background: var(--warning-soft);
  font-size: 11px;
  font-weight: 700;
`;

const AlertPanel = styled(Panel)`
  margin-bottom: 20px;
  border-color: var(--border);
  background: linear-gradient(135deg, var(--surface), var(--surface-raised));
`;

const DateControl = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  svg { position: absolute; left: 12px; z-index: 1; width: 17px; height: 17px; color: var(--primary); pointer-events: none; }
  input { width: 100%; padding-left: 38px; border-color: var(--border); background: linear-gradient(135deg, var(--surface), var(--surface-raised)); }
  input:hover { border-color: var(--primary); }
  input:focus { border-color: var(--primary); box-shadow: 0 0 0 3px var(--focus); }
  input::-webkit-calendar-picker-indicator { cursor: pointer; opacity: .72; }
`;

const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 20px;
  @media (max-width: 620px) { grid-template-columns: 1fr; }
`;

const SummaryCard = styled.div`
  display: grid;
  grid-template-columns: 38px minmax(0, 1fr);
  align-items: center;
  gap: 11px;
  padding: 14px 15px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: linear-gradient(135deg, var(--surface), var(--surface-raised));
  box-shadow: 0 4px 14px rgba(23, 38, 61, .03);
  > span { display: grid; width: 38px; height: 38px; place-items: center; border-radius: 11px; color: var(--primary); background: color-mix(in srgb, var(--primary) 16%, var(--surface)); }
  small { display: block; color: var(--muted); font-size: 11px; }
  strong { display: block; margin-top: 2px; color: var(--text); font-size: 20px; }
  svg { width: 18px; height: 18px; }
`;

const FormNotice = styled.div`
  margin: -4px 0 16px;
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: 9px;
  color: var(--muted);
  background: var(--surface-raised);
  font-size: 12px;
`;

interface SchedulePageProps {
  events: ScheduleEvent[];
  alerts: ScheduleAlert[];
  loading: boolean;
  alertsLoading: boolean;
  saving: boolean;
  query: ScheduleQuery;
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
  alertPagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
  onApplyFilter: (query: ScheduleQuery) => void;
  onPageChange: (page: number) => void;
  onAlertPageChange: (page: number) => void;
  onCreate: (payload: SchedulePayload) => Promise<boolean>;
  onUpdate: (id: TaskId, payload: Partial<SchedulePayload>) => Promise<boolean>;
  onDelete: (event: ScheduleEvent) => Promise<boolean>;
}

function localDate(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function defaultRange(): { from: string; to: string } {
  const from = new Date();
  const to = new Date(from);
  to.setDate(to.getDate() + 30);
  return { from: localDate(from), to: localDate(to) };
}

function displayDate(value: string): string {
  return new Date(`${value.slice(0, 10)}T12:00:00`).toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function displayTime(value: string | null): string {
  return value ? value.slice(0, 5) : '';
}

function localDateTimeValue(value: string | null): string {
  if (!value) return '';
  const date = new Date(value);
  const pad = (part: number) => String(part).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function eventTypeLabel(type: ScheduleEventType): string {
  if (type === 'aniversario') return 'Aniversário';
  return type === 'atividade' ? 'Atividade' : 'Lembrete';
}

function statusLabel(status: ScheduleEventStatus): string {
  if (status === 'concluido') return 'Concluído';
  return status === 'cancelado' ? 'Cancelado' : 'Pendente';
}

function alertReasonLabel(reason: ScheduleAlert['alert_reasons'][number]): string {
  return reason === 'lembrete_definido' ? 'Lembrete agendado' : 'Nas próximas 24 horas';
}

function getEventDate(event: ScheduleEvent): string {
  return (event.occurrence_date ?? event.event_date).slice(0, 10);
}

function ScheduleLoading({ message }: { message: string }) {
  return <ScheduleLoader><LoaderVisual><BellRing /></LoaderVisual><p>{message}</p></ScheduleLoader>;
}

export default function SchedulePage({
  events, alerts, loading, alertsLoading, saving, query, pagination, alertPagination,
  onApplyFilter, onPageChange, onAlertPageChange, onCreate, onUpdate, onDelete,
}: SchedulePageProps) {
  const initialRange = useMemo(defaultRange, []);
  const [queryMode, setQueryMode] = useState<ScheduleQuery['mode']>(query.mode);
  const [filterDate, setFilterDate] = useState(initialRange.from);
  const [filterFrom, setFilterFrom] = useState(initialRange.from);
  const [filterTo, setFilterTo] = useState(initialRange.to);
  const [filterError, setFilterError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState<ScheduleEvent | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState<ScheduleEventType>('lembrete');
  const [eventDate, setEventDate] = useState(initialRange.from);
  const [eventTime, setEventTime] = useState('');
  const [reminderAt, setReminderAt] = useState('');
  const [repeatYearly, setRepeatYearly] = useState(false);
  const [status, setStatus] = useState<ScheduleEventStatus>('pendente');
  const [feedback, setFeedback] = useState<{ variant: AlertVariant; title: string; message: string } | null>(null);
  const alertsSectionRef = useRef<HTMLDivElement>(null);

  const orderedEvents = useMemo(() => [...events].sort((a, b) => {
    const dateCompare = getEventDate(a).localeCompare(getEventDate(b));
    return dateCompare || (a.event_time ?? '').localeCompare(b.event_time ?? '');
  }), [events]);

  useEffect(() => {
    setQueryMode(query.mode);
    if (query.mode === 'date') setFilterDate(query.date);
    if (query.mode === 'range') {
      setFilterFrom(query.from);
      setFilterTo(query.to);
    }
  }, [query]);

  useEffect(() => {
    if (!showForm) return undefined;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !saving) resetForm();
    };
    document.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [showForm, saving]);

  function resetForm() {
    setShowForm(false);
    setEditingEvent(null);
    setTitle('');
    setDescription('');
    setType('lembrete');
    setEventDate(localDate(new Date()));
    setEventTime('');
    setReminderAt('');
    setRepeatYearly(false);
    setStatus('pendente');
  }

  function startCreate() {
    resetForm();
    setShowForm(true);
  }

  function startEdit(event: ScheduleEvent) {
    setEditingEvent(event);
    setShowForm(true);
    setTitle(event.title);
    setDescription(event.description ?? '');
    setType(event.type);
    setEventDate(event.event_date.slice(0, 10));
    setEventTime(displayTime(event.event_time));
    setReminderAt(localDateTimeValue(event.reminder_at));
    setRepeatYearly(event.repeat_yearly);
    setStatus(event.status);
  }

  async function handleSubmit(formEvent: FormEvent<HTMLFormElement>) {
    formEvent.preventDefault();
    try {
      const payload: SchedulePayload = {
        title: title.trim(),
        description: description.trim() || null,
        type,
        event_date: eventDate,
        event_time: eventTime || null,
        reminder_at: reminderAt ? new Date(reminderAt).toISOString() : null,
        repeat_yearly: repeatYearly,
        status,
      };
      const succeeded = editingEvent
        ? await onUpdate(editingEvent.id, payload)
        : await onCreate(payload);
      if (succeeded) {
        setFeedback({
          variant: 'success',
          title: editingEvent ? 'Agendamento atualizado' : 'Agendamento criado',
          message: editingEvent ? 'As alterações foram salvas com sucesso.' : 'O novo agendamento já está disponível na sua agenda.',
        });
        resetForm();
      } else {
        setFeedback({ variant: 'error', title: 'Não foi possível salvar', message: 'Verifique os dados e tente novamente.' });
      }
    } catch {
      setFeedback({ variant: 'error', title: 'Erro ao salvar', message: 'Ocorreu um problema ao comunicar com o servidor.' });
    }
  }

  async function changeAlertStatus(alert: ScheduleAlert, nextStatus: ScheduleEventStatus) {
    try {
      const succeeded = await onUpdate(alert.id, { status: nextStatus });
      setFeedback(succeeded
        ? { variant: 'success', title: nextStatus === 'concluido' ? 'Alerta concluído' : 'Alerta cancelado', message: `“${alert.title}” foi atualizado com sucesso.` }
        : { variant: 'error', title: 'Não foi possível atualizar o alerta', message: 'Tente novamente em instantes.' });
    } catch {
      setFeedback({ variant: 'error', title: 'Erro ao atualizar o alerta', message: 'Ocorreu um problema ao comunicar com o servidor.' });
    }
  }

  async function deleteEvent(event: ScheduleEvent) {
    try {
      const succeeded = await onDelete(event);
      setFeedback(succeeded
        ? { variant: 'success', title: 'Agendamento excluído', message: `“${event.title}” foi removido da agenda.` }
        : { variant: 'error', title: 'Não foi possível excluir', message: 'O agendamento não foi removido. Tente novamente.' });
    } catch {
      setFeedback({ variant: 'error', title: 'Erro ao excluir', message: 'Ocorreu um problema ao comunicar com o servidor.' });
    }
  }

  function applyFilter(formEvent: FormEvent<HTMLFormElement>) {
    formEvent.preventDefault();
    setFilterError('');
    if (queryMode === 'all') {
      onApplyFilter({ mode: 'all' });
      return;
    }
    if (queryMode === 'date') {
      if (!filterDate) {
        setFilterError('Selecione a data que deseja consultar.');
        return;
      }
      onApplyFilter({ mode: 'date', date: filterDate });
      return;
    }
    if (!filterFrom || !filterTo) {
      setFilterError('Informe as datas inicial e final do intervalo.');
      return;
    }
    if (filterFrom > filterTo) {
      setFilterError('A data inicial não pode ser posterior à data final.');
      return;
    }
    onApplyFilter({ mode: 'range', from: filterFrom, to: filterTo });
  }

  return (
    <AnimatedPage>
      {feedback && (
        <ActionToast
          key={`${feedback.variant}-${feedback.title}-${feedback.message}`}
          variant={feedback.variant}
          title={feedback.title}
          message={feedback.message}
          onDismiss={() => setFeedback(null)}
        />
      )}
      <PageTitle>
        <div>
          <h1>Agenda</h1>
          <p>Organize lembretes, atividades e aniversários em um só lugar.</p>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          <Button type="button" onClick={() => alertsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
            <BellRing />Alertas {alertPagination.total > 0 && `(${alertPagination.total})`}
          </Button>
          <Button $variant="primary" onClick={showForm ? resetForm : startCreate}>
            {showForm ? <X /> : <Plus />}{showForm ? 'Fechar' : 'Novo agendamento'}
          </Button>
        </div>
      </PageTitle>

      <SummaryGrid aria-label="Resumo da agenda">
        <SummaryCard><span><CalendarDays /></span><div><small>Agendamentos exibidos</small><strong>{pagination.total}</strong></div></SummaryCard>
        <SummaryCard><span><BellRing /></span><div><small>Alertas pendentes</small><strong>{alertPagination.total}</strong></div></SummaryCard>
        <SummaryCard><span><Check /></span><div><small>Período consultado</small><strong>{query.mode === 'all' ? 'Todos' : query.mode === 'date' ? '1 dia' : 'Intervalo'}</strong></div></SummaryCard>
      </SummaryGrid>

      <div ref={alertsSectionRef} id="agenda-alertas">
      <AlertPanel>
        <PanelTitle>
          <BellRing size={19} color="var(--warning)" />
          Alertas {alertPagination.total > 0 && `(${alertPagination.total})`}
        </PanelTitle>
        {alertsLoading ? (
          <ScheduleLoading message="Verificando seus alertas..." />
        ) : alerts.length === 0 ? (
          <EmptyState>
            <Bell size={30} />
            <h3>Nenhum alerta pendente</h3>
            <p>Lembretes vencidos e eventos das próximas 24 horas aparecerão aqui.</p>
          </EmptyState>
        ) : (
          <>
            <Events>
              {alerts.map(alert => (
                <EventCard key={alert.id}>
                  <EventIcon $type={alert.type}>
                    {alert.type === 'aniversario' ? <Cake /> : alert.type === 'lembrete' ? <Bell /> : <CalendarDays />}
                  </EventIcon>
                  <EventInfo>
                    <h3>{alert.title}</h3>
                    {alert.description && <p>{alert.description}</p>}
                    <EventMeta>
                      <span>{eventTypeLabel(alert.type)}</span>
                      <span>{displayDate(getEventDate(alert))}</span>
                      {alert.event_time && <span><Clock3 />{displayTime(alert.event_time)}</span>}
                      {alert.alert_reasons.map(reason => (
                        <AlertReason key={reason}>{alertReasonLabel(reason)}</AlertReason>
                      ))}
                    </EventMeta>
                    {alert.reminder_at && (
                      <EventMeta>
                        <span><Bell />Lembrete: {new Date(alert.reminder_at).toLocaleString('pt-BR', {
                          dateStyle: 'short', timeStyle: 'short',
                        })}</span>
                      </EventMeta>
                    )}
                  </EventInfo>
                  <EventActions>
                    <Button
                      type="button"
                      $variant="primary"
                      aria-label={`Concluir ${alert.title} e remover dos alertas`}
                      title="Concluir e remover dos alertas"
                      disabled={saving}
                      onClick={() => { void changeAlertStatus(alert, 'concluido'); }}
                    >
                      <Check />Concluir
                    </Button>
                    <Button
                      type="button"
                      $variant="danger"
                      aria-label={`Cancelar ${alert.title} e remover dos alertas`}
                      title="Cancelar e remover dos alertas"
                      disabled={saving}
                      onClick={() => { void changeAlertStatus(alert, 'cancelado'); }}
                    >
                      <Ban />Cancelar
                    </Button>
                  </EventActions>
                </EventCard>
              ))}
            </Events>
            {alertPagination.totalPages > 1 && (
              <Pagination>
                <span>Página {alertPagination.page} de {alertPagination.totalPages}</span>
                <div style={{ display: 'flex', gap: 7 }}>
                  <Button
                    type="button"
                    aria-label="Alertas página anterior"
                    disabled={!alertPagination.hasPreviousPage || alertsLoading}
                    onClick={() => onAlertPageChange(alertPagination.page - 1)}
                  ><ChevronLeft /></Button>
                  <Button
                    type="button"
                    aria-label="Próxima página de alertas"
                    disabled={!alertPagination.hasNextPage || alertsLoading}
                    onClick={() => onAlertPageChange(alertPagination.page + 1)}
                  ><ChevronRight /></Button>
                </div>
              </Pagination>
            )}
          </>
        )}
      </AlertPanel>
      </div>

      {showForm && createPortal(
        <ModalOverlay role="presentation" onMouseDown={event => { if (event.target === event.currentTarget && !saving) resetForm(); }}>
          <EventForm role="dialog" aria-modal="true" aria-labelledby="schedule-modal-title" onMouseDown={event => event.stopPropagation()}>
          <ModalHeader>
          <PanelTitle id="schedule-modal-title">
            {editingEvent ? <Pencil size={19} color="var(--primary)" /> : <Bell size={19} color="var(--primary)" />}
            {editingEvent ? 'Editar agendamento' : 'Criar agendamento'}
          </PanelTitle>
          <ModalClose type="button" aria-label="Fechar janela" title="Fechar (Esc)" onClick={resetForm} disabled={saving}><X size={18} /></ModalClose>
          </ModalHeader>
          <FormNotice>Preencha os dados abaixo. Você receberá um aviso de confirmação após salvar ou atualizar o agendamento.</FormNotice>
          <form onSubmit={event => { void handleSubmit(event); }}>
            <FormGrid>
              <Field>Título *
                <input
                  value={title}
                  onChange={event => setTitle(event.target.value)}
                  maxLength={200}
                  placeholder="Ex.: Aniversário da Ana"
                  required
                />
              </Field>
              <Field>Tipo *
                <Filter
                  value={type}
                  onChange={event => {
                    const nextType = event.target.value as ScheduleEventType;
                    setType(nextType);
                    setRepeatYearly(nextType === 'aniversario');
                  }}
                >
                  <option value="lembrete">Lembrete</option>
                  <option value="atividade">Atividade</option>
                  <option value="aniversario">Aniversário</option>
                </Filter>
              </Field>
              <Field>Data *
                <DateControl>
                  <CalendarDays size={17} aria-hidden="true" />
                  <input
                    type="date"
                    value={eventDate}
                    onChange={event => setEventDate(event.target.value)}
                    required
                  />
                </DateControl>
              </Field>
              <Field>Horário <small>(opcional)</small>
                <DateControl>
                  <Clock3 size={17} aria-hidden="true" />
                  <input
                    type="time"
                    value={eventTime}
                    onChange={event => setEventTime(event.target.value)}
                  />
                </DateControl>
              </Field>
              <Field>Lembrar em <small>(opcional)</small>
                <DateControl>
                  <Clock3 size={17} aria-hidden="true" />
                  <input
                    type="datetime-local"
                    value={reminderAt}
                    onChange={event => setReminderAt(event.target.value)}
                  />
                </DateControl>
              </Field>
              <Field>Status
                <Filter
                  value={status}
                  onChange={event => setStatus(event.target.value as ScheduleEventStatus)}
                >
                  <option value="pendente">Pendente</option>
                  <option value="concluido">Concluído</option>
                  <option value="cancelado">Cancelado</option>
                </Filter>
              </Field>
            </FormGrid>
            <Field>Descrição <small>(opcional)</small>
              <textarea
                value={description}
                onChange={event => setDescription(event.target.value)}
                placeholder="Adicione detalhes importantes..."
              />
            </Field>
            <RepeatChoice>
              <input
                type="checkbox"
                checked={repeatYearly}
                onChange={event => setRepeatYearly(event.target.checked)}
              />
              Repetir todos os anos
            </RepeatChoice>
            <FormActions>
              <Button type="button" onClick={resetForm}>Cancelar</Button>
              <Button type="submit" $variant="primary" disabled={saving}>
                {saving ? <LoaderCircle className="spin" /> : <Save />}
                {saving ? 'Salvando...' : editingEvent ? 'Salvar alterações' : 'Criar agendamento'}
              </Button>
            </FormActions>
          </form>
          </EventForm>
        </ModalOverlay>,
        document.body
      )}

      <Panel>
        <PanelTitle><CalendarDays size={19} color="var(--primary)" />Consultar agendamentos</PanelTitle>
        <form onSubmit={applyFilter}>
          <Filters>
            <Field>Consulta
              <Filter
                value={queryMode}
                onChange={event => {
                  setQueryMode(event.target.value as ScheduleQuery['mode']);
                  setFilterError('');
                }}
              >
                <option value="all">Todos os agendamentos</option>
                <option value="date">Data específica</option>
                <option value="range">Intervalo de datas</option>
              </Filter>
            </Field>
            {queryMode === 'date' && (
              <Field>Data
                <DateControl>
                  <CalendarDays size={17} aria-hidden="true" />
                  <input
                    type="date"
                    value={filterDate}
                    onChange={event => setFilterDate(event.target.value)}
                    required
                  />
                </DateControl>
              </Field>
            )}
            {queryMode === 'range' && (
              <>
                <Field>De
                  <DateControl>
                    <CalendarDays size={17} aria-hidden="true" />
                    <input
                      type="date"
                      value={filterFrom}
                      onChange={event => setFilterFrom(event.target.value)}
                      required
                    />
                  </DateControl>
                </Field>
                <Field>Até
                  <DateControl>
                    <CalendarDays size={17} aria-hidden="true" />
                    <input
                      type="date"
                      min={filterFrom}
                      value={filterTo}
                      onChange={event => setFilterTo(event.target.value)}
                      required
                    />
                  </DateControl>
                </Field>
              </>
            )}
            <Button type="submit" $variant="primary" disabled={loading}>
              {loading ? <LoaderCircle className="spin" /> : <CalendarDays />}
              Consultar
            </Button>
          </Filters>
            {filterError && <p role="alert" style={{ marginTop: 10, color: 'var(--error)', fontSize: 12 }}>{filterError}</p>}
        </form>

        {loading ? (
          <ScheduleLoading message="Organizando sua agenda..." />
        ) : orderedEvents.length === 0 ? (
          <EmptyState>
            <CalendarDays size={32} />
            <h3>Nenhum agendamento neste período</h3>
            <p>Cadastre um lembrete, atividade ou aniversário para organizar sua agenda.</p>
          </EmptyState>
        ) : (
          <Events>
            {orderedEvents.map(event => (
              <EventCard key={`${event.id}-${getEventDate(event)}`}>
                <EventIcon $type={event.type}>
                  {event.type === 'aniversario' ? <Cake /> : event.type === 'lembrete' ? <Bell /> : <CalendarDays />}
                </EventIcon>
                <EventInfo>
                  <h3>{event.title}</h3>
                  {event.description && <p>{event.description}</p>}
                  <EventMeta>
                    <span>{eventTypeLabel(event.type)}</span>
                    <span>{displayDate(getEventDate(event))}</span>
                    {event.event_time && <span><Clock3 />{displayTime(event.event_time)}</span>}
                    {event.repeat_yearly && <span>Anual</span>}
                    <Status $done={event.status === 'concluido'}>{statusLabel(event.status)}</Status>
                  </EventMeta>
                  {event.reminder_at && (
                    <EventMeta>
                      <span><Bell />Lembrete: {new Date(event.reminder_at).toLocaleString('pt-BR', {
                        dateStyle: 'short', timeStyle: 'short',
                      })}</span>
                    </EventMeta>
                  )}
                </EventInfo>
                <EventActions>
                  <IconButton type="button" aria-label={`Editar ${event.title}`} title="Editar" onClick={() => startEdit(event)}>
                    <Pencil />
                  </IconButton>
                  <IconButton
                    type="button"
                    aria-label={`Excluir ${event.title}`}
                    title="Excluir"
                    data-danger="true"
                    disabled={saving}
                    onClick={() => {
                      if (window.confirm(`Excluir o agendamento “${event.title}”?`)) void deleteEvent(event);
                    }}
                  >
                    <Trash2 />
                  </IconButton>
                </EventActions>
              </EventCard>
            ))}
          </Events>
        )}

        {!loading && pagination.total > 0 && (
          <Pagination>
            <span>{pagination.total} ocorrência(s) · Página {pagination.page} de {pagination.totalPages}</span>
            <div style={{ display: 'flex', gap: 7 }}>
              <Button
                type="button"
                aria-label="Página anterior"
                disabled={!pagination.hasPreviousPage}
                onClick={() => onPageChange(pagination.page - 1)}
              ><ChevronLeft /></Button>
              <Button
                type="button"
                aria-label="Próxima página"
                disabled={!pagination.hasNextPage}
                onClick={() => onPageChange(pagination.page + 1)}
              ><ChevronRight /></Button>
            </div>
          </Pagination>
        )}
      </Panel>
    </AnimatedPage>
  );
}
