import { useState } from 'react';
import styled from 'styled-components';
import { CalendarDays, CalendarRange, Clock3 } from 'lucide-react';
import TodayPage from './TodayPage';
import WeekPage from './WeekPage';
import MonthPage from './MonthPage';
import CompletedPage from './CompletedPage';
import HistoryPage from './HistoryPage';
import type { DailyHistoryDay, DailyHistoryPeriod, DailyTaskRecord, Task, TaskId } from '../types';

const Tabs = styled.nav`
  display: flex; gap: 6px; padding: 5px; margin-bottom: 22px; border: 1px solid var(--border); border-radius: 12px; background: var(--surface-raised);
  @media (max-width: 520px) { width: 100%; overflow-x: auto; }
`;
const Tab = styled.button<{ $active?: boolean }>`
  display: inline-flex; align-items: center; justify-content: center; gap: 8px; flex: 1; min-width: 110px; border: 0; border-radius: 9px; padding: 11px 15px; color: var(--muted); background: transparent; font-weight: 700; cursor: pointer;
  ${({ $active }) => $active && 'color: var(--primary-strong); background: var(--surface); box-shadow: 0 3px 10px var(--shadow);'}
  &:hover { color: var(--primary-strong); }
  svg { width: 17px; height: 17px; }
`;
const HistoryTab = styled(Tab)`
  @media (max-width: 620px) { min-width: 125px; }
`;

type PlanningView = 'today' | 'week' | 'month' | 'completed' | 'history';

interface Props {
  tasks: Task[];
  dailyRecords: DailyTaskRecord[];
  loading: boolean;
  onNavigate: (path: string) => void;
  onToggleItem: (itemId: TaskId, checked: boolean) => void;
  onDeactivate: (taskId: TaskId) => void;
  history: {
    mode: 'daily' | 'week' | 'month';
    days: DailyHistoryDay[];
    periods: DailyHistoryPeriod[];
    selectedDay?: DailyHistoryDay;
    selectedPeriod?: DailyHistoryPeriod;
    selectedDate: string;
    dayDetails: DailyTaskRecord[];
    pagination: { page: number; limit: number; total: number; totalPages: number; hasNextPage: boolean; hasPreviousPage: boolean };
    detailLoading: boolean;
    referenceDate?: string;
    onModeChange: (mode: 'daily' | 'week' | 'month') => void;
    onPeriodSearch: (date?: string) => void;
    onSelectDate: (date: string) => void;
    onSelectPeriod: (period: DailyHistoryPeriod) => void;
    onPageChange: (page: number) => void;
  };
}

export default function PlanningPage({ history, ...props }: Props) {
  const [view, setView] = useState<PlanningView>('today');

  return <>
    <Tabs aria-label="Período do planejamento">
      <Tab type="button" $active={view === 'today'} onClick={() => setView('today')}><Clock3 />Hoje</Tab>
      <Tab type="button" $active={view === 'week'} onClick={() => setView('week')}><CalendarRange />Semana</Tab>
      <Tab type="button" $active={view === 'month'} onClick={() => setView('month')}><CalendarDays />Mês</Tab>
      <Tab type="button" $active={view === 'completed'} onClick={() => setView('completed')}><CalendarDays />Concluídas</Tab>
      <HistoryTab type="button" $active={view === 'history'} onClick={() => setView('history')}><CalendarRange />Histórico</HistoryTab>
    </Tabs>
    {view === 'today' && <TodayPage {...props} />}
    {view === 'week' && <WeekPage {...props} />}
    {view === 'month' && <MonthPage {...props} />}
    {view === 'completed' && <CompletedPage dailyRecords={props.dailyRecords} loading={props.loading} onNavigate={props.onNavigate} />}
    {view === 'history' && <HistoryPage {...history} loading={props.loading} />}
  </>;
}
