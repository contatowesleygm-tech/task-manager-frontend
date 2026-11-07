import type { TaskId } from '../types';

export type AppPage = 'login' | 'list' | 'create' | 'details' | 'planning' | 'today' | 'week' | 'month' | 'completed' | 'goals' | 'history' | 'schedule' | 'study-resources' | 'study-resource-edit' | 'finances' | 'english-study' | 'expenses' | 'fuel-calculator' | 'dividends' | 'fixed-income' | 'opportunities';

const routePages: Record<string, AppPage> = {
  '/login': 'login',
  '/': 'today',
  '/tasks': 'list',
  '/tasks/new': 'create',
  '/planning': 'planning',
  '/today': 'today',
  '/week': 'week',
  '/month': 'month',
  '/completed': 'completed',
  '/goals': 'goals',
  '/history': 'history',
  '/schedule': 'schedule',
  '/study-resources': 'study-resources',
  '/finances': 'finances',
  '/english-study': 'english-study',
  '/expenses': 'expenses',
  '/fuel-calculator': 'fuel-calculator',
  '/dividends': 'dividends',
  '/fixed-income': 'fixed-income',
  '/opportunities': 'opportunities',
};

export function resolveRoute(path: string): { page: AppPage; taskId?: TaskId; resourceId?: TaskId } | undefined {
  const page = routePages[path];
  if (page) return { page };

  const detailsMatch = path.match(/^\/tasks\/([^/]+)$/);
  if (detailsMatch) {
    const taskId = decodeURIComponent(detailsMatch[1]);
    if (taskId !== 'new') return { page: 'details', taskId };
  }

  const studyEditMatch = path.match(/^\/study-resources\/([^/]+)\/edit$/);
  if (studyEditMatch) {
    return { page: 'study-resource-edit', resourceId: decodeURIComponent(studyEditMatch[1]) };
  }

  return undefined;
}
