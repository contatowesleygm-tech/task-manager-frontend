import { useMemo } from 'react';
import { CalendarDays, Check, CheckCircle2, Clock3, ListChecks, LoaderCircle, Plus } from 'lucide-react';
import styled from 'styled-components';
import {
  Button, EmptyState, PageTitle, Panel, Status,
} from '../components/ui';
import type { DailyTaskRecord, Task, TaskId } from '../types';
import { isMonthlyTask } from '../utils/taskFrequency';

const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 22px;
  @media (max-width: 620px) { gap: 9px; }
  @media (max-width: 420px) { grid-template-columns: 1fr; }
`;

const SummaryCard = styled.div`
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  align-items: center;
  gap: 12px;
  padding: 16px 18px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: linear-gradient(135deg, var(--surface), var(--surface-raised));
  box-shadow: 0 5px 18px rgba(23, 38, 61, .035);
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

const MonthTaskCard = styled.article`
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

const MonthNote = styled.div`
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

interface MonthPageProps {
  tasks: Task[];
  dailyRecords: DailyTaskRecord[];
  loading: boolean;
  onNavigate: (path: string) => void;
  onToggleItem: (itemId: TaskId, checked: boolean) => void;
  onDeactivate: (taskId: TaskId) => void;
}

const displayDate = (value?: string | null) => value
  ? new Date(`${value.slice(0, 10)}T12:00:00`).toLocaleDateString('pt-BR')
  : 'Sem data final';

export default function MonthPage({
  tasks, dailyRecords, loading, onNavigate, onToggleItem, onDeactivate,
}: MonthPageProps) {
  const monthLabel = new Date().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
  const monthTasks = useMemo(() => tasks
    .filter(task => task.is_active && isMonthlyTask(task)), [tasks]);
  const monthTasksWithRecords = useMemo(() => monthTasks.map(task => ({
    task,
    record: dailyRecords.find(record => String(record.task_id) === String(task.id)),
  })), [monthTasks, dailyRecords]);
  const allItems = monthTasksWithRecords.flatMap(({ record }) => record?.items ?? []);
  const doneCount = allItems.filter(item => item.is_completed).length;
  const activityCount = allItems.length;
  const percent = activityCount ? Math.round(doneCount / activityCount * 100) : 0;

  return (
    <>
      <PageTitle>
        <div>
          <h1>Tarefas do mês</h1>
          <p>{monthLabel.charAt(0).toLocaleUpperCase('pt-BR') + monthLabel.slice(1)}</p>
        </div>
        <Button $variant="primary" onClick={() => onNavigate('/tasks/new')}><Plus />Nova tarefa</Button>
      </PageTitle>

      <SummaryGrid aria-label="Resumo do mês">
        <SummaryCard>
          <SummaryIcon $tone="blue"><CalendarDays /></SummaryIcon>
          <div><span>Tarefas mensais</span><strong>{monthTasks.length}</strong></div>
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

      <MonthNote>
        <Clock3 size={16} />
        <span>Marque as atividades mensais nesta tela. As marcações usam o registro diário atual e ficam sincronizadas com as abas Hoje e Semana.</span>
      </MonthNote>

      {loading ? (
        <EmptyState><LoaderCircle /><p>Carregando tarefas...</p></EmptyState>
      ) : monthTasks.length === 0 ? (
        <Panel>
          <EmptyState>
            <CalendarDays size={32} />
            <h3>{tasks.length === 0 ? 'Nenhuma tarefa cadastrada' : 'Nenhuma tarefa do tipo mês'}</h3>
            <p>{tasks.length === 0
              ? 'Crie uma tarefa mensal para organizar seus objetivos.'
              : 'Não há tarefas mensais ativas. As tarefas diárias e semanais ficam nas abas Hoje e Semana.'}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 9, marginTop: 16 }}>
              <Button $variant="primary" onClick={() => onNavigate('/tasks/new')}><Plus />Criar tarefa</Button>
              <Button onClick={() => onNavigate('/week')}>Ver tarefas da semana</Button>
            </div>
          </EmptyState>
        </Panel>
      ) : (
        <TaskList>
          {monthTasksWithRecords.map(({ task, record }) => {
            const items = record?.items ?? [];
            const taskDone = items.filter(item => item.is_completed).length;
            const taskPercent = items.length ? Math.round(taskDone / items.length * 100) : 0;

            return (
            <MonthTaskCard key={task.id}>
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
                <MetaItem><CalendarDays />Frequência mensal</MetaItem>
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
            </MonthTaskCard>
            );
          })}
        </TaskList>
      )}
    </>
  );
}
