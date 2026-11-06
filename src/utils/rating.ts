import type { OpportunityRating } from '../types';

export const ratingMeta: Record<OpportunityRating, { label: string; color: string }> = {
  otimo: { label: 'Ótimo', color: 'var(--success)' },
  bom: { label: 'Bom', color: 'var(--primary-strong)' },
  neutro: { label: 'Neutro', color: 'var(--muted)' },
  atencao: { label: 'Atenção', color: 'var(--warning)' },
  evitar: { label: 'Evitar', color: 'var(--error)' },
};

export function qualityTagMeta(
  assetClass: string | undefined,
  rating: OpportunityRating,
  analysisType?: 'fii_fundamentals' | 'equity_market_history' | 'short_term_market',
): { label: string; color: string } | undefined {
  if (assetClass !== 'fiis' && assetClass !== 'acoes_br') return undefined;
  if (!analysisType || analysisType === 'short_term_market') {
    return { label: 'Análise limitada', color: 'var(--muted)' };
  }

  if (rating === 'otimo' || rating === 'bom') {
    const label = assetClass === 'fiis' && analysisType === 'fii_fundamentals'
      ? 'FII com indicadores favoráveis'
      : assetClass === 'acoes_br' && analysisType === 'equity_market_history'
        ? 'Histórico de mercado favorável'
        : 'Cenário favorável';
    return { label, color: 'var(--success)' };
  }
  if (rating === 'neutro') return { label: 'Neutro', color: 'var(--muted)' };
  if (rating === 'evitar') return { label: 'Evitar', color: 'var(--error)' };
  return { label: 'Merece atenção', color: 'var(--warning)' };
}
