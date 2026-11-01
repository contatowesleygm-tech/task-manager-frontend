import { useEffect, useId, useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from { opacity: 0; transform: translateY(8px) scale(.99); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  place-items: center;
  padding: 16px;
  background: rgba(19, 31, 51, .48);
  backdrop-filter: blur(5px);
`;

const Card = styled.section`
  width: min(700px, calc(100vw - 32px));
  max-height: min(88vh, 760px);
  overflow-y: auto;
  padding: 24px;
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  color: var(--text);
  background: var(--surface);
  box-shadow: 0 24px 70px var(--shadow);
  animation: ${appear} var(--transition-normal);
  &:focus { outline: none; }
  @media (prefers-reduced-motion: reduce) { animation: none; }
  @media (max-width: 639px) { width: calc(100vw - 20px); padding: 18px; max-height: 92vh; }
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
  h2 { display: flex; align-items: center; gap: 9px; margin: 0; color: var(--text); font-size: 18px; }
`;

const Close = styled.button`
  display: grid;
  width: 34px;
  height: 34px;
  flex: 0 0 auto;
  place-items: center;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  color: var(--muted);
  background: var(--surface-raised);
  cursor: pointer;
  &:hover { color: var(--primary); background: var(--surface); }
`;

interface ModalProps {
  open: boolean;
  title: string;
  icon?: ReactNode;
  busy?: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ open, title, icon, busy = false, onClose, children }: ModalProps) {
  const titleId = useId();
  const dialogRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return undefined;
    const previouslyFocused = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !busy) onClose();
      if (event.key !== 'Tab') return;
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable?.length) {
        event.preventDefault();
        dialogRef.current?.focus();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && (document.activeElement === first || document.activeElement === dialogRef.current)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    const previousOverflow = document.body.style.overflow;
    document.addEventListener('keydown', closeWithEscape);
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', closeWithEscape);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [open, busy, onClose]);

  if (!open) return null;

  return createPortal(
    <Overlay role="presentation" onMouseDown={event => { if (event.target === event.currentTarget && !busy) onClose(); }}>
      <Card ref={dialogRef} tabIndex={-1} role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <Header>
          <h2 id={titleId}>{icon}{title}</h2>
          <Close type="button" aria-label="Fechar janela" title="Fechar (Esc)" onClick={onClose} disabled={busy}><X size={18} /></Close>
        </Header>
        {children}
      </Card>
    </Overlay>,
    document.body
  );
}
