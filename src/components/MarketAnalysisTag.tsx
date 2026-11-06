import styled from 'styled-components';

const Tag = styled.button<{ $color: string }>`
  position: relative;
  flex: 0 0 auto;
  padding: 3px 9px;
  border: 0;
  border-radius: 999px;
  color: ${({ $color }) => $color};
  background: color-mix(in srgb, ${({ $color }) => $color} 14%, transparent);
  font: inherit;
  font-size: 11px;
  font-weight: 800;
  cursor: help;

  &::after {
    position: absolute;
    z-index: 20;
    bottom: 100%;
    left: 50%;
    width: max-content;
    max-width: min(340px, calc(100vw - 32px));
    max-height: min(60vh, 360px);
    padding: 10px 12px;
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    color: var(--text);
    background: var(--surface-raised);
    box-shadow: 0 8px 24px var(--shadow);
    content: attr(data-tooltip);
    font-size: 12px;
    font-weight: 500;
    line-height: 1.5;
    text-align: left;
    white-space: pre-line;
    overflow-wrap: anywhere;
    overflow-y: auto;
    opacity: 0;
    pointer-events: auto;
    transform: translate(-50%, 4px);
    transition: opacity .12s ease, transform .12s ease;
    visibility: hidden;
  }

  &:hover::after, &:focus-visible::after {
    opacity: 1;
    transform: translate(-50%, 0);
    visibility: visible;
  }

  &:focus-visible {
    outline: 2px solid ${({ $color }) => $color};
    outline-offset: 2px;
  }
`;

export default function MarketAnalysisTag({
  label,
  color,
  details,
}: {
  label: string;
  color: string;
  details: string[];
}) {
  const tooltip = details.filter(Boolean).join('\n');
  return (
    <Tag
      type="button"
      $color={color}
      data-tooltip={tooltip}
      title={tooltip}
      aria-label={`${label}. Critérios da análise: ${tooltip.replace(/\n/g, '. ')}`}
    >
      {label}
    </Tag>
  );
}
