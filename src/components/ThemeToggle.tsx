import { Moon, Sun } from 'lucide-react';
import styled from 'styled-components';
import { useAppTheme } from '../theme';

const ToggleButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 38px;
  padding: 8px 12px;
  border: 1px solid var(--border);
  border-radius: 11px;
  color: var(--text);
  background: var(--surface);
  font-size: 12px;
  font-weight: 750;
  white-space: nowrap;
  transition: background .18s ease, border-color .18s ease, transform .18s ease;
  &:hover { background: var(--surface-raised); border-color: var(--accent); transform: translateY(-1px); }
  svg { width: 16px; height: 16px; color: var(--primary); }
  @media (max-width: 520px) { gap: 0; width: 38px; padding: 8px; font-size: 0; }
`;

export default function ThemeToggle() {
  const { mode, toggleTheme } = useAppTheme();
  const label = mode === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro';
  const Icon = mode === 'dark' ? Sun : Moon;

  return (
    <ToggleButton type="button" onClick={toggleTheme} aria-label={label} aria-pressed={mode === 'dark'} title={label}>
      <Icon aria-hidden="true" />
      {mode === 'dark' ? 'Modo claro' : 'Modo escuro'}
    </ToggleButton>
  );
}
