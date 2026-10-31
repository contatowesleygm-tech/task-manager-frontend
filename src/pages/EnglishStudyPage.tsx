import { useCallback, useEffect, useState, type FormEvent } from 'react';
import axios from 'axios';
import {
  ArrowUpRight, BookOpen, CalendarDays, Check, Clock3, ExternalLink, Languages,
  LoaderCircle, Pencil, Plus, Target, Trash2, X,
} from 'lucide-react';
import styled from 'styled-components';
import {
  Button, EmptyState, Field, Modal, Panel, PanelTitle, ProgressTrack,
} from '../components/ui';
import ConfirmDialog from '../components/ui/ConfirmDialog';
import {
  createEnglishStudySession, deleteEnglishStudySession, getEnglishStudyGoal,
  getEnglishStudySessions, getEnglishStudySummary, updateEnglishStudyGoal,
  updateEnglishStudySession,
} from '../api';
import type {
  EnglishStudySession, EnglishStudySessionFilters, EnglishStudySessionPayload,
  EnglishStudyStatus, PaginatedEnglishStudySessions,
} from '../types';

const Page = styled.div`
  display: grid;
  gap: 20px;
`;

const Hero = styled.section`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  overflow: hidden;
  padding: clamp(22px, 4vw, 36px);
  border: 1px solid var(--border);
  border-radius: 22px;
  background:
    radial-gradient(circle at 85% 20%, color-mix(in srgb, var(--accent) 45%, transparent), transparent 25%),
    linear-gradient(120deg, color-mix(in srgb, var(--primary) 18%, var(--surface)), var(--surface));
  box-shadow: 0 12px 32px var(--shadow);
  &::after { position: absolute; right: 9%; bottom: -90px; width: 220px; height: 220px; border: 1px solid color-mix(in srgb, var(--primary) 24%, transparent); border-radius: 50%; content: ''; }
  @media (max-width: 650px) { align-items: stretch; flex-direction: column; }
`;

const HeroCopy = styled.div`
  position: relative;
  z-index: 1;
  max-width: 620px;
  > span { display: inline-flex; align-items: center; gap: 7px; color: var(--primary-strong); font-size: 11px; font-weight: 850; letter-spacing: .12em; text-transform: uppercase; }
  h1 { margin: 14px 0 8px; color: var(--text); font-size: clamp(28px, 4vw, 40px); letter-spacing: -.05em; }
  p { max-width: 520px; margin: 0; color: var(--muted); font-size: 14px; line-height: 1.65; }
`;

const HeroActions = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
`;

const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 13px;
  @media (max-width: 720px) { grid-template-columns: 1fr; }
`;

const SummaryCard = styled(Panel)`
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr);
  align-items: center;
  gap: 13px;
  padding: 18px;
  > span { display: grid; width: 44px; height: 44px; place-items: center; border-radius: 14px; color: var(--primary-strong); background: color-mix(in srgb, var(--primary) 16%, var(--surface)); }
  small { display: block; color: var(--muted); font-size: 11px; }
  strong { display: block; margin-top: 3px; color: var(--text); font-size: 23px; }
  p { margin: 4px 0 0; color: var(--muted); font-size: 11px; }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(270px, .7fr);
  gap: 18px;
  align-items: start;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`;

const Chart = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  align-items: end;
  gap: 10px;
  min-height: 190px;
  padding-top: 18px;
`;

const ChartDay = styled.div`
  display: grid;
  grid-template-rows: 18px 1fr auto;
  justify-items: center;
  gap: 8px;
  height: 170px;
  color: var(--muted);
  font-size: 10px;
`;

const BarSlot = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: flex-end;
  justify-content: center;
  padding: 0 3px;
  border-bottom: 1px solid var(--border);
`;

const Bar = styled.div<{ $height: number; $today: boolean }>`
  width: min(28px, 70%);
  height: ${({ $height }) => `${$height}%`};
  min-height: 3px;
  border-radius: 8px 8px 3px 3px;
  background: ${({ $today }) => $today ? 'var(--accent)' : 'var(--primary)'};
  box-shadow: 0 5px 12px color-mix(in srgb, var(--primary) 18%, transparent);
  transition: height .25s ease;
`;

const ChartFooter = styled.span`
  white-space: nowrap;
`;

const GoalForm = styled.form`
  display: grid;
  gap: 8px;
  > div { display: flex; align-items: flex-end; gap: 8px; }
  ${Field} { flex: 1; margin: 0; }
  input { max-width: 180px; }
`;

const SessionToolbar = styled.form`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(150px, .8fr) auto;
  align-items: end;
  gap: 10px;
  padding: 15px;
  margin-bottom: 17px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--surface-raised);
  ${Field} { margin: 0; }
  @media (max-width: 760px) { grid-template-columns: 1fr 1fr; }
  @media (max-width: 480px) { grid-template-columns: 1fr; }
`;

const SessionList = styled.div`
  display: grid;
  gap: 11px;
`;

const SessionCard = styled.article`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 15px;
  padding: 17px;
  border: 1px solid var(--border);
  border-left: 3px solid var(--primary);
  border-radius: 15px;
  background: var(--surface);
  box-shadow: 0 5px 16px var(--shadow);
  @media (max-width: 620px) { grid-template-columns: 1fr; }
`;

const SessionInfo = styled.div`
  min-width: 0;
  h3 { margin: 0; color: var(--text); font-size: 15px; line-height: 1.4; overflow-wrap: anywhere; }
  p { margin: 6px 0 0; color: var(--muted); font-size: 12px; line-height: 1.55; white-space: pre-wrap; overflow-wrap: anywhere; }
`;

const SessionMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 7px 14px;
  margin-top: 11px;
  color: var(--muted);
  font-size: 11px;
  span, a { display: inline-flex; align-items: center; gap: 5px; }
  svg { width: 14px; height: 14px; }
  a { color: var(--primary-strong); text-decoration: none; }
  a:hover { text-decoration: underline; }
`;

const SessionAside = styled.div`
  display: grid;
  justify-items: end;
  align-content: space-between;
  gap: 14px;
  @media (max-width: 620px) { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; }
`;

const StatusPill = styled.span<{ $status: EnglishStudyStatus }>`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 9px;
  border-radius: 999px;
  color: ${({ $status }) => $status === 'concluido' ? '#14815e' : $status === 'cancelado' ? '#a63d47' : 'var(--primary-strong)'};
  background: ${({ $status }) => $status === 'concluido' ? '#ddf7ec' : $status === 'cancelado' ? '#fff0ed' : 'color-mix(in srgb, var(--primary) 16%, var(--surface))'};
  html[data-theme='dark'] & { color: ${({ $status }) => $status === 'concluido' ? '#8de0b8' : $status === 'cancelado' ? '#ffaaa3' : 'var(--primary-strong)'}; background: ${({ $status }) => $status === 'concluido' ? '#1e3a31' : $status === 'cancelado' ? '#39232b' : 'color-mix(in srgb, var(--primary) 20%, var(--surface))'}; }
  font-size: 10px;
  font-weight: 800;
`;

const SessionActions = styled.div`
  display: flex;
  justify-content: flex-end;
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
  &:hover { color: var(--primary); border-color: var(--primary); }
  &[data-danger='true']:hover { color: #c53e38; background: #fff3f2; }
  html[data-theme='dark'] &[data-danger='true']:hover { color: #ffaaa3; background: #39232b; }
  svg { width: 15px; height: 15px; }
`;

const SessionForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 14px;
  ${Field}:first-child, ${Field}:last-of-type { grid-column: 1 / -1; }
  @media (max-width: 620px) { grid-template-columns: 1fr; ${Field} { grid-column: auto; } }
`;

const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  grid-column: 1 / -1;
  margin-top: 3px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-top: 17px;
  color: var(--muted);
  font-size: 11px;
`;

interface SessionFormState {
  title: string;
  study_date: string;
  topic: string;
  study_time: string;
  duration_minutes: string;
  status: EnglishStudyStatus;
  material_url: string;
  content: string;
}

const emptyForm = (): SessionFormState => ({
  title: '',
  study_date: localDateString(new Date()),
  topic: '',
  study_time: '',
  duration_minutes: '30',
  status: 'planejado',
  material_url: '',
  content: '',
});

function localDateString(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function readableDate(value: string): string {
  return new Date(`${value.slice(0, 10)}T12:00:00`).toLocaleDateString('pt-BR', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });
}

function readableTime(value: string | null): string | null {
  return value ? value.slice(0, 5) : null;
}

function getErrorMessage(error: unknown, fallback: string): string {
  if (axios.isAxiosError<{ error?: string }>(error)) return error.response?.data?.error || fallback;
  return fallback;
}

function sessionFormFrom(session: EnglishStudySession): SessionFormState {
  return {
    title: session.title,
    study_date: session.study_date.slice(0, 10),
    topic: session.topic ?? '',
    study_time: readableTime(session.study_time) ?? '',
    duration_minutes: String(session.duration_minutes),
    status: session.status,
    material_url: session.material_url ?? '',
    content: session.content ?? '',
  };
}

function makePayload(form: SessionFormState): EnglishStudySessionPayload {
  return {
    title: form.title.trim(),
    study_date: form.study_date,
    topic: form.topic.trim() || null,
    study_time: form.study_time || null,
    duration_minutes: Number(form.duration_minutes),
    status: form.status,
    material_url: form.material_url.trim() || null,
    content: form.content.trim() || null,
  };
}

const statusLabels: Record<EnglishStudyStatus, string> = {
  planejado: 'Planejado',
  concluido: 'Concluído',
  cancelado: 'Cancelado',
};

interface Props {
  onNavigate: (path: string) => void;
}

export default function EnglishStudyPage({ onNavigate }: Props) {
  const [sessionsResult, setSessionsResult] = useState<PaginatedEnglishStudySessions>();
  const [summary, setSummary] = useState<Awaited<ReturnType<typeof getEnglishStudySummary>>>();
  const [goalMinutes, setGoalMinutes] = useState(30);
  const [goalInput, setGoalInput] = useState('30');
  const [filters, setFilters] = useState<EnglishStudySessionFilters>({ page: 1, limit: 20 });
  const [draftFilters, setDraftFilters] = useState({ from: '', to: '', status: '' });
  const [form, setForm] = useState<SessionFormState>(emptyForm);
  const [editing, setEditing] = useState<EnglishStudySession | null>(null);
  const [sessionFormOpen, setSessionFormOpen] = useState(false);
  const [pendingDelete, setPendingDelete] = useState<EnglishStudySession | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [refreshVersion, setRefreshVersion] = useState(0);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError('');
    Promise.all([
      getEnglishStudySessions(filters),
      getEnglishStudyGoal(),
      getEnglishStudySummary(),
    ]).then(([loadedSessions, goal, loadedSummary]) => {
      if (!active) return;
      setSessionsResult(loadedSessions);
      setGoalMinutes(goal.daily_goal_minutes);
      setGoalInput(String(goal.daily_goal_minutes));
      setSummary(loadedSummary);
    }).catch(loadError => {
      if (active) setError(getErrorMessage(loadError, 'Não foi possível carregar o acompanhamento de inglês.'));
    }).finally(() => {
      if (active) setLoading(false);
    });
    return () => { active = false; };
  }, [filters, refreshVersion]);

  const closeSessionForm = useCallback(() => setSessionFormOpen(false), []);

  function openCreateForm() {
    setEditing(null);
    setForm(emptyForm());
    setSessionFormOpen(true);
  }

  function openEditForm(session: EnglishStudySession) {
    setEditing(session);
    setForm(sessionFormFrom(session));
    setSessionFormOpen(true);
  }

  async function submitSession(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setNotice('');
    setSaving(true);
    try {
      const payload = makePayload(form);
      if (editing) await updateEnglishStudySession(editing.id, payload);
      else await createEnglishStudySession(payload);
      setSessionFormOpen(false);
      setEditing(null);
      setNotice(editing ? 'Sessão atualizada.' : 'Sessão de estudo criada.');
      setRefreshVersion(version => version + 1);
    } catch (saveError) {
      setError(getErrorMessage(saveError, 'Não foi possível salvar a sessão de estudo.'));
    } finally {
      setSaving(false);
    }
  }

  async function saveGoal(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const minutes = Number(goalInput);
    if (!Number.isInteger(minutes) || minutes < 1 || minutes > 1440) {
      setError('A meta deve ser um número inteiro entre 1 e 1440 minutos.');
      return;
    }
    setError('');
    setNotice('');
    setSaving(true);
    try {
      const goal = await updateEnglishStudyGoal(minutes);
      setGoalMinutes(goal.daily_goal_minutes);
      setGoalInput(String(goal.daily_goal_minutes));
      setNotice('Meta diária atualizada.');
      setRefreshVersion(version => version + 1);
    } catch (saveError) {
      setError(getErrorMessage(saveError, 'Não foi possível atualizar a meta diária.'));
    } finally {
      setSaving(false);
    }
  }

  function applyFilters(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (draftFilters.from && draftFilters.to && draftFilters.from > draftFilters.to) {
      setError('A data inicial precisa ser anterior ou igual à data final.');
      return;
    }
    if (draftFilters.from && draftFilters.to) {
      const range = (Date.parse(`${draftFilters.to}T00:00:00Z`) - Date.parse(`${draftFilters.from}T00:00:00Z`)) / 86_400_000;
      if (range > 366) {
        setError('O período das sessões não pode ultrapassar 366 dias.');
        return;
      }
    }
    setError('');
    setFilters({
      from: draftFilters.from || undefined,
      to: draftFilters.to || undefined,
      status: (draftFilters.status || undefined) as EnglishStudyStatus | undefined,
      page: 1,
      limit: 20,
    });
  }

  async function confirmDelete() {
    if (!pendingDelete) return;
    setDeleting(true);
    setError('');
    setNotice('');
    try {
      await deleteEnglishStudySession(pendingDelete.id);
      setPendingDelete(null);
      setNotice('Sessão removida.');
      setRefreshVersion(version => version + 1);
    } catch (deleteError) {
      setError(getErrorMessage(deleteError, 'Não foi possível excluir a sessão.'));
      setPendingDelete(null);
    } finally {
      setDeleting(false);
    }
  }

  async function markCompleted(session: EnglishStudySession) {
    setError('');
    setNotice('');
    try {
      await updateEnglishStudySession(session.id, { status: 'concluido' });
      setNotice('Sessão concluída. Seu progresso foi atualizado.');
      setRefreshVersion(version => version + 1);
    } catch (updateError) {
      setError(getErrorMessage(updateError, 'Não foi possível concluir a sessão.'));
    }
  }

  const daily = summary?.daily ?? [];
  const maxMinutes = Math.max(goalMinutes, ...daily.map(day => day.total_minutes), 1);
  const sessions = sessionsResult?.data ?? [];
  const pagination = sessionsResult?.pagination;

  return (
    <Page>
      <Hero>
        <HeroCopy>
          <span><Languages size={14} /> English study tracker</span>
          <h1>Seu inglês, em evolução.</h1>
          <p>Planeje sessões, registre o que aprendeu e acompanhe sua consistência dia após dia.</p>
        </HeroCopy>
        <HeroActions>
          <Button type="button" onClick={() => onNavigate('/study-resources')}><BookOpen />Biblioteca</Button>
          <Button type="button" $variant="primary" onClick={openCreateForm}><Plus />Nova sessão</Button>
        </HeroActions>
      </Hero>

      {error && <Panel role="alert" style={{ color: '#c53e38', padding: 14 }}>{error}</Panel>}
      {notice && <Panel role="status" style={{ color: 'var(--primary-strong)', padding: 14 }}>{notice}</Panel>}

      <SummaryGrid aria-label="Resumo do progresso de inglês">
        <SummaryCard>
          <span><Clock3 /></span>
          <div><small>Hoje</small><strong>{summary?.minutes_today ?? 0} min</strong><p>{summary?.minutes_remaining_today ?? goalMinutes} min para a meta</p></div>
        </SummaryCard>
        <SummaryCard>
          <span><Target /></span>
          <div><small>Meta diária</small><strong>{goalMinutes} min</strong><ProgressTrack><div style={{ width: `${Math.min(summary?.goal_progress_percent ?? 0, 100)}%` }} /></ProgressTrack></div>
        </SummaryCard>
        <SummaryCard>
          <span><CalendarDays /></span>
          <div><small>Ritmo dos últimos dias</small><strong>{daily.reduce((total, day) => total + day.sessions, 0)} sessões</strong><p>{daily.reduce((total, day) => total + day.total_minutes, 0)} minutos estudados</p></div>
        </SummaryCard>
      </SummaryGrid>

      <ContentGrid>
        <Panel>
          <PanelTitle><CalendarDays size={19} />Progresso diário</PanelTitle>
          {daily.length ? (
            <Chart aria-label="Minutos estudados por dia">
              {daily.slice(-7).map(day => {
                const date = day.study_date.slice(0, 10);
                return (
                  <ChartDay key={date} title={`${readableDate(date)}: ${day.total_minutes} minutos`}>
                    <strong>{day.total_minutes}</strong>
                    <BarSlot><Bar $height={Math.max(day.total_minutes ? 8 : 3, day.total_minutes / maxMinutes * 100)} $today={date === localDateString(new Date())} /></BarSlot>
                    <ChartFooter>{readableDate(date).split(',')[0]}</ChartFooter>
                  </ChartDay>
                );
              })}
            </Chart>
          ) : <EmptyState><CalendarDays /><p>Seu resumo aparecerá aqui assim que carregar.</p></EmptyState>}
        </Panel>

        <Panel>
          <PanelTitle><Target size={19} />Sua meta diária</PanelTitle>
          <p style={{ margin: '0 0 16px', color: 'var(--muted)', fontSize: 12, lineHeight: 1.55 }}>
            Escolha quantos minutos quer dedicar ao inglês por dia.
          </p>
          <GoalForm onSubmit={event => { void saveGoal(event); }}>
            <div>
              <Field htmlFor="daily-goal">Minutos por dia
                <input id="daily-goal" type="number" min={1} max={1440} step={1} value={goalInput} onChange={event => setGoalInput(event.target.value)} required />
              </Field>
              <Button type="submit" $variant="primary" disabled={saving}>{saving ? <LoaderCircle /> : <Check />}Salvar</Button>
            </div>
          </GoalForm>
        </Panel>
      </ContentGrid>

      <Panel>
        <PanelTitle><BookOpen size={19} />Sessões de estudo</PanelTitle>
        <Modal
          open={sessionFormOpen}
          title={editing ? 'Editar sessão' : 'Planejar sessão'}
          icon={editing ? <Pencil size={18} /> : <Plus size={18} />}
          busy={saving}
          onClose={closeSessionForm}
        >
            <SessionForm onSubmit={event => { void submitSession(event); }}>
              <Field htmlFor="session-title">Título *
                <input id="session-title" maxLength={200} value={form.title} onChange={event => setForm(current => ({ ...current, title: event.target.value }))} placeholder="Ex.: Prática de listening" required />
              </Field>
              <Field htmlFor="session-date">Data *
                <input id="session-date" type="date" value={form.study_date} onChange={event => setForm(current => ({ ...current, study_date: event.target.value }))} required />
              </Field>
              <Field htmlFor="session-time">Horário
                <input id="session-time" type="time" value={form.study_time} onChange={event => setForm(current => ({ ...current, study_time: event.target.value }))} />
              </Field>
              <Field htmlFor="session-duration">Duração (minutos)
                <input id="session-duration" type="number" min={1} max={1440} step={1} value={form.duration_minutes} onChange={event => setForm(current => ({ ...current, duration_minutes: event.target.value }))} required />
              </Field>
              <Field htmlFor="session-topic">Tópico
                <input id="session-topic" maxLength={100} value={form.topic} onChange={event => setForm(current => ({ ...current, topic: event.target.value }))} placeholder="Ex.: Conversação" />
              </Field>
              <Field htmlFor="session-status">Status
                <select id="session-status" value={form.status} onChange={event => setForm(current => ({ ...current, status: event.target.value as EnglishStudyStatus }))}>
                  <option value="planejado">Planejado</option>
                  <option value="concluido">Concluído</option>
                  <option value="cancelado">Cancelado</option>
                </select>
              </Field>
              <Field htmlFor="session-material">Link do material
                <input id="session-material" type="url" maxLength={2048} value={form.material_url} onChange={event => setForm(current => ({ ...current, material_url: event.target.value }))} placeholder="https://..." />
              </Field>
              <Field htmlFor="session-content">Anotações
                <textarea id="session-content" maxLength={50000} value={form.content} onChange={event => setForm(current => ({ ...current, content: event.target.value }))} placeholder="Registre expressões, dúvidas e aprendizados..." />
              </Field>
              <FormActions>
                <Button type="button" onClick={closeSessionForm} disabled={saving}><X />Cancelar</Button>
                <Button type="submit" $variant="primary" disabled={saving}>{saving ? <LoaderCircle /> : <Check />}{editing ? 'Salvar alterações' : 'Criar sessão'}</Button>
              </FormActions>
            </SessionForm>
        </Modal>

        <SessionToolbar onSubmit={applyFilters}>
          <Field htmlFor="filter-from">De
            <input id="filter-from" type="date" value={draftFilters.from} onChange={event => setDraftFilters(current => ({ ...current, from: event.target.value }))} />
          </Field>
          <Field htmlFor="filter-to">Até
            <input id="filter-to" type="date" value={draftFilters.to} onChange={event => setDraftFilters(current => ({ ...current, to: event.target.value }))} />
          </Field>
          <Field htmlFor="filter-status">Status
            <select id="filter-status" value={draftFilters.status} onChange={event => setDraftFilters(current => ({ ...current, status: event.target.value }))}>
              <option value="">Todos</option>
              <option value="planejado">Planejado</option>
              <option value="concluido">Concluído</option>
              <option value="cancelado">Cancelado</option>
            </select>
          </Field>
          <Button type="submit"><CalendarDays />Filtrar</Button>
        </SessionToolbar>

        {loading ? (
          <EmptyState><LoaderCircle /><p>Carregando sessões...</p></EmptyState>
        ) : sessions.length ? (
          <SessionList>
            {sessions.map(session => (
              <SessionCard key={String(session.id)}>
                <SessionInfo>
                  <h3>{session.title}</h3>
                  {session.content && <p>{session.content}</p>}
                  <SessionMeta>
                    <span><CalendarDays />{readableDate(session.study_date)}</span>
                    {readableTime(session.study_time) && <span><Clock3 />{readableTime(session.study_time)}</span>}
                    <span><Clock3 />{session.duration_minutes} min</span>
                    {session.topic && <span><Languages />{session.topic}</span>}
                    {session.material_url && <a href={session.material_url} target="_blank" rel="noreferrer"><ExternalLink />Material</a>}
                  </SessionMeta>
                </SessionInfo>
                <SessionAside>
                  <StatusPill $status={session.status}>{session.status === 'concluido' && <Check size={12} />}{statusLabels[session.status]}</StatusPill>
                  <SessionActions>
                    {session.status === 'planejado' && <IconButton type="button" aria-label={`Concluir ${session.title}`} title="Marcar como concluído" onClick={() => { void markCompleted(session); }}><Check /></IconButton>}
                    <IconButton type="button" aria-label={`Editar ${session.title}`} title="Editar sessão" onClick={() => openEditForm(session)}><Pencil /></IconButton>
                    <IconButton type="button" data-danger="true" aria-label={`Excluir ${session.title}`} title="Excluir sessão" onClick={() => setPendingDelete(session)}><Trash2 /></IconButton>
                  </SessionActions>
                </SessionAside>
              </SessionCard>
            ))}
          </SessionList>
        ) : sessionsResult ? (
          <EmptyState><BookOpen size={30} /><h3>Nenhuma sessão encontrada</h3><p>Planeje sua próxima sessão e comece a acompanhar seu progresso.</p><Button type="button" $variant="primary" onClick={openCreateForm}><Plus />Nova sessão</Button></EmptyState>
        ) : null}
        {pagination && pagination.total > 0 && (
          <Pagination>
            <span>{pagination.total} sessões · página {pagination.page} de {Math.max(pagination.totalPages, 1)}</span>
            <div style={{ display: 'flex', gap: 7 }}>
              <Button type="button" disabled={!pagination.hasPreviousPage || loading} onClick={() => setFilters(current => ({ ...current, page: Math.max((current.page ?? 1) - 1, 1) }))}>Anterior</Button>
              <Button type="button" disabled={!pagination.hasNextPage || loading} onClick={() => setFilters(current => ({ ...current, page: (current.page ?? 1) + 1 }))}>Próxima<ArrowUpRight size={14} /></Button>
            </div>
          </Pagination>
        )}
      </Panel>

      <ConfirmDialog
        open={pendingDelete !== null}
        title="Excluir sessão de estudo?"
        description={pendingDelete ? `A sessão “${pendingDelete.title}” será removida permanentemente.` : ''}
        confirmLabel="Excluir sessão"
        busy={deleting}
        onCancel={() => { if (!deleting) setPendingDelete(null); }}
        onConfirm={() => { void confirmDelete(); }}
      />
    </Page>
  );
}
