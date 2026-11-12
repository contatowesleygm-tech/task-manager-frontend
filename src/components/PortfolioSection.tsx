import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { LoaderCircle, Wallet } from 'lucide-react';
import styled from 'styled-components';
import { Button, EmptyState, Field, PanelTitle } from './ui';
import MarketAnalysisTag from './MarketAnalysisTag';
import { Description, FormGrid, Note, RatingBadge, Section, Stat, Stats, TableWrap, Wrap } from './marketUi';
import { DivergingBars, StackedBar, ValueBars } from './charts';
import { analyzeFiiPortfolio, getDividendHoldings, getMarketOpportunities, ratingFromScore, simulatePortfolioSwitch } from '../api';
import { formatBRL, formatPercent } from '../utils/format';
import { apiErrorMessage } from '../utils/errors';
import { qualityTagMeta, ratingMeta } from '../utils/rating';
import type {
  DividendAssetType, DividendHolding, MarketOpportunityItem, MarketRiskProfile,
  PortfolioAnalysis, PortfolioParams, PortfolioPosition, PortfolioRecommendation, SwitchSimulation,
} from '../types';

const profiles: Array<{ id: MarketRiskProfile; label: string }> = [
  { id: 'conservador', label: 'Conservador' },
  { id: 'moderado', label: 'Moderado' },
  { id: 'arrojado', label: 'Arrojado' },
];

const recommendationMeta: Record<PortfolioRecommendation, { label: string; color: string }> = {
  vender: { label: 'Avaliar venda', color: 'var(--error)' },
  reduzir: { label: 'Avaliar redução', color: 'var(--warning)' },
  manter: { label: 'Manter / acompanhar', color: 'var(--success)' },
  sem_dados: { label: 'Sem dados', color: 'var(--muted)' },
};

const allocationMeta: Record<string, { label: string; color: string }> = {
  renda_fixa: { label: 'Renda fixa', color: '#2563eb' },
  fiis: { label: 'FIIs', color: '#d97706' },
  acoes: { label: 'Ações', color: '#16a34a' },
  outros: { label: 'Outros', color: '#8b5cf6' },
};

const productNames: Record<string, string> = { cdb: 'CDB', lci_lca: 'LCI/LCA', tesouro_selic: 'Tesouro Selic' };

const decimal = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const equityAssetTypes = new Set<DividendAssetType>(['acao', 'bdr', 'etf', 'acao_us']);
const equityPaymentsPerYear: Record<DividendHolding['frequency'], number> = {
  mensal: 12,
  trimestral: 4,
  semestral: 2,
  anual: 1,
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 12px;
`;

const Card = styled.article<{ $color: string }>`
  display: grid;
  gap: 10px;
  align-content: start;
  padding: 14px 16px;
  border: 1px solid color-mix(in srgb, ${({ $color }) => $color} 35%, var(--border));
  border-left: 5px solid ${({ $color }) => $color};
  border-radius: var(--radius-md);
  background: color-mix(in srgb, ${({ $color }) => $color} 6%, var(--surface-raised));
  header { display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; }
  h3 { margin: 0; color: var(--text); font-size: 15px; }
  small { color: var(--muted); font-size: 11px; }
  dl { display: grid; gap: 5px; margin: 0; }
  dl > div { display: flex; justify-content: space-between; gap: 8px; font-size: 12px; }
  dt { color: var(--muted); }
  dd { margin: 0; color: var(--text); font-variant-numeric: tabular-nums; font-weight: 650; text-align: right; }
  ul { margin: 0; padding-left: 16px; color: var(--muted); font-size: 12px; line-height: 1.5; }
`;

const Meter = styled.div<{ $value: number; $color: string }>`
  display: grid;
  gap: 4px;
  font-size: 11px;
  color: var(--muted);
  div { height: 6px; overflow: hidden; border-radius: 999px; background: var(--border); }
  div::after { content: ''; display: block; width: ${({ $value }) => Math.min(100, Math.max(0, $value))}%; height: 100%; background: ${({ $color }) => $color}; }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`;

const EquityAssessment = styled.div`
  display: grid;
  gap: 5px;
  padding: 10px 12px;
  border-radius: var(--radius-md);
  background: var(--surface);
  color: var(--text);
  font-size: 12px;
  line-height: 1.5;
  strong { font-size: 12px; }
  span { color: var(--muted); }
`;

function errorMessage(error: unknown): string {
  return apiErrorMessage(error, 'Não foi possível analisar a carteira.', 'A análise de carteira ainda não está disponível no servidor.');
}

function horizonLabel(months: number): string {
  if (months % 12 === 0) return months === 12 ? '1 ano' : `${months / 12} anos`;
  return `${months} meses`;
}

function equityAssessment(rating: MarketOpportunityItem['rating']): string {
  switch (rating) {
    case 'otimo':
    case 'bom':
      return 'Indicadores de mercado favoráveis; manter e acompanhar é compatível com esta leitura.';
    case 'neutro':
      return 'Leitura neutra; acompanhe a tese e os próximos resultados, sem sinal suficiente isoladamente para manter ou vender.';
    case 'atencao':
      return 'Os indicadores merecem atenção; reavalie a tese, os riscos e o tamanho da posição antes de decidir.';
    case 'evitar':
      return 'Os indicadores do período estão desfavoráveis; revise a tese e os fundamentos da empresa antes de decidir.';
  }
}

async function loadEquityHoldings(): Promise<DividendHolding[]> {
  const firstPage = await getDividendHoldings({ active: true, page: 1, limit: 100 });
  const holdings = [...firstPage.data];
  for (let page = 2; page <= firstPage.pagination.totalPages; page += 1) {
    const result = await getDividendHoldings({ active: true, page, limit: 100 });
    holdings.push(...result.data);
  }
  return holdings.filter(holding => equityAssetTypes.has(holding.asset_type.toLowerCase() as DividendAssetType));
}

function EquityPositionCard({
  holding,
  analysis,
}: {
  holding: DividendHolding;
  analysis?: MarketOpportunityItem;
}) {
  const invested = Number(holding.invested_amount) || 0;
  const currentValue = Number(holding.current_value) || 0;
  const gain = Number(holding.profit_loss) || 0;
  const yieldEstimate = currentValue > 0
    ? Number(holding.dividend_per_share ?? 0) * (equityPaymentsPerYear[holding.frequency] ?? 4)
      * (Number(holding.quantity) || 0) / currentValue * 100
    : null;
  const color = analysis ? ratingMeta[analysis.rating].color : 'var(--muted)';

  return (
    <Card $color={color}>
      <header>
        <div>
          <h3>{holding.ticker} · {holding.asset_type.toUpperCase()}</h3>
          {holding.name && <small>{holding.name}</small>}
        </div>
        <RatingBadge $color={color}>
          {analysis ? `Mercado: ${ratingMeta[analysis.rating].label}` : 'Análise indisponível'}
        </RatingBadge>
      </header>
      {analysis && (
        <Meter $value={analysis.score} $color={color}>
          <span>Nota quantitativa de mercado {Math.round(analysis.score)}/100</span>
          <div />
        </Meter>
      )}
      <EquityAssessment>
        <strong>{analysis ? equityAssessment(analysis.rating) : 'Sem dados suficientes para avaliar os indicadores de mercado deste ativo.'}</strong>
        <span>
          Saúde financeira: não avaliada. A análise disponível não fornece demonstrativos confiáveis de lucro,
          endividamento, fluxo de caixa, ROE ou valuation.
        </span>
      </EquityAssessment>
      <dl>
        <div><dt>Valor na carteira</dt><dd>{formatBRL(currentValue)}</dd></div>
        <div><dt>Valor investido</dt><dd>{formatBRL(invested)}</dd></div>
        <div>
          <dt>Variação cadastrada</dt>
          <dd style={{ color: gain >= 0 ? 'var(--success)' : 'var(--error)' }}>
            {gain > 0 ? '+' : ''}{formatBRL(gain)}
          </dd>
        </div>
        <div>
          <dt>Provento cadastrado anualizado</dt>
          <dd>{yieldEstimate === null ? '—' : formatPercent(yieldEstimate)}</dd>
        </div>
      </dl>
      {analysis?.reasons?.length ? (
        <>
          <strong>Fatores e indicadores considerados</strong>
          <ul>{analysis.reasons.map((reason, index) => <li key={`${holding.ticker}-reason-${index}`}>{reason}</li>)}</ul>
        </>
      ) : <small>Os fatores detalhados não foram retornados para este ticker. Confira a cotação e os dados da empresa antes de decidir.</small>}
      {holding.notes && <small>Observação: {holding.notes}</small>}
    </Card>
  );
}

function PositionCard({ position, bestRate }: { position: PortfolioPosition; bestRate: number }) {
  const meta = recommendationMeta[position.recommendation];
  const qualityRating = position.quality_score === null ? undefined : ratingFromScore(position.quality_score);
  const qualityTag = qualityRating ? qualityTagMeta('fiis', qualityRating, 'fii_fundamentals') : undefined;
  const spread = position.dividend_yield_12m_pct === null ? null : position.dividend_yield_12m_pct - bestRate;
  return (
    <Card $color={meta.color}>
      <header>
        <div>
          <h3>{position.ticker}</h3>
          {position.name && <small>{position.name}</small>}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', gap: 6 }}>
          <RatingBadge $color={meta.color}>{meta.label}</RatingBadge>
          {qualityTag && (
            <MarketAnalysisTag
              label={qualityTag.label}
              color={qualityTag.color}
              details={[
                `Nota ${position.quality_score}/100 · classificação: ${qualityRating ? ratingMeta[qualityRating].label : 'indisponível'}.`,
                ...(position.quality_reasons ?? ['Fatores detalhados não disponíveis.']),
                `Patrimônio líquido: ${position.net_assets == null ? 'indisponível' : formatBRL(position.net_assets)}.`,
                `Valor patrimonial por cota: ${position.vp_per_share == null ? 'indisponível' : formatBRL(position.vp_per_share)}.`,
                'Vacância: não disponível nos dados padronizados consultados; não foi estimada nem pontuada.',
              ]}
            />
          )}
        </div>
      </header>
      {position.sell_score !== null && (
        <Meter $value={position.sell_score} $color={meta.color}>
          <span>Nota de venda {position.sell_score}/100 (quanto maior, mais motivos para vender)</span>
          <div />
        </Meter>
      )}
      <dl>
        <div><dt>Valor na carteira</dt><dd>{formatBRL(position.market_value)} ({formatPercent(position.weight_pct)})</dd></div>
        <div>
          <dt>Dividend yield 12m</dt>
          <dd>
            {position.dividend_yield_12m_pct === null ? '—' : formatPercent(position.dividend_yield_12m_pct)}
            {spread !== null && <small style={{ color: spread >= 0 ? 'var(--success)' : 'var(--error)' }}> ({spread >= 0 ? '+' : ''}{decimal.format(spread)} p.p. vs renda fixa)</small>}
          </dd>
        </div>
        {position.p_vp !== undefined && <div><dt>P/VP</dt><dd>{decimal.format(position.p_vp)}</dd></div>}
        {position.quality_score !== null && (
          <div>
            <dt>Indicadores do FII</dt>
            <dd>{position.quality_score}/100 · {qualityRating ? ratingMeta[qualityRating].label : position.quality_rating}</dd>
          </div>
        )}
        {position.fund_age_years != null && <div><dt>Idade do fundo</dt><dd>{decimal.format(position.fund_age_years)} anos</dd></div>}
        {position.net_assets != null && <div><dt>Patrimônio líquido</dt><dd>{formatBRL(position.net_assets)}</dd></div>}
        {position.vp_per_share != null && <div><dt>Valor patrimonial por cota</dt><dd>{formatBRL(position.vp_per_share)}</dd></div>}
        {position.months_paid_pct != null && <div><dt>Meses com proventos</dt><dd>{formatPercent(position.months_paid_pct)}</dd></div>}
        {position.variation_coefficient_24m != null && <div><dt>Variação dos proventos (24m)</dt><dd>{formatPercent(position.variation_coefficient_24m * 100)}</dd></div>}
        {position.excess_over_cdi_pp != null && <div><dt>Retorno vs. CDI</dt><dd>{position.excess_over_cdi_pp > 0 ? '+' : ''}{decimal.format(position.excess_over_cdi_pp)} p.p.</dd></div>}
        {position.annual_volatility_pct != null && <div><dt>Volatilidade anual</dt><dd>{formatPercent(position.annual_volatility_pct)}</dd></div>}
        {position.max_drawdown_pct != null && <div><dt>Queda máxima histórica</dt><dd>{formatPercent(position.max_drawdown_pct)}</dd></div>}
        <div><dt>Vacância</dt><dd>Sem dado padronizado</dd></div>
        <div>
          <dt>Ganho ou perda</dt>
          <dd style={{ color: position.gain === null ? undefined : position.gain >= 0 ? 'var(--success)' : 'var(--error)' }}>
            {position.gain === null ? 'preço médio não informado' : formatBRL(position.gain)}
          </dd>
        </div>
        <div><dt>Imposto se vender tudo</dt><dd>{position.cost_basis_missing ? '—' : formatBRL(position.estimated_sale_tax)}</dd></div>
      </dl>
      {position.quality_reasons && position.quality_reasons.length > 0 && <ul>{position.quality_reasons.map((reason, index) => <li key={`quality-${index}`}>{reason}</li>)}</ul>}
      <ul>{position.reasons.map((reason, index) => <li key={`recommendation-${index}`}>{reason}</li>)}</ul>
    </Card>
  );
}

export default function PortfolioSection() {
  const [form, setForm] = useState({ perfil: 'moderado' as MarketRiskProfile, meta: '', prazo: '24', cdb: '100', lci: '90', anos: '5' });
  const [request, setRequest] = useState<PortfolioParams>({ perfil: 'moderado', anos: 5, prazo_meses: 24, cdi_percent: 100, lci_percent: 90 });
  const [data, setData] = useState<PortfolioAnalysis>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [simulation, setSimulation] = useState<SwitchSimulation>();
  const [simulating, setSimulating] = useState(false);
  const [simulationError, setSimulationError] = useState('');
  const [equityHoldings, setEquityHoldings] = useState<DividendHolding[]>([]);
  const [equityAnalysis, setEquityAnalysis] = useState<MarketOpportunityItem[]>([]);
  const [equityHoldingsLoading, setEquityHoldingsLoading] = useState(true);
  const [equityAnalysisLoading, setEquityAnalysisLoading] = useState(true);
  const [equityError, setEquityError] = useState('');

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError('');
    setSimulation(undefined);
    setSimulationError('');
    analyzeFiiPortfolio(request)
      .then(result => { if (active) setData(result); })
      .catch(loadError => { if (active) { setError(errorMessage(loadError)); setData(undefined); } })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [request]);

  useEffect(() => {
    let active = true;
    setEquityHoldingsLoading(true);
    setEquityAnalysisLoading(true);
    setEquityError('');
    void loadEquityHoldings()
      .then(holdings => {
        if (active) setEquityHoldings(holdings);
      })
      .catch(() => {
        if (active) {
          setEquityHoldings([]);
          setEquityError('Não foi possível carregar suas ações cadastradas.');
        }
      })
      .finally(() => {
        if (active) setEquityHoldingsLoading(false);
      });
    void getMarketOpportunities(request.perfil, true)
      .then(marketResult => {
        if (!active) return;
        const equityTypes = new Set(['acoes_br', 'internacional']);
        const byTicker = new Map<string, MarketOpportunityItem>();
        [...marketResult.portfolio, ...marketResult.assets].forEach(item => {
          if (item.ticker && equityTypes.has(item.class_id ?? '')) {
            byTicker.set(item.ticker.toUpperCase(), item);
          }
        });
        setEquityAnalysis([...byTicker.values()]);
      })
      .catch(() => {
        if (active) {
          setEquityAnalysis([]);
          setEquityError(current => [
            current,
            'A análise de mercado das ações está temporariamente indisponível.',
          ].filter(Boolean).join(' '));
        }
      })
      .finally(() => {
        if (active) setEquityAnalysisLoading(false);
      });
    return () => { active = false; };
  }, [request.perfil]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const anos = Number(form.anos);
    const prazo = Number(form.prazo);
    const cdb = Number(form.cdb);
    const lci = Number(form.lci);
    const meta = form.meta.trim() === '' ? undefined : Number(form.meta);
    if (!Number.isInteger(anos) || anos < 1 || anos > 10) { setError('Informe de 1 a 10 anos de análise.'); return; }
    if (!Number.isInteger(prazo) || prazo < 1 || prazo > 120) { setError('O prazo deve ficar entre 1 e 120 meses.'); return; }
    if (!(cdb >= 50 && cdb <= 200)) { setError('O CDB deve render de 50% a 200% do CDI.'); return; }
    if (!(lci >= 50 && lci <= 150)) { setError('A LCI/LCA deve render de 50% a 150% do CDI.'); return; }
    if (meta !== undefined && !(meta >= 0 && meta <= 100)) { setError('A meta de renda fixa deve ficar entre 0% e 100%.'); return; }
    setRequest({ perfil: form.perfil, anos, prazo_meses: prazo, cdi_percent: cdb, lci_percent: lci, meta_renda_fixa: meta });
  }

  async function simulate() {
    if (!data?.sell_plan.sales.length) return;
    setSimulating(true);
    setSimulationError('');
    try {
      setSimulation(await simulatePortfolioSwitch(request, data.sell_plan.sales.map(sale => ({ ticker: sale.ticker, sell_pct: sale.sell_pct }))));
    } catch (simulateError) {
      setSimulationError(apiErrorMessage(simulateError, 'Não foi possível simular a troca.', 'A simulação de troca ainda não está disponível no servidor.'));
    } finally {
      setSimulating(false);
    }
  }

  const bestProduct = data?.fixed_income.products.find(product => product.id === data.fixed_income.best_net_option);
  const bestRate = bestProduct?.net_annual_pct ?? 0;

  const allocationItems = useMemo(() => Object.entries(data?.portfolio.allocation_pct ?? {})
    .filter(([, value]) => value > 0)
    .map(([id, value]) => ({
      id,
      label: allocationMeta[id]?.label ?? id,
      value,
      valueLabel: formatPercent(value),
      color: allocationMeta[id]?.color ?? 'var(--primary)',
    })), [data]);

  const yieldBars = useMemo(() => {
    if (!data) return [];
    const items = data.positions
      .filter(position => position.dividend_yield_12m_pct !== null)
      .map(position => ({
        id: position.ticker,
        label: position.ticker,
        value: position.dividend_yield_12m_pct ?? 0,
        color: recommendationMeta[position.recommendation].color,
        valueLabel: formatPercent(position.dividend_yield_12m_pct ?? 0),
        caption: recommendationMeta[position.recommendation].label,
      }));
    if (bestProduct) {
      items.push({ id: '__rf', label: `Melhor renda fixa: ${bestProduct.name}`, value: bestProduct.net_annual_pct, color: '#2563eb', valueLabel: formatPercent(bestProduct.net_annual_pct), caption: 'Rendimento líquido de imposto' });
    }
    return items.sort((a, b) => b.value - a.value);
  }, [data, bestProduct]);

  const productBars = useMemo(() => (data?.fixed_income.products ?? []).map(product => ({
    id: product.id,
    label: product.name,
    value: product.net_annual_pct,
    color: product.id === data?.fixed_income.best_net_option ? 'var(--success)' : '#2563eb',
    valueLabel: `${formatPercent(product.net_annual_pct)} ao ano`,
    caption: `Bruto ${formatPercent(product.gross_annual_pct)} · IR ${formatPercent(product.income_tax_pct)} · ${product.note}`,
  })), [data]);

  const plan = data?.sell_plan;
  const totals = plan?.totals;

  return (
    <Wrap>
      <Section>
        <div>
          <PanelTitle><Wallet size={19} />Análise de FIIs, ações e comparação com renda fixa</PanelTitle>
          <Description>
            A alocação considera sua carteira cadastrada; FIIs/Fiagros e ações são analisados em blocos separados.
            A comparação com renda fixa e os cenários de venda abaixo são específicos para FIIs/Fiagros.
            Ajuste perfil, prazo e taxas para comparar. Um mercado em queda não é, sozinho, sinal para vender: considere também
            proventos, fundamentos, impostos, necessidade de liquidez e seus objetivos. Os sinais são quantitativos, não recomendações.
          </Description>
        </div>
        <FormGrid onSubmit={submit} $columns={3}>
          <Field htmlFor="pf-perfil">Perfil de risco
            <select id="pf-perfil" value={form.perfil} onChange={event => setForm(current => ({ ...current, perfil: event.target.value as MarketRiskProfile }))}>
              {profiles.map(item => <option key={item.id} value={item.id}>{item.label}</option>)}
            </select>
          </Field>
          <Field htmlFor="pf-meta">Meta de renda fixa (%)
            <input id="pf-meta" type="number" min="0" max="100" step="1" placeholder="Padrão do perfil" value={form.meta} onChange={event => setForm(current => ({ ...current, meta: event.target.value }))} />
          </Field>
          <Field htmlFor="pf-prazo">Prazo da renda fixa (meses)
            <input id="pf-prazo" type="number" min="1" max="120" step="1" value={form.prazo} onChange={event => setForm(current => ({ ...current, prazo: event.target.value }))} />
          </Field>
          <Field htmlFor="pf-cdb">CDB (% do CDI)
            <input id="pf-cdb" type="number" min="50" max="200" step="1" value={form.cdb} onChange={event => setForm(current => ({ ...current, cdb: event.target.value }))} />
          </Field>
          <Field htmlFor="pf-lci">LCI/LCA (% do CDI)
            <input id="pf-lci" type="number" min="50" max="150" step="1" value={form.lci} onChange={event => setForm(current => ({ ...current, lci: event.target.value }))} />
          </Field>
          <Field htmlFor="pf-anos">Anos de análise dos FIIs
            <input id="pf-anos" type="number" min="1" max="10" step="1" value={form.anos} onChange={event => setForm(current => ({ ...current, anos: event.target.value }))} />
          </Field>
          <Button type="submit" $variant="primary" disabled={loading}>{loading ? 'Analisando...' : 'Analisar'}</Button>
        </FormGrid>
        {error && <Note role="alert" style={{ color: 'var(--error)', fontSize: 12 }}>{error}</Note>}
      </Section>

      <Section style={{ opacity: equityAnalysisLoading ? 0.6 : 1 }}>
        <div>
          <PanelTitle>
            Sinais quantitativos por fundo e ações
            {!equityHoldingsLoading && ` · ${equityHoldings.length} ações/BDRs/ETFs`}
          </PanelTitle>
          <Description>
            FIIs e ações cadastradas aparecem juntos nesta análise. Os fatores de mercado são indicadores para acompanhamento,
            não ordens de compra ou venda; saúde financeira fundamentalista das ações não é avaliada por esta fonte.
          </Description>
        </div>
        {equityError && <Note role="status">{equityError}</Note>}
        {data?.positions.length ? (
          <>
            <strong>FIIs e Fiagros</strong>
            <Grid>{data.positions.map(position => <PositionCard key={position.ticker} position={position} bestRate={bestRate} />)}</Grid>
          </>
        ) : loading ? (
          <Note role="status">Carregando sinais quantitativos dos FIIs...</Note>
        ) : error ? (
          <Note>Não foi possível carregar os sinais de FIIs; suas ações cadastradas continuam disponíveis abaixo.</Note>
        ) : null}
        <strong>Minhas ações, BDRs e ETFs</strong>
        {equityHoldingsLoading ? (
          <EmptyState><LoaderCircle /><p>Carregando suas ações cadastradas...</p></EmptyState>
        ) : equityHoldings.length ? (
          <Grid>
            {equityHoldings.map(holding => (
              <EquityPositionCard
                key={String(holding.id)}
                holding={holding}
                analysis={equityAnalysis.find(item => item.ticker?.toUpperCase() === holding.ticker.toUpperCase())}
              />
            ))}
          </Grid>
        ) : (
          <Note>Nenhuma ação, BDR ou ETF ativo encontrado em Dividendos.</Note>
        )}
        {equityAnalysisLoading && !equityHoldingsLoading && equityHoldings.length > 0 && (
          <Note role="status">Buscando os indicadores de mercado dos seus ativos...</Note>
        )}
      </Section>

      {data && plan && totals && (
        <>
          <Section style={{ opacity: loading ? 0.6 : 1 }}>
            <Stats>
              <Stat>
                <small>Valor da carteira</small>
                <strong>{formatBRL(data.portfolio.total_value)}</strong>
                <span>{data.portfolio.fiis_count} FIIs/Fiagros analisados · {equityHoldings.length} ações/BDRs/ETFs cadastrados</span>
              </Stat>
              <Stat $tone={(data.portfolio.fixed_income_gap_pct ?? 0) > 0 ? 'bad' : 'good'}>
                <small>Renda fixa na carteira</small>
                <strong>{formatPercent(data.portfolio.allocation_pct.renda_fixa ?? 0)}</strong>
                <span>Meta: {formatPercent(data.portfolio.fixed_income_target_pct)}{data.portfolio.fixed_income_gap_pct !== null && data.portfolio.fixed_income_gap_pct > 0 ? ` · faltam ${decimal.format(data.portfolio.fixed_income_gap_pct)} p.p.` : ' · meta atingida'}</span>
              </Stat>
              <Stat>
                <small>Melhor renda fixa hoje</small>
                <strong>{bestProduct ? formatPercent(bestProduct.net_annual_pct) : '—'}</strong>
                <span>{bestProduct?.name} · líquido ao ano</span>
              </Stat>
              <Stat>
                <small>CDI / Selic / IPCA 12m</small>
                <strong>{decimal.format(data.fixed_income.cdi)}%</strong>
                <span>Selic {decimal.format(data.fixed_income.selic)}% · IPCA {decimal.format(data.fixed_income.ipca_12m)}%</span>
              </Stat>
            </Stats>
            <StackedBar items={allocationItems} ariaLabel="Alocação atual da carteira" />
          </Section>

          <Section style={{ opacity: loading ? 0.6 : 1 }}>
            <div>
              <PanelTitle>Seus FIIs contra a renda fixa</PanelTitle>
              <Description>Dividend yield dos últimos 12 meses de cada fundo comparado ao rendimento líquido da melhor renda fixa. As cores indicam sinais para avaliação, não ordens de venda.</Description>
            </div>
            <ValueBars items={yieldBars} />
          </Section>

          <Section style={{ opacity: loading ? 0.6 : 1 }}>
            <div>
              <PanelTitle>Cenário de venda simulado</PanelTitle>
              <Description>
                {plan.message} Este plano é apenas uma simulação e não altera sua carteira.
                {plan.mode === 'meta_renda_fixa' ? ' Fundos marcados como "mantido" só entram porque a meta exige.' : ''}
              </Description>
            </div>
            {plan.sales.length > 0 && (
              <>
                <Stats>
                  <Stat>
                    <small>Você recebe (líquido)</small>
                    <strong>{formatBRL(totals.net_proceeds)}</strong>
                    <span>Bruto {formatBRL(totals.gross_proceeds)} − imposto {formatBRL(totals.estimated_tax)}</span>
                  </Stat>
                  <Stat>
                    <small>Renda anual que deixa de receber</small>
                    <strong>{formatBRL(totals.fii_income_lost_per_year)}</strong>
                    <span>Proventos dos FIIs vendidos</span>
                  </Stat>
                  <Stat $tone="good">
                    <small>Renda anual na renda fixa</small>
                    <strong>{formatBRL(totals.fixed_income_income_per_year)}</strong>
                    <span>Líquida de imposto</span>
                  </Stat>
                  <Stat $tone={totals.income_change_per_year >= 0 ? 'good' : 'bad'}>
                    <small>Variação da renda por ano</small>
                    <strong>{totals.income_change_per_year > 0 ? '+' : ''}{formatBRL(totals.income_change_per_year)}</strong>
                    <span>
                      {totals.tax_payback_months !== null ? `O imposto se paga em ${decimal.format(totals.tax_payback_months)} meses. ` : ''}
                      {totals.fixed_income_share_after_pct !== null ? `Renda fixa passa a ${formatPercent(totals.fixed_income_share_after_pct)} da carteira.` : ''}
                    </span>
                  </Stat>
                </Stats>
                <TableWrap>
                  <table>
                    <thead>
                      <tr><th>Fundo</th><th>Vender</th><th>Bruto</th><th>Imposto</th><th>Líquido</th><th>Renda perdida/ano</th></tr>
                    </thead>
                    <tbody>
                      {plan.sales.map(sale => (
                        <tr key={sale.ticker}>
                          <td>{sale.ticker}{sale.forced ? ' (mantido, entra pela meta)' : ''}</td>
                          <td>{formatPercent(sale.sell_pct)}</td>
                          <td>{formatBRL(sale.gross)}</td>
                          <td>{formatBRL(sale.tax)}</td>
                          <td>{formatBRL(sale.net)}</td>
                          <td>{formatBRL(sale.income_lost)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </TableWrap>
                <Actions>
                  <Button type="button" $variant="primary" onClick={() => void simulate()} disabled={simulating}>
                    {simulating ? 'Simulando...' : 'Simular a troca (1, 2 e 5 anos)'}
                  </Button>
                  {simulationError && <Note role="alert" style={{ color: 'var(--error)', fontSize: 12 }}>{simulationError}</Note>}
                </Actions>
              </>
            )}
          </Section>

          {simulation && (
            <Section>
              <div>
                <PanelTitle>Manter os fundos ou trocar?</PanelTitle>
                <Description>
                  Os fundos vendidos rendem em média {formatPercent(simulation.break_even.weighted_fii_dividend_yield_pct)} em proventos.
                  Para valer a pena mantê-los, eles precisariam valorizar ao menos {formatPercent(simulation.break_even.fii_price_appreciation_needed_per_year_pct)} ao ano além dos proventos.
                </Description>
              </div>
              <TableWrap>
                <table>
                  <thead>
                    <tr><th>Prazo</th><th>Manter fundos</th>{Object.keys(simulation.projections[0]?.switch_values ?? {}).map(key => <th key={key}>{productNames[key] ?? key}</th>)}<th>Melhor troca vs manter</th></tr>
                  </thead>
                  <tbody>
                    {simulation.projections.map(projection => (
                      <tr key={projection.months}>
                        <td>{horizonLabel(projection.months)}</td>
                        <td>{formatBRL(projection.keep_funds_value)}</td>
                        {Object.entries(projection.switch_values).map(([key, value]) => (
                          <td key={key} style={{ fontWeight: key === projection.best_switch_option ? 800 : 400 }}>{formatBRL(value)}</td>
                        ))}
                        <td style={{ color: projection.difference_best_switch_vs_keep >= 0 ? 'var(--success)' : 'var(--error)' }}>
                          {projection.difference_best_switch_vs_keep > 0 ? '+' : ''}{formatBRL(projection.difference_best_switch_vs_keep)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </TableWrap>
              <DivergingBars
                items={simulation.projections.map(projection => ({
                  id: String(projection.months),
                  label: `${horizonLabel(projection.months)} (${productNames[projection.best_switch_option] ?? projection.best_switch_option})`,
                  value: projection.difference_best_switch_vs_keep,
                }))}
                formatValue={value => `${value > 0 ? '+' : ''}${formatBRL(value)}`}
              />
              <Note>Verde: trocar para a renda fixa termina com mais dinheiro que manter os fundos. Vermelho: manter termina com mais.</Note>
              {simulation.assumptions.map(assumption => <Note key={assumption}>• {assumption}</Note>)}
            </Section>
          )}

          <Section style={{ opacity: loading ? 0.6 : 1 }}>
            <div>
              <PanelTitle>Opções de renda fixa</PanelTitle>
              <Description>Rendimento líquido anual para um prazo de {data.fixed_income.holding_period_months} meses.</Description>
            </div>
            <ValueBars items={productBars} max={Math.max(...productBars.map(item => item.value), 1) * 1.15} />
            {data.notes.map(note => <Note key={note}>{note}</Note>)}
          </Section>
        </>
      )}
    </Wrap>
  );
}
