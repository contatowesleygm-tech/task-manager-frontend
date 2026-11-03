import type { OpportunityRating } from '../types';

export const ratingMeta: Record<OpportunityRating, { label: string; color: string }> = {
  otimo: { label: 'Ótimo', color: 'var(--success)' },
  bom: { label: 'Bom', color: 'var(--primary-strong)' },
  neutro: { label: 'Neutro', color: 'var(--muted)' },
  atencao: { label: 'Atenção', color: 'var(--warning)' },
  evitar: { label: 'Evitar', color: 'var(--error)' },
};
