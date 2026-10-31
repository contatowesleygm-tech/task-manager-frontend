import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { AlertTriangle, LoaderCircle, Trash2, X } from 'lucide-react';
import styled, { keyframes } from 'styled-components';
import { Button } from '../../styles';

interface ConfirmDialogProps {
  open: boolean;
  title: string;
  description: string;
  confirmLabel?: string;
  busy?: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

const appear = keyframes`
  from { opacity: 0; transform: translateY(8px) scale(.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  place-items: center;
  padding: 20px;
  background: rgba(17, 29, 48, .56);
  backdrop-filter: blur(4px);
`;

const Dialog = styled.section`
  width: min(100%, 440px);
  padding: 26px;
  border: 1px solid rgba(255, 255, 255, .75);
  border-radius: 20px;
  color: var(--text);
  background: var(--surface);
  border-color: var(--border);
  box-shadow: 0 24px 80px var(--shadow);
  animation: ${appear} .18s ease-out;

  @media (prefers-reduced-motion: reduce) { animation: none; }
  @media (max-width: 520px) { padding: 21px; border-radius: 16px; }
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
`;

const IconBadge = styled.div`
  display: grid;
  width: 52px;
  height: 52px;
  flex: 0 0 52px;
  place-items: center;
  border-radius: 16px;
  color: #c53e38;
  background: #fff0ee;
  svg { width: 25px; height: 25px; }
`;

const CloseButton = styled.button`
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border: 0;
  border-radius: 9px;
  color: var(--muted);
  background: transparent;
  &:hover { color: var(--text); background: var(--surface-raised); }
  &:focus-visible { outline: 3px solid #8fb4ff; outline-offset: 1px; }
  svg { width: 18px; height: 18px; }
`;

const Title = styled.h2`
  margin: 20px 0 8px;
  color: var(--text);
  font-size: 21px;
  letter-spacing: -.35px;
`;

const Description = styled.p`
  margin: 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.65;
  overflow-wrap: anywhere;
`;

const Warning = styled.div`
  margin-top: 16px;
  padding: 11px 13px;
  border: 1px solid #f4ddd9;
  border-radius: 10px;
  color: #9a3731;
  background: #fff8f7;
  font-size: 12px;
  line-height: 1.5;
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
`;

const DangerButton = styled(Button)`
  background: #c53e38;
  color: white;
  &:hover:not(:disabled) { background: #a92f2a; }
`;

export default function ConfirmDialog({
  open, title, description, confirmLabel = 'Excluir tarefa', busy = false,
  onCancel, onConfirm,
}: ConfirmDialogProps) {
  const dialogRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape' && !busy) onCancel();
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [open, busy, onCancel]);

  if (!open) return null;

  return createPortal(
    <Backdrop onMouseDown={event => {
      if (event.target === event.currentTarget && !busy) onCancel();
    }}>
      <Dialog
        ref={dialogRef}
        tabIndex={-1}
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="confirm-dialog-title"
        aria-describedby="confirm-dialog-description"
      >
        <Header>
          <IconBadge><AlertTriangle aria-hidden="true" /></IconBadge>
          <CloseButton type="button" onClick={onCancel} disabled={busy} aria-label="Fechar confirmação">
            <X aria-hidden="true" />
          </CloseButton>
        </Header>
        <Title id="confirm-dialog-title">{title}</Title>
        <Description id="confirm-dialog-description">{description}</Description>
        <Warning>Essa ação não pode ser desfeita.</Warning>
        <Actions>
          <Button type="button" onClick={onCancel} disabled={busy}>Cancelar</Button>
          <DangerButton type="button" onClick={onConfirm} disabled={busy}>
            {busy ? <LoaderCircle className="spin" /> : <Trash2 />}
            {busy ? 'Excluindo...' : confirmLabel}
          </DangerButton>
        </Actions>
      </Dialog>
    </Backdrop>,
    document.body,
  );
}
