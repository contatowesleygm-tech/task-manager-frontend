import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import App from './App';

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }

  :root {
    color-scheme: light;
    --page-bg: #F8FAFC;
    --surface: #FFFFFF;
    --surface-raised: #F1F5F9;
    --text: #0F172A;
    --muted: #64748B;
    --text-subtle: #94A3B8;
    --border: #E2E8F0;
    --primary: #2563EB;
    --primary-strong: #1D4ED8;
    --primary-soft: #DBEAFE;
    --primary-contrast: #FFFFFF;
    --focus: rgba(37, 99, 235, .28);
    --success: #16A34A;
    --success-soft: #DCFCE7;
    --success-border: #BBF7D0;
    --success-hover: #15803D;
    --warning: #D97706;
    --warning-soft: #FEF3C7;
    --warning-border: #FDE68A;
    --error: #DC2626;
    --error-soft: #FEF2F2;
    --error-border: #FECACA;
    --error-contrast: #FFFFFF;
    --info: #0284C7;
    --info-soft: #E0F2FE;
    --info-border: #BAE6FD;
    --scroll-track: #F1F5F9;
    --scroll-thumb: #CBD5E1;
    --shadow: rgba(15, 23, 42, .08);
    --shadow-raised: 0 8px 24px var(--shadow);
    --space-1: 4px;
    --space-2: 8px;
    --space-3: 12px;
    --space-4: 16px;
    --space-5: 20px;
    --space-6: 24px;
    --space-8: 32px;
    --space-10: 40px;
    --space-12: 48px;
    --radius-sm: 6px;
    --radius-md: 10px;
    --radius-lg: 14px;
    --radius-xl: 18px;
    --radius-full: 999px;
    --transition-fast: 150ms ease;
    --transition-normal: 200ms ease;
  }

  html[data-theme='dark'] {
    color-scheme: dark;
    --page-bg: #0B1120;
    --surface: #111827;
    --surface-raised: #1E293B;
    --text: #F8FAFC;
    --muted: #CBD5E1;
    --text-subtle: #94A3B8;
    --border: #334155;
    --primary: #60A5FA;
    --primary-strong: #93C5FD;
    --primary-soft: #172554;
    --primary-contrast: #0B1120;
    --focus: rgba(96, 165, 250, .38);
    --success: #4ADE80;
    --success-soft: #142D21;
    --success-border: #166534;
    --success-hover: #86EFAC;
    --warning: #FBBF24;
    --warning-soft: #3A2A12;
    --warning-border: #854D0E;
    --error: #F87171;
    --error-soft: #3B1D25;
    --error-border: #7F1D1D;
    --error-contrast: #0B1120;
    --info: #38BDF8;
    --info-soft: #102C40;
    --info-border: #075985;
    --scroll-track: #111827;
    --scroll-thumb: #475569;
    --shadow: rgba(0, 0, 0, .24);
  }

  html { scroll-behavior: smooth; }
  body {
    min-width: 320px;
    margin: 0;
    color: var(--text);
    background: var(--page-bg);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 14px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    transition: background var(--transition-normal), color var(--transition-normal);
  }

  button, input, textarea, select { font: inherit; }
  button { cursor: pointer; }
  button:disabled { cursor: not-allowed; opacity: .6; }
  input, textarea, select { accent-color: var(--primary); }
  :focus-visible { outline: 3px solid var(--focus); outline-offset: 2px; }
  ::selection { color: var(--primary-contrast); background: var(--primary); }
  ::-webkit-scrollbar { width: 10px; height: 10px; }
  ::-webkit-scrollbar-track { background: var(--scroll-track); }
  ::-webkit-scrollbar-thumb { border: 2px solid var(--scroll-track); border-radius: var(--radius-full); background: var(--scroll-thumb); }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; }
  }
`;

const theme = {
  colors: {
    navy: '#0F172A',
    blue: '#2563EB',
    muted: '#64748B',
    border: '#E2E8F0',
    background: '#F8FAFC',
  },
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
