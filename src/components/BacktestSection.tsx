import { useEffect, useMemo, useState, type FormEvent } from 'react';
import axios from 'axios';
import { LineChart as LineChartIcon, LoaderCircle } from 'lucide-react';
import styled from 'styled-components';
import { Button, EmptyState, Field, PanelTitle } from './ui';
import { Check, Description, FormGrid, Head, Note, RatingBadge, Section, Stat, Stats, TableWrap, Wrap } from './marketUi';
import { ColumnChart, DivergingBars, LineChart, ValueBars } from './charts';
import { getMarketBacktest } from '../api';
import { assetColor, formatBRL, formatCompactBRL, formatPercent, maskMoney, moneyFromNumber, parseMoney } from '../utils/format';
import { ratingMeta } from '../utils/rating';
import type { BacktestAsset, BacktestParams, BacktestResult, MarketRiskProfile } from '../types';

const earliestYear = 2004;
const monthNames = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

const profiles: Array<{ id: MarketRiskProfile; label: string }> = [
  { id: 'conservador', label: 'Conservador' },
  { id: 'moderado', label: 'Moderado' },
  { id: 'arrojado', label: 'Arrojado' },
];

type Mode = 'with' | 'without';

const Highlights = styled.ul`
  display: grid;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
  li { padding: 10px 14px; border-left: 4px solid var(--primary); border-radius: var(--radius-md); background: color-mix(in srgb, var(--primary) 6%, var(--surface-raised)); color: var(--text); font-size: 13px; line-height: 1.5; }
`;

const Toggle = styled.div`
  display: inline-flex;
  padding: 3px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--surface-raised);
`;

const ToggleButton = styled.button<{ $active: boolean }>`
  min-height: 32px;
  padding: 4px 14px;
  border: 0;
  border-radius: 999px;
  color: ${({ $active }) => ($active ? 'var(--primary-contrast)' : 'var(--text)')};
  background: ${({ $active }) => ($active ? 'var(--primary)' : 'transparent')};
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
`;

const CrisisGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 14px;
`;

const CrisisCard = styled.article`
  display: grid;
  gap: 12px;
  align-content: start;
  padding: 14px 16px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--surface-raised);
  h3 { margin: 0; color: var(--text); font-size: 14px; }
  small { color: var(--muted); font-size: 11px; line-height: 1.5; }
`;

function formatMonth(key: string): string {
  const [year, month] = key.split('-');
  return `${monthNames[Number(month) - 1] ?? month}/${year}`;
}

function errorMessage(error: unknown): string {
  if (axios.isAxiosError<{ error?: string }>(error)) {
    if (error.response?.status === 404) return 'A simulação histórica ainda não está disponível no servidor.';
    return error.response?.data?.error || 'Não foi possível executar a simulação.';
  }
  return error instanceof Error ? error.message : 'Não foi possível executar a simulação.';
}

export default function BacktestSection() {
  const maxYears = Math.min(30, new Date().getFullYear() - earliestYear);
  const [form, setForm] = useState({ valor: moneyFromNumber(200000), anos: String(Math.min(10, maxYears)), aporte: '', ipca: false, perfil: 'moderado' as MarketRiskProfile });
  const [data, setData] = useState<BacktestResult>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [mode, setMode] = useState<Mode>('without');
  const [yearAssetId, setYearAssetId] = useState('carteira');
  const [request, setRequest] = useState<BacktestParams>({
    valor: 200000, anos: Math.min(10, maxYears), aporte_mensal: 0, reajustar_aporte_ipca: false, perfil: 'moderado',
  });

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError('');
    getMarketBacktest(request)
      .then(result => {
        if (!active) return;
        setData(result);
        setMode(result.parameters.monthly_contribution > 0 ? 'with' : 'without');
        setYearAssetId('carteira');
      })
      .catch(loadError => { if (active) setError(errorMessage(loadError)); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [request]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const valor = parseMoney(form.valor);
    const anos = Number(form.anos);
    const aporte = parseMoney(form.aporte);
    if (!(valor > 0)) { setError('Informe um valor inicial maior que zero.'); return; }
    if (!Number.isInteger(anos) || anos < 1 || anos > maxYears) { setError(`Informe de 1 a ${maxYears} anos.`); return; }
    if (!(aporte >= 0)) { setError('O aporte mensal não pode ser negativo.'); return; }
    setRequest({ valor, anos, aporte_mensal: aporte, reajustar_aporte_ipca: form.ipca, perfil: form.perfil });
  }

  const hasContribution = (data?.parameters.monthly_contribution ?? 0) > 0;
  const activeMode: Mode = hasContribution ? mode : 'without';
  const allItems = useMemo<BacktestAsset[]>(() => (data ? [data.portfolio, ...data.assets] : []), [data]);

  const lineSeries = useMemo(() => allItems.map(item => ({
    id: item.id,
    label: item.name,
    color: assetColor(item.id),
    strong: item.kind === 'carteira',
    values: [
      data!.parameters.initial_amount,
      ...item.yearly.map(year => (activeMode === 'with' ? year.value_with_contributions : year.value_without_contributions)),
    ],
  })), [allItems, activeMode, data]);

  const valueBars = useMemo(() => [...allItems]
    .sort((a, b) => (activeMode === 'with' ? b.with_contributions.final_value - a.with_contributions.final_value : b.without_contributions.final_value - a.without_contributions.final_value))
    .map(item => {
      const without = item.without_contributions;
      const withContribution = item.with_contributions;
      return activeMode === 'with'
        ? {
          id: item.id, label: item.name, color: assetColor(item.id), value: withContribution.final_value, invested: withContribution.total_invested,
          valueLabel: formatBRL(withContribution.final_value),
          caption: `Investido ${formatBRL(withContribution.total_invested)} · ganho ${formatBRL(withContribution.gain)} · ${formatPercent(withContribution.annual_irr_pct)} a.a.`,
        }
        : {
          id: item.id, label: item.name, color: assetColor(item.id), value: without.final_value,
          valueLabel: formatBRL(without.final_value),
          caption: `${without.multiple.toLocaleString('pt-BR')}x · ${formatPercent(without.cagr_pct)} a.a. (${formatPercent(without.real_cagr_pct, true)} acima da inflação)`,
        };
    }), [allItems, activeMode]);

  if (loading && !data) return <EmptyState><LoaderCircle /><p>Simulando décadas de mercado...</p></EmptyState>;

  const yearAsset = allItems.find(item => item.id === yearAssetId) ?? allItems[0];
  const initial = data?.parameters.initial_amount ?? 0;
  const portfolioResult = data?.portfolio;
  const portfolioFinal = portfolioResult
    ? (activeMode === 'with' ? portfolioResult.with_contributions.final_value : portfolioResult.without_contributions.final_value)
    : 0;
  const portfolioGood = portfolioResult ? portfolioResult.preserved_purchasing_power : true;

  return (
    <Wrap>
      <Section>
        <div>
          <PanelTitle><LineChartIcon size={19} />Simulação histórica</PanelTitle>
          <Description>Veja quanto um valor investido no passado teria hoje em cada opção, com e sem aportes mensais.</Description>
        </div>
        <FormGrid onSubmit={submit}>
          <Field htmlFor="bt-valor">Valor inicial
            <input id="bt-valor" type="text" inputMode="numeric" autoComplete="off" placeholder="R$ 0,00" value={form.valor} onChange={event => setForm(current => ({ ...current, valor: maskMoney(event.target.value) }))} />
          </Field>
          <Field htmlFor="bt-anos">Quantos anos atrás
            <input id="bt-anos" type="number" min="1" max={maxYears} step="1" value={form.anos} onChange={event => setForm(current => ({ ...current, anos: event.target.value }))} />
          </Field>
          <Field htmlFor="bt-aporte">Aporte mensal
            <input id="bt-aporte" type="text" inputMode="numeric" autoComplete="off" placeholder="R$ 0,00" value={form.aporte} onChange={event => setForm(current => ({ ...current, aporte: maskMoney(event.target.value) }))} />
          </Field>
          <Field htmlFor="bt-perfil">Perfil da carteira
            <select id="bt-perfil" value={form.perfil} onChange={event => setForm(current => ({ ...current, perfil: event.target.value as MarketRiskProfile }))}>
              {profiles.map(item => <option key={item.id} value={item.id}>{item.label}</option>)}
            </select>
          </Field>
          <Button type="submit" $variant="primary" disabled={loading}>{loading ? 'Simulando...' : 'Simular'}</Button>
          <Check>
            <input type="checkbox" checked={form.ipca} onChange={event => setForm(current => ({ ...current, ipca: event.target.checked }))} />
            Corrigir o aporte pela inflação (IPCA)
          </Check>
        </FormGrid>
        {error && <Note role="alert" style={{ color: 'var(--error)', fontSize: 12 }}>{error}</Note>}
      </Section>

      {data && portfolioResult && (
        <>
          <Section style={{ opacity: loading ? 0.6 : 1 }}>
            <Stats>
              <Stat>
                <small>Período</small>
                <strong>{data.parameters.start_year} → hoje</strong>
                <span>{formatMonth(data.parameters.period.start)} a {formatMonth(data.parameters.period.end)} · {data.parameters.period.years.toLocaleString('pt-BR')} anos</span>
              </Stat>
              <Stat $tone="bad">
                <small>Inflação (IPCA)</small>
                <strong>{formatPercent(data.inflation.ipca_accumulated_pct)}</strong>
                <span>{formatPercent(data.inflation.ipca_average_annual_pct)} ao ano em média</span>
              </Stat>
              <Stat>
                <small>Para manter o poder de compra</small>
                <strong>{formatBRL(data.inflation.initial_amount_corrected_to_today)}</strong>
                <span>{formatBRL(initial)} de {data.parameters.start_year} precisariam valer isso hoje</span>
              </Stat>
              <Stat $tone={portfolioGood ? 'good' : 'bad'}>
                <small>Carteira {data.parameters.profile}</small>
                <strong>{formatBRL(portfolioFinal)}</strong>
                <span>
                  {activeMode === 'with'
                    ? `${formatBRL(portfolioResult.with_contributions.total_invested)} investidos`
                    : `${portfolioResult.without_contributions.multiple.toLocaleString('pt-BR')}x o valor inicial`}
                </span>
              </Stat>
            </Stats>
            <Highlights>{data.highlights.map(text => <li key={text}>{text}</li>)}</Highlights>
          </Section>

          <Section style={{ opacity: loading ? 0.6 : 1 }}>
            <Head>
              <div>
                <PanelTitle>Evolução do patrimônio</PanelTitle>
                <Description>Passe o mouse sobre o gráfico para comparar. Clique na legenda para esconder ou mostrar uma opção.</Description>
              </div>
              {hasContribution && (
                <Toggle role="group" aria-label="Cenário">
                  <ToggleButton type="button" $active={activeMode === 'without'} onClick={() => setMode('without')}>Sem aportes</ToggleButton>
                  <ToggleButton type="button" $active={activeMode === 'with'} onClick={() => setMode('with')}>Com aportes</ToggleButton>
                </Toggle>
              )}
            </Head>
            <LineChart
              labels={['Início', ...portfolioResult.yearly.map(year => (year.partial ? `${year.year}*` : String(year.year)))]}
              series={lineSeries}
              formatValue={formatBRL}
              formatAxis={formatCompactBRL}
              referenceLine={activeMode === 'without' ? { value: data.inflation.initial_amount_corrected_to_today, label: 'Linha da inflação (IPCA)' } : undefined}
              ariaLabel="Evolução do patrimônio ao longo dos anos"
            />
            {activeMode === 'without' && <Note>Quem termina abaixo da linha vermelha perdeu poder de compra. * ano parcial.</Note>}
          </Section>

          <Section style={{ opacity: loading ? 0.6 : 1 }}>
            <div>
              <PanelTitle>Quanto cada opção rendeu</PanelTitle>
              <Description>
                {activeMode === 'with'
                  ? 'A parte escura da barra é o que você aportou; o restante é ganho.'
                  : `Resultado final de ${formatBRL(initial)} investidos em ${data.parameters.start_year}, do melhor para o pior.`}
              </Description>
            </div>
            <ValueBars items={valueBars} />
          </Section>

          <Section style={{ opacity: loading ? 0.6 : 1 }}>
            <Head>
              <div>
                <PanelTitle>Retorno ano a ano</PanelTitle>
                <Description>Verde: ano positivo. Vermelho: ano negativo.</Description>
              </div>
              <select aria-label="Opção" value={yearAsset?.id} onChange={event => setYearAssetId(event.target.value)}>
                {allItems.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
              </select>
            </Head>
            {yearAsset && (
              <ColumnChart
                items={yearAsset.yearly.map(year => ({
                  id: String(year.year),
                  label: `${String(year.year).slice(2)}${year.partial ? '*' : ''}`,
                  value: year.return_pct,
                }))}
                formatValue={value => formatPercent(value, true)}
                ariaLabel={`Retorno anual de ${yearAsset.name}`}
              />
            )}
          </Section>

          <Section style={{ opacity: loading ? 0.6 : 1 }}>
            <div>
              <PanelTitle>Pior queda de cada opção</PanelTitle>
              <Description>Maior perda do topo até o fundo. Quanto menor a barra vermelha, mais tranquilo foi o caminho.</Description>
            </div>
            <DivergingBars
              items={[...allItems].sort((a, b) => a.without_contributions.max_drawdown_pct - b.without_contributions.max_drawdown_pct).map(item => ({
                id: item.id, label: item.name, value: item.without_contributions.max_drawdown_pct,
              }))}
              formatValue={value => formatPercent(value)}
            />
            {portfolioResult.without_contributions.peak && portfolioResult.without_contributions.trough && (
              <Note>
                A carteira caiu entre {formatMonth(portfolioResult.without_contributions.peak)} e {formatMonth(portfolioResult.without_contributions.trough)}
                {portfolioResult.without_contributions.months_to_recover !== null
                  ? ` e levou ${portfolioResult.without_contributions.months_to_recover} meses para recuperar.`
                  : ' e ainda não recuperou o topo anterior.'}
              </Note>
            )}
          </Section>

          {data.crises.length > 0 && (
            <Section style={{ opacity: loading ? 0.6 : 1 }}>
              <div>
                <PanelTitle>Como cada opção se saiu nas crises</PanelTitle>
                <Description>Retorno durante cada período de estresse do mercado.</Description>
              </div>
              <CrisisGrid>
                {data.crises.map(crisis => (
                  <CrisisCard key={crisis.id}>
                    <div>
                      <h3>{crisis.name}</h3>
                      <small>{formatMonth(crisis.period.start)} a {formatMonth(crisis.period.end)} · inflação {formatPercent(crisis.inflation_pct)}</small>
                    </div>
                    <DivergingBars
                      items={crisis.results.map(result => ({ id: result.id, label: result.name, value: result.return_pct }))}
                      formatValue={value => formatPercent(value, true)}
                    />
                  </CrisisCard>
                ))}
              </CrisisGrid>
            </Section>
          )}

          <Section style={{ opacity: loading ? 0.6 : 1 }}>
            <div>
              <PanelTitle>Resumo por opção</PanelTitle>
              <Description>A nota considera quanto a opção rendeu acima da inflação.</Description>
            </div>
            <TableWrap>
              <table>
                <thead>
                  <tr><th>Opção</th><th>Nota</th><th>Ao ano</th><th>Acima da inflação</th><th>Oscilação</th><th>Anos negativos</th></tr>
                </thead>
                <tbody>
                  {allItems.map(item => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td><RatingBadge $color={ratingMeta[item.rating].color}>{item.rating_label}</RatingBadge></td>
                      <td>{formatPercent(item.without_contributions.cagr_pct)}</td>
                      <td style={{ color: item.without_contributions.real_cagr_pct >= 0 ? 'var(--success)' : 'var(--error)' }}>{formatPercent(item.without_contributions.real_cagr_pct, true)}</td>
                      <td>{formatPercent(item.without_contributions.annual_volatility_pct)}</td>
                      <td>{item.without_contributions.negative_years}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableWrap>
            {data.unavailable.length > 0 && (
              <Note>Fora da comparação: {data.unavailable.map(item => `${item.id} (${item.reason})`).join('; ')}.</Note>
            )}
            <Note>{data.disclaimer}</Note>
          </Section>
        </>
      )}
    </Wrap>
  );
}
