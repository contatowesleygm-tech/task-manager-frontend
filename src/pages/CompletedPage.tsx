import { useMemo } from 'react';
import { CalendarDays, CheckCircle2, Clock3, ListChecks, LoaderCircle } from 'lucide-react';
import styled from 'styled-components';
import {
  Button, EmptyState, PageTitle, Panel, Status,
} from '../components/ui';
import type { DailyTaskRecord } from '../types';

const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 22px;
  @media (max-width: 520px) { grid-template-columns: 1fr; }
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
  box-shadow: 0 5px 18px var(--shadow);
  > div > span { display: block; color: var(--muted); font-size: 12px; }
  > div > strong { display: block; margin-top: 3px; color: var(--text); font-size: 25px; line-height: 1.2; font-variant-numeric: tabular-nums; }
`;

const SummaryIcon = styled.span<{ $tone: 'blue' | 'green' }>`
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: 12px;
  color: ${({ $tone }) => $tone === 'green' ? 'var(--success)' : 'var(--primary-strong)'};
  background: ${({ $tone }) => $tone === 'green'
    ? 'var(--success-soft)'
    : 'color-mix(in srgb, var(--primary) 13%, var(--surface))'};
  svg { width: 19px; height: 19px; }
`;

const TaskList = styled.div`
  display: grid;
  gap: 12px;
`;

const CompletedTask = styled.article`
  display: grid;
  gap: 10px;
  padding: 17px 18px;
  border: 1px solid var(--success-border);
  border-left: 3px solid var(--success);
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, color-mix(in srgb, var(--success) 4%, var(--surface)), var(--surface));
  box-shadow: 0 5px 18px var(--shadow);
`;

const TaskHeading = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  h2 { margin: 0; color: var(--text); font-size: 14px; line-height: 1.45; overflow-wrap: anywhere; }
`;

const CompletedItemRow = styled.div`
  display: flex;
  min-width: 0;
  align-items: flex-start;
  gap: 10px;
  padding: 10px 11px;
  border: 1px solid var(--success-border);
  border-radius: 9px;
  color: var(--text);
  background: color-mix(in srgb, var(--success) 5%, var(--surface-raised));
  font-size: 12px;
  line-height: 1.45;
  svg { flex: 0 0 auto; color: var(--success); }
  span { min-width: 0; flex: 1; overflow-wrap: anywhere; }
  time { color: var(--muted); font-size: 11px; white-space: nowrap; }
  @media (max-width: 500px) { flex-wrap: wrap; }
`;

const DateNote = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 9px;
  padding: 13px 15px;
  margin-bottom: 16px;
  border: 1px solid color-mix(in srgb, var(--primary) 24%, var(--border));
  border-radius: 10px;
  color: var(--muted);
  background: color-mix(in srgb, var(--primary) 6%, var(--surface-raised));
  font-size: 12px;
  line-height: 1.5;
  svg { flex: 0 0 auto; color: var(--primary-strong); }
`;

interface CompletedPageProps {
  dailyRecords: DailyTaskRecord[];
  loading: boolean;
  onNavigate: (path: string) => void;
}

const displayDate = (value?: string | null) => value
  ? new Date(`${value.slice(0, 10)}T12:00:00`).toLocaleDateString('pt-BR', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  })
  : 'Hoje';

const displayTime = (value?: string | null) => value
  ? new Date(value).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
  : '';

export default function CompletedPage({ dailyRecords, loading, onNavigate }: CompletedPageProps) {
  const completedRecords = useMemo(() => dailyRecords
    .map(record => ({
      ...record,
      items: record.items.filter(item => item.is_completed),
    }))
    .filter(record => record.items.length > 0), [dailyRecords]);
  const completedCount = completedRecords.reduce((total, record) => total + record.items.length, 0);
  const completionDate = dailyRecords[0]?.record_date;

  return (
    <>
      <PageTitle>
        <div>
          <h1>Atividades concluídas</h1>
          <p>{displayDate(completionDate)}</p>
        </div>
        <Button onClick={() => onNavigate('/today')}><CalendarDays />Ver tarefas de hoje</Button>
      </PageTitle>

      <SummaryGrid aria-label="Resumo das atividades concluídas">
        <SummaryCard>
          <SummaryIcon $tone="green"><CheckCircle2 /></SummaryIcon>
          <div><span>Atividades concluídas hoje</span><strong>{completedCount}</strong></div>
        </SummaryCard>
        <SummaryCard>
          <SummaryIcon $tone="blue"><ListChecks /></SummaryIcon>
          <div><span>Tarefas com conclusão</span><strong>{completedRecords.length}</strong></div>
        </SummaryCard>
      </SummaryGrid>

      <DateNote>
        <Clock3 size={16} />
        <span>Esta página mostra as atividades marcadas como concluídas nos registros reais de hoje.</span>
      </DateNote>

      {loading ? (
        <EmptyState><LoaderCircle /><p>Carregando atividades concluídas...</p></EmptyState>
      ) : completedRecords.length === 0 ? (
        <Panel>
          <EmptyState>
            <CheckCircle2 size={32} />
            <h3>Nenhuma atividade concluída hoje</h3>
            <p>Quando marcar atividades como concluídas, elas aparecerão nesta página.</p>
            <div style={{ marginTop: 16 }}>
              <Button $variant="primary" onClick={() => onNavigate('/today')}>Ir para Hoje</Button>
            </div>
          </EmptyState>
        </Panel>
      ) : (
        <TaskList>
          {completedRecords.map(record => (
            <CompletedTask key={`${record.task_id}-${record.record_date}`}>
              <TaskHeading>
                <h2>{record.task_title}</h2>
                <Status $done>{record.items.length} {record.items.length === 1 ? 'concluída' : 'concluídas'}</Status>
              </TaskHeading>
              {record.items.map(item => (
                <CompletedItemRow key={item.id}>
                  <CheckCircle2 size={17} />
                  <span>{item.title}</span>
                  {item.completed_at && <time>{displayTime(item.completed_at)}</time>}
                </CompletedItemRow>
              ))}
            </CompletedTask>
          ))}
        </TaskList>
      )}
    </>
  );
}
