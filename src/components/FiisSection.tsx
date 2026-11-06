import { useEffect, useMemo, useState, type FormEvent } from 'react';
import styled from 'styled-components';
import MarketAnalysisTag from './MarketAnalysisTag';
import { Building2, LoaderCircle } from 'lucide-react';
import { Button, EmptyState, Field, PanelTitle } from './ui';
import { Description, FormGrid, Head, Note, Section, Stat, Stats, TableWrap, Wrap } from './marketUi';
import { ColumnChart, DivergingBars, ValueBars } from './charts';
import { compareFiis } from '../api';
import { formatBRL, formatCompactBRL, formatPercent, maskMoney, moneyFromNumber, parseMoney } from '../utils/format';
import { ratingMeta } from '../utils/rating';
import { apiErrorMessage } from '../utils/errors';
import type { FiiComparison, FiiCompareParams, FiiFund } from '../types';

const tickerPattern = /^[A-Z]{4}1[0-9]$/;
const decimal = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

type Metric = 'total' | 'yield';

const Leaders = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
  li { padding: 8px 12px; border: 1px solid color-mix(in srgb, var(--success) 35%, var(--border)); border-radius: var(--radius-md); background: color-mix(in srgb, var(--success) 7%, var(--surface-raised)); color: var(--text); font-size: 12px; }
  small { display: block; color: var(--muted); font-size: 10px; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; }
  strong { font-size: 14px; }
`;

const ReasonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 12px;
`;

const ReasonCard = styled.article<{ $color: string }>`
  display: grid;
  gap: 8px;
  align-content: start;
  padding: 14px 16px;
  border: 1px solid color-mix(in srgb, ${({ $color }) => $color} 35%, var(--border));
  border-left: 5px solid ${({ $color }) => $color};
  border-radius: var(--radius-md);
  background: color-mix(in srgb, ${({ $color }) => $color} 6%, var(--surface-raised));
  header { display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; }
  h3 { margin: 0; color: var(--text); font-size: 14px; }
  small { color: var(--muted); font-size: 11px; }
  ul { margin: 0; padding-left: 16px; color: var(--muted); font-size: 12px; line-height: 1.5; }
`;

function dash(value: number | null | undefined, format: (value: number) => string): string {
  return value === null || value === undefined ? '—' : format(value);
}

function parseTickers(text: string): string[] {
  return [...new Set(text.split(/[\s,;]+/).map(item => item.trim().toUpperCase()).filter(Boolean))];
}

function ageOf(fund: FiiFund): number {
  return fund.fund_age_years ?? fund.listed_age_years;
}

function errorMessage(error: unknown): string {
  return apiErrorMessage(error, 'Não foi possível comparar os fundos.', 'A comparação de FIIs ainda não está disponível no servidor.');
}

export default function FiisSection() {
  const [form, setForm] = useState({ tickers: '', anos: '5', valor: moneyFromNumber(100000) });
  const [request, setRequest] = useState<FiiCompareParams>({ tickers: [], anos: 5, valor: 100000 });
  const [data, setData] = useState<FiiComparison>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [fundTicker, setFundTicker] = useState('');
  const [metric, setMetric] = useState<Metric>('total');

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError('');
    compareFiis(request)
      .then(result => {
        if (!active) return;
        setData(result);
        setFundTicker(current => (result.funds.some(fund => fund.ticker === current) ? current : result.funds[0]?.ticker ?? ''));
      })
      .catch(loadError => { if (active) setError(errorMessage(loadError)); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [request]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const tickers = parseTickers(form.tickers);
    const anos = Number(form.anos);
    const valor = parseMoney(form.valor);
    const invalid = tickers.filter(ticker => !tickerPattern.test(ticker));
    if (invalid.length) { setError(`Ticker inválido: ${invalid.join(', ')}. Use o formato HGLG11.`); return; }
    if (tickers.length > 12) { setError('Compare no máximo 12 fundos por vez.'); return; }
    if (!Number.isInteger(anos) || anos < 1 || anos > 10) { setError('Informe de 1 a 10 anos.'); return; }
    if (!(valor > 0)) { setError('Informe um valor maior que zero.'); return; }
    setRequest({ tickers, anos, valor });
  }

  const funds = useMemo(() => data?.funds ?? [], [data]);
  const fund = funds.find(item => item.ticker === fundTicker) ?? funds[0];

  const rankingBars = useMemo(() => funds.map(item => ({
    id: item.ticker,
    label: item.ticker,
    value: item.score,
    color: ratingMeta[item.rating].color,
    valueLabel: `${item.score}/100 · ${item.rating_label}`,
    caption: `${item.segment ?? 'Segmento não informado'} · ${decimal.format(ageOf(item))} anos de história`,
  })), [funds]);

  const simulationBars = useMemo(() => {
    const withSimulation = funds.filter(item => item.simulation);
    const reference = withSimulation[0]?.simulation;
    if (!reference) return [];
    const initial = reference.initial_amount;
    const cdiFinal = reference.cdi_final_value;
    const items = withSimulation.map(item => ({
      id: item.ticker,
      label: item.ticker,
      value: item.simulation!.fii_final_value,
      color: cdiFinal === null || item.simulation!.fii_final_value >= cdiFinal ? 'var(--success)' : 'var(--warning)',
      valueLabel: formatBRL(item.simulation!.fii_final_value),
      caption: `${decimal.format(item.simulation!.fii_final_value / initial)}x o valor investido`,
    }));
    if (reference.cdi_final_value !== null) {
      items.push({ id: '__cdi', label: 'CDI (referência)', value: reference.cdi_final_value, color: '#64748b', valueLabel: formatBRL(reference.cdi_final_value), caption: 'Renda fixa de referência no mesmo período' });
    }
    if (reference.inflation_corrected_amount !== null) {
      items.push({ id: '__ipca', label: 'Só a inflação (IPCA)', value: reference.inflation_corrected_amount, color: '#dc2626', valueLabel: formatBRL(reference.inflation_corrected_amount), caption: 'Quanto o valor precisaria para manter o poder de compra' });
    }
    return items.sort((a, b) => b.value - a.value);
  }, [funds]);

  const yieldBars = useMemo(() => [...funds]
    .filter(item => item.distributions.dividend_yield_12m_pct !== null)
    .sort((a, b) => (b.distributions.dividend_yield_12m_pct ?? 0) - (a.distributions.dividend_yield_12m_pct ?? 0))
    .map(item => ({
      id: item.ticker,
      label: item.ticker,
      value: item.distributions.dividend_yield_12m_pct ?? 0,
      color: 'var(--primary)',
      valueLabel: formatPercent(item.distributions.dividend_yield_12m_pct ?? 0),
      caption: `Média de 5 anos: ${dash(item.distributions.average_dividend_yield_5y_pct, value => formatPercent(value))} · pagou em ${dash(item.distributions.months_paid_pct, value => `${Math.round(value)}%`)} dos meses · R$ ${decimal.format(item.distributions.last_12m_per_share)} por cota`,
    })), [funds]);

  const pvpBars = useMemo(() => [...funds]
    .sort((a, b) => a.market.p_vp - b.market.p_vp)
    .map(item => ({
      id: item.ticker,
      label: item.ticker,
      value: item.market.p_vp,
      color: item.market.p_vp <= 1 ? 'var(--success)' : item.market.p_vp <= 1.1 ? 'var(--primary)' : 'var(--warning)',
      valueLabel: decimal.format(item.market.p_vp),
      caption: `Mediana de 5 anos: ${dash(item.market.p_vp_median_5y, value => decimal.format(value))}${item.market.p_vp_vs_median_pct === null ? '' : ` · ${item.market.p_vp_vs_median_pct <= 0 ? 'desconto' : 'prêmio'} de ${formatPercent(Math.abs(item.market.p_vp_vs_median_pct))} sobre a mediana`}`,
    })), [funds]);

  const drawdownBars = useMemo(() => [...funds]
    .filter(item => item.common_window?.max_drawdown_pct !== null && item.common_window !== null)
    .sort((a, b) => (a.common_window!.max_drawdown_pct ?? 0) - (b.common_window!.max_drawdown_pct ?? 0))
    .map(item => ({ id: item.ticker, label: item.ticker, value: item.common_window!.max_drawdown_pct ?? 0 })), [funds]);

  if (loading && !data) return <EmptyState><LoaderCircle /><p>Analisando os fundos (a primeira consulta pode levar cerca de 10 segundos)...</p></EmptyState>;

  const comparison = data?.comparison;
  const leaders = data?.leaders;
  const leaderItems = leaders ? [
    { label: 'Melhor retorno', ticker: leaders.best_total_return },
    { label: 'Maior dividend yield', ticker: leaders.highest_dividend_yield },
    { label: 'Menor queda', ticker: leaders.lowest_drawdown },
    { label: 'Menor P/VP', ticker: leaders.cheapest_p_vp },
  ].filter(item => item.ticker) : [];

  return (
    <Wrap>
      <Section>
        <div>
          <PanelTitle><Building2 size={19} />Comparar fundos imobiliários</PanelTitle>
          <Description>Compare FIIs com o mesmo período, com proventos reinvestidos. Deixe os tickers em branco para comparar 8 fundos populares.</Description>
        </div>
        <FormGrid onSubmit={submit} $columns={3}>
          <Field htmlFor="fii-tickers">Tickers (até 12)
            <input id="fii-tickers" type="text" autoComplete="off" placeholder="HGLG11, KNRI11, MXRF11" value={form.tickers} onChange={event => setForm(current => ({ ...current, tickers: event.target.value }))} />
          </Field>
          <Field htmlFor="fii-anos">Anos de comparação
            <input id="fii-anos" type="number" min="1" max="10" step="1" value={form.anos} onChange={event => setForm(current => ({ ...current, anos: event.target.value }))} />
          </Field>
          <Field htmlFor="fii-valor">Valor simulado
            <input id="fii-valor" type="text" inputMode="numeric" autoComplete="off" placeholder="R$ 0,00" value={form.valor} onChange={event => setForm(current => ({ ...current, valor: maskMoney(event.target.value) }))} />
          </Field>
          <Button type="submit" $variant="primary" disabled={loading}>{loading ? 'Comparando...' : 'Comparar'}</Button>
        </FormGrid>
        {error && <Note role="alert" style={{ color: 'var(--error)', fontSize: 12 }}>{error}</Note>}
      </Section>

      {data && comparison && fund && (
        <>
          <Section style={{ opacity: loading ? 0.6 : 1 }}>
            <Stats>
              <Stat>
                <small>Período comparado</small>
                <strong>{decimal.format(comparison.window_years)} anos</strong>
                <span>{comparison.limited_by_youngest_fund ? `Limitado pelo fundo mais novo (${comparison.youngest}); pedido: ${comparison.requested_years} anos` : 'Mesma janela para todos os fundos'}</span>
              </Stat>
              <Stat>
                <small>Idade média</small>
                <strong>{decimal.format(comparison.average_age_years)} anos</strong>
                <span>Desde o início de cada fundo</span>
              </Stat>
              <Stat>
                <small>Mais antigo</small>
                <strong>{comparison.oldest ?? '—'}</strong>
                <span>Maior tempo de história</span>
              </Stat>
              <Stat>
                <small>Mais novo</small>
                <strong>{comparison.youngest ?? '—'}</strong>
                <span>Menor tempo de história</span>
              </Stat>
            </Stats>
            {leaderItems.length > 0 && (
              <Leaders>
                {leaderItems.map(item => <li key={item.label}><small>{item.label}</small><strong>{item.ticker}</strong></li>)}
              </Leaders>
            )}
          </Section>

          <Section style={{ opacity: loading ? 0.6 : 1 }}>
            <div>
              <PanelTitle>Ranking por nota</PanelTitle>
              <Description>Nota de 0 a 100 que combina retorno acima do CDI, queda máxima, regularidade dos proventos, P/VP e tempo de história.</Description>
            </div>
            <ValueBars items={rankingBars} max={100} />
          </Section>

          {simulationBars.length > 0 && (
            <Section style={{ opacity: loading ? 0.6 : 1 }}>
              <div>
                <PanelTitle>Quanto você teria hoje</PanelTitle>
                <Description>{formatBRL(request.valor)} investidos há {decimal.format(comparison.window_years)} anos, com proventos reinvestidos e sem impostos. Verde: ganhou do CDI. Amarelo: perdeu para o CDI. A barra vermelha é só a inflação.</Description>
              </div>
              <ValueBars items={simulationBars} />
            </Section>
          )}

          <Section style={{ opacity: loading ? 0.6 : 1 }}>
            <div>
              <PanelTitle>Dividend yield (12 meses)</PanelTitle>
              <Description>Proventos pagos nos últimos 12 meses sobre o preço atual da cota.</Description>
            </div>
            <ValueBars items={yieldBars} />
          </Section>

          <Section style={{ opacity: loading ? 0.6 : 1 }}>
            <div>
              <PanelTitle>P/VP: preço frente ao patrimônio</PanelTitle>
              <Description>Abaixo de 1 a cota custa menos que o patrimônio por cota (verde); bem acima de 1 indica prêmio (amarelo).</Description>
            </div>
            <ValueBars items={pvpBars} />
          </Section>

          {drawdownBars.length > 0 && (
            <Section style={{ opacity: loading ? 0.6 : 1 }}>
              <div>
                <PanelTitle>Maior queda no período</PanelTitle>
                <Description>Pior perda do topo ao fundo, contando preço e proventos. Barra menor significa caminho mais tranquilo.</Description>
              </div>
              <DivergingBars items={drawdownBars} formatValue={value => formatPercent(value)} />
            </Section>
          )}

          <Section style={{ opacity: loading ? 0.6 : 1 }}>
            <Head>
              <div>
                <PanelTitle>Histórico ano a ano</PanelTitle>
                <Description>Verde: ano positivo. Vermelho: ano negativo. * ano parcial.</Description>
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <select aria-label="Fundo" value={fund.ticker} onChange={event => setFundTicker(event.target.value)}>
                  {funds.map(item => <option key={item.ticker} value={item.ticker}>{item.ticker}</option>)}
                </select>
                <select aria-label="Métrica" value={metric} onChange={event => setMetric(event.target.value as Metric)}>
                  <option value="total">Retorno total</option>
                  <option value="yield">Dividend yield</option>
                </select>
              </div>
            </Head>
            <ColumnChart
              items={fund.yearly_history.map(year => ({
                id: String(year.year),
                label: `${String(year.year).slice(2)}${year.partial ? '*' : ''}`,
                value: (metric === 'total' ? year.total_return_pct : year.dividend_yield_on_start_price_pct) ?? 0,
              }))}
              formatValue={value => formatPercent(value, metric === 'total')}
              ariaLabel={`${metric === 'total' ? 'Retorno total' : 'Dividend yield'} anual de ${fund.ticker}`}
            />
          </Section>

          <Section style={{ opacity: loading ? 0.6 : 1 }}>
            <div>
              <PanelTitle>Comparativo detalhado</PanelTitle>
              <Description>Rentabilidade, risco, idade, patrimônio e proventos calculados no período. A vacância não está disponível na base padronizada consultada e não entra na nota.</Description>
            </div>
            <TableWrap>
              <table>
                <thead>
                  <tr>
                    <th>Fundo</th><th>Nota</th><th>Segmento</th><th>Idade</th><th>Yield 12m</th><th>P/VP</th>
                    <th>Ao ano</th><th>Vs. CDI</th><th>Oscilação</th><th>Queda máx.</th><th>Meses pagos</th><th>Variação proventos</th><th>Patrimônio</th><th>Cotistas</th>
                  </tr>
                </thead>
                <tbody>
                  {funds.map(item => {
                    const window = item.common_window;
                    return (
                      <tr key={item.ticker}>
                        <td title={item.name}>{item.ticker}</td>
                        <td>
                          <MarketAnalysisTag
                            label={`${item.score} · ${item.rating_label}`}
                            color={ratingMeta[item.rating].color}
                            details={[
                              ...item.reasons,
                              `Valor patrimonial por cota: ${formatBRL(item.market.vp_per_share)}.`,
                              `P/VP atual: ${decimal.format(item.market.p_vp)}.`,
                              `Patrimônio líquido atual: ${item.equity.net_assets === null ? 'indisponível' : formatCompactBRL(item.equity.net_assets)}.`,
                              'Vacância: não disponível nos dados padronizados consultados; não foi estimada nem pontuada.',
                            ]}
                          />
                        </td>
                        <td>{item.segment ?? '—'}</td>
                        <td>{decimal.format(ageOf(item))} anos</td>
                        <td>{dash(item.distributions.dividend_yield_12m_pct, value => formatPercent(value))}</td>
                        <td>{decimal.format(item.market.p_vp)}</td>
                        <td>{dash(window?.total_cagr_pct, value => formatPercent(value))}</td>
                        <td style={{ color: (window?.excess_over_cdi_pp ?? 0) >= 0 ? 'var(--success)' : 'var(--error)' }}>
                          {dash(window?.excess_over_cdi_pp, value => `${value > 0 ? '+' : ''}${decimal.format(value)} p.p.`)}
                        </td>
                        <td>{dash(window?.annual_volatility_pct, value => formatPercent(value))}</td>
                        <td>{dash(window?.max_drawdown_pct, value => formatPercent(value))}</td>
                        <td>{dash(item.distributions.months_paid_pct, value => `${Math.round(value)}%`)}</td>
                        <td>{dash(item.distributions.variation_coefficient_24m, value => formatPercent(value * 100))}</td>
                        <td>{dash(item.equity.net_assets, value => formatCompactBRL(value))}</td>
                        <td>{dash(item.equity.holders, value => value.toLocaleString('pt-BR'))}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </TableWrap>
          </Section>

          <Section style={{ opacity: loading ? 0.6 : 1 }}>
            <div>
              <PanelTitle>Por que cada nota</PanelTitle>
              <Description>
                Nota baseada em retorno total contra CDI (até 25 pontos), queda máxima (10), volatilidade (5),
                regularidade dos pagamentos (até ±8), variação dos proventos em 24 meses (±4),
                crescimento dos proventos em 3 anos (até +6), P/VP (até 0,90: +6; até 1,05: +3; acima de 1,15: -6),
                idade (menos de 3 anos: -6; 5 anos ou mais: +3; 10 anos ou mais: +6) e patrimônio líquido (de -8 a +5:
                abaixo de R$ 100 mi = -8; R$ 100–300 mi = -3; R$ 300 mi a menos de R$ 1 bi = +2; R$ 1 bi ou mais = +5).
                Vacância não está disponível na base padronizada consultada e não é pontuada.
              </Description>
            </div>
            <ReasonGrid>
              {funds.map(item => (
                <ReasonCard key={item.ticker} $color={ratingMeta[item.rating].color}>
                  <header>
                    <div>
                      <h3>{item.ticker}</h3>
                      <small>{item.name}</small>
                    </div>
                    <MarketAnalysisTag
                      label={`${item.score} · ${item.rating_label}`}
                      color={ratingMeta[item.rating].color}
                      details={[
                        ...item.reasons,
                        `Valor patrimonial por cota: ${formatBRL(item.market.vp_per_share)}.`,
                        `P/VP atual: ${decimal.format(item.market.p_vp)}.`,
                        `Patrimônio líquido atual: ${item.equity.net_assets === null ? 'indisponível' : formatCompactBRL(item.equity.net_assets)}.`,
                        'Vacância: não disponível nos dados padronizados consultados; não foi estimada nem pontuada.',
                      ]}
                    />
                  </header>
                  <ul>{item.reasons.map(reason => <li key={reason}>{reason}</li>)}</ul>
                </ReasonCard>
              ))}
            </ReasonGrid>
            {data.not_found.length > 0 && (
              <Note>Não analisados: {data.not_found.map(item => `${item.ticker} (${item.reason})`).join('; ')}.</Note>
            )}
            <Note>{data.disclaimer}</Note>
          </Section>
        </>
      )}
    </Wrap>
  );
}
