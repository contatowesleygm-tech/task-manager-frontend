import { useEffect, useState } from 'react';
import axios from 'axios';
import { Gauge, LoaderCircle, RefreshCw } from 'lucide-react';
import styled from 'styled-components';
import { Button, EmptyState, Field, PageHero, Panel, PanelTitle } from '../components/ui';
import BacktestSection from '../components/BacktestSection';
import { StackedBar } from '../components/charts';
import { getMarketOpportunities } from '../api';
import { ratingMeta } from '../utils/rating';
import type { MarketOpportunities, MarketOpportunityItem, MarketRiskProfile, OpportunityRating } from '../types';

type Tab = 'oportunidades' | 'simulacao';

const classColors: Record<string, string> = {
  renda_fixa: '#2563eb',
  acoes_br: '#16a34a',
  fiis: '#d97706',
  internacional: '#8b5cf6',
  cripto: '#f97316',
};

const profiles: Array<{ id: MarketRiskProfile; label: string }> = [
  { id: 'conservador', label: 'Conservador' },
  { id: 'moderado', label: 'Moderado' },
  { id: 'arrojado', label: 'Arrojado' },
];

const Page = styled.div`
  display: grid;
  gap: 20px;
`;

const Tabs = styled.div`
  display: inline-flex;
  gap: 4px;
  padding: 4px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--surface);
`;

const TabButton = styled.button<{ $active: boolean }>`
  min-height: 38px;
  padding: 6px 16px;
  border: 0;
  border-radius: 999px;
  color: ${({ $active }) => ($active ? 'var(--primary-contrast)' : 'var(--text)')};
  background: ${({ $active }) => ($active ? 'var(--primary)' : 'transparent')};
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
`;

const Toolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 12px;
  ${Field} { margin-bottom: 0; min-width: 200px; }
`;

const Section = styled(Panel)`
  display: grid;
  gap: 14px;
  ${PanelTitle} { margin: 0; }
`;

const Description = styled.p`
  margin: 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.5;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 12px;
`;

const Card = styled.article<{ $rating: OpportunityRating }>`
  display: grid;
  gap: 10px;
  align-content: start;
  padding: 14px 16px;
  border: 1px solid color-mix(in srgb, ${({ $rating }) => ratingMeta[$rating].color} 35%, var(--border));
  border-left: 5px solid ${({ $rating }) => ratingMeta[$rating].color};
  border-radius: var(--radius-md);
  background: color-mix(in srgb, ${({ $rating }) => ratingMeta[$rating].color} 6%, var(--surface-raised));
  header { display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; }
  h3 { margin: 0; color: var(--text); font-size: 14px; }
  small { color: var(--muted); font-size: 11px; }
  ul { margin: 0; padding-left: 16px; color: var(--muted); font-size: 12px; line-height: 1.5; }
`;

const Badge = styled.span<{ $rating: OpportunityRating }>`
  flex: 0 0 auto;
  padding: 3px 9px;
  border-radius: 999px;
  color: ${({ $rating }) => ratingMeta[$rating].color};
  background: color-mix(in srgb, ${({ $rating }) => ratingMeta[$rating].color} 14%, transparent);
  font-size: 11px;
  font-weight: 800;
`;

const ScoreBar = styled.div<{ $rating: OpportunityRating; $score: number }>`
  display: grid;
  gap: 4px;
  font-size: 11px;
  color: var(--muted);
  span { font-variant-numeric: tabular-nums; }
  div { height: 6px; overflow: hidden; border-radius: 999px; background: var(--border); }
  div::after {
    content: '';
    display: block;
    width: ${({ $score }) => $score}%;
    height: 100%;
    background: ${({ $rating }) => ratingMeta[$rating].color};
  }
`;

const Disclaimer = styled.p`
  margin: 0;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.5;
`;

function errorMessage(error: unknown): string {
  if (axios.isAxiosError<{ error?: string; message?: string }>(error)) {
    if (error.response?.status === 404) return 'O serviço de oportunidades ainda não está disponível no servidor.';
    return error.response?.data?.error || error.response?.data?.message || 'Não foi possível carregar as oportunidades.';
  }
  return error instanceof Error ? error.message : 'Não foi possível carregar as oportunidades.';
}

function formatDateTime(value?: string): string {
  if (!value) return '';
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' });
}

function OpportunityCard({ item }: { item: MarketOpportunityItem }) {
  return (
    <Card $rating={item.rating}>
      <header>
        <div>
          <h3>{item.label}</h3>
          {item.in_portfolio && <small>Na sua carteira</small>}
        </div>
        <Badge $rating={item.rating}>{ratingMeta[item.rating].label}</Badge>
      </header>
      <ScoreBar $rating={item.rating} $score={item.score} aria-label={`Nota ${Math.round(item.score)} de 100`}>
        <span>Nota {Math.round(item.score)}/100</span>
        <div />
      </ScoreBar>
      {item.top_assets && item.top_assets.length > 0 && <small>Destaques: {item.top_assets.join(', ')}</small>}
      {item.reasons.length > 0 && <ul>{item.reasons.map(reason => <li key={reason}>{reason}</li>)}</ul>}
    </Card>
  );
}

function ItemSection({ title, description, items }: { title: string; description: string; items: MarketOpportunityItem[] }) {
  if (!items.length) return null;
  const sorted = [...items].sort((a, b) => b.score - a.score);
  return (
    <Section>
      <div>
        <PanelTitle>{title}</PanelTitle>
        <Description>{description}</Description>
      </div>
      <Grid>{sorted.map(item => <OpportunityCard key={item.id} item={item} />)}</Grid>
    </Section>
  );
}

export default function OpportunitiesPage() {
  const [tab, setTab] = useState<Tab>('oportunidades');
  const [profile, setProfile] = useState<MarketRiskProfile>('moderado');
  const [data, setData] = useState<MarketOpportunities>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [version, setVersion] = useState(0);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError('');
    getMarketOpportunities(profile)
      .then(result => { if (active) setData(result); })
      .catch(loadError => { if (active) setError(errorMessage(loadError)); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [profile, version]);

  const updatedAt = formatDateTime(data?.generated_at);
  const isEmpty = data && !data.classes.length && !data.assets.length;
  const classLabels = new Map((data?.classes ?? []).map(item => [item.id, item.label]));

  return (
    <Page>
      <PageHero>
        <div>
          <span><Gauge size={14} /> Oportunidades</span>
          <h1>Avaliação de oportunidades.</h1>
          <p>Nota de 0 a 100 por classe de ativo e por ativo, e uma simulação histórica para ver o que o passado ensina.</p>
          {tab === 'oportunidades' && updatedAt && <p style={{ marginTop: 8, fontSize: 12 }}>Atualizado em {updatedAt}</p>}
        </div>
        <Tabs role="tablist" aria-label="Seções">
          <TabButton type="button" role="tab" aria-selected={tab === 'oportunidades'} $active={tab === 'oportunidades'} onClick={() => setTab('oportunidades')}>Oportunidades</TabButton>
          <TabButton type="button" role="tab" aria-selected={tab === 'simulacao'} $active={tab === 'simulacao'} onClick={() => setTab('simulacao')}>Simulação histórica</TabButton>
        </Tabs>
      </PageHero>

      {tab === 'simulacao' && <BacktestSection />}

      {tab === 'oportunidades' && (
        <>
          <Toolbar>
            <Field htmlFor="opp-profile">Perfil de risco
              <select id="opp-profile" value={profile} onChange={event => setProfile(event.target.value as MarketRiskProfile)}>
                {profiles.map(item => <option key={item.id} value={item.id}>{item.label}</option>)}
              </select>
            </Field>
            <Button type="button" onClick={() => setVersion(current => current + 1)} disabled={loading}>
              <RefreshCw />{loading ? 'Atualizando...' : 'Atualizar'}
            </Button>
          </Toolbar>

      {error && <Panel role="alert" style={{ color: 'var(--error)', padding: 14 }}>{error}</Panel>}

      {loading && !data ? (
        <EmptyState><LoaderCircle /><p>Analisando o mercado...</p></EmptyState>
      ) : data && (
        <>
          {data.warnings.length > 0 && (
            <Panel role="status" style={{ color: 'var(--warning)', padding: 14, fontSize: 13 }}>
              {data.warnings.map(warning => <div key={warning}>{warning}</div>)}
            </Panel>
          )}
          {isEmpty && <EmptyState><Gauge /><p>Nenhuma oportunidade disponível no momento.</p></EmptyState>}
          {data.suggested_allocation.length > 0 && (
            <Section>
              <div>
                <PanelTitle>Alocação sugerida</PanelTitle>
                <Description>Distribuição de referência para o perfil {profile}, ajustada pelas notas de cada classe.</Description>
              </div>
              <StackedBar
                ariaLabel="Alocação sugerida por classe de ativo"
                items={[...data.suggested_allocation].sort((a, b) => b.percent - a.percent).map(item => ({
                  id: item.id,
                  label: classLabels.get(item.id) ?? item.id,
                  value: item.percent,
                  valueLabel: `${item.percent}%`,
                  color: classColors[item.id] ?? 'var(--primary)',
                }))}
              />
            </Section>
          )}
          <ItemSection title="Classes de ativos" description="Onde o cenário atual está mais favorável." items={data.classes} />
          <ItemSection title="Minha carteira" description="Seus ativos ativos em dividendos, avaliados pelo cenário atual." items={data.portfolio} />
          <ItemSection title="Ranking de ativos" description="Melhores ativos analisados, do melhor para o pior." items={data.assets} />
          <Disclaimer>
            {data.disclaimer ?? 'Análise quantitativa automatizada baseada em indicadores. Não constitui recomendação de investimento personalizada.'}
          </Disclaimer>
        </>
      )}
        </>
      )}
    </Page>
  );
}
