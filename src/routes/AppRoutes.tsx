import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  activateTask, addGoalStep, createGoal, createTask, deactivateTask, deleteGoal, deleteGoalStep,
  createScheduleEvent, deleteScheduleEvent, deleteTask, getDailyHistory, getDailyHistoryByDate, getDailyTasks,
  getGoals, getMonthlyHistory, getSchedule, getScheduleAlerts, getTasks, getWeeklyHistory,
  getCurrentUser, getStudyResource, getStudyResourceAreas, getStudyResources, createStudyResource, deleteStudyResource, updateStudyResource,
  getFinanceSummary, getFinanceAccounts, createFinanceAccount, updateFinanceAccount, deleteFinanceAccount,
  getFinanceAssets, createFinanceAsset, updateFinanceAsset, deleteFinanceAsset,
  getFinanceLiabilities, createFinanceLiability, updateFinanceLiability, deleteFinanceLiability,
  login, logout, register, setGoalStepStatus, setItemCompleted, updateGoal, updateScheduleEvent, updateTask,
} from '../api';
import AppLayout from '../components/AppLayout';
import { ConfirmDialog } from '../components/ui';
import CreateTaskPage from '../pages/CreateTaskPage';
import CompletedPage from '../pages/CompletedPage';
import GoalsPage from '../pages/GoalsPage';
import HistoryPage from '../pages/HistoryPage';
import LoginPage from '../pages/LoginPage';
import MonthPage from '../pages/MonthPage';
import PlanningPage from '../pages/PlanningPage';
import SchedulePage from '../pages/SchedulePage';
import StudyResourcesPage from '../pages/StudyResourcesPage';
import EditStudyResourcePage from '../pages/EditStudyResourcePage';
import FinancesPage from '../pages/FinancesPage';
import EnglishStudyPage from '../pages/EnglishStudyPage';
import ExpensesPage from '../pages/ExpensesPage';
import FuelCalculatorPage from '../pages/FuelCalculatorPage';
import DividendsPage from '../pages/DividendsPage';
import OpportunitiesPage from '../pages/OpportunitiesPage';
import TaskDetailsPage from '../pages/TaskDetailsPage';
import TasksPage from '../pages/TasksPage';
import TodayPage from '../pages/TodayPage';
import WeekPage from '../pages/WeekPage';
import type {
  CreateGoalPayload, CreateTaskPayload, DailyHistoryDay, DailyHistoryPeriod, DailyTaskRecord,
  GoalStep, LifeGoal, PaginatedDailyPeriodHistory, PaginatedSchedule,
  PaginatedScheduleAlerts, ScheduleEvent, SchedulePayload, Task, TaskId, TaskPagination,
  TaskPriority, ScheduleQuery, UpdateGoalPayload, UpdateTaskPayload, AuthCredentials, AuthUser, RegisterResult,
  PaginatedStudyResources, StudyResource, StudyResourceArea, StudyResourcePayload,
  FinanceAccount, FinanceAccountPayload, FinanceAccountUpdatePayload, FinanceSummary, FinanceAsset, FinanceAssetPayload, FinanceLiability, FinanceLiabilityPayload,
} from '../types';
import { resolveRoute, type AppPage } from './paths';

type TaskStatusFilter = 'all' | 'active' | 'inactive';
type PriorityFilter = 'all' | TaskPriority | 'none';
type HistoryMode = 'daily' | 'week' | 'month';

function historyDayRecords(day?: DailyHistoryDay): DailyTaskRecord[] {
  if (!day) return [];
  const records = new Map<string, DailyTaskRecord>();
  for (const item of day.items) {
    const key = String(item.task_id);
    const record = records.get(key) ?? {
      task_id: item.task_id,
      record_date: day.date,
      task_title: item.task_title,
      items: [],
      total_items: 0,
      completed_items: 0,
    };
    record.items.push({
      id: item.id,
      task_item_id: item.task_item_id,
      title: item.title,
      is_completed: item.is_completed,
      completed_at: item.completed_at,
      record_date: item.record_date,
    });
    record.total_items += 1;
    if (item.is_completed) record.completed_items += 1;
    records.set(key, record);
  }
  return [...records.values()];
}

function historyPeriodDay(period: DailyHistoryPeriod): DailyHistoryDay {
  return {
    date: period.start_date,
    total_items: period.total_items,
    completed_items: period.completed_items,
    pending_items: period.pending_items,
    completion_percentage: period.completion_percentage,
    items: period.items.map(item => ({
      ...item,
      record_date: item.date,
    })),
  };
}

export default function AppRoutes() {
  const [path, setPath] = useState(() => window.location.pathname);
  const route = resolveRoute(path);
  const page = route?.page ?? 'list';
  const [tasks, setTasks] = useState<Task[]>([]);
  const [goals, setGoals] = useState<LifeGoal[]>([]);
  const [scheduleEvents, setScheduleEvents] = useState<ScheduleEvent[]>([]);
  const [scheduleQuery, setScheduleQuery] = useState<ScheduleQuery>({ mode: 'all' });
  const [schedulePage, setSchedulePage] = useState(1);
  const [schedulePagination, setSchedulePagination] = useState<PaginatedSchedule['pagination']>({
    page: 1,
    limit: 20,
    total: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false,
  });
  const [scheduleAlerts, setScheduleAlerts] = useState<PaginatedScheduleAlerts['data']>([]);
  const [scheduleAlertPagination, setScheduleAlertPagination] = useState<PaginatedScheduleAlerts['pagination']>({
    page: 1,
    limit: 20,
    total: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false,
  });
  const [scheduleAlertsLoading, setScheduleAlertsLoading] = useState(false);
  const [studyResources, setStudyResources] = useState<StudyResource[]>([]);
  const [studyResourceAreas, setStudyResourceAreas] = useState<StudyResourceArea[]>([]);
  const [studyResourceFilters, setStudyResourceFilters] = useState({ area: '', type: '', search: '' });
  const [studyResourcePage, setStudyResourcePage] = useState(1);
  const [studyResourcePagination, setStudyResourcePagination] = useState<PaginatedStudyResources['pagination']>({ page: 1, limit: 12, total: 0, totalPages: 0, hasNextPage: false, hasPreviousPage: false });
  const [editingStudyResource, setEditingStudyResource] = useState<StudyResource | null>(null);
  const [editingStudyResourceLoading, setEditingStudyResourceLoading] = useState(false);
  const [financeAccounts, setFinanceAccounts] = useState<FinanceAccount[]>([]);
  const [financeAssets, setFinanceAssets] = useState<FinanceAsset[]>([]);
  const [financeLiabilities, setFinanceLiabilities] = useState<FinanceLiability[]>([]);
  const [financeSummary, setFinanceSummary] = useState<FinanceSummary>({ total_balance: 0, account_count: 0 });
  const [dailyRecords, setDailyRecords] = useState<DailyTaskRecord[]>([]);
  const [historyDays, setHistoryDays] = useState<DailyHistoryDay[]>([]);
  const [historyPeriods, setHistoryPeriods] = useState<DailyHistoryPeriod[]>([]);
  const [historyMode, setHistoryMode] = useState<HistoryMode>('daily');
  const [historyReferenceDate, setHistoryReferenceDate] = useState<string>();
  const [selectedHistoryPeriod, setSelectedHistoryPeriod] = useState<DailyHistoryPeriod>();
  const [selectedHistoryDay, setSelectedHistoryDay] = useState<DailyHistoryDay>();
  const [selectedHistoryDate, setSelectedHistoryDate] = useState('');
  const [historyDayDetails, setHistoryDayDetails] = useState<DailyTaskRecord[]>([]);
  const [historyPage, setHistoryPage] = useState(1);
  const [historyPagination, setHistoryPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false,
  });
  const [historyDetailLoading, setHistoryDetailLoading] = useState(false);
  const [statusFilter, setStatusFilter] = useState<TaskStatusFilter>('all');
  const [priorityFilter, setPriorityFilter] = useState<PriorityFilter>('all');
  const [taskPage, setTaskPage] = useState(1);
  const [taskLimit, setTaskLimit] = useState(10);
  const [taskPagination, setTaskPagination] = useState<TaskPagination>({
    page: 1,
    limit: 10,
    total: 0,
    activeTotal: 0,
    inactiveTotal: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false,
  });
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [statusChanging, setStatusChanging] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [celebration, setCelebration] = useState('');
  const [taskPendingDelete, setTaskPendingDelete] = useState<Task | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);
  const [authReady, setAuthReady] = useState(false);

  const navigate = useCallback((nextPath: string) => {
    window.history.pushState({}, '', nextPath);
    setPath(nextPath);
    setError('');
    setNotice('');
  }, []);

  useEffect(() => {
    void getCurrentUser()
      .then(user => setAuthUser(user))
      .catch(() => {
        setAuthUser(null);
        if (window.location.pathname !== '/login') navigate('/login');
      })
      .finally(() => setAuthReady(true));
  }, [navigate]);

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
      setError('');
      setNotice('');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (!resolveRoute(path)) {
      window.history.replaceState({}, '', '/today');
      setPath('/today');
    }
  }, [path]);

  const loadTasks = useCallback(async (page = 1, limit = 100) => {
    setLoading(true);
    setError('');
    try {
      const result = await getTasks(page, limit);
      setTasks(result.data);
      setTaskPagination(result.pagination);
      if (result.pagination.page !== page) setTaskPage(result.pagination.page);
      return true;
    } catch {
      setError('Não foi possível carregar as tarefas. Confira se a API está ligada em http://localhost:3333.');
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  const loadToday = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const [loadedTasks, loadedDailyRecords] = await Promise.all([getTasks(1, 100), getDailyTasks()]);
      setTasks(loadedTasks.data);
      setDailyRecords(loadedDailyRecords);
    } catch (err: any) {
      const apiMessage = err?.response?.data?.error;
      setError(apiMessage || 'Não foi possível carregar os itens de hoje. Confira a rota GET /api/daily.');
    } finally {
      setLoading(false);
    }
  }, []);

  const loadWeek = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const [loadedTasks, loadedDailyRecords] = await Promise.all([getTasks(1, 100), getDailyTasks()]);
      setTasks(loadedTasks.data);
      setDailyRecords(loadedDailyRecords);
    } catch (err: any) {
      const apiMessage = err?.response?.data?.error;
      setError(apiMessage || 'Não foi possível carregar os itens da semana. Confira as rotas GET /api/tasks e GET /api/daily.');
    } finally {
      setLoading(false);
    }
  }, []);

  const loadMonth = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const [loadedTasks, loadedDailyRecords] = await Promise.all([getTasks(1, 100), getDailyTasks()]);
      setTasks(loadedTasks.data);
      setDailyRecords(loadedDailyRecords);
    } catch (err: any) {
      const apiMessage = err?.response?.data?.error;
      setError(apiMessage || 'Não foi possível carregar os itens do mês. Confira as rotas GET /api/tasks e GET /api/daily.');
    } finally {
      setLoading(false);
    }
  }, []);

  const loadCompleted = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      setDailyRecords(await getDailyTasks());
    } catch (err: any) {
      const apiMessage = err?.response?.data?.error;
      setError(apiMessage || 'Não foi possível carregar as atividades concluídas. Confira a rota GET /api/daily.');
    } finally {
      setLoading(false);
    }
  }, []);

  const loadGoals = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      setGoals(await getGoals());
    } catch (err: any) {
      const apiMessage = err?.response?.data?.error;
      setError(apiMessage || 'Não foi possível carregar os objetivos. Confira se a API e a migração de objetivos estão configuradas.');
    } finally {
      setLoading(false);
    }
  }, []);

  const loadSchedule = useCallback(async (query: ScheduleQuery, pageNumber: number) => {
    setLoading(true);
    setError('');
    try {
      const response = await getSchedule(query, pageNumber);
      setScheduleEvents(response.data);
      setSchedulePagination(response.pagination);
    } catch (err: any) {
      const apiMessage = err?.response?.data?.error;
      setError(apiMessage || 'Não foi possível carregar a agenda. Confira a rota GET /api/schedule.');
    } finally {
      setLoading(false);
    }
  }, []);

  const loadScheduleAlerts = useCallback(async (pageNumber = 1): Promise<PaginatedScheduleAlerts | undefined> => {
    setScheduleAlertsLoading(true);
    setError('');
    try {
      const response = await getScheduleAlerts(pageNumber);
      setScheduleAlerts(response.data);
      setScheduleAlertPagination(response.pagination);
      return response;
    } catch (err: any) {
      const apiMessage = err?.response?.data?.error;
      setError(apiMessage || 'Não foi possível carregar os alertas. Confira a rota GET /api/schedule/alerts.');
      return undefined;
    } finally {
      setScheduleAlertsLoading(false);
    }
  }, []);

  const loadStudyResources = useCallback(async (pageNumber = studyResourcePage, nextFilters = studyResourceFilters) => {
    setLoading(true);
    setError('');
    try {
      const [response, areaResponse] = await Promise.all([
        getStudyResources({ ...nextFilters, page: pageNumber, limit: 12 }),
        getStudyResourceAreas(),
      ]);
      setStudyResources(response.data);
      setStudyResourcePagination(response.pagination);
      setStudyResourceAreas(areaResponse);
    } catch (err: any) {
      const apiMessage = err?.response?.data?.error;
      setError(apiMessage || 'Não foi possível carregar a biblioteca de estudos. Confira as rotas /api/study-resources.');
    } finally {
      setLoading(false);
    }
  }, [studyResourceFilters, studyResourcePage]);

  const loadFinances = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const [summary, accounts, assets, liabilities] = await Promise.all([getFinanceSummary(), getFinanceAccounts(), getFinanceAssets(), getFinanceLiabilities()]);
      setFinanceSummary(summary);
      setFinanceAccounts(accounts);
      setFinanceAssets(assets);
      setFinanceLiabilities(liabilities);
    } catch (err: any) {
      const apiMessage = err?.response?.data?.error;
      setError(apiMessage || 'NÃ£o foi possÃ­vel carregar as finanÃ§as. Confira as rotas /api/finances.');
    } finally {
      setLoading(false);
    }
  }, []);

  const loadHistory = useCallback(async (
    page = historyPage,
    mode = historyMode,
    referenceDate = historyReferenceDate
  ) => {
    setLoading(true);
    setError('');
    try {
      if (mode === 'daily') {
        const response = await getDailyHistory(page, 10, referenceDate);
        setHistoryDays(response.data);
        setHistoryPeriods([]);
        setHistoryPagination(response.pagination);
        setSelectedHistoryPeriod(undefined);
        const initialDay = response.data[0];
        if (initialDay) {
          setSelectedHistoryDay(initialDay);
          setSelectedHistoryDate(initialDay.date.slice(0, 10));
          setHistoryDayDetails(historyDayRecords(initialDay));
        } else {
          setSelectedHistoryDay(undefined);
          setSelectedHistoryDate('');
          setHistoryDayDetails([]);
        }
      } else {
        const response = mode === 'week'
          ? await getWeeklyHistory(page, 10, referenceDate)
          : await getMonthlyHistory(page, 10, referenceDate);
        setHistoryDays([]);
        setHistoryPeriods(response.data);
        setHistoryPagination(response.pagination);
        const initialPeriod = response.data[0];
        setSelectedHistoryPeriod(initialPeriod);
        if (initialPeriod) {
          const periodDay = historyPeriodDay(initialPeriod);
          setSelectedHistoryDay(periodDay);
          setSelectedHistoryDate(initialPeriod.start_date.slice(0, 10));
          setHistoryDayDetails(historyDayRecords(periodDay));
        } else {
          setSelectedHistoryDay(undefined);
          setSelectedHistoryDate('');
          setHistoryDayDetails([]);
        }
      }
    } catch (err: any) {
      const apiMessage = err?.response?.data?.error;
      const endpoint = mode === 'week'
        ? '/api/daily/history/week'
        : mode === 'month'
          ? '/api/daily/history/month'
          : '/api/daily/history';
      setError(apiMessage || `Não foi possível carregar o histórico. Confira a rota GET ${endpoint}.`);
    } finally {
      setLoading(false);
    }
  }, [historyMode, historyPage, historyReferenceDate]);

  const selectHistoryDate = useCallback(async (date: string) => {
    setSelectedHistoryDate(date);
    setSelectedHistoryPeriod(undefined);
    setHistoryDetailLoading(true);
    try {
      const response = await getDailyHistoryByDate(date);
      const day: DailyHistoryDay = {
        date: response.date,
        total_items: response.summary.total_items,
        completed_items: response.summary.completed_items,
        pending_items: response.summary.pending_items,
        completion_percentage: response.summary.completion_percentage,
        items: response.data.map(item => ({
          id: item.id,
          task_id: item.task_id,
          task_title: item.task_title,
          task_item_id: item.task_item_id,
          title: item.item_title,
          is_completed: item.is_completed,
          completed_at: item.completed_at,
          record_date: item.date,
        })),
      };
      setSelectedHistoryDay(day);
      setHistoryDayDetails(historyDayRecords(day));
    } catch (err: any) {
      setSelectedHistoryDay(undefined);
      setHistoryDayDetails([]);
      setError(err?.response?.data?.error || 'Não foi possível carregar os registros desta data.');
    } finally {
      setHistoryDetailLoading(false);
    }
  }, []);

  const selectHistoryPeriod = useCallback((period: DailyHistoryPeriod) => {
    const periodDay = historyPeriodDay(period);
    setSelectedHistoryPeriod(period);
    setSelectedHistoryDay(periodDay);
    setSelectedHistoryDate(period.start_date.slice(0, 10));
    setHistoryDayDetails(historyDayRecords(periodDay));
  }, []);

  useEffect(() => {
    if (!authReady || !authUser) return;
    if (page === 'planning' || page === 'today') {
      void loadToday();
    } else if (page === 'week') {
      void loadWeek();
    } else if (page === 'month') {
      void loadMonth();
    } else if (page === 'completed') {
      void loadCompleted();
    } else if (page === 'goals') {
      void loadGoals();
    } else if (page === 'schedule') {
      void loadSchedule(scheduleQuery, schedulePage);
      void loadScheduleAlerts();
    } else if (page === 'study-resources') {
      void loadStudyResources(studyResourcePage, studyResourceFilters);
    } else if (page === 'finances') {
      void loadFinances();
    } else if (page === 'list') {
      void loadTasks(taskPage, taskLimit);
    } else if (page !== 'login' && page !== 'english-study' && page !== 'expenses' && page !== 'dividends' && page !== 'fixed-income' && page !== 'opportunities' && page !== 'study-resource-edit') {
      void loadTasks(1, 100);
    }
  }, [authReady, authUser, page, taskPage, taskLimit, scheduleQuery, schedulePage, studyResourcePage, studyResourceFilters, loadTasks, loadToday, loadWeek, loadMonth, loadCompleted, loadGoals, loadSchedule, loadScheduleAlerts, loadStudyResources, loadFinances]);

  useEffect(() => {
    if (page !== 'study-resource-edit') {
      setEditingStudyResource(null);
      setEditingStudyResourceLoading(false);
      return;
    }
    if (!authReady || !authUser || !route?.resourceId) return;
    const resourceId = route.resourceId;
    if (editingStudyResource && String(editingStudyResource.id) === String(resourceId)) {
      setEditingStudyResourceLoading(false);
      return;
    }
    const found = studyResources.find(item => String(item.id) === String(resourceId));
    if (found) {
      setEditingStudyResource(found);
      setEditingStudyResourceLoading(false);
      return;
    }
    let cancelled = false;
    setEditingStudyResourceLoading(true);
    void getStudyResource(resourceId)
      .then(resource => {
        if (!cancelled) setEditingStudyResource(resource);
      })
      .catch(() => {
        if (!cancelled) setEditingStudyResource(null);
      })
      .finally(() => {
        if (!cancelled) setEditingStudyResourceLoading(false);
      });
    return () => { cancelled = true; };
  }, [authReady, authUser, editingStudyResource, page, route?.resourceId, studyResources]);
  useEffect(() => {
    if (page === 'history' || page === 'planning') void loadHistory(historyPage, historyMode, historyReferenceDate);
  }, [page, historyPage, historyMode, historyReferenceDate, loadHistory]);

  const createTaskFromPage = useCallback(async (payload: CreateTaskPayload) => {
    setError('');
    setNotice('');
    setSaving(true);
    try {
      await createTask(payload);
      navigate('/tasks');
      setNotice('Tarefa criada com sucesso.');
      setTaskPage(1);
      await loadTasks(1, taskLimit);
      return true;
    } catch (err: any) {
      const apiMessage = err?.response?.data?.error;
      setError(apiMessage || 'Não foi possível salvar. Confira a API, o schema e a função ensure_task_daily_records no PostgreSQL.');
      return false;
    } finally {
      setSaving(false);
    }
  }, [loadTasks, navigate, taskLimit]);

  const updateTaskFromPage = useCallback(async (payload: UpdateTaskPayload) => {
    if (!route?.taskId) return false;
    setError('');
    setNotice('');
    setSaving(true);
    try {
      await updateTask(route.taskId, payload);
      navigate('/tasks');
      setNotice('Tarefa atualizada com sucesso.');
      setTaskPage(1);
      await loadTasks(1, taskLimit);
      return true;
    } catch (err: any) {
      const apiMessage = err?.response?.data?.error;
      setError(apiMessage || 'Não foi possível atualizar a tarefa. Confira se a API implementa PATCH /api/tasks/:id.');
      return false;
    } finally {
      setSaving(false);
    }
  }, [loadTasks, navigate, route?.taskId, taskLimit]);

  const createGoalFromPage = useCallback(async (payload: CreateGoalPayload) => {
    setError('');
    setNotice('');
    setSaving(true);
    try {
      const goal = await createGoal(payload);
      setGoals(current => [goal, ...current]);
      setNotice('Objetivo criado com sucesso.');
      return true;
    } catch (err: any) {
      const apiMessage = err?.response?.data?.error;
      setError(apiMessage || 'Não foi possível salvar o objetivo. Confira a rota POST /api/objectives e a migração do banco.');
      return false;
    } finally {
      setSaving(false);
    }
  }, []);

  const createScheduleEventFromPage = useCallback(async (payload: SchedulePayload) => {
    setError('');
    setNotice('');
    setSaving(true);
    try {
      await createScheduleEvent(payload);
      setNotice('Agendamento criado com sucesso.');
      const [, alertsResponse] = await Promise.all([
        loadSchedule(scheduleQuery, schedulePage),
        loadScheduleAlerts(scheduleAlertPagination.page),
      ]);
      if (alertsResponse && !alertsResponse.data.length && scheduleAlertPagination.page > 1) {
        await loadScheduleAlerts(scheduleAlertPagination.page - 1);
      }
      return true;
    } catch (err: any) {
      const apiMessage = err?.response?.data?.error;
      setError(apiMessage || 'Não foi possível criar o agendamento. Confira a rota POST /api/schedule.');
      return false;
    } finally {
      setSaving(false);
    }
  }, [loadSchedule, loadScheduleAlerts, scheduleAlertPagination.page, scheduleQuery, schedulePage]);

  const updateScheduleEventFromPage = useCallback(async (
    eventId: TaskId,
    payload: Partial<SchedulePayload>
  ) => {
    setError('');
    setNotice('');
    setSaving(true);
    try {
      await updateScheduleEvent(eventId, payload);
      setNotice('Agendamento atualizado com sucesso.');
      const [, alertsResponse] = await Promise.all([
        loadSchedule(scheduleQuery, schedulePage),
        loadScheduleAlerts(scheduleAlertPagination.page),
      ]);
      if (alertsResponse && !alertsResponse.data.length && scheduleAlertPagination.page > 1) {
        await loadScheduleAlerts(scheduleAlertPagination.page - 1);
      }
      return true;
    } catch (err: any) {
      const apiMessage = err?.response?.data?.error;
      setError(apiMessage || 'Não foi possível atualizar o agendamento. Confira a rota PATCH /api/schedule/:id.');
      return false;
    } finally {
      setSaving(false);
    }
  }, [loadSchedule, loadScheduleAlerts, scheduleAlertPagination.page, scheduleQuery, schedulePage]);

  const deleteScheduleEventFromPage = useCallback(async (event: ScheduleEvent) => {
    setError('');
    setNotice('');
    try {
      await deleteScheduleEvent(event.id);
      setNotice('Agendamento excluído com sucesso.');
      const nextPage = scheduleEvents.length === 1 && schedulePage > 1 ? schedulePage - 1 : schedulePage;
      setSchedulePage(nextPage);
      const [, alertsResponse] = await Promise.all([
        loadSchedule(scheduleQuery, nextPage),
        loadScheduleAlerts(scheduleAlertPagination.page),
      ]);
      if (alertsResponse && !alertsResponse.data.length && scheduleAlertPagination.page > 1) {
        await loadScheduleAlerts(scheduleAlertPagination.page - 1);
      }
      return true;
    } catch (err: any) {
      const apiMessage = err?.response?.data?.error;
      setError(apiMessage || 'Não foi possível excluir o agendamento. Confira a rota DELETE /api/schedule/:id.');
      return false;
    }
  }, [loadSchedule, loadScheduleAlerts, scheduleAlertPagination.page, scheduleEvents.length, schedulePage, scheduleQuery]);

  const refreshStudyResources = useCallback(async (pageNumber = studyResourcePage, nextFilters = studyResourceFilters) => {
    await loadStudyResources(pageNumber, nextFilters);
  }, [loadStudyResources, studyResourceFilters, studyResourcePage]);

  const createStudyResourceFromPage = useCallback(async (payload: StudyResourcePayload) => {
    setError(''); setNotice(''); setSaving(true);
    try {
      await createStudyResource(payload);
      await refreshStudyResources(1, studyResourceFilters);
      setStudyResourcePage(1); setNotice('Material adicionado à biblioteca.'); return true;
    } catch (err: any) {
      setError(err?.response?.data?.error || 'Não foi possível adicionar o material.'); return false;
    } finally { setSaving(false); }
  }, [refreshStudyResources, studyResourceFilters]);

  const updateStudyResourceFromPage = useCallback(async (id: TaskId, payload: StudyResourcePayload) => {
    setError(''); setNotice(''); setSaving(true);
    try {
      await updateStudyResource(id, payload);
      await refreshStudyResources();
      setNotice('Material atualizado com sucesso.');
      navigate('/study-resources');
      return true;
    } catch (err: any) {
      setError(err?.response?.data?.error || 'Não foi possível atualizar o material.');
      return false;
    } finally { setSaving(false); }
  }, [navigate, refreshStudyResources]);

  const deleteStudyResourceFromPage = useCallback(async (resource: StudyResource) => {
    setError(''); setNotice('');
    try {
      await deleteStudyResource(resource.id);
      const nextPage = studyResources.length === 1 && studyResourcePage > 1 ? studyResourcePage - 1 : studyResourcePage;
      await refreshStudyResources(nextPage);
      setStudyResourcePage(nextPage); setNotice('Material removido da biblioteca.'); return true;
    } catch (err: any) { setError(err?.response?.data?.error || 'Não foi possível remover o material.'); return false; }
  }, [refreshStudyResources, studyResourcePage, studyResources.length]);

  const createFinanceAccountFromPage = useCallback(async (payload: FinanceAccountPayload) => {
    setError(''); setNotice(''); setSaving(true);
    try {
      await createFinanceAccount(payload);
      await loadFinances();
      setNotice('Conta adicionada com sucesso.');
      return true;
    } catch (err: any) {
      setError(err?.response?.data?.error || 'NÃ£o foi possÃ­vel adicionar a conta.');
      return false;
    } finally { setSaving(false); }
  }, [loadFinances]);

  const updateFinanceAccountFromPage = useCallback(async (id: TaskId, payload: FinanceAccountUpdatePayload) => {
    setError(''); setNotice(''); setSaving(true);
    try {
      await updateFinanceAccount(id, payload);
      await loadFinances();
      setNotice('Conta atualizada com sucesso.');
      return true;
    } catch (err: any) {
      setError(err?.response?.data?.error || 'NÃ£o foi possÃ­vel atualizar a conta.');
      return false;
    } finally { setSaving(false); }
  }, [loadFinances]);

  const deleteFinanceAccountFromPage = useCallback(async (account: FinanceAccount) => {
    setError(''); setNotice('');
    try {
      await deleteFinanceAccount(account.id);
      await loadFinances();
      setNotice('Conta removida com sucesso.');
      return true;
    } catch (err: any) {
      setError(err?.response?.data?.error || 'NÃ£o foi possÃ­vel remover a conta.');
      return false;
    }
  }, [loadFinances]);

  const createFinanceAssetFromPage = useCallback(async (payload: FinanceAssetPayload) => {
    setError(''); setNotice(''); setSaving(true);
    try { await createFinanceAsset(payload); await loadFinances(); setNotice('Bem adicionado com sucesso.'); return true; }
    catch (err: any) { setError(err?.response?.data?.error || 'Não foi possível adicionar o bem.'); return false; }
    finally { setSaving(false); }
  }, [loadFinances]);

  const updateFinanceAssetFromPage = useCallback(async (id: TaskId, payload: FinanceAssetPayload) => {
    setError(''); setNotice(''); setSaving(true);
    try { await updateFinanceAsset(id, payload); await loadFinances(); setNotice('Bem atualizado com sucesso.'); return true; }
    catch (err: any) { setError(err?.response?.data?.error || 'Não foi possível atualizar o bem.'); return false; }
    finally { setSaving(false); }
  }, [loadFinances]);

  const deleteFinanceAssetFromPage = useCallback(async (asset: FinanceAsset) => {
    setError(''); setNotice('');
    try { await deleteFinanceAsset(asset.id); await loadFinances(); setNotice('Bem removido com sucesso.'); return true; }
    catch (err: any) { setError(err?.response?.data?.error || 'Não foi possível remover o bem.'); return false; }
  }, [loadFinances]);

  const createFinanceLiabilityFromPage = useCallback(async (payload: FinanceLiabilityPayload) => {
    setError(''); setNotice(''); setSaving(true);
    try { await createFinanceLiability(payload); await loadFinances(); setNotice('Passivo adicionado com sucesso.'); return true; }
    catch (err: any) { setError(err?.response?.data?.error || 'Não foi possível adicionar o passivo.'); return false; }
    finally { setSaving(false); }
  }, [loadFinances]);

  const updateFinanceLiabilityFromPage = useCallback(async (id: TaskId, payload: FinanceLiabilityPayload) => {
    setError(''); setNotice(''); setSaving(true);
    try { await updateFinanceLiability(id, payload); await loadFinances(); setNotice('Passivo atualizado com sucesso.'); return true; }
    catch (err: any) { setError(err?.response?.data?.error || 'Não foi possível atualizar o passivo.'); return false; }
    finally { setSaving(false); }
  }, [loadFinances]);

  const deleteFinanceLiabilityFromPage = useCallback(async (liability: FinanceLiability) => {
    setError(''); setNotice('');
    try { await deleteFinanceLiability(liability.id); await loadFinances(); setNotice('Passivo removido com sucesso.'); return true; }
    catch (err: any) { setError(err?.response?.data?.error || 'Não foi possível remover o passivo.'); return false; }
  }, [loadFinances]);

  const updateGoalFromPage = useCallback(async (goalId: TaskId, payload: UpdateGoalPayload) => {
    setError('');
    setNotice('');
    setSaving(true);
    try {
      const updatedGoal = await updateGoal(goalId, payload);
      setGoals(current => current.map(goal => (
        String(goal.id) === String(goalId) ? updatedGoal : goal
      )));
      setNotice('Objetivo atualizado com sucesso.');
      return true;
    } catch (err: any) {
      const apiMessage = err?.response?.data?.error;
      setError(apiMessage || 'Não foi possível atualizar o objetivo. Confira a rota PATCH /api/objectives/:id.');
      return false;
    } finally {
      setSaving(false);
    }
  }, []);

  const deleteGoalFromPage = useCallback(async (goal: LifeGoal) => {
    setError('');
    setNotice('');
    try {
      await deleteGoal(goal.id);
      setGoals(current => current.filter(currentGoal => String(currentGoal.id) !== String(goal.id)));
      setNotice('Objetivo excluído com sucesso.');
      return true;
    } catch (err: any) {
      const apiMessage = err?.response?.data?.error;
      setError(apiMessage || 'Não foi possível excluir o objetivo. Confira a rota DELETE /api/objectives/:id.');
      return false;
    }
  }, []);

  const addGoalStepFromPage = useCallback(async (goalId: TaskId, title: string) => {
    setError('');
    try {
      const step = await addGoalStep(goalId, title);
      setGoals(current => current.map(goal => (
        String(goal.id) === String(goalId)
          ? { ...goal, steps: [...goal.steps, step] }
          : goal
      )));
      return true;
    } catch (err: any) {
      const apiMessage = err?.response?.data?.error;
      setError(apiMessage || 'Não foi possível adicionar a etapa. Confira a rota POST /api/objectives/:id/steps.');
      return false;
    }
  }, []);

  const toggleGoalStep = useCallback(async (
    goalId: TaskId,
    step: GoalStep,
    isCompleted: boolean
  ) => {
    setError('');
    setGoals(current => current.map(goal => (
      String(goal.id) === String(goalId)
        ? {
          ...goal,
          steps: goal.steps.map(currentStep => (
            String(currentStep.id) === String(step.id)
              ? { ...currentStep, status: isCompleted ? 'concluido' : 'pendente' }
              : currentStep
          )),
        }
        : goal
    )));
    try {
      const updatedStep = await setGoalStepStatus(
        goalId,
        step.id,
        isCompleted ? 'concluido' : 'pendente'
      );
      setGoals(current => current.map(goal => (
        String(goal.id) === String(goalId)
          ? {
            ...goal,
            steps: goal.steps.map(currentStep => (
              String(currentStep.id) === String(step.id) ? updatedStep : currentStep
            )),
          }
          : goal
      )));
      if (updatedStep.activity?.message) setNotice(updatedStep.activity.message);
      return true;
    } catch (err: any) {
      setGoals(current => current.map(goal => (
        String(goal.id) === String(goalId)
          ? {
            ...goal,
            steps: goal.steps.map(currentStep => (
              String(currentStep.id) === String(step.id) ? step : currentStep
            )),
          }
          : goal
      )));
      const apiMessage = err?.response?.data?.error;
      setError(apiMessage || 'Não foi possível atualizar a etapa. Confira a rota PATCH /api/objectives/:id/steps/:stepId.');
      return false;
    }
  }, []);

  const deleteGoalStepFromPage = useCallback(async (goalId: TaskId, step: GoalStep) => {
    setError('');
    try {
      await deleteGoalStep(goalId, step.id);
      setGoals(current => current.map(goal => (
        String(goal.id) === String(goalId)
          ? { ...goal, steps: goal.steps.filter(currentStep => String(currentStep.id) !== String(step.id)) }
          : goal
      )));
      return true;
    } catch (err: any) {
      const apiMessage = err?.response?.data?.error;
      setError(apiMessage || 'Não foi possível remover a etapa. Confira a rota DELETE /api/objectives/:id/steps/:stepId.');
      return false;
    }
  }, []);

  const toggleItem = useCallback(async (itemId: TaskId, checked: boolean) => {
    setError('');
    setNotice('');
    setCelebration('');
    setDailyRecords(current => current.map(record => {
      const items = record.items.map(item => (
        String(item.id) === String(itemId) ? { ...item, is_completed: checked } : item
      ));
      return items.some((item, index) => item !== record.items[index])
        ? { ...record, items, completed_items: items.filter(item => item.is_completed).length }
        : record;
    }));

    try {
      const updatedItem = await setItemCompleted(itemId, checked);
      if (checked) setCelebration(updatedItem.activity?.message || 'Você concluiu uma atividade da sua rotina.');
      if (updatedItem.activity?.message && !checked) setNotice(updatedItem.activity.message);
      const { item_title: updatedTitle, title: responseTitle, ...itemUpdates } = updatedItem;
      setDailyRecords(current => current.map(record => {
        const items = record.items.map(item => String(item.id) === String(updatedItem.id)
          ? {
            ...item,
            ...itemUpdates,
            title: updatedTitle ?? responseTitle ?? item.title,
          }
          : item);
        return {
          ...record,
          items,
          completed_items: items.filter(item => item.is_completed).length,
        };
      }));
    } catch (err: any) {
      const apiMessage = err?.response?.data?.error;
      setError(apiMessage || 'Não foi possível atualizar a conclusão do item. Confira a rota PATCH /api/daily/items/:id.');
      try {
        setDailyRecords(await getDailyTasks());
      } catch {
        setError(`${apiMessage || 'Não foi possível atualizar a conclusão do item.'} Não foi possível sincronizar novamente os itens de hoje.`);
      }
    }
  }, []);

  const handleSetTaskActive = useCallback(async (taskId: TaskId, isActive: boolean) => {
    if (!isActive && !window.confirm('Desativar esta tarefa? O histórico será preservado.')) return false;
    const currentTask = tasks.find(task => String(task.id) === String(taskId));
    setError('');
    setNotice('');
    setStatusChanging(true);
    try {
      if (isActive) {
        await activateTask(taskId);
      } else {
        await deactivateTask(taskId);
      }
      setTasks(current => current.map(task => (
        String(task.id) === String(taskId) ? { ...task, is_active: isActive } : task
      )));
      if (currentTask && currentTask.is_active !== isActive) {
        setTaskPagination(current => ({
          ...current,
          activeTotal: current.activeTotal + (isActive ? 1 : -1),
          inactiveTotal: current.inactiveTotal + (isActive ? -1 : 1),
        }));
      }
      setNotice(isActive ? 'Tarefa ativada.' : 'Tarefa desativada.');
      return true;
    } catch {
      setError(isActive
        ? 'Não foi possível ativar a tarefa. Confira se a API implementa PATCH /api/tasks/:id/activate.'
        : 'Não foi possível desativar a tarefa. Confira a rota PATCH /api/tasks/:id/deactivate.');
      return false;
    } finally {
      setStatusChanging(false);
    }
  }, [tasks]);

  const handleDeactivateAllTasks = useCallback(async () => {
    const activeCount = taskPagination.activeTotal;
    if (activeCount === 0 || !window.confirm(
      `Desativar todas as ${activeCount} tarefas ativas? O histórico será preservado.`
    )) return;

    setError('');
    setNotice('');
    setStatusChanging(true);
    let deactivatedCount = 0;
    try {
      const firstPage = await getTasks(1, 100);
      const allTasks = [...firstPage.data];
      for (let page = 2; page <= firstPage.pagination.totalPages; page += 1) {
        const result = await getTasks(page, 100);
        allTasks.push(...result.data);
      }

      for (const task of allTasks) {
        if (!task.is_active) continue;
        await deactivateTask(task.id);
        deactivatedCount += 1;
      }

      const refreshed = await loadTasks(taskPage, taskLimit);
      if (!refreshed) {
        setError('Todas as tarefas foram desativadas, mas não foi possível atualizar a lista.');
        return;
      }
      setNotice(deactivatedCount === 0
        ? 'Todas as tarefas já estavam desativadas.'
        : `${deactivatedCount} ${deactivatedCount === 1 ? 'tarefa desativada' : 'tarefas desativadas'}. O histórico foi preservado.`);
    } catch (err: any) {
      const apiMessage = err?.response?.data?.error;
      const refreshed = await loadTasks(taskPage, taskLimit);
      const failureMessage = deactivatedCount > 0
        ? `Desativação parcial: ${deactivatedCount} tarefas foram desativadas antes da falha.${apiMessage ? ` Erro: ${apiMessage}` : ''}`
        : apiMessage || 'Não foi possível desativar todas as tarefas.';
      setError(refreshed
        ? failureMessage
        : `${failureMessage} Também não foi possível atualizar a lista.`);
    } finally {
      setStatusChanging(false);
    }
  }, [loadTasks, taskLimit, taskPage, taskPagination.activeTotal]);

  const handleDelete = useCallback(async (task: Task) => {
    setTaskPendingDelete(task);
  }, []);

  const confirmDelete = useCallback(async () => {
    if (!taskPendingDelete || deleting) return;
    setError('');
    setNotice('');
    setDeleting(true);
    try {
      await deleteTask(taskPendingDelete.id);
      const nextPage = tasks.length === 1 && taskPage > 1 ? taskPage - 1 : taskPage;
      setTaskPage(nextPage);
      await loadTasks(nextPage, taskLimit);
      setTaskPendingDelete(null);
      setNotice('Tarefa excluída com sucesso.');
    } catch (err: any) {
      const apiMessage = err?.response?.data?.error;
      setError(apiMessage || 'Não foi possível excluir a tarefa. Confira se a API implementa DELETE /api/tasks/:id.');
      setTaskPendingDelete(null);
    } finally {
      setDeleting(false);
    }
  }, [deleting, loadTasks, taskLimit, taskPage, taskPendingDelete, tasks.length]);

  const sharedPageProps = useMemo(() => ({
    tasks,
    loading,
    onNavigate: navigate,
    onDeactivate: (taskId: TaskId) => { void handleSetTaskActive(taskId, false); },
  }), [tasks, loading, navigate, handleSetTaskActive]);

  async function authenticate(credentials: AuthCredentials) {
    const user = await login(credentials);
    setAuthUser(user);
    setAuthReady(true);
    navigate('/today');
    return user;
  }

  async function handleRegister(credentials: AuthCredentials): Promise<RegisterResult> {
    const result = await register(credentials);
    // Cadastro cria assinatura/pagamento pendente; sessão completa só após login.
    return result;
  }

  async function handleLogout() {
    try {
      await logout();
    } finally {
      setAuthUser(null);
      navigate('/login');
    }
  }

  if (!authReady) return null;
  if (page === 'login' || !authUser) {
    return <LoginPage onLogin={authenticate} onRegister={handleRegister} />;
  }

  let content;
  switch (page as AppPage) {
    case 'planning':
      content = (
        <PlanningPage
          tasks={tasks}
          dailyRecords={dailyRecords}
          loading={loading}
          onNavigate={navigate}
          onToggleItem={(itemId, checked) => { void toggleItem(itemId, checked); }}
          onDeactivate={taskId => { void handleSetTaskActive(taskId, false); }}
          history={{
            mode: historyMode,
            days: historyDays,
            periods: historyPeriods,
            selectedDay: selectedHistoryDay,
            selectedPeriod: selectedHistoryPeriod,
            selectedDate: selectedHistoryDate,
            dayDetails: historyDayDetails,
            pagination: historyPagination,
            detailLoading: historyDetailLoading,
            referenceDate: historyReferenceDate,
            onModeChange: mode => {
              setHistoryMode(mode);
              setHistoryPage(1);
              setHistoryReferenceDate(undefined);
              setSelectedHistoryPeriod(undefined);
              if (historyMode === mode && mode !== 'daily') void loadHistory(1, mode, undefined);
            },
            onPeriodSearch: date => {
              setHistoryReferenceDate(date);
              setHistoryPage(1);
              setSelectedHistoryPeriod(undefined);
              if (historyReferenceDate === date) void loadHistory(1, historyMode, date);
            },
            onSelectDate: selectHistoryDate,
            onSelectPeriod: selectHistoryPeriod,
            onPageChange: setHistoryPage,
          }}
        />
      );
      break;
    case 'create':
      content = (
        <CreateTaskPage
          saving={saving}
          onCreate={createTaskFromPage}
          onValidationError={setError}
        />
      );
      break;
    case 'today':
      content = (
        <TodayPage
          {...sharedPageProps}
          dailyRecords={dailyRecords}
          onToggleItem={(itemId, checked) => { void toggleItem(itemId, checked); }}
        />
      );
      break;
    case 'week':
      content = (
        <WeekPage
          {...sharedPageProps}
          dailyRecords={dailyRecords}
          onToggleItem={(itemId, checked) => { void toggleItem(itemId, checked); }}
        />
      );
      break;
    case 'month':
      content = (
        <MonthPage
          {...sharedPageProps}
          dailyRecords={dailyRecords}
          onToggleItem={(itemId, checked) => { void toggleItem(itemId, checked); }}
        />
      );
      break;
    case 'completed':
      content = (
        <CompletedPage
          dailyRecords={dailyRecords}
          loading={loading}
          onNavigate={navigate}
        />
      );
      break;
    case 'goals':
      content = (
        <GoalsPage
          goals={goals}
          loading={loading}
          saving={saving}
          onCreate={createGoalFromPage}
          onUpdate={updateGoalFromPage}
          onDelete={deleteGoalFromPage}
          onAddStep={addGoalStepFromPage}
          onToggleStep={toggleGoalStep}
          onDeleteStep={deleteGoalStepFromPage}
        />
      );
      break;
    case 'study-resources':
      content = (
        <StudyResourcesPage
          resources={studyResources}
          areas={studyResourceAreas}
          loading={loading}
          saving={saving}
          pagination={studyResourcePagination}
          filters={studyResourceFilters}
          onFiltersChange={nextFilters => {
            setStudyResourceFilters(nextFilters);
            setStudyResourcePage(1);
          }}
          onPageChange={setStudyResourcePage}
          onCreate={createStudyResourceFromPage}
          onDelete={deleteStudyResourceFromPage}
          onEdit={resource => {
            setEditingStudyResource(resource);
            setEditingStudyResourceLoading(false);
            navigate(`/study-resources/${encodeURIComponent(String(resource.id))}/edit`);
          }}
        />
      );
      break;
    case 'study-resource-edit':
      content = (
        <EditStudyResourcePage
          resource={editingStudyResource}
          loading={editingStudyResourceLoading}
          saving={saving}
          onBack={() => navigate('/study-resources')}
          onSave={payload => {
            if (!route?.resourceId) return Promise.resolve(false);
            return updateStudyResourceFromPage(route.resourceId, payload);
          }}
        />
      );
      break;
    case 'finances':
      content = (
        <FinancesPage
          accounts={financeAccounts}
          assets={financeAssets}
          liabilities={financeLiabilities}
          summary={financeSummary}
          loading={loading}
          saving={saving}
          onCreate={createFinanceAccountFromPage}
          onUpdate={updateFinanceAccountFromPage}
          onDelete={deleteFinanceAccountFromPage}
          onCreateAsset={createFinanceAssetFromPage}
          onUpdateAsset={updateFinanceAssetFromPage}
          onDeleteAsset={deleteFinanceAssetFromPage}
          onCreateLiability={createFinanceLiabilityFromPage}
          onUpdateLiability={updateFinanceLiabilityFromPage}
          onDeleteLiability={deleteFinanceLiabilityFromPage}
        />
      );
      break;
    case 'dividends':
      content = <DividendsPage key="dividends" />;
      break;
    case 'fixed-income':
      content = <DividendsPage key="fixed-income" assetType="renda_fixa" />;
      break;
    case 'opportunities':
      content = <OpportunitiesPage />;
      break;
    case 'expenses':
      content = <ExpensesPage />;
      break;
    case 'fuel-calculator':
      content = <FuelCalculatorPage />;
      break;
    case 'english-study':
      content = (
        <EnglishStudyPage onNavigate={nextPath => {
          if (nextPath === '/study-resources') {
            setStudyResourceFilters({ area: 'Inglês', type: '', search: '' });
            setStudyResourcePage(1);
          }
          navigate(nextPath);
        }} />
      );
      break;
    case 'schedule':
      content = (
        <SchedulePage
          events={scheduleEvents}
          alerts={scheduleAlerts}
          loading={loading}
          alertsLoading={scheduleAlertsLoading}
          saving={saving}
          query={scheduleQuery}
          pagination={schedulePagination}
          alertPagination={scheduleAlertPagination}
          onApplyFilter={query => {
            setScheduleQuery(query);
            setSchedulePage(1);
            if (JSON.stringify(scheduleQuery) === JSON.stringify(query) && schedulePage === 1) {
              void loadSchedule(query, 1);
            }
          }}
          onPageChange={setSchedulePage}
          onAlertPageChange={pageNumber => { void loadScheduleAlerts(pageNumber); }}
          onCreate={createScheduleEventFromPage}
          onUpdate={updateScheduleEventFromPage}
          onDelete={deleteScheduleEventFromPage}
        />
      );
      break;
    case 'details': {
      const task = tasks.find(candidate => String(candidate.id) === String(route?.taskId));
      content = (
        <TaskDetailsPage
          task={task}
          loading={loading}
          saving={saving}
          statusChanging={statusChanging}
          onBack={() => navigate('/tasks')}
          onSave={updateTaskFromPage}
          onDelete={taskId => {
            const taskToDelete = tasks.find(candidate => String(candidate.id) === String(taskId));
            if (taskToDelete) void handleDelete(taskToDelete);
          }}
          onSetActive={handleSetTaskActive}
          onValidationError={setError}
        />
      );
      break;
    }
    case 'history':
      content = (
        <HistoryPage
          mode={historyMode}
          days={historyDays}
          periods={historyPeriods}
          selectedDay={selectedHistoryDay}
          selectedPeriod={selectedHistoryPeriod}
          selectedDate={selectedHistoryDate}
          dayDetails={historyDayDetails}
          pagination={historyPagination}
          loading={loading}
          detailLoading={historyDetailLoading}
          referenceDate={historyReferenceDate}
          onModeChange={mode => {
            setHistoryMode(mode);
            setHistoryPage(1);
            setHistoryReferenceDate(undefined);
            setSelectedHistoryPeriod(undefined);
            if (historyMode === mode && mode !== 'daily') void loadHistory(1, mode, undefined);
          }}
          onPeriodSearch={(date) => {
            setHistoryReferenceDate(date);
            setHistoryPage(1);
            setSelectedHistoryPeriod(undefined);
            if (historyReferenceDate === date) void loadHistory(1, historyMode, date);
          }}
          onSelectDate={selectHistoryDate}
          onSelectPeriod={selectHistoryPeriod}
          onPageChange={setHistoryPage}
        />
      );
      break;
    case 'list':
    default:
      content = (
        <TasksPage
          {...sharedPageProps}
          statusFilter={statusFilter}
          priorityFilter={priorityFilter}
          pagination={taskPagination}
          onPageChange={setTaskPage}
          onPageSizeChange={(limit) => {
            setTaskLimit(limit);
            setTaskPage(1);
          }}
          onStatusFilterChange={(filter) => {
            setStatusFilter(filter);
            setTaskPage(1);
          }}
          onPriorityFilterChange={(filter) => {
            setPriorityFilter(filter);
            setTaskPage(1);
          }}
          onDeactivateAll={() => { void handleDeactivateAllTasks(); }}
          statusChanging={statusChanging}
          onDelete={(task) => { void handleDelete(task); }}
        />
      );
  }

  return (
    <AppLayout
      page={page}
      error={error}
      notice={notice}
      celebration={celebration}
      onNavigate={navigate}
      user={authUser}
      onLogout={() => { void handleLogout(); }}
      onDismissError={() => setError('')}
      onDismissNotice={() => setNotice('')}
      onDismissCelebration={() => setCelebration('')}
    >
      {content}
      <ConfirmDialog
        open={taskPendingDelete !== null}
        title="Deseja excluir esta tarefa?"
        description={taskPendingDelete
          ? `A tarefa “${taskPendingDelete.title}” será removida permanentemente, incluindo seus itens.`
          : ''}
        busy={deleting}
        onCancel={() => {
          if (!deleting) setTaskPendingDelete(null);
        }}
        onConfirm={() => { void confirmDelete(); }}
      />
    </AppLayout>
  );
}
