import { useState } from 'react';
import { AlertCircle, CheckCircle2, Info, Sparkles, ThumbsUp, X } from 'lucide-react';
import styled, { keyframes } from 'styled-components';

export type AlertVariant = 'error' | 'success' | 'info';

interface AlertProps {
  variant: AlertVariant;
  title: string;
  message: string;
  onDismiss?: () => void;
}

const enter = keyframes`
  from { opacity: 0; transform: translateY(-6px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div<{ $variant: AlertVariant }>`
  position: relative;
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr) 32px;
  align-items: start;
  gap: 13px;
  padding: 16px;
  margin-bottom: 16px;
  border: 1px solid;
  border-radius: var(--radius-lg);
  box-shadow: 0 8px 24px rgba(23, 38, 61, .06);
  animation: ${enter} .2s ease-out;
  color: var(--text);
  background: ${({ $variant }) => $variant === 'error' ? 'var(--error-soft)' : $variant === 'success' ? 'var(--success-soft)' : 'var(--info-soft)'};
  border-color: ${({ $variant }) => $variant === 'error' ? 'var(--error-border)' : $variant === 'success' ? 'var(--success-border)' : 'var(--info-border)'};

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
  @media (max-width: 639px) {
    grid-template-columns: 36px minmax(0, 1fr) 30px;
    gap: 10px;
    padding: 13px;
  }
`;

const IconBadge = styled.span<{ $variant: AlertVariant }>`
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: var(--radius-lg);
  color: ${({ $variant }) => $variant === 'error' ? 'var(--error)' : $variant === 'success' ? 'var(--success)' : 'var(--info)'};
  background: var(--surface);

  svg { width: 21px; height: 21px; }
  @media (max-width: 639px) { width: 36px; height: 36px; }
`;

const Copy = styled.div`
  min-width: 0;
  padding-top: 1px;
  strong { display: block; margin-bottom: 4px; font-size: 14px; line-height: 1.4; }
  p { margin: 0; color: var(--muted); font-size: 13px; line-height: 1.55; overflow-wrap: anywhere; }
`;

const DismissButton = styled.button`
  display: grid;
  width: 30px;
  height: 30px;
  place-items: center;
  border: 0;
  border-radius: var(--radius-sm);
  color: var(--muted);
  background: transparent;
  transition: background .15s ease, color .15s ease;
  &:hover { color: var(--text); background: var(--surface); }
  &:focus-visible { outline: 3px solid var(--focus); outline-offset: 1px; }
  svg { width: 17px; height: 17px; }
`;

const ToastContainer = styled.div<{ $variant: AlertVariant }>`
  position: fixed;
  z-index: 2000;
  top: 24px;
  left: 50%;
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr) 32px;
  align-items: center;
  gap: 14px;
  width: min(460px, calc(100vw - 32px));
  padding: 18px 18px 18px 20px;
  border: 1px solid ${({ $variant }) => $variant === 'success' ? 'var(--success-border)' : $variant === 'error' ? 'var(--error-border)' : 'var(--info-border)'};
  border-radius: var(--radius-xl);
  color: var(--text);
  background: ${({ $variant }) => $variant === 'success' ? 'var(--success-soft)' : $variant === 'error' ? 'var(--error-soft)' : 'var(--info-soft)'};
  box-shadow: 0 22px 70px rgba(20, 38, 66, .25);
  transform: translateX(-50%);
  animation: ${enter} .25s ease-out;
  strong { display: block; font-size: 15px; line-height: 1.35; }
  p { margin: 4px 0 0; color: var(--muted); font-size: 13px; line-height: 1.45; }
  @media (max-width: 639px) { grid-template-columns: 40px minmax(0, 1fr) 30px; gap: 10px; padding: 15px; }
`;

const ToastIcon = styled.span<{ $variant: AlertVariant }>`
  display: grid; width: 48px; height: 48px; place-items: center; border-radius: var(--radius-xl);
  color: ${({ $variant }) => $variant === 'success' ? 'var(--success)' : $variant === 'error' ? 'var(--error)' : 'var(--info)'};
  background: var(--surface);
  svg { width: 25px; height: 25px; }
  @media (max-width: 639px) { width: 40px; height: 40px; border-radius: var(--radius-lg); }
`;

const icons = {
  error: AlertCircle,
  success: CheckCircle2,
  info: Info,
};

export default function Alert({
  variant, title, message, onDismiss,
}: AlertProps) {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  const Icon = icons[variant];

  function dismiss() {
    setDismissed(true);
    onDismiss?.();
  }

  return (
    <Container
      $variant={variant}
      role={variant === 'error' ? 'alert' : 'status'}
      aria-live={variant === 'error' ? 'assertive' : 'polite'}
    >
      <IconBadge $variant={variant}><Icon aria-hidden="true" /></IconBadge>
      <Copy>
        <strong>{title}</strong>
        <p>{message}</p>
      </Copy>
      {onDismiss && (
        <DismissButton type="button" onClick={dismiss} aria-label="Dispensar aviso">
          <X aria-hidden="true" />
        </DismissButton>
      )}
    </Container>
  );
}

export function ActionToast({ variant, title, message, onDismiss }: AlertProps) {
  const Icon = icons[variant];
  return <ToastContainer $variant={variant} role={variant === 'error' ? 'alert' : 'status'} aria-live={variant === 'error' ? 'assertive' : 'polite'}>
    <ToastIcon $variant={variant}><Icon aria-hidden="true" /></ToastIcon>
    <div><strong>{title}</strong><p>{message}</p></div>
    {onDismiss && <DismissButton type="button" onClick={onDismiss} aria-label="Fechar aviso"><X aria-hidden="true" /></DismissButton>}
  </ToastContainer>;
}

const CelebrationContainer = styled.div`
  position: fixed; z-index: 2100; top: 50%; left: 50%; display: grid; grid-template-columns: 76px minmax(0, 1fr) 30px;
  align-items: center; gap: 15px; width: min(440px, calc(100vw - 32px)); padding: 20px;
  border: 1px solid var(--success-border); border-radius: var(--radius-xl); color: var(--text); background: var(--surface);
  box-shadow: 0 24px 80px var(--shadow); transform: translate(-50%, -50%); animation: ${enter} .3s ease-out;
  strong { display: block; color: var(--success); font-size: 17px; } p { margin: 5px 0 0; color: var(--muted); font-size: 13px; line-height: 1.45; }
  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

const CelebrationCharacter = styled.div`
  position: relative; display: grid; width: 76px; height: 76px; place-items: center; color: var(--success);
  border: 5px solid var(--surface); border-radius: 50%; background: var(--success-soft);
  box-shadow: 0 8px 18px var(--shadow); animation: ${enter} .45s ease-out both;
  svg { width: 39px; height: 39px; stroke-width: 2.5; }
`;

export function CelebrationToast({ message, onDismiss }: { message: string; onDismiss?: () => void }) {
  return <CelebrationContainer role="status" aria-live="polite">
    <CelebrationCharacter><Sparkles size={18} style={{ position: 'absolute', top: -12, right: -5 }} /><ThumbsUp /></CelebrationCharacter>
    <div><strong>Mandou bem!</strong><p>{message}</p></div>
    {onDismiss && <DismissButton type="button" onClick={onDismiss} aria-label="Fechar comemoração"><X aria-hidden="true" /></DismissButton>}
  </CelebrationContainer>;
}
