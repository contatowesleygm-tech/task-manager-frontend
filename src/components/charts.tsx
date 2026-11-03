import { useEffect, useMemo, useRef, useState, type MouseEvent } from 'react';
import styled from 'styled-components';

export interface LineSeries {
  id: string;
  label: string;
  color: string;
  values: number[];
  strong?: boolean;
}

export interface BarItem {
  id: string;
  label: string;
  value: number;
  color?: string;
  caption?: string;
  valueLabel?: string;
}

function niceMax(value: number): number {
  if (value <= 0) return 1;
  const exponent = 10 ** Math.floor(Math.log10(value));
  const fraction = value / exponent;
  const nice = fraction <= 1 ? 1 : fraction <= 2 ? 2 : fraction <= 2.5 ? 2.5 : fraction <= 5 ? 5 : 10;
  return nice * exponent;
}

// Largura real do contêiner, para o SVG manter textos legíveis em telas estreitas.
function useWidth(): [React.RefObject<HTMLDivElement>, number] {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(820);
  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;
    const update = () => setWidth(Math.max(280, Math.round(element.getBoundingClientRect().width)));
    update();
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return [ref, width];
}

const ChartBox = styled.div`
  position: relative;
  width: 100%;
  svg { display: block; width: 100%; height: auto; overflow: visible; }
  text { fill: var(--muted); font-size: 11px; font-variant-numeric: tabular-nums; }
`;

const Legend = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 10px;
`;

const LegendChip = styled.button<{ $color: string; $off: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 30px;
  padding: 4px 10px;
  border: 1px solid var(--border);
  border-radius: 999px;
  color: ${({ $off }) => ($off ? 'var(--muted)' : 'var(--text)')};
  background: ${({ $off }) => ($off ? 'transparent' : 'var(--surface-raised)')};
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  opacity: ${({ $off }) => ($off ? 0.55 : 1)};
  i { width: 10px; height: 10px; border-radius: 50%; background: ${({ $color }) => $color}; }
`;

const Tooltip = styled.div`
  position: absolute;
  top: 8px;
  z-index: 2;
  min-width: 190px;
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--surface);
  box-shadow: var(--shadow-raised);
  pointer-events: none;
  font-size: 12px;
  strong { display: block; margin-bottom: 6px; color: var(--text); }
  div { display: flex; align-items: center; justify-content: space-between; gap: 12px; color: var(--muted); }
  div span:first-child { display: inline-flex; align-items: center; gap: 6px; }
  i { width: 8px; height: 8px; border-radius: 50%; }
  b { color: var(--text); font-variant-numeric: tabular-nums; }
`;

interface LineChartProps {
  labels: string[];
  series: LineSeries[];
  formatValue: (value: number) => string;
  formatAxis: (value: number) => string;
  referenceLine?: { value: number; label: string };
  ariaLabel: string;
}

export function LineChart({ labels, series, formatValue, formatAxis, referenceLine, ariaLabel }: LineChartProps) {
  const [hidden, setHidden] = useState<Set<string>>(new Set());
  const [hover, setHover] = useState<number | null>(null);
  const [logChoice, setLogChoice] = useState<boolean | null>(null);
  const [boxRef, W] = useWidth();
  const H = W < 520 ? 280 : 320;
  const PAD = { top: 14, right: 14, bottom: 30, left: W < 520 ? 54 : 66 };

  const visible = series.filter(item => !hidden.has(item.id));
  const plotW = W - PAD.left - PAD.right;
  const plotH = H - PAD.top - PAD.bottom;
  const count = labels.length;

  // Com diferenças muito grandes entre as opções (ex.: Bitcoin), a escala log mantém todas legíveis.
  const finals = series.map(item => item.values[item.values.length - 1] ?? 1);
  const autoLog = Math.max(...finals) / Math.max(Math.min(...finals), 1) > 6;
  const isLog = logChoice ?? autoLog;

  const allValues = visible.flatMap(item => item.values);
  if (referenceLine) allValues.push(referenceLine.value);
  const dataMax = Math.max(...allValues, 1);
  const dataMin = Math.max(Math.min(...allValues), 1);
  const max = niceMax(dataMax * 1.04);
  const logLow = 10 ** Math.floor(Math.log10(dataMin));
  const logHigh = max <= logLow * 2 ? logLow * 10 : max;

  const x = (index: number) => PAD.left + (count > 1 ? (index / (count - 1)) * plotW : 0);
  const y = (value: number) => {
    if (!isLog) return PAD.top + plotH - (value / max) * plotH;
    const ratio = Math.log(Math.max(value, logLow) / logLow) / Math.log(logHigh / logLow);
    return PAD.top + plotH - ratio * plotH;
  };

  const ticks = useMemo(() => {
    if (!isLog) return [0, 1, 2, 3, 4].map(step => (max / 4) * step);
    const decades = Math.ceil(Math.log10(logHigh / logLow));
    const multipliers = decades <= 2 ? [1, 2, 5] : [1];
    const result: number[] = [];
    for (let power = logLow; power <= logHigh; power *= 10) {
      multipliers.forEach(multiplier => {
        if (power * multiplier <= logHigh) result.push(power * multiplier);
      });
    }
    return result;
  }, [isLog, max, logLow, logHigh]);
  const labelStep = Math.ceil(count / Math.max(2, Math.floor(plotW / 52)));

  function toggle(id: string) {
    setHidden(current => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else if (next.size < series.length - 1) next.add(id);
      return next;
    });
  }

  function onMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const viewX = ((event.clientX - rect.left) / rect.width) * W;
    const index = Math.round(((viewX - PAD.left) / plotW) * (count - 1));
    setHover(Math.min(count - 1, Math.max(0, index)));
  }

  const tooltipLeft = hover === null ? 0 : (x(hover) / W) * 100;

  return (
    <div>
      <Legend>
        {series.map(item => (
          <LegendChip key={item.id} type="button" $color={item.color} $off={hidden.has(item.id)}
            aria-pressed={!hidden.has(item.id)} onClick={() => toggle(item.id)}>
            <i />{item.label}
          </LegendChip>
        ))}
        <LegendChip type="button" $color="var(--primary)" $off={!isLog} aria-pressed={isLog} onClick={() => setLogChoice(!isLog)}
          title="A escala logarítmica mostra variações proporcionais e evita que uma opção muito alta esmague as demais.">
          <i />Escala logarítmica
        </LegendChip>
      </Legend>
      <ChartBox ref={boxRef} onMouseMove={onMove} onMouseLeave={() => setHover(null)}>
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={ariaLabel}>
          {ticks.map(tick => (
            <g key={tick}>
              <line x1={PAD.left} x2={W - PAD.right} y1={y(tick)} y2={y(tick)} stroke="var(--border)" strokeDasharray={tick === 0 || (isLog && tick === ticks[0]) ? undefined : '3 4'} />
              <text x={PAD.left - 8} y={y(tick) + 4} textAnchor="end">{formatAxis(tick)}</text>
            </g>
          ))}
          {labels.map((label, index) => index % labelStep === 0 || index === count - 1 ? (
            <text key={label} x={x(index)} y={H - 8} textAnchor="middle">{label}</text>
          ) : null)}
          {referenceLine && (
            <g>
              <line x1={PAD.left} x2={W - PAD.right} y1={y(referenceLine.value)} y2={y(referenceLine.value)} stroke="var(--error)" strokeDasharray="6 4" strokeWidth={1.5} />
              <text x={PAD.left + 6} y={y(referenceLine.value) - 6} style={{ fill: 'var(--error)', fontWeight: 700 }}>{referenceLine.label}</text>
            </g>
          )}
          {hover !== null && <line x1={x(hover)} x2={x(hover)} y1={PAD.top} y2={PAD.top + plotH} stroke="var(--muted)" strokeOpacity={0.5} />}
          {visible.map(item => (
            <g key={item.id}>
              <polyline fill="none" stroke={item.color} strokeWidth={item.strong ? 3.2 : 2} strokeLinejoin="round" strokeLinecap="round"
                points={item.values.map((value, index) => `${x(index)},${y(value)}`).join(' ')} />
              {hover !== null && item.values[hover] !== undefined && (
                <circle cx={x(hover)} cy={y(item.values[hover])} r={4.5} fill={item.color} stroke="var(--surface)" strokeWidth={2} />
              )}
            </g>
          ))}
        </svg>
        {hover !== null && (
          <Tooltip style={tooltipLeft > 60 ? { right: `${100 - tooltipLeft + 2}%` } : { left: `${tooltipLeft + 2}%` }}>
            <strong>{labels[hover]}</strong>
            {[...visible].sort((a, b) => (b.values[hover] ?? 0) - (a.values[hover] ?? 0)).map(item => (
              <div key={item.id}>
                <span><i style={{ background: item.color }} />{item.label}</span>
                <b>{formatValue(item.values[hover] ?? 0)}</b>
              </div>
            ))}
          </Tooltip>
        )}
      </ChartBox>
    </div>
  );
}

const CH = 240;

export function ColumnChart({ items, formatValue, ariaLabel }: { items: BarItem[]; formatValue: (value: number) => string; ariaLabel: string }) {
  const [boxRef, W] = useWidth();
  const top = 22;
  const bottom = 26;
  const left = 6;
  const plotH = CH - top - bottom;
  const maxPositive = Math.max(...items.map(item => Math.max(item.value, 0)), 0);
  const maxNegative = Math.max(...items.map(item => Math.max(-item.value, 0)), 0);
  const range = Math.max(maxPositive + maxNegative, 1);
  const zeroY = top + plotH * (maxPositive / range);
  const scale = plotH / range;
  const slot = (W - left * 2) / Math.max(items.length, 1);
  const barW = Math.min(36, slot * 0.62);
  const showValues = slot >= 46;
  const labelStep = slot >= 26 ? 1 : 2;

  return (
    <ChartBox ref={boxRef}>
      <svg viewBox={`0 0 ${W} ${CH}`} role="img" aria-label={ariaLabel}>
        <line x1={left} x2={W - left} y1={zeroY} y2={zeroY} stroke="var(--border)" />
        {items.map((item, index) => {
          const height = Math.abs(item.value) * scale;
          const cx = left + slot * index + slot / 2;
          const positive = item.value >= 0;
          const barY = positive ? zeroY - height : zeroY;
          return (
            <g key={item.id}>
              <rect x={cx - barW / 2} y={barY} width={barW} height={Math.max(height, 1)} rx={3} style={{ fill: positive ? 'var(--success)' : 'var(--error)' }}>
                <title>{`${item.label}: ${formatValue(item.value)}`}</title>
              </rect>
              {showValues && (
                <text x={cx} y={positive ? barY - 5 : barY + height + 12} textAnchor="middle">{formatValue(item.value)}</text>
              )}
              {index % labelStep === 0 && <text x={cx} y={CH - 8} textAnchor="middle">{item.label}</text>}
            </g>
          );
        })}
      </svg>
    </ChartBox>
  );
}

const Rows = styled.div`
  display: grid;
  gap: 12px;
`;

const Row = styled.div`
  display: grid;
  gap: 5px;
  header { display: flex; align-items: baseline; justify-content: space-between; gap: 10px; font-size: 13px; }
  header span:first-child { color: var(--text); font-weight: 650; }
  header b { color: var(--text); font-variant-numeric: tabular-nums; }
  small { color: var(--muted); font-size: 11px; }
`;

const Track = styled.div`
  position: relative;
  height: 12px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--surface-raised);
`;

const Fill = styled.div<{ $width: number; $color: string; $opacity?: number }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: ${({ $width }) => Math.max(0, Math.min(100, $width))}%;
  border-radius: 999px;
  background: ${({ $color }) => $color};
  opacity: ${({ $opacity }) => $opacity ?? 1};
  transition: width .4s ease;
`;

export interface ValueBarItem extends BarItem {
  invested?: number;
}

// Barras horizontais; com `invested`, mostra a parte aportada e o ganho sobre ela.
// Se um valor for muito maior que os demais, a barra é truncada para não esmagar as outras.
export function ValueBars({ items }: { items: ValueBarItem[] }) {
  const sorted = [...items].map(item => item.value).sort((a, b) => b - a);
  const outlier = sorted.length > 2 && sorted[0] > sorted[1] * 4;
  const scaleMax = Math.max(outlier ? sorted[1] * 1.25 : sorted[0], 1);
  return (
    <Rows>
      {items.map(item => {
        const truncated = item.value > scaleMax;
        return (
          <Row key={item.id}>
            <header><span>{item.label}</span><b>{item.valueLabel}</b></header>
            <Track role="img" aria-label={`${item.label}: ${item.valueLabel}`}>
              <Fill $width={(item.value / scaleMax) * 100} $color={item.color ?? 'var(--primary)'} />
              {item.invested !== undefined && (
                <Fill $width={(item.invested / scaleMax) * 100} $color="var(--text)" $opacity={0.35} />
              )}
            </Track>
            {(item.caption || truncated) && (
              <small>{truncated ? 'Barra cortada: valor muito acima das demais. ' : ''}{item.caption}</small>
            )}
          </Row>
        );
      })}
    </Rows>
  );
}

const DivRow = styled.div`
  display: grid;
  grid-template-columns: minmax(110px, 1.1fr) minmax(0, 2fr) 70px;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  @media (max-width: 520px) { grid-template-columns: 90px minmax(0, 1fr) 62px; }
  span:first-child { color: var(--text); font-weight: 600; }
  b { text-align: right; font-variant-numeric: tabular-nums; }
`;

const DivTrack = styled.div`
  position: relative;
  height: 14px;
  background: var(--surface-raised);
  border-radius: 4px;
  &::after { content: ''; position: absolute; top: -2px; bottom: -2px; left: var(--zero); width: 1px; background: var(--muted); opacity: .6; }
`;

const DivFill = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  border-radius: 3px;
  transition: width .4s ease;
`;

// Barras que partem do zero, para ganhos (verde) e perdas (vermelho).
export function DivergingBars({ items, formatValue }: { items: BarItem[]; formatValue: (value: number) => string }) {
  const maxPositive = Math.max(...items.map(item => Math.max(item.value, 0)), 0);
  const maxNegative = Math.max(...items.map(item => Math.max(-item.value, 0)), 0);
  const total = Math.max(maxPositive + maxNegative, 1);
  const zero = (maxNegative / total) * 100;
  return (
    <Rows>
      {items.map(item => {
        const width = (Math.abs(item.value) / total) * 100;
        const positive = item.value >= 0;
        return (
          <DivRow key={item.id}>
            <span>{item.label}</span>
            <DivTrack style={{ ['--zero' as string]: `${zero}%` }} role="img" aria-label={`${item.label}: ${formatValue(item.value)}`}>
              <DivFill style={{ width: `${width}%`, left: positive ? `${zero}%` : `${zero - width}%`, background: positive ? 'var(--success)' : 'var(--error)' }} />
            </DivTrack>
            <b style={{ color: positive ? 'var(--success)' : 'var(--error)' }}>{formatValue(item.value)}</b>
          </DivRow>
        );
      })}
    </Rows>
  );
}

const StackTrack = styled.div`
  display: flex;
  height: 22px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--surface-raised);
  div { display: grid; place-items: center; min-width: 0; color: #fff; font-size: 11px; font-weight: 800; transition: width .4s ease; }
`;

const StackLegend = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  margin: 12px 0 0;
  padding: 0;
  list-style: none;
  font-size: 12px;
  color: var(--text);
  li { display: inline-flex; align-items: center; gap: 6px; }
  i { width: 10px; height: 10px; border-radius: 50%; }
  b { font-variant-numeric: tabular-nums; }
`;

// Barra única dividida em fatias proporcionais (ex.: alocação em %).
export function StackedBar({ items, ariaLabel }: { items: BarItem[]; ariaLabel: string }) {
  const total = items.reduce((sum, item) => sum + item.value, 0) || 1;
  return (
    <div>
      <StackTrack role="img" aria-label={ariaLabel}>
        {items.filter(item => item.value > 0).map(item => (
          <div key={item.id} style={{ width: `${(item.value / total) * 100}%`, background: item.color }} title={`${item.label}: ${item.valueLabel ?? item.value}`}>
            {(item.value / total) * 100 >= 8 ? `${Math.round((item.value / total) * 100)}%` : ''}
          </div>
        ))}
      </StackTrack>
      <StackLegend>
        {items.map(item => (
          <li key={item.id}><i style={{ background: item.color }} />{item.label} <b>{item.valueLabel ?? item.value}</b></li>
        ))}
      </StackLegend>
    </div>
  );
}
