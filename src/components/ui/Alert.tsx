import { useState } from 'react';
import { AlertCircle, CheckCircle2, Info, Sparkles, ThumbsUp, X } from 'lucide-react';
import styled, { css, keyframes } from 'styled-components';

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
  border-radius: 14px;
  box-shadow: 0 8px 24px rgba(23, 38, 61, .06);
  animation: ${enter} .2s ease-out;
  html[data-theme='dark'] & { color: var(--text); background: var(--surface-raised); border-color: var(--border); }
  ${({ $variant }) => $variant === 'error' && css`
    color: #8f2924;
    background: linear-gradient(110deg, #fff5f3, #fff 90%);
    border-color: #f3d4d0;
  `}
  ${({ $variant }) => $variant === 'success' && css`
    color: #176b4d;
    background: linear-gradient(110deg, #effaf5, #fff 90%);
    border-color: #ceeadd;
  `}
  ${({ $variant }) => $variant === 'info' && css`
    color: #2452a1;
    background: linear-gradient(110deg, #f0f6ff, #fff 90%);
    border-color: #d5e2fa;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
  @media (max-width: 520px) {
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
  border-radius: 12px;
  ${({ $variant }) => $variant === 'error' && css`color: #c53e38; background: #ffe6e2;`}
  ${({ $variant }) => $variant === 'success' && css`color: #14815e; background: #ddf7ec;`}
  ${({ $variant }) => $variant === 'info' && css`color: #2164dc; background: #e3efff;`}

  svg { width: 21px; height: 21px; }
  @media (max-width: 520px) { width: 36px; height: 36px; }
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
  border-radius: 8px;
  color: var(--muted);
  background: transparent;
  transition: background .15s ease, color .15s ease;
  &:hover { color: var(--text); background: var(--surface); }
  &:focus-visible { outline: 3px solid #8fb4ff; outline-offset: 1px; }
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
  border: 1px solid ${({ $variant }) => $variant === 'success' ? '#a9ddc2' : $variant === 'error' ? '#f0b8b2' : '#b8d0fb'};
  border-radius: 18px;
  color: ${({ $variant }) => $variant === 'success' ? '#176b4d' : $variant === 'error' ? '#8f2924' : '#2452a1'};
  background: ${({ $variant }) => $variant === 'success' ? 'linear-gradient(135deg, #effaf5, #fff)' : $variant === 'error' ? 'linear-gradient(135deg, #fff5f3, #fff)' : 'linear-gradient(135deg, #f0f6ff, #fff)'};
  box-shadow: 0 22px 70px rgba(20, 38, 66, .25);
  transform: translateX(-50%);
  animation: ${enter} .25s ease-out;
  html[data-theme='dark'] & { color: var(--text); background: var(--surface); border-color: var(--border); }
  strong { display: block; font-size: 15px; line-height: 1.35; }
  p { margin: 4px 0 0; color: var(--muted); font-size: 13px; line-height: 1.45; }
  @media (max-width: 520px) { grid-template-columns: 40px minmax(0, 1fr) 30px; gap: 10px; padding: 15px; }
`;

const ToastIcon = styled.span<{ $variant: AlertVariant }>`
  display: grid; width: 48px; height: 48px; place-items: center; border-radius: 15px;
  color: ${({ $variant }) => $variant === 'success' ? '#14815e' : $variant === 'error' ? '#c53e38' : '#2164dc'};
  background: ${({ $variant }) => $variant === 'success' ? '#ddf7ec' : $variant === 'error' ? '#ffe6e2' : '#e3efff'};
  svg { width: 25px; height: 25px; }
  @media (max-width: 520px) { width: 40px; height: 40px; border-radius: 12px; }
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
  border: 1px solid #9cdec0; border-radius: 22px; background: linear-gradient(135deg, #effcf5, #fff);
  box-shadow: 0 24px 80px rgba(20, 90, 61, .25); transform: translate(-50%, -50%); animation: ${enter} .3s ease-out;
  strong { display: block; color: #176b4d; font-size: 17px; } p { margin: 5px 0 0; color: #52637b; font-size: 13px; line-height: 1.45; }
  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

const CelebrationCharacter = styled.div`
  position: relative; display: grid; width: 76px; height: 76px; place-items: center; color: #176b4d;
  border: 5px solid #fff; border-radius: 50%; background: linear-gradient(145deg, #9ee5bf, #51bd8a);
  box-shadow: 0 8px 18px rgba(20, 129, 94, .22); animation: ${enter} .45s ease-out both;
  &::after { content: '👍'; position: absolute; right: -12px; bottom: -5px; display: grid; width: 30px; height: 30px; place-items: center; border: 3px solid #fff; border-radius: 50%; background: #ffd86b; font-size: 17px; animation: ${enter} .5s .12s ease-out both; }
  svg { width: 39px; height: 39px; stroke-width: 2.5; }
`;

export function CelebrationToast({ message, onDismiss }: { message: string; onDismiss?: () => void }) {
  return <CelebrationContainer role="status" aria-live="polite">
    <CelebrationCharacter><Sparkles size={18} style={{ position: 'absolute', top: -12, right: -5 }} /><ThumbsUp /></CelebrationCharacter>
    <div><strong>Mandou bem! 🎉</strong><p>{message}</p></div>
    {onDismiss && <DismissButton type="button" onClick={onDismiss} aria-label="Fechar comemoração"><X aria-hidden="true" /></DismissButton>}
  </CelebrationContainer>;
}
