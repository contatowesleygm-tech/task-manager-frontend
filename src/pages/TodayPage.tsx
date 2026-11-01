import {
  CalendarDays, Check, CheckCircle2, Eye, ListChecks, LoaderCircle, Plus,
} from 'lucide-react';
import styled from 'styled-components';
import {
  Button, EmptyState, PageTitle, Panel, Status,
} from '../components/ui';
import type { DailyTaskRecord, Task, TaskId } from '../types';
import { isDailyTask } from '../utils/taskFrequency';

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
  gap: 14px;
`;

const TodayTaskCard = styled.article`
  display: grid;
  gap: 17px;
  padding: 19px 20px;
  border: 1px solid var(--border);
  border-left: 3px solid var(--primary);
  border-radius: 13px;
  background: var(--surface);
  box-shadow: 0 4px 14px rgba(23, 38, 61, .025);
  transition: border-color .15s ease, box-shadow .15s ease, transform .15s ease;
  &:hover { border-color: var(--primary); border-left-color: var(--primary); box-shadow: 0 8px 22px var(--shadow); transform: translateY(-1px); }
  @media (max-width: 520px) { gap: 14px; padding: 16px; }
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
  h3 { margin: 0; color: var(--text); font-size: 16px; font-weight: 750; line-height: 1.45; overflow-wrap: anywhere; }
  p { margin: 4px 0 0; color: var(--muted); font-size: 12px; line-height: 1.5; overflow-wrap: anywhere; }
`;

const TaskMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 18px;
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

const TaskActions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 13px;
  border-top: 1px solid var(--border);
`;

interface TodayPageProps {
  tasks: Task[];
  dailyRecords: DailyTaskRecord[];
  loading: boolean;
  onNavigate: (path: string) => void;
  onToggleItem: (itemId: TaskId, checked: boolean) => void;
  onDeactivate: (taskId: TaskId) => void;
}

const displayDate = (value?: string | null) => value
  ? new Date(`${value.slice(0, 10)}T12:00:00`).toLocaleDateString('pt-BR')
  : 'Não definida';

export default function TodayPage({
  tasks, dailyRecords, loading, onNavigate, onToggleItem, onDeactivate,
}: TodayPageProps) {
  const dailyTasks = tasks.filter(task => task.is_active && isDailyTask(task));
  const dailyTasksWithRecords = dailyTasks.map(task => ({
    task,
    record: dailyRecords.find(record => String(record.task_id) === String(task.id)),
  }));
  const allItems = dailyTasksWithRecords.flatMap(({ record }) => record?.items ?? []);
  const doneCount = allItems.filter(item => item.is_completed).length;
  const percent = allItems.length ? Math.round(doneCount / allItems.length * 100) : 0;
  const today = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  });

  return (
    <>
      <PageTitle>
        <div>
          <h1>Tarefas de hoje</h1>
          <p>{today.charAt(0).toLocaleUpperCase('pt-BR') + today.slice(1)}</p>
        </div>
        <Button $variant="primary" onClick={() => onNavigate('/tasks/new')}><Plus />Nova tarefa</Button>
      </PageTitle>

      <SummaryGrid aria-label="Resumo do dia">
        <SummaryCard>
          <SummaryIcon $tone="blue"><ListChecks /></SummaryIcon>
          <div><span>Tarefas diárias ativas</span><strong>{dailyTasks.length}</strong></div>
        </SummaryCard>
        <SummaryCard>
          <SummaryIcon $tone="green"><CheckCircle2 /></SummaryIcon>
          <div><span>Itens concluídos</span><strong>{doneCount} / {allItems.length}</strong></div>
        </SummaryCard>
        <SummaryCard>
          <SummaryIcon $tone="gray"><CalendarDays /></SummaryIcon>
          <div><span>Progresso do dia</span><strong>{percent}%</strong></div>
        </SummaryCard>
      </SummaryGrid>

      {loading ? (
        <EmptyState><LoaderCircle /><p>Carregando tarefas...</p></EmptyState>
      ) : tasks.length === 0 ? (
        <Panel>
          <EmptyState>
            <ListChecks size={32} />
            <h3>Nenhuma tarefa cadastrada</h3>
            <p>Crie uma tarefa para começar a organizar seu dia.</p>
            <div style={{ marginTop: 16 }}>
              <Button $variant="primary" onClick={() => onNavigate('/tasks/new')}><Plus />Criar tarefa</Button>
            </div>
          </EmptyState>
        </Panel>
      ) : dailyTasks.length === 0 ? (
        <Panel>
          <EmptyState>
            <ListChecks size={32} />
            <h3>Nenhuma tarefa do tipo dia</h3>
            <p>Não há tarefas diárias ativas. As tarefas semanais ficam na aba Semana.</p>
            <div style={{ marginTop: 16 }}>
              <Button onClick={() => onNavigate('/week')}>Ver tarefas da semana</Button>
            </div>
          </EmptyState>
        </Panel>
      ) : (
        <TaskList>
          {dailyTasksWithRecords.map(({ task, record }) => {
            const items = record?.items ?? [];
            const taskDone = items.filter(item => item.is_completed).length;
            const taskPercent = items.length ? Math.round(taskDone / items.length * 100) : 0;

            return (
              <TodayTaskCard key={task.id}>
                <TaskTop>
                  <TaskTitleArea>
                    <h3>{task.title}</h3>
                    <p>{task.description || 'Sem descrição'}</p>
                  </TaskTitleArea>
                  <Button
                    aria-label={`Ver detalhes e editar ${task.title}`}
                    onClick={() => onNavigate(`/tasks/${encodeURIComponent(String(task.id))}`)}
                  >
                    <Eye />Editar tarefa
                  </Button>
                </TaskTop>

                <TaskMeta>
                  <MetaItem><CalendarDays />Início {displayDate(task.start_date)}</MetaItem>
                  <MetaItem><CalendarDays />Fim {displayDate(task.end_date)}</MetaItem>
                  <MetaItem><ListChecks />{items.length} {items.length === 1 ? 'item' : 'itens'}</MetaItem>
                  <Status $done>{taskDone === items.length && items.length > 0 ? 'Concluída' : 'Em andamento'}</Status>
                </TaskMeta>

                <ProgressSummary>
                  <span>Progresso da tarefa</span>
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

                <TaskActions>
                  <Button $variant="danger" onClick={() => onDeactivate(task.id)}>Desativar tarefa</Button>
                </TaskActions>
              </TodayTaskCard>
            );
          })}
        </TaskList>
      )}
    </>
  );
}
