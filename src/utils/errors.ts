import axios from 'axios';

// Converte erros da API em mensagens para o usuário; 404 de rota inexistente vira aviso de indisponibilidade.
export function apiErrorMessage(error: unknown, fallback: string, unavailable: string): string {
  if (axios.isAxiosError<{ error?: string }>(error)) {
    const message = error.response?.data?.error;
    if (error.response?.status === 404 && (!message || /^rota n/i.test(message))) return unavailable;
    return message || fallback;
  }
  return error instanceof Error ? error.message : fallback;
}
