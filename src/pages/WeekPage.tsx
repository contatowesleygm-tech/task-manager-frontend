import { useMemo } from 'react';
import { CalendarDays, Check, CheckCircle2, Clock3, ListChecks, LoaderCircle, Plus } from 'lucide-react';
import styled from 'styled-components';
import {
  Button, EmptyState, PageTitle, Panel, Status,
} from '../components/ui';
import type { DailyTaskRecord, Task, TaskId } from '../types';
import { isWeeklyTask } from '../utils/taskFrequency';

const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 22px;
  @media (max-width: 620px) { gap: 9px; }
  @media (max-width: 420px) { grid-template-columns: 1fr; }
`;

const SummaryCard = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  align-items: center;
  gap: 12px;
  padding: 16px 18px;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: linear-gradient(135deg, var(--surface), var(--surface-raised));
  box-shadow: 0 5px 18px rgba(23, 38, 61, .035);
  &::after { position: absolute; right: -20px; bottom: -38px; width: 92px; height: 92px; border-radius: 50%; background: color-mix(in srgb, var(--primary) 8%, transparent); content: ''; }
  @media (max-width: 620px) { padding: 13px; grid-template-columns: 36px minmax(0, 1fr); gap: 9px; }
  > div > span { display: block; color: var(--muted); font-size: 12px; }
  > div > strong { display: block; margin-top: 3px; color: var(--text); font-size: 25px; line-height: 1.2; }
`;

const SummaryIcon = styled.span<{ $tone: 'blue' | 'green' | 'gray' }>`
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: 12px;
  color: ${({ $tone }) => $tone === 'green' ? 'var(--success)' : $tone === 'gray' ? 'var(--muted)' : 'var(--primary-strong)'};
  background: ${({ $tone }) => $tone === 'green' ? 'var(--success-soft)' : $tone === 'gray' ? 'var(--surface-raised)' : 'color-mix(in srgb, var(--primary) 16%, var(--surface))'};
  svg { width: 19px; height: 19px; }
  @media (max-width: 620px) { width: 36px; height: 36px; }
`;

const TaskList = styled.div`
  display: grid;
  gap: 13px;
`;

const WeekTaskCard = styled.article`
  display: grid;
  gap: 14px;
  padding: 18px 19px;
  border: 1px solid var(--border);
  border-left: 3px solid var(--primary);
  border-radius: 13px;
  background: var(--surface);
  box-shadow: 0 4px 14px rgba(23, 38, 61, .025);
  transition: border-color .15s ease, box-shadow .15s ease, transform .15s ease;
  &:hover { border-color: var(--primary); border-left-color: var(--primary); box-shadow: 0 8px 22px var(--shadow); transform: translateY(-1px); }
`;

const TaskTop = styled.div`
  display: flex;
  min-width: 0;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  @media (max-width: 520px) { flex-direction: column; }
`;

const TaskTitleArea = styled.div`
  min-width: 0;
  h3 { margin: 0; color: var(--text); font-size: 15px; font-weight: 750; line-height: 1.45; overflow-wrap: anywhere; }
  p { margin: 4px 0 0; color: var(--muted); font-size: 12px; line-height: 1.5; overflow-wrap: anywhere; }
`;

const TaskMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 16px;
  color: var(--muted);
  font-size: 11px;
`;

const MetaItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  svg { width: 14px; height: 14px; color: #91a0b4; }
`;

const ProgressSummary = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: var(--muted);
  font-size: 11px;
  strong { color: var(--text); font-size: 12px; }
`;

const ProgressTrack = styled.div`
  height: 6px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--border);
  div { height: 100%; border-radius: inherit; background: var(--primary); transition: width .2s ease; }
`;

const ChecklistGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
  gap: 9px;
`;

const ChecklistItem = styled.label<{ $completed: boolean }>`
  display: flex;
  min-width: 0;
  min-height: 56px;
  align-items: center;
  gap: 10px;
  padding: 11px 12px;
  border: 1px solid ${({ $completed }) => $completed ? 'var(--success-border)' : 'var(--border)'};
  border-radius: 10px;
  background: ${({ $completed }) => $completed ? 'var(--success-soft)' : 'var(--surface-raised)'};
  cursor: pointer;
  transition: border-color .15s ease, background .15s ease;
  &:hover { border-color: ${({ $completed }) => $completed ? 'var(--success-hover)' : 'var(--primary)'}; }
  input { width: 17px; height: 17px; flex: 0 0 auto; margin: 0; accent-color: ${({ $completed }) => $completed ? 'var(--success)' : 'var(--primary)'}; cursor: pointer; }
`;

const ChecklistTitle = styled.span<{ $completed: boolean }>`
  min-width: 0;
  flex: 1;
  color: ${({ $completed }) => $completed ? 'var(--muted)' : 'var(--text)'};
  font-size: 12px;
  line-height: 1.45;
  overflow-wrap: anywhere;
  text-decoration: ${({ $completed }) => $completed ? 'line-through' : 'none'};
`;

const WeekNote = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 9px;
  padding: 13px 15px;
  margin-bottom: 16px;
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--muted);
  background: var(--surface-raised);
  font-size: 12px;
  line-height: 1.5;
  svg { flex: 0 0 auto; color: var(--primary); }
`;

interface WeekPageProps {
  tasks: Task[];
  dailyRecords: DailyTaskRecord[];
  loading: boolean;
  onNavigate: (path: string) => void;
  onToggleItem: (itemId: TaskId, checked: boolean) => void;
  onDeactivate: (taskId: TaskId) => void;
}

function getWeekBounds(referenceDate: Date) {
  const start = new Date(referenceDate);
  start.setHours(0, 0, 0, 0);
  const daysSinceMonday = (start.getDay() + 6) % 7;
  start.setDate(start.getDate() - daysSinceMonday);

  const end = new Date(start);
  end.setDate(start.getDate() + 6);

  const toDateKey = (date: Date) => [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, '0'),
    String(date.getDate()).padStart(2, '0'),
  ].join('-');

  return {
    start: toDateKey(start),
    end: toDateKey(end),
    startDate: start,
    endDate: end,
  };
}

const displayDate = (value?: string | null) => value
  ? new Date(`${value.slice(0, 10)}T12:00:00`).toLocaleDateString('pt-BR')
  : 'Sem data final';

export default function WeekPage({
  tasks, dailyRecords, loading, onNavigate, onToggleItem, onDeactivate,
}: WeekPageProps) {
  const today = new Date();
  const bounds = getWeekBounds(today);
  const weekTasks = useMemo(() => tasks
    .filter(task => task.is_active && isWeeklyTask(task)), [tasks]);
  const weekTasksWithRecords = useMemo(() => weekTasks.map(task => ({
    task,
    record: dailyRecords.find(record => String(record.task_id) === String(task.id)),
  })), [weekTasks, dailyRecords]);
  const allItems = weekTasksWithRecords.flatMap(({ record }) => record?.items ?? []);
  const doneCount = allItems.filter(item => item.is_completed).length;
  const activityCount = allItems.length;
  const percent = activityCount ? Math.round(doneCount / activityCount * 100) : 0;
  const weekLabel = `${bounds.startDate.toLocaleDateString('pt-BR', { day: 'numeric', month: 'short' })} – ${bounds.endDate.toLocaleDateString('pt-BR', { day: 'numeric', month: 'short', year: 'numeric' })}`;

  return (
    <>
      <PageTitle>
        <div>
          <h1>Tarefas da semana</h1>
          <p>{weekLabel}</p>
        </div>
        <Button $variant="primary" onClick={() => onNavigate('/tasks/new')}><Plus />Nova tarefa</Button>
      </PageTitle>

      <SummaryGrid aria-label="Resumo da semana">
        <SummaryCard>
          <SummaryIcon $tone="blue"><CalendarDays /></SummaryIcon>
          <div><span>Tarefas semanais ativas</span><strong>{weekTasks.length}</strong></div>
        </SummaryCard>
        <SummaryCard>
          <SummaryIcon $tone="green"><ListChecks /></SummaryIcon>
          <div><span>Itens concluídos hoje</span><strong>{doneCount} / {activityCount}</strong></div>
        </SummaryCard>
        <SummaryCard>
          <SummaryIcon $tone="gray"><CheckCircle2 /></SummaryIcon>
          <div><span>Progresso de hoje</span><strong>{percent}%</strong></div>
        </SummaryCard>
      </SummaryGrid>

      <WeekNote>
        <Clock3 size={16} />
        <span>Marque as atividades semanais nesta tela. As marcações usam o registro diário atual e ficam sincronizadas com a aba Hoje.</span>
      </WeekNote>

      {loading ? (
        <EmptyState><LoaderCircle /><p>Carregando tarefas...</p></EmptyState>
      ) : weekTasks.length === 0 ? (
        <Panel>
          <EmptyState>
            <CalendarDays size={32} />
            <h3>{tasks.length === 0 ? 'Nenhuma tarefa cadastrada' : 'Nenhuma tarefa do tipo semana'}</h3>
            <p>{tasks.length === 0
              ? 'Crie uma tarefa para organizar o que precisa fazer.'
              : 'Não há tarefas semanais ativas. As tarefas diárias ficam na aba Hoje.'}</p>
            <div style={{ marginTop: 16 }}>
              {tasks.length === 0
                ? <Button $variant="primary" onClick={() => onNavigate('/tasks/new')}><Plus />Criar tarefa</Button>
                : <Button onClick={() => onNavigate('/today')}>Ver tarefas de hoje</Button>}
            </div>
          </EmptyState>
        </Panel>
      ) : (
        <TaskList>
          {weekTasksWithRecords.map(({ task, record }) => {
            const items = record?.items ?? [];
            const taskDone = items.filter(item => item.is_completed).length;
            const taskPercent = items.length ? Math.round(taskDone / items.length * 100) : 0;

            return (
              <WeekTaskCard key={task.id}>
                <TaskTop>
                  <TaskTitleArea>
                    <h3>{task.title}</h3>
                    <p>{task.description || 'Sem descrição'}</p>
                  </TaskTitleArea>
                  <Button onClick={() => onNavigate(`/tasks/${encodeURIComponent(String(task.id))}`)}>Editar tarefa</Button>
                </TaskTop>
                <TaskMeta>
                  <MetaItem><CalendarDays />Início {displayDate(task.start_date)}</MetaItem>
                  <MetaItem><CalendarDays />Fim {displayDate(task.end_date)}</MetaItem>
                  <MetaItem><CalendarDays />Frequência semanal</MetaItem>
                  <MetaItem><ListChecks />{items.length} {items.length === 1 ? 'atividade' : 'atividades'}</MetaItem>
                  <Status $done>{taskDone === items.length && items.length > 0 ? 'Concluída hoje' : 'Em andamento'}</Status>
                </TaskMeta>
                <ProgressSummary>
                  <span>Progresso de hoje</span>
                  <strong>{taskDone} de {items.length} concluídos · {taskPercent}%</strong>
                </ProgressSummary>
                <ProgressTrack aria-label={`${taskPercent}% concluído`}>
                  <div style={{ width: `${taskPercent}%` }} />
                </ProgressTrack>
                {items.length > 0 ? (
                  <ChecklistGrid aria-label={`Itens da tarefa ${task.title}`}>
                    {items.map(item => (
                      <ChecklistItem key={item.id} $completed={item.is_completed}>
                        <input
                          type="checkbox"
                          checked={item.is_completed}
                          onChange={event => onToggleItem(item.id, event.target.checked)}
                        />
                        <ChecklistTitle $completed={item.is_completed}>{item.title}</ChecklistTitle>
                      {item.is_completed && <Check size={16} color="var(--success)" aria-label="Concluído" />}
                      </ChecklistItem>
                    ))}
                  </ChecklistGrid>
                ) : (
                  <EmptyState>
                    <p>{record
                      ? 'Esta tarefa ainda não possui itens para hoje.'
                      : 'Os itens diários desta tarefa não foram encontrados.'}</p>
                  </EmptyState>
                )}
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button $variant="danger" onClick={() => onDeactivate(task.id)}>Desativar tarefa</Button>
                </div>
              </WeekTaskCard>
            );
          })}
        </TaskList>
      )}
    </>
  );
}
