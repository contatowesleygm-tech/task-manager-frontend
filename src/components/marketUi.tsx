import styled from 'styled-components';
import { Field, Panel, PanelTitle } from './ui';

export const Wrap = styled.div`
  display: grid;
  gap: 20px;
`;

export const Section = styled(Panel)`
  display: grid;
  gap: 14px;
  ${PanelTitle} { margin: 0; }
`;

export const Description = styled.p`
  margin: 4px 0 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.5;
`;

export const Check = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  color: var(--text);
  font-size: 13px;
  font-weight: 600;
  input { width: 18px; height: 18px; }
`;

export const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  @media (max-width: 1000px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 520px) { grid-template-columns: 1fr; }
`;

export const Stat = styled.div<{ $tone?: 'good' | 'bad' }>`
  display: grid;
  gap: 4px;
  padding: 14px 16px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--surface-raised);
  small { color: var(--muted); font-size: 10px; font-weight: 800; letter-spacing: .07em; text-transform: uppercase; }
  strong { color: ${({ $tone }) => ($tone === 'good' ? 'var(--success)' : $tone === 'bad' ? 'var(--error)' : 'var(--text)')}; font-size: 20px; font-variant-numeric: tabular-nums; letter-spacing: -.03em; }
  span { color: var(--muted); font-size: 11px; line-height: 1.4; }
`;

export const Head = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  select { min-height: 36px; border: 1px solid var(--border); border-radius: var(--radius-md); padding: 4px 10px; color: var(--text); background: var(--surface); }
`;

export const TableWrap = styled.div`
  overflow-x: auto;
  table { width: 100%; border-collapse: collapse; font-size: 12px; }
  th { padding: 8px 10px; color: var(--muted); font-size: 10px; letter-spacing: .06em; text-align: right; text-transform: uppercase; white-space: nowrap; }
  td { padding: 10px; border-top: 1px solid var(--border); color: var(--text); font-variant-numeric: tabular-nums; text-align: right; white-space: nowrap; }
  th:first-child, td:first-child { text-align: left; font-weight: 650; }
`;

export const RatingBadge = styled.span<{ $color: string }>`
  padding: 3px 9px;
  border-radius: 999px;
  color: ${({ $color }) => $color};
  background: color-mix(in srgb, ${({ $color }) => $color} 14%, transparent);
  font-size: 11px;
  font-weight: 800;
`;

export const Note = styled.p`
  margin: 0;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.5;
`;

export const FormGrid = styled.form<{ $columns?: number }>`
  display: grid;
  grid-template-columns: repeat(${({ $columns }) => $columns ?? 4}, minmax(0, 1fr)) auto;
  gap: 12px;
  align-items: end;
  ${Field} { margin-bottom: 0; }
  @media (max-width: 1100px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 560px) { grid-template-columns: 1fr; }
`;
