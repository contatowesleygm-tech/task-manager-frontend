import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import analysis from './__fixture_pf.json';
import switchSim from './__fixture_sw.json';
import mainSource from './main.tsx?raw';

axios.defaults.adapter = async config => ({
  data: String(config.url).includes('switch') ? switchSim : analysis,
  status: 200, statusText: 'OK', headers: {}, config,
});

const css = /createGlobalStyle`([\s\S]*?)`;/.exec(mainSource)?.[1] ?? '';
const style = document.createElement('style');
style.textContent = css;
document.head.appendChild(style);

const { default: Page } = await import('./pages/OpportunitiesPage');
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><Page /></React.StrictMode>);
