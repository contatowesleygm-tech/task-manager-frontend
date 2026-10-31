import type { Task, TaskFrequency } from '../types';

const normalizeFrequency = (frequency?: string | null) => frequency?.trim().toLocaleLowerCase('pt-BR');

export function getTaskFrequency(frequency?: string | null): TaskFrequency | undefined {
  const normalizedFrequency = normalizeFrequency(frequency);

  if (normalizedFrequency === 'dia' || normalizedFrequency === 'diaria' || normalizedFrequency === 'day' || normalizedFrequency === 'daily') {
    return 'diaria';
  }
  if (normalizedFrequency === 'semana' || normalizedFrequency === 'semanal' || normalizedFrequency === 'week' || normalizedFrequency === 'weekly') {
    return 'semana';
  }
  if (normalizedFrequency === 'mes' || normalizedFrequency === 'mês' || normalizedFrequency === 'mensal' || normalizedFrequency === 'month' || normalizedFrequency === 'monthly') {
    return 'mensal';
  }

  return undefined;
}

export function isDailyTask(task: Task): boolean {
  return getTaskFrequency(task.frequencia) === 'diaria';
}

export function isWeeklyTask(task: Task): boolean {
  return getTaskFrequency(task.frequencia) === 'semana';
}

export function isMonthlyTask(task: Task): boolean {
  return getTaskFrequency(task.frequencia) === 'mensal';
}
