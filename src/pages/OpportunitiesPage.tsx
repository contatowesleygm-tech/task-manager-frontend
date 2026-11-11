import { useEffect, useState } from 'react';
import axios from 'axios';
import { Gauge, LoaderCircle, Newspaper, RefreshCw, TrendingUp } from 'lucide-react';
import styled from 'styled-components';
import { Button, EmptyState, Field, PageHero, Panel, PanelTitle } from '../components/ui';
import MarketAnalysisTag from '../components/MarketAnalysisTag';
import BacktestSection from '../components/BacktestSection';
import FiisSection from '../components/FiisSection';
import PortfolioSection from '../components/PortfolioSection';
import { ColumnChart, StackedBar } from '../components/charts';
import { getInvestmentNews, getMarketOpportunities } from '../api';
import { qualityTagMeta, ratingMeta } from '../utils/rating';
import type {
  MarketNewsArticle, MarketNewsCategory, MarketNewsResponse, MarketOpportunities, MarketOpportunityItem,
  MarketRiskProfile, OpportunityRating,
} from '../types';

type Tab = 'oportunidades' | 'noticias' | 'carteira' | 'simulacao' | 'fiis';
type NewsFilter = 'todas' | MarketNewsCategory;

const classColors: Record<string, string> = {
  renda_fixa: '#2563eb',
  acoes_br: '#16a34a',
  fiis: '#d97706',
  internacional: '#8b5cf6',
  cripto: '#f97316',
};

const newsCategories: Array<{ id: NewsFilter; label: string }> = [
  { id: 'todas', label: 'Todas' },
  { id: 'renda_fixa', label: 'Renda fixa' },
  { id: 'acoes_br', label: 'Ações' },
  { id: 'fiis', label: 'FIIs' },
  { id: 'internacional', label: 'ETFs e exterior' },
  { id: 'cripto', label: 'Cripto' },
];

const categoryLabels: Record<MarketNewsCategory, string> = {
  acoes_br: 'Ações Brasil',
  fiis: 'FIIs',
  renda_fixa: 'Renda fixa',
  internacional: 'ETFs e exterior',
  cripto: 'Cripto',
};

const profiles: Array<{ id: MarketRiskProfile; label: string }> = [
  { id: 'conservador', label: 'Conservador' },
  { id: 'moderado', label: 'Moderado' },
  { id: 'arrojado', label: 'Arrojado' },
];

const Page = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 20px;
`;

const Tabs = styled.div`
  display: inline-flex;
  max-width: 100%;
  gap: 4px;
  padding: 4px;
  overflow-x: auto;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--surface);
`;

const TabButton = styled.button<{ $active: boolean }>`
  flex: 0 0 auto;
  min-height: 38px;
  padding: 6px 16px;
  white-space: nowrap;
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
  grid-template-columns: minmax(0, 1fr);
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

const BadgeGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 6px;
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

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 12px;
`;

const NewsCard = styled.article`
  display: grid;
  align-content: start;
  gap: 9px;
  padding: 14px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--surface);
  h3 { margin: 0; color: var(--text); font-size: 14px; line-height: 1.45; }
  p { margin: 0; color: var(--muted); font-size: 12px; line-height: 1.5; }
  small { color: var(--muted); font-size: 11px; }
  a { color: var(--primary-strong); font-size: 12px; font-weight: 700; text-decoration: none; }
  a:hover { text-decoration: underline; }
`;

const SignalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 10px;
`;

const SignalCard = styled.article`
  display: grid;
  gap: 7px;
  padding: 12px 14px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--surface-raised);
  small { color: var(--muted); font-size: 11px; }
  strong { color: var(--text); font-size: 13px; }
  span { color: var(--muted); font-size: 12px; line-height: 1.45; }
`;

const FilterTabs = styled.div`
  display: flex;
  gap: 7px;
  overflow-x: auto;
  padding-bottom: 3px;
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

function signalFor(item: MarketOpportunityItem): { title: string; detail: string } {
  if (item.rating === 'otimo') {
    return { title: 'Cenário favorável para estudar', detail: 'Indicadores históricos estão relativamente favoráveis; avalie preço, risco e seus objetivos antes de decidir.' };
  }
  if (item.rating === 'bom') {
    return { title: 'Acompanhar possível entrada', detail: 'O cenário está acima da faixa neutra, mas não confirma que este seja o melhor momento para comprar.' };
  }
  if (item.rating === 'atencao') {
    return { title: 'Reavaliar riscos e exposição', detail: 'Os indicadores pedem cautela e revisão da tese; não significam que seja necessário vender agora.' };
  }
  if (item.rating === 'evitar') {
    return { title: 'Alerta para revisar a posição', detail: 'A pontuação está fraca frente aos critérios analisados; compare fundamentos, custos e seu horizonte antes de qualquer saída.' };
  }
  return { title: 'Manter em observação', detail: 'Os indicadores estão em faixa neutra, sem sinal forte de entrada ou de saída.' };
}

function NewsCardItem({ article }: { article: MarketNewsArticle }) {
  return (
    <NewsCard>
      <small>{article.categories.map(category => categoryLabels[category]).join(' · ')} · {article.source}</small>
      <h3>{article.title}</h3>
      {article.summary && <p>{article.summary}</p>}
      <small>{article.published_at ? formatDateTime(article.published_at) : 'Data não informada'}</small>
      <a href={article.url} target="_blank" rel="noreferrer">Ler notícia na fonte ↗</a>
    </NewsCard>
  );
}

function OpportunityCard({ item }: { item: MarketOpportunityItem }) {
  const qualityTag = item.ticker ? qualityTagMeta(item.class_id, item.rating, item.analysis_type) : undefined;
  return (
    <Card $rating={item.rating}>
      <header>
        <div>
          <h3>{item.label}</h3>
          {item.in_portfolio && <small>Na sua carteira</small>}
        </div>
        <BadgeGroup>
          <Badge $rating={item.rating}>{ratingMeta[item.rating].label}</Badge>
          {qualityTag && (
            <MarketAnalysisTag
              label={qualityTag.label}
              color={qualityTag.color}
              details={[
                `Nota ${item.score}/100 · classificação: ${ratingMeta[item.rating].label}.`,
                ...(item.analysis_factors?.length
                  ? item.analysis_factors
                  : item.analysis_type === 'short_term_market'
                    ? ['Histórico insuficiente para análise completa; etiqueta baseada apenas nos indicadores de curto prazo disponíveis.']
                    : ['Critérios: retorno ajustado por proventos, comparação com CDI, volatilidade e queda máxima.']),
                ...(item.analysis_type === 'fii_fundamentals'
                  ? ['Vacância: não disponível nos dados padronizados consultados; não foi estimada nem pontuada.']
                  : item.analysis_type === 'equity_market_history'
                    ? ['Não avalia lucro, dívida, ROE ou valuation fundamentalista da empresa.']
                    : []),
              ]}
            />
          )}
        </BadgeGroup>
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
  const [news, setNews] = useState<MarketNewsResponse>();
  const [loading, setLoading] = useState(true);
  const [loadingNews, setLoadingNews] = useState(true);
  const [error, setError] = useState('');
  const [newsError, setNewsError] = useState('');
  const [newsFilter, setNewsFilter] = useState<NewsFilter>('todas');
  const [version, setVersion] = useState(0);
  const [newsVersion, setNewsVersion] = useState(0);

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

  useEffect(() => {
    let active = true;
    setLoadingNews(true);
    setNewsError('');
    getInvestmentNews(newsVersion > 0)
      .then(result => { if (active) setNews(result); })
      .catch(loadError => { if (active) setNewsError(errorMessage(loadError)); })
      .finally(() => { if (active) setLoadingNews(false); });
    return () => { active = false; };
  }, [newsVersion]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setVersion(current => current + 1);
      setNewsVersion(current => current + 1);
    }, 15 * 60 * 1000);
    return () => window.clearInterval(timer);
  }, []);

  const updatedAt = formatDateTime(data?.generated_at);
  const newsUpdatedAt = formatDateTime(news?.generated_at);
  const isEmpty = data && !data.classes.length && !data.assets.length;
  const classLabels = new Map((data?.classes ?? []).map(item => [item.id, item.label]));
  const visibleArticles = (news?.articles ?? []).filter(article =>
    newsFilter === 'todas' || article.categories.includes(newsFilter)
  );
  const signals = [...new Map(
    [...(data?.classes ?? []), ...(data?.assets.slice(0, 5) ?? []), ...(data?.portfolio ?? [])]
      .map(item => [item.ticker ? `ticker:${item.ticker}` : `class:${item.id}`, item] as const)
  ).values()].sort((a, b) => b.score - a.score);

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
          <TabButton type="button" role="tab" aria-selected={tab === 'noticias'} $active={tab === 'noticias'} onClick={() => setTab('noticias')}><Newspaper size={15} /> Notícias e sinais</TabButton>
          <TabButton type="button" role="tab" aria-selected={tab === 'carteira'} $active={tab === 'carteira'} onClick={() => setTab('carteira')}>Minha carteira</TabButton>
          <TabButton type="button" role="tab" aria-selected={tab === 'simulacao'} $active={tab === 'simulacao'} onClick={() => setTab('simulacao')}>Simulação histórica</TabButton>
          <TabButton type="button" role="tab" aria-selected={tab === 'fiis'} $active={tab === 'fiis'} onClick={() => setTab('fiis')}>Comparar FIIs</TabButton>
        </Tabs>
      </PageHero>

      {tab === 'carteira' && <PortfolioSection />}
      {tab === 'simulacao' && <BacktestSection />}
      {tab === 'fiis' && <FiisSection />}

      {tab === 'noticias' && (
        <>
          <Toolbar>
            <Description>
              Varredura automática de notícias financeiras públicas, renovada a cada 15 minutos enquanto a API estiver disponível.
              {newsUpdatedAt && <> Última busca: {newsUpdatedAt}.</>}
            </Description>
            <Button type="button" onClick={() => setNewsVersion(current => current + 1)} disabled={loadingNews}>
              <RefreshCw />{loadingNews ? 'Buscando...' : 'Atualizar notícias'}
            </Button>
          </Toolbar>

          <Section>
            <div>
              <PanelTitle><TrendingUp size={18} /> Indicadores e sinais de acompanhamento</PanelTitle>
              <Description>
                Sinais derivados das notas de mercado e do perfil selecionado. Eles ajudam a priorizar o que pesquisar; não identificam um horário certo para comprar ou vender.
              </Description>
            </div>
            <Field htmlFor="news-profile">Perfil usado na análise
              <select id="news-profile" value={profile} onChange={event => setProfile(event.target.value as MarketRiskProfile)}>
                {profiles.map(item => <option key={item.id} value={item.id}>{item.label}</option>)}
              </select>
            </Field>
            {data?.classes.length ? (
              <>
                <ColumnChart
                  ariaLabel="Notas atuais de cenário por classe de investimento, de zero a cem"
                  items={data.classes.map(item => ({
                    id: item.id,
                    label: item.label,
                    value: item.score,
                    color: classColors[item.id],
                  }))}
                  formatValue={value => `${Math.round(value)}/100`}
                />
                <SignalGrid>
                  {signals.map(item => {
                    const signal = signalFor(item);
                    return (
                      <SignalCard key={`signal-${item.id}`}>
                        <small>{item.ticker ? `${item.label} · ${item.ticker}` : item.label}</small>
                        <strong>{signal.title} · Nota {Math.round(item.score)}/100</strong>
                        <span>{signal.detail}</span>
                      </SignalCard>
                    );
                  })}
                </SignalGrid>
              </>
            ) : loading ? (
              <Description role="status">Calculando indicadores de mercado...</Description>
            ) : (
              <Description>Os indicadores estão indisponíveis. Atualize para tentar novamente.</Description>
            )}
            {data?.warnings.map(warning => <Description role="status" key={warning}>{warning}</Description>)}
            <Disclaimer>
              As notas refletem dados históricos e critérios quantitativos, não uma previsão. Rentabilidade passada não garante retorno futuro. Avalie diversificação, liquidez, custos, impostos e seu perfil; não opere apenas com base em manchetes ou sinais automáticos.
            </Disclaimer>
          </Section>

          <Section>
            <div>
              <PanelTitle><Newspaper size={18} /> Notícias do mercado</PanelTitle>
              <Description>Fontes agregadas pelo Google Notícias. Abra cada matéria para conferir o conteúdo completo e o contexto original.</Description>
            </div>
            <FilterTabs aria-label="Filtrar notícias por tipo de investimento">
              {newsCategories.map(category => (
                <TabButton
                  key={category.id}
                  type="button"
                  $active={newsFilter === category.id}
                  aria-pressed={newsFilter === category.id}
                  onClick={() => setNewsFilter(category.id)}
                >
                  {category.label}
                </TabButton>
              ))}
            </FilterTabs>
            {newsError && <Description role="alert" style={{ color: 'var(--error)' }}>{newsError}</Description>}
            {news?.warnings.map(warning => <Description role="status" key={warning}>{warning}</Description>)}
            {loadingNews && !news ? (
              <EmptyState><LoaderCircle /><p>Buscando notícias financeiras...</p></EmptyState>
            ) : visibleArticles.length ? (
              <NewsGrid>{visibleArticles.map(article => <NewsCardItem key={article.id} article={article} />)}</NewsGrid>
            ) : (
              <EmptyState><Newspaper /><p>Nenhuma notícia disponível neste filtro.</p></EmptyState>
            )}
            <Disclaimer>
              Notícias são informações de terceiros e podem estar incompletas, atrasadas ou conter opiniões. A página não faz recomendação personalizada nem promete momento ideal de compra ou venda.
              {news?.source && <> Fonte agregadora: {news.source}.</>}
            </Disclaimer>
          </Section>
        </>
      )}

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
            A nota vai de 0 a 100: 65 ou mais indica cenário favorável; 45 a 64, neutro; 30 a 44, merece atenção; abaixo de 30, evitar. FIIs: retorno vs. CDI (até 25 pontos), queda máxima (10), volatilidade (5), regularidade/variação e crescimento de proventos (até 18), P/VP (até 6), idade (até 6) e patrimônio líquido (de -8 a +5); a vacância não está disponível de forma padronizada. Ações: 40% da nota técnica de 1 ano e 60% do histórico de até 5 anos (retorno vs. CDI, volatilidade e queda máxima); sem dados de lucro, dívida, ROE ou valuation. Não constitui recomendação personalizada. {data.disclaimer ?? ''}
          </Disclaimer>
        </>
      )}
        </>
      )}
    </Page>
  );
}
