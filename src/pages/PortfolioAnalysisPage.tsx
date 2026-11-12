import { Gauge } from 'lucide-react';
import styled from 'styled-components';
import PortfolioSection from '../components/PortfolioSection';
import { PageHero } from '../components/ui';

const Page = styled.div`
  display: grid;
  gap: 20px;
`;

const Intro = styled.div`
  display: grid;
  gap: 8px;
  span { display: inline-flex; align-items: center; gap: 7px; color: var(--primary-strong); font-size: 12px; font-weight: 750; }
  h1 { margin: 0; color: var(--text); font-size: clamp(24px, 4vw, 34px); letter-spacing: -.7px; }
  p { max-width: 760px; margin: 0; color: var(--muted); font-size: 13px; line-height: 1.6; }
`;

export default function PortfolioAnalysisPage() {
  return (
    <Page>
      <PageHero>
        <Intro>
          <span><Gauge size={15} />Análise da carteira</span>
          <h1>Compare antes de decidir o que fazer com seus investimentos.</h1>
          <p>
            Uma queda de mercado, por si só, não significa que seja melhor vender.
            Veja também os sinais de mercado das ações cadastradas. Compare FIIs
            com alternativas de renda fixa líquidas de impostos, considerando prazo,
            proventos, risco histórico e custo de saída.
            Os números são estimativas e não executam nenhuma operação.
          </p>
        </Intro>
      </PageHero>
      <PortfolioSection />
    </Page>
  );
}
