import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import App from './App';

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  html[data-theme='light'] {
    color-scheme: light;
    --page-bg: #f5f1e9;
    --surface: #fffdf8;
    --surface-raised: #f4efe6;
    --text: #25232f;
    --muted: #777383;
    --border: #e6dfd3;
    --primary: #7054d8;
    --primary-strong: #5638bf;
    --accent: #c7e85b;
    --success: #15815d;
    --success-soft: #e6f7ef;
    --success-border: #cdebdc;
    --success-hover: #a9ddc2;
    --focus: rgba(112, 84, 216, .34);
    --scroll-track: #eee8dd;
    --scroll-thumb: #bcb3a6;
    --shadow: rgba(45, 37, 69, .08);
  }
  html[data-theme='dark'] {
    color-scheme: dark;
    --page-bg: #15141d;
    --surface: #201f2b;
    --surface-raised: #292735;
    --text: #f4f0e9;
    --muted: #aaa6b8;
    --border: #393746;
    --primary: #ae9bff;
    --primary-strong: #c2b5ff;
    --accent: #c7e85b;
    --success: #8de0b8;
    --success-soft: #20382f;
    --success-border: #3d6855;
    --success-hover: #548c70;
    --focus: rgba(174, 155, 255, .42);
    --scroll-track: #201f2b;
    --scroll-thumb: #514d60;
    --shadow: rgba(0, 0, 0, .24);
  }
  html[data-theme='dark'] main { color: var(--text); }
  html[data-theme='dark'] main :is(h1, h2, h3, h4, strong, label, td) { color: var(--text); }
  html[data-theme='dark'] main :is(p, small) { color: var(--muted); }
  html[data-theme='dark'] main :is(input, textarea, select) {
    color: var(--text);
    border-color: var(--border);
    background-color: var(--surface-raised);
  }
  html[data-theme='dark'] main :is(section, article) {
    color: var(--text);
    border-color: var(--border);
    background-color: var(--surface);
  }
  body { margin: 0; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; color: var(--text); background: var(--page-bg); -webkit-font-smoothing: antialiased; transition: background .2s ease, color .2s ease; }
  button, input, textarea, select { font: inherit; }
  button { cursor: pointer; }
  button:disabled { cursor: not-allowed; opacity: .6; }
  :focus-visible { outline: 3px solid var(--focus); outline-offset: 2px; }
  ::selection { color: #fff; background: var(--primary); }
  ::-webkit-scrollbar { width: 10px; height: 10px; }
  ::-webkit-scrollbar-track { background: var(--scroll-track); }
  ::-webkit-scrollbar-thumb { border: 2px solid var(--scroll-track); border-radius: 999px; background: var(--scroll-thumb); }
`;
const theme = { colors: { navy: '#25232f', blue: '#7054d8', muted: '#777383', border: '#e6dfd3', background: '#f5f1e9' } };

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
