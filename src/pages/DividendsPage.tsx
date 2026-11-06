import { useCallback, useEffect, useMemo, useState, type FormEvent } from 'react';
import axios from 'axios';
import { Check, ChevronRight, LoaderCircle, Pencil, Pause, PiggyBank, Play, Plus, RefreshCw, Trash2, TrendingUp, X } from 'lucide-react';
import styled from 'styled-components';
import { Button, EmptyState, Field, Modal, Panel, PanelTitle, PageHero } from '../components/ui';
import ConfirmDialog from '../components/ui/ConfirmDialog';
import MarketAnalysisTag from '../components/MarketAnalysisTag';
import { maskMoney, moneyFromNumber, parseMoney } from '../utils/format';
import {
  createDividendHolding, deleteDividendHolding, getDividendHoldings, getDividendPortfolio,
  getDividendCdiRate, getDividendProjection, getDividendTypes, getMarketOpportunities,
  refreshDividendPrices, updateDividendHolding,
} from '../api';
import type {
  DividendAssetType, DividendAssetTypeOption, DividendFilters, DividendFrequency, DividendHolding,
  DividendHoldingPayload, DividendPortfolio, DividendProjection, FiiSegment, MarketOpportunityItem,
  PaginatedDividendHoldings,
} from '../types';
import { qualityTagMeta, ratingMeta } from '../utils/rating';

const Page = styled.div`
  display: grid;
  gap: 20px;
`;

const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: 1.35fr repeat(3, minmax(0, 1fr));
  gap: 12px;
  @media (max-width: 1100px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 520px) { grid-template-columns: 1fr; }
`;

const SummaryCard = styled(Panel)<{ $tone?: 'income' | 'result'; $negative?: boolean }>`
  display: flex;
  min-width: 0;
  min-height: 116px;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  padding: 17px 19px;
  border-color: ${({ $tone, $negative }) => {
    if ($tone === 'income') return 'color-mix(in srgb, var(--success) 32%, var(--border))';
    if ($tone === 'result') return `color-mix(in srgb, ${$negative ? 'var(--error)' : 'var(--success)'} 32%, var(--border))`;
    return 'var(--border)';
  }};
  background: ${({ $tone, $negative }) => {
    if ($tone === 'income') return 'color-mix(in srgb, var(--success) 8%, var(--surface))';
    if ($tone === 'result') return `color-mix(in srgb, ${$negative ? 'var(--error)' : 'var(--success)'} 6%, var(--surface))`;
    return 'var(--surface)';
  }};
  small {
    display: flex;
    align-items: center;
    gap: 7px;
    color: var(--muted);
    font-size: 10px;
    font-weight: 800;
    letter-spacing: .07em;
    text-transform: uppercase;
  }
  small svg { width: 14px; height: 14px; color: var(--primary-strong); }
  strong {
    display: block;
    margin-top: 7px;
    overflow: hidden;
    color: ${({ $tone, $negative }) => {
      if ($tone === 'income') return 'var(--success)';
      if ($tone === 'result') return $negative ? 'var(--error)' : 'var(--success)';
      return 'var(--text)';
    }};
    font-size: clamp(18px, 2vw, 25px);
    font-variant-numeric: tabular-nums;
    letter-spacing: -.04em;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const SummaryNote = styled.span`
  display: block;
  margin-top: 3px;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.45;
`;

const ProjectionComparison = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 7px;
  > div + div {
    padding-left: 12px;
    border-left: 1px solid var(--border);
  }
  small {
    font-size: 10px;
  }
  strong {
    font-size: clamp(16px, 1.8vw, 22px);
  }
`;

const SectionHeading = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 15px;
  ${PanelTitle} { margin: 0; }
  @media (max-width: 520px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const BulkActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  @media (max-width: 520px) { justify-content: flex-start; }
`;

const SectionDescription = styled.p`
  margin: 6px 0 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.5;
`;

const PositionCount = styled.span`
  flex: 0 0 auto;
  padding: 6px 10px;
  border: 1px solid var(--border);
  border-radius: 999px;
  color: var(--muted);
  background: var(--surface-raised);
  font-size: 11px;
  font-weight: 750;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(280px, .75fr);
  gap: 18px;
  align-items: start;
  @media (max-width: 960px) { grid-template-columns: 1fr; }
`;

const AssetsPanel = styled(Panel)`
  padding: 18px;
`;

const Toolbar = styled.form`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr)) auto;
  align-items: end;
  gap: 10px;
  padding: 13px;
  margin-bottom: 17px;
  border: 1px solid var(--border);
  border-radius: 13px;
  background: var(--surface-raised);
  ${Field} { margin: 0; }
  @media (max-width: 1100px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 480px) { grid-template-columns: 1fr; }
`;

const ToolbarActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  @media (max-width: 1100px) { grid-column: 1 / -1; justify-content: flex-end; }
  @media (max-width: 480px) {
    justify-content: stretch;
    button { flex: 1; }
  }
`;

const ProjectionPanel = styled(Panel)`
  min-width: 0;
  padding: 19px;
`;

const ProjectionControls = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;
  padding: 13px;
  margin: 14px 0 17px;
  border: 1px solid var(--border);
  border-radius: 13px;
  background: var(--surface-raised);
  ${Field} { margin: 0; }
  @media (max-width: 520px) { grid-template-columns: 1fr; }
`;

const List = styled.div`
  display: grid;
  gap: 12px;
`;

const Card = styled.article<{ $inactive: boolean }>`
  display: grid;
  gap: 14px;
  padding: 16px 17px;
  border: 1px solid var(--border);
  border-radius: 16px;
  background:
    linear-gradient(180deg, color-mix(in srgb, var(--surface-raised) 70%, var(--surface)), var(--surface));
  box-shadow: 0 6px 18px var(--shadow);
  opacity: ${({ $inactive }) => $inactive ? 0.62 : 1};
  transition: border-color .15s ease, transform .15s ease, box-shadow .15s ease;
  &:hover {
    border-color: color-mix(in srgb, var(--primary) 40%, var(--border));
    transform: translateY(-1px);
    box-shadow: 0 10px 24px var(--shadow);
  }
`;

const CardTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  @media (max-width: 620px) { flex-direction: column; }
`;

const CardIdentity = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  min-width: 0;
`;

const TickerMark = styled.div`
  display: grid;
  width: 44px;
  height: 44px;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 12px;
  color: var(--primary-strong);
  background: color-mix(in srgb, var(--primary) 16%, var(--surface));
  font-size: 11px;
  font-weight: 850;
  letter-spacing: .02em;
`;

const CardTitle = styled.div`
  min-width: 0;
  h3 {
    margin: 0;
    color: var(--text);
    font-size: 16px;
    letter-spacing: -.02em;
    overflow-wrap: anywhere;
  }
  p {
    margin: 4px 0 0;
    color: var(--muted);
    font-size: 12px;
    line-height: 1.45;
  }
  details {
    margin-top: 8px;
    color: var(--muted);
    font-size: 11px;
  }
  summary {
    width: fit-content;
    color: var(--primary-strong);
    font-weight: 750;
    cursor: pointer;
  }
  details ul {
    display: grid;
    gap: 4px;
    margin: 6px 0 0;
    padding-left: 17px;
    line-height: 1.45;
  }
`;

const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 9px;
`;

const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border: 1px solid var(--border);
  border-radius: 999px;
  color: var(--muted);
  background: var(--surface);
  font-size: 10px;
  font-weight: 700;
`;

const ActivityChip = styled(Chip)<{ $active: boolean }>`
  border-color: ${({ $active }) => $active
    ? 'color-mix(in srgb, var(--success) 35%, var(--border))'
    : 'color-mix(in srgb, var(--error) 30%, var(--border))'};
  color: ${({ $active }) => $active ? 'var(--success)' : 'var(--error)'};
  background: ${({ $active }) => $active
    ? 'var(--success-soft)'
    : 'var(--error-soft)'};
`;

const Metrics = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  @media (max-width: 820px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
`;

const Metric = styled.div<{ $accent?: 'result' | 'income' | 'negative' }>`
  padding: 11px 12px;
  border: 1px solid ${({ $accent }) => {
    if ($accent === 'result') return 'color-mix(in srgb, var(--success) 35%, var(--border))';
    if ($accent === 'negative') return 'color-mix(in srgb, var(--error) 35%, var(--border))';
    if ($accent === 'income') return 'color-mix(in srgb, var(--primary) 35%, var(--border))';
    return 'var(--border)';
  }};
  border-radius: 12px;
  background: ${({ $accent }) => {
    if ($accent === 'result') return 'color-mix(in srgb, var(--success) 8%, var(--surface))';
    if ($accent === 'negative') return 'color-mix(in srgb, var(--error) 8%, var(--surface))';
    if ($accent === 'income') return 'color-mix(in srgb, var(--primary) 8%, var(--surface))';
    return 'var(--surface)';
  }};
  small {
    display: block;
    color: var(--muted);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: .04em;
    text-transform: uppercase;
  }
  strong {
    display: block;
    margin-top: 5px;
    color: ${({ $accent }) => {
      if ($accent === 'result') return 'var(--success)';
      if ($accent === 'negative') return 'var(--error)';
      if ($accent === 'income') return 'var(--primary-strong)';
      return 'var(--text)';
    }};
    font-size: 14px;
    letter-spacing: -.02em;
  }
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-top: 2px;
  color: var(--muted);
  font-size: 11px;
  @media (max-width: 620px) {
    align-items: stretch;
    flex-direction: column;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 6px;
  margin-left: auto;
`;

const IconButton = styled.button<{ $active?: boolean }>`
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border: 1px solid ${({ $active }) => $active
    ? 'color-mix(in srgb, var(--success) 35%, var(--border))'
    : 'color-mix(in srgb, var(--error) 30%, var(--border))'};
  border-radius: 9px;
  color: ${({ $active }) => $active ? 'var(--success)' : 'var(--error)'};
  background: ${({ $active }) => $active ? 'var(--success-soft)' : 'var(--error-soft)'};
  cursor: pointer;
  &:hover { border-color: ${({ $active }) => $active ? 'var(--success)' : 'var(--error)'}; }
  &:disabled { opacity: .55; cursor: not-allowed; }
  &[data-danger='true']:hover { color: var(--error); background: var(--error-soft); }
  svg { width: 15px; height: 15px; }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 14px;
  ${Field}:last-of-type { grid-column: 1 / -1; }
  @media (max-width: 620px) { grid-template-columns: 1fr; ${Field} { grid-column: auto; } }
`;

const FormActions = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: flex-end;
  gap: 9px;
`;

const Hint = styled.p`
  grid-column: 1 / -1;
  margin: 0 0 12px;
  color: var(--muted);
  font-size: 12px;
`;

const MonthRow = styled.button`
  display: grid;
  width: 100%;
  gap: 8px;
  padding: 11px 0;
  border: 0;
  border-bottom: 1px solid var(--border);
  color: var(--text);
  background: transparent;
  font: inherit;
  text-align: left;
  cursor: pointer;
  transition: background .15s ease, padding .15s ease;
  &:hover { background: color-mix(in srgb, var(--primary) 5%, transparent); }
  &:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; border-radius: 8px; }
  &:first-of-type { padding-top: 0; }
  &:last-child { padding-bottom: 0; border-bottom: 0; }
  > span:first-child { display: grid; grid-template-columns: minmax(0, 1fr) auto auto; align-items: center; gap: 8px; color: var(--text); font-size: 12px; }
  > span:first-child strong { font-weight: 750; }
  > span:first-child > span { color: var(--text); font-weight: 750; font-variant-numeric: tabular-nums; }
  > span:first-child svg { width: 15px; height: 15px; color: var(--muted); transition: color .15s ease, transform .15s ease; }
  &:hover > span:first-child svg { color: var(--primary); transform: translateX(2px); }
  small { overflow: hidden; color: var(--muted); font-size: 10px; text-overflow: ellipsis; white-space: nowrap; }
`;

const DividendModalContent = styled.div`
  display: grid;
  gap: 12px;
`;

const MonthTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 15px 16px;
  border: 1px solid color-mix(in srgb, var(--success) 30%, var(--border));
  border-radius: 14px;
  background: color-mix(in srgb, var(--success) 8%, var(--surface));
  small { display: block; color: var(--muted); font-size: 11px; }
  strong { display: block; margin-top: 3px; color: var(--success); font-size: 22px; font-variant-numeric: tabular-nums; letter-spacing: -.03em; }
  @media (max-width: 520px) { align-items: flex-start; flex-direction: column; }
`;

const DividendEntries = styled.div`
  display: grid;
  gap: 9px;
  max-height: 52vh;
  overflow-y: auto;
  padding-right: 3px;
`;

const DividendEntry = styled.article`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 14px;
  padding: 13px 14px;
  border: 1px solid var(--border);
  border-radius: 13px;
  background: var(--surface-raised);
  @media (max-width: 520px) { grid-template-columns: 1fr; gap: 9px; }
`;

const DividendInfo = styled.div`
  min-width: 0;
  h3 { margin: 0; color: var(--text); font-size: 14px; }
  p { margin: 4px 0 0; color: var(--muted); font-size: 12px; }
  small { display: block; margin-top: 7px; color: var(--muted); font-size: 11px; }
`;

const DividendPayout = styled.div`
  text-align: right;
  strong { display: block; color: var(--primary-strong); font-size: 15px; font-variant-numeric: tabular-nums; white-space: nowrap; }
  small { display: block; margin-top: 3px; color: var(--muted); font-size: 10px; }
  @media (max-width: 520px) { text-align: left; }
`;

const Track = styled.span`
  display: block;
  height: 8px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--surface-raised);
  > span { display: block; height: 100%; border-radius: inherit; background: var(--primary); }
`;

const PaginationBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 16px;
  color: var(--muted);
  font-size: 12px;
  @media (max-width: 520px) {
    align-items: stretch;
    flex-direction: column;
    > div { justify-content: space-between; }
  }
`;

interface FormState {
  ticker: string;
  name: string;
  asset_type: DividendAssetType;
  fii_segment: FiiSegment | '';
  quantity: string;
  applied_amount: string;
  cdi_percent: string;
  investment_date: string;
  average_price: string;
  current_price: string;
  dividend_per_share: string;
  frequency: DividendFrequency;
  reference_month: string;
  payment_day: string;
  is_active: boolean;
  notes: string;
}

const fallbackTypes: DividendAssetTypeOption[] = [
  { id: 'fii', label: 'FII', default_frequency: 'mensal', auto_quote: true, quote_market: 'b3', uses_fii_segment: true },
  { id: 'fiagro', label: 'Fiagro', default_frequency: 'mensal', auto_quote: true, quote_market: 'b3', uses_fii_segment: true },
  { id: 'acao', label: 'Ação', default_frequency: 'trimestral', auto_quote: true, quote_market: 'b3', uses_fii_segment: false },
  { id: 'bdr', label: 'BDR', default_frequency: 'trimestral', auto_quote: true, quote_market: 'b3', uses_fii_segment: false },
  { id: 'etf', label: 'ETF', default_frequency: 'trimestral', auto_quote: true, quote_market: 'b3', uses_fii_segment: false },
  { id: 'fundo', label: 'Fundo', default_frequency: 'mensal', auto_quote: false, quote_market: null, uses_fii_segment: false },
  { id: 'tesouro', label: 'Tesouro', default_frequency: 'semestral', auto_quote: false, quote_market: null, uses_fii_segment: false },
  { id: 'cdb', label: 'CDB', default_frequency: 'mensal', auto_quote: false, quote_market: null, uses_fii_segment: false },
  { id: 'lci_lca', label: 'LCI/LCA', default_frequency: 'mensal', auto_quote: false, quote_market: null, uses_fii_segment: false },
  { id: 'debenture', label: 'Debênture', default_frequency: 'semestral', auto_quote: false, quote_market: null, uses_fii_segment: false },
  { id: 'previdencia', label: 'Previdência', default_frequency: 'mensal', auto_quote: false, quote_market: null, uses_fii_segment: false },
  { id: 'cripto', label: 'Cripto', default_frequency: 'mensal', auto_quote: true, quote_market: 'crypto', uses_fii_segment: false },
  { id: 'acao_us', label: 'Ação EUA', default_frequency: 'trimestral', auto_quote: true, quote_market: 'us', uses_fii_segment: false },
  { id: 'renda_fixa', label: 'Renda fixa', default_frequency: 'mensal', auto_quote: false, quote_market: null, uses_fii_segment: false },
  { id: 'outro', label: 'Outro', default_frequency: 'mensal', auto_quote: false, quote_market: null, uses_fii_segment: false },
];

const segmentLabels: Record<FiiSegment, string> = { papel: 'Papel', tijolo: 'Tijolo', hibrido: 'Híbrido' };
const frequencyLabels: Record<DividendFrequency, string> = {
  mensal: 'Mensal', trimestral: 'Trimestral', semestral: 'Semestral', anual: 'Anual',
};
const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const perShare = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 4 });

function money(value: number | string | undefined): string {
  return currency.format(Number(value) || 0);
}

const PRICE_REFRESH_DAY_KEY = 'dividends-price-refresh-day';

function currentMonth(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
}

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

function shouldAutoRefreshPrices() {
  try {
    return localStorage.getItem(PRICE_REFRESH_DAY_KEY) !== todayKey();
  } catch {
    return true;
  }
}

function markPricesRefreshedToday() {
  try {
    localStorage.setItem(PRICE_REFRESH_DAY_KEY, todayKey());
  } catch {
    /* ignore storage errors */
  }
}

function formatPriceUpdatedAt(value?: string | null) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' });
}

function paymentDateLabel(value: string) {
  const [year, month, day] = value.slice(0, 10).split('-').map(Number);
  const date = new Date(year, month - 1, day);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString('pt-BR', { dateStyle: 'long' });
}

function quantityLabel(value: number | string) {
  return new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 4 }).format(Number(value) || 0);
}

function monthLabel(value: string): string {
  const [year, month] = value.split('-');
  return `${monthNames[Number(month) - 1]?.slice(0, 3) ?? month}/${year}`;
}

function emptyForm(types: DividendAssetTypeOption[], assetType?: DividendAssetType): FormState {
  const first = assetType ? types.find(type => type.id === assetType) : types[0];
  const selected = first ?? fallbackTypes.find(type => type.id === assetType) ?? fallbackTypes[0];
  return {
    ticker: '', name: '', asset_type: selected.id, fii_segment: '', quantity: '', applied_amount: '', cdi_percent: '', investment_date: '',
    average_price: '', current_price: '',
    dividend_per_share: '', frequency: selected.default_frequency,
    reference_month: '1', payment_day: '15', is_active: true, notes: '',
  };
}

function formFrom(holding: DividendHolding): FormState {
  return {
    ticker: holding.ticker,
    name: holding.name ?? '',
    asset_type: holding.asset_type,
    fii_segment: holding.fii_segment ?? '',
    quantity: String(Number(holding.quantity)),
    applied_amount: holding.applied_amount == null ? '' : moneyFromNumber(Number(holding.applied_amount)),
    cdi_percent: holding.cdi_percent == null ? '' : String(Number(holding.cdi_percent)),
    investment_date: holding.investment_date?.slice(0, 10) ?? '',
    average_price: Number(holding.average_price) ? moneyFromNumber(Number(holding.average_price)) : '',
    current_price: holding.current_price == null ? '' : moneyFromNumber(Number(holding.current_price)),
    dividend_per_share: Number(holding.dividend_per_share) ? moneyFromNumber(Number(holding.dividend_per_share)) : '',
    frequency: holding.frequency,
    reference_month: String(holding.reference_month),
    payment_day: String(holding.payment_day),
    is_active: holding.is_active,
    notes: holding.notes ?? '',
  };
}

function makePayload(form: FormState, editing: DividendHolding | null = null): DividendHoldingPayload {
  if (form.asset_type === 'renda_fixa') {
    const appliedAmount = parseMoney(form.applied_amount);
    const cdiPercent = Number(form.cdi_percent.replace(',', '.'));
    const investmentDate = form.investment_date;
    const dateParts = investmentDate.split('-').map(Number);
    const parsedDate = new Date(Date.UTC(dateParts[0], dateParts[1] - 1, dateParts[2]));
    if (!Number.isFinite(appliedAmount) || appliedAmount <= 0) throw new Error('Informe um valor aplicado maior que zero.');
    if (!Number.isFinite(cdiPercent) || cdiPercent < 0) throw new Error('O percentual do CDI não pode ser negativo.');
    if (
      !/^\d{4}-\d{2}-\d{2}$/.test(investmentDate)
      || Number.isNaN(parsedDate.getTime())
      || parsedDate.getUTCFullYear() !== dateParts[0]
      || parsedDate.getUTCMonth() !== dateParts[1] - 1
      || parsedDate.getUTCDate() !== dateParts[2]
    ) {
      throw new Error('Informe uma data de investimento válida.');
    }
    if (!form.cdi_percent.trim()) throw new Error('Informe o percentual do CDI.');
    const paymentDay = Number(form.payment_day);
    if (!Number.isInteger(paymentDay) || paymentDay < 1 || paymentDay > 31) throw new Error('O dia do pagamento deve ser de 1 a 31.');
    return {
      ticker: form.ticker.trim().toUpperCase(),
      name: form.name.trim() || null,
      asset_type: 'renda_fixa',
      applied_amount: appliedAmount,
      cdi_percent: cdiPercent,
      investment_date: investmentDate,
      payment_day: paymentDay,
      is_active: form.is_active,
      notes: form.notes.trim() || null,
    };
  }

  const quantity = Number(form.quantity.replace(',', '.'));
  if (!Number.isFinite(quantity) || quantity <= 0) throw new Error('Informe uma quantidade de cotas maior que zero.');
  const dividend = parseMoney(form.dividend_per_share);
  if (!Number.isFinite(dividend) || dividend < 0) throw new Error('O provento por cota não pode ser negativo.');
  const paymentDay = Number(form.payment_day);
  const averagePrice = parseMoney(form.average_price);
  if (!Number.isFinite(averagePrice) || averagePrice < 0) throw new Error('O preço médio não pode ser negativo.');
  const currentPrice = form.current_price ? parseMoney(form.current_price) : null;
  if (currentPrice !== null && (!Number.isFinite(currentPrice) || currentPrice < 0)) throw new Error('O preço atual não pode ser negativo.');
  if (!Number.isInteger(paymentDay) || paymentDay < 1 || paymentDay > 31) throw new Error('O dia de pagamento deve ser de 1 a 31.');

  // Reenviar o preço automático sem alteração desligaria a atualização automática no backend.
  const keepAuto = Boolean(editing?.auto_price) && form.current_price === formFrom(editing!).current_price;

  return {
    ticker: form.ticker.trim().toUpperCase(),
    name: form.name.trim() || null,
    asset_type: form.asset_type,
    fii_segment: form.fii_segment || null,
    quantity,
    average_price: averagePrice,
    ...(keepAuto ? {} : { current_price: currentPrice }),
    dividend_per_share: dividend,
    frequency: form.frequency,
    reference_month: Number(form.reference_month),
    payment_day: paymentDay,
    is_active: form.is_active,
    notes: form.notes.trim() || null,
  };
}

function getErrorMessage(error: unknown, fallback: string): string {
  if (axios.isAxiosError<{ error?: string }>(error)) {
    if (error.response?.status === 409) return error.response.data?.error || 'Você já cadastrou este ativo.';
    return error.response?.data?.error || fallback;
  }
  if (error instanceof Error) return error.message;
  return fallback;
}

interface DividendsPageProps {
  assetType?: DividendAssetType;
}

export default function DividendsPage({ assetType }: DividendsPageProps) {
  const isFixedIncome = assetType === 'renda_fixa';
  const [assetTypes, setAssetTypes] = useState<DividendAssetTypeOption[]>(fallbackTypes);
  const [result, setResult] = useState<PaginatedDividendHoldings>();
  const [marketRatings, setMarketRatings] = useState<Map<string, MarketOpportunityItem>>(() => new Map());
  const [marketRatingsError, setMarketRatingsError] = useState('');
  const [marketRatingsLoaded, setMarketRatingsLoaded] = useState(false);
  const [projection, setProjection] = useState<DividendProjection>();
  const [selectedMonth, setSelectedMonth] = useState<DividendProjection['months'][number] | null>(null);
  const [portfolio, setPortfolio] = useState<DividendPortfolio>();
  const [from, setFrom] = useState(currentMonth());
  const [months, setMonths] = useState(12);
  const [cdiRate, setCdiRate] = useState('');
  const [cdiReferenceDate, setCdiReferenceDate] = useState('');
  const [cdiRateLoading, setCdiRateLoading] = useState(isFixedIncome);
  const [cdiRateError, setCdiRateError] = useState('');
  const [filters, setFilters] = useState<DividendFilters>(() => ({ ...(assetType ? { asset_type: assetType } : {}), page: 1, limit: 20 }));
  const [draft, setDraft] = useState({ asset_type: assetType ?? '', fii_segment: '', active: '', search: '' });
  const [form, setForm] = useState<FormState>(() => emptyForm(fallbackTypes));
  const [editing, setEditing] = useState<DividendHolding | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [pendingDelete, setPendingDelete] = useState<DividendHolding | null>(null);
  const [togglingIds, setTogglingIds] = useState<Set<string>>(() => new Set());
  const [bulkChanging, setBulkChanging] = useState(false);
  const [hasActiveHoldings, setHasActiveHoldings] = useState<boolean | null>(null);
  const [loadingActivityStatus, setLoadingActivityStatus] = useState(true);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [bulkError, setBulkError] = useState('');
  const [notice, setNotice] = useState('');
  const [refreshVersion, setRefreshVersion] = useState(0);
  const [refreshingPrices, setRefreshingPrices] = useState(false);

  const closeForm = useCallback(() => setFormOpen(false), []);

  const typeById = useMemo(
    () => new Map(assetTypes.map(type => [type.id, type])),
    [assetTypes],
  );

  const selectedType = typeById.get(form.asset_type) ?? assetTypes[0];
  const showSegmentField = Boolean(selectedType?.uses_fii_segment);
  const needsReference = form.frequency !== 'mensal';

  useEffect(() => {
    let active = true;
    void getDividendTypes()
      .then(types => {
        if (!active || !types.length) return;
        setAssetTypes(types);
      })
      .catch(() => {
        /* fallbackTypes already in state */
      });
    return () => { active = false; };
  }, []);

  useEffect(() => {
    if (!isFixedIncome) return undefined;
    let active = true;
    setCdiRateLoading(true);
    setCdiRateError('');
    void getDividendCdiRate()
      .then(result => {
        if (!active) return;
        setCdiRate(result.rate.toString());
        setCdiReferenceDate(result.reference_date);
      })
      .catch(loadError => {
        if (!active) return;
        setCdiRateError(getErrorMessage(loadError, 'Não foi possível carregar o CDI do Banco Central. Informe a taxa manualmente.'));
      })
      .finally(() => {
        if (active) setCdiRateLoading(false);
      });
    return () => { active = false; };
  }, [isFixedIncome]);

  useEffect(() => {
    if (isFixedIncome) return undefined;
    let active = true;
    setMarketRatings(new Map());
    setMarketRatingsError('');
    setMarketRatingsLoaded(false);
    void getMarketOpportunities('moderado')
      .then(data => {
        if (!active) return;
        const ratings = new Map<string, MarketOpportunityItem>();
        [...data.assets, ...data.portfolio].forEach(item => {
          if (item.ticker && item.class_id) {
            ratings.set(`${item.class_id}:${item.ticker.toUpperCase()}`, item);
          }
        });
        setMarketRatings(ratings);
        setMarketRatingsLoaded(true);
      })
      .catch(loadError => {
        if (active) {
          setMarketRatingsError(getErrorMessage(loadError, 'Não foi possível carregar as etiquetas de análise de mercado.'));
          setMarketRatingsLoaded(true);
        }
      });
    return () => { active = false; };
  }, [isFixedIncome, refreshVersion]);

  useEffect(() => {
    let active = true;
    setLoading(true);
    const parsedCdiRate = Number(cdiRate.replace(',', '.'));
    const validCdiRate = !isFixedIncome || (cdiRate.trim() !== '' && Number.isFinite(parsedCdiRate) && parsedCdiRate >= 0);
    if (cdiRateError) setError(cdiRateError);
    else if (cdiRateLoading) setError('');
    else setError(validCdiRate ? '' : 'Informe uma taxa CDI anual válida para carregar a projeção.');
    Promise.all([
      getDividendHoldings(filters),
      validCdiRate && !cdiRateLoading
        ? getDividendProjection(from, months, isFixedIncome ? parsedCdiRate : undefined)
        : Promise.resolve(undefined),
      getDividendPortfolio(),
    ]).then(([loaded, loadedProjection, loadedPortfolio]) => {
      if (!active) return;
      setResult(loaded);
      if (loadedProjection) setProjection(loadedProjection);
      setPortfolio(loadedPortfolio);
    }).catch(loadError => {
      if (active) setError(getErrorMessage(loadError, 'Não foi possível carregar os dividendos.'));
    }).finally(() => {
      if (active) setLoading(false);
    });
    return () => { active = false; };
  }, [filters, from, months, cdiRate, isFixedIncome, cdiRateLoading, cdiRateError, refreshVersion]);

  const refreshPrices = useCallback(async (options?: { silent?: boolean; force?: boolean }) => {
    const silent = Boolean(options?.silent);
    setRefreshingPrices(true);
    if (!silent) setError('');
    try {
      const outcome = await refreshDividendPrices();
      markPricesRefreshedToday();
      if (!silent || outcome.updated_count > 0 || outcome.failed_count > 0) {
        setNotice(outcome.failed_count
          ? `${outcome.updated_count} cotação(ões) atualizada(s); ${outcome.failed_count} indisponível(is).`
          : outcome.updated_count
            ? `${outcome.updated_count} cotação(ões) atualizada(s) automaticamente.`
            : 'Cotações já estavam atualizadas.');
      }
      setRefreshVersion(version => version + 1);
    } catch (refreshError) {
      if (!silent) setError(getErrorMessage(refreshError, 'Não foi possível atualizar as cotações.'));
    } finally {
      setRefreshingPrices(false);
    }
  }, []);

  useEffect(() => {
    if (isFixedIncome || !shouldAutoRefreshPrices()) return;
    void refreshPrices({ silent: true });
  }, [isFixedIncome, refreshPrices]);

  useEffect(() => {
    let active = true;
    setLoadingActivityStatus(true);
    void getDividendHoldings({
      ...(isFixedIncome ? { asset_type: 'renda_fixa' } : {}),
      active: true,
      page: 1,
      limit: 1,
    })
      .then(response => {
        if (active) setHasActiveHoldings(response.pagination.total > 0);
      })
      .catch(statusError => {
        if (!active) return;
        setHasActiveHoldings(null);
        setBulkError(getErrorMessage(statusError, 'Não foi possível verificar a situação dos ativos.'));
      })
      .finally(() => {
        if (active) setLoadingActivityStatus(false);
      });
    return () => { active = false; };
  }, [isFixedIncome, refreshVersion]);

  function openCreate() {
    setEditing(null);
    setForm(emptyForm(assetTypes, assetType));
    setFormOpen(true);
  }

  function openEdit(holding: DividendHolding) {
    setEditing(holding);
    setForm(formFrom(holding));
    setFormOpen(true);
  }

  function changeAssetType(nextType: DividendAssetType) {
    const option = typeById.get(nextType);
    setForm(current => ({
      ...current,
      asset_type: nextType,
      frequency: option?.default_frequency ?? current.frequency,
      fii_segment: option?.uses_fii_segment ? current.fii_segment : '',
    }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setNotice('');
    setSaving(true);
    try {
      const payload = makePayload(form, editing);
      const saved = editing
        ? await updateDividendHolding(editing.id, payload)
        : await createDividendHolding(payload);
      if (isFixedIncome) {
        const appliedAmount = parseMoney(form.applied_amount);
        const cdiPercent = Number(form.cdi_percent.replace(',', '.'));
        const valuesWereSaved = Number.isFinite(Number(saved.applied_amount))
          && Math.abs(Number(saved.applied_amount) - appliedAmount) < 0.01
          && Number.isFinite(Number(saved.cdi_percent))
          && Math.abs(Number(saved.cdi_percent) - cdiPercent) < 0.005
          && saved.investment_date?.slice(0, 10) === form.investment_date;
        if (!valuesWereSaved) {
          setFormOpen(false);
          setEditing(null);
          setRefreshVersion(version => version + 1);
          setError('O servidor não confirmou o valor aplicado, o percentual do CDI e a data. Atualize/reinicie o backend antes de cadastrar novamente.');
          return;
        }
      }
      setFormOpen(false);
      setEditing(null);
      setNotice(editing ? 'Ativo atualizado.' : 'Ativo cadastrado.');
      setRefreshVersion(version => version + 1);
    } catch (saveError) {
      setError(getErrorMessage(saveError, 'Não foi possível salvar o ativo.'));
    } finally {
      setSaving(false);
    }
  }

  async function toggleActive(holding: DividendHolding) {
    const holdingId = String(holding.id);
    if (togglingIds.has(holdingId)) return;
    setTogglingIds(current => new Set(current).add(holdingId));
    setError('');
    setNotice('');
    try {
      const updated = await updateDividendHolding(holding.id, { is_active: !holding.is_active });
      const valuesWerePreserved = updated.is_active === !holding.is_active
        && Number(updated.invested_amount) === Number(holding.invested_amount)
        && Number(updated.current_value) === Number(holding.current_value);
      if (!valuesWerePreserved) {
        setRefreshVersion(version => version + 1);
        setError('O servidor não preservou os valores do ativo ao alterar a situação. Atualize/reinicie o backend antes de tentar novamente.');
        return;
      }
      setRefreshVersion(version => version + 1);
    } catch (toggleError) {
      setError(getErrorMessage(toggleError, 'Não foi possível alterar o ativo.'));
    } finally {
      setTogglingIds(current => {
        const next = new Set(current);
        next.delete(holdingId);
        return next;
      });
    }
  }

  async function toggleAllActive() {
    if (bulkChanging || loading) return;
    const category = isFixedIncome ? 'investimentos de renda fixa' : 'ativos de dividendos';
    setBulkChanging(true);
    setError('');
    setBulkError('');
    setNotice('');
    let changedCount = 0;
    let isActive = false;
    try {
      const baseFilters: DividendFilters = {
        ...(isFixedIncome ? { asset_type: 'renda_fixa' as const } : {}),
        page: 1,
        limit: 100,
      };
      const firstPage = await getDividendHoldings(baseFilters);
      const allHoldings = [...firstPage.data];
      for (let page = 2; page <= firstPage.pagination.totalPages; page += 1) {
        const nextPage = await getDividendHoldings({ ...baseFilters, page });
        allHoldings.push(...nextPage.data);
      }

      const categoryHoldings = allHoldings.filter(holding => (
        isFixedIncome
          ? holding.asset_type === 'renda_fixa'
          : holding.asset_type !== 'renda_fixa'
      ));
      if (!categoryHoldings.length) {
        setNotice(`Nenhum ${isFixedIncome ? 'investimento de renda fixa' : 'ativo de dividendos'} cadastrado.`);
        return;
      }
      isActive = !categoryHoldings.some(holding => holding.is_active);
      const targets = categoryHoldings.filter(holding => holding.is_active !== isActive);
      if (!targets.length) {
        setNotice(`Todos os ${category} já estão ${isActive ? 'ativos' : 'desativados'}.`);
        return;
      }

      for (const holding of targets) {
        const updated = await updateDividendHolding(holding.id, { is_active: isActive });
        const valuesWerePreserved = updated.is_active === isActive
          && Number(updated.invested_amount) === Number(holding.invested_amount)
          && Number(updated.current_value) === Number(holding.current_value);
        if (!valuesWerePreserved) {
          throw new Error(`O servidor não confirmou a situação ou preservou os valores de ${holding.ticker}.`);
        }
        changedCount += 1;
      }

      setNotice(`${changedCount} ${category} ${isActive ? 'ativados' : 'desativados'} com sucesso.`);
    } catch (operationError) {
      const verb = isActive ? 'ativar' : 'desativar';
      const message = getErrorMessage(operationError, `Não foi possível ${verb} todos os ${category}.`);
      setBulkError(changedCount
        ? `Ação parcial: ${changedCount} ${category} foram ${isActive ? 'ativados' : 'desativados'} antes da falha. ${message}`
        : message);
    } finally {
      if (changedCount > 0) {
        setLoadingActivityStatus(true);
        setRefreshVersion(version => version + 1);
      }
      setBulkChanging(false);
    }
  }

  async function confirmDelete() {
    if (!pendingDelete) return;
    setError('');
    setNotice('');
    try {
      await deleteDividendHolding(pendingDelete.id);
      setNotice('Ativo removido.');
      setRefreshVersion(version => version + 1);
    } catch (deleteError) {
      setError(getErrorMessage(deleteError, 'Não foi possível excluir o ativo.'));
    } finally {
      setPendingDelete(null);
    }
  }

  function applyFilters(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFilters({
      asset_type: assetType ?? (draft.asset_type || undefined) as DividendAssetType | undefined,
      fii_segment: (draft.fii_segment || undefined) as FiiSegment | undefined,
      active: draft.active ? draft.active === 'true' : undefined,
      search: draft.search.trim() || undefined,
      page: 1,
      limit: 20,
    });
  }

  function clearFilters() {
    setDraft({ asset_type: assetType ?? '', fii_segment: '', active: '', search: '' });
    setFilters({ ...(assetType ? { asset_type: assetType } : {}), page: 1, limit: 20 });
  }

  function assetLabel(type: DividendAssetType | string) {
    return typeById.get(type as DividendAssetType)?.label ?? String(type);
  }

  const holdings = result?.data ?? [];
  const pagination = result?.pagination;
  const displayedProjection = isFixedIncome && projection
    ? (() => {
      const monthsWithFixedIncome = projection.months.map(month => {
        const items = month.items.filter(item => item.asset_type === assetType);
        const grossTotal = items.reduce((total, item) => total + (Number(item.gross_amount ?? item.amount) || 0), 0);
        const taxTotal = items.reduce((total, item) => total + (Number(item.tax_amount) || 0), 0);
        const netTotal = items.reduce((total, item) => total + (Number(item.net_amount ?? item.amount) || 0), 0);
        return {
          ...month,
          items,
          gross_total: grossTotal,
          tax_total: taxTotal,
          income_tax_rate: grossTotal ? taxTotal / grossTotal : 0,
          net_total: netTotal,
          total: netTotal,
        };
      });
      const grossTotal = monthsWithFixedIncome.reduce((total, month) => total + Number(month.gross_total), 0);
      const taxTotal = monthsWithFixedIncome.reduce((total, month) => total + Number(month.tax_total), 0);
      const netTotal = monthsWithFixedIncome.reduce((total, month) => total + Number(month.net_total), 0);
      return {
        ...projection,
        months: monthsWithFixedIncome,
        gross_total: grossTotal,
        tax_total: taxTotal,
        income_tax_rate: grossTotal ? taxTotal / grossTotal : 0,
        total: netTotal,
        net_total: netTotal,
        period_total: netTotal,
        monthly_average: projection.months_count ? netTotal / projection.months_count : 0,
        monthly_average_gross: projection.months_count ? grossTotal / projection.months_count : 0,
        monthly_average_tax: projection.months_count ? taxTotal / projection.months_count : 0,
      };
    })()
    : projection;
  const fixedIncomeGroup = portfolio?.by_asset_type.find(group => group.key === assetType);
  const displayedPortfolio = isFixedIncome && portfolio
    ? {
      ...portfolio,
      holdings_count: fixedIncomeGroup?.holdings_count ?? 0,
      invested_total: fixedIncomeGroup?.invested_total ?? 0,
      current_total: fixedIncomeGroup?.current_total ?? 0,
      profit_loss: fixedIncomeGroup?.profit_loss ?? 0,
      profit_loss_percent: Number(fixedIncomeGroup?.invested_total)
        ? Number(fixedIncomeGroup?.profit_loss) / Number(fixedIncomeGroup?.invested_total) * 100
        : 0,
    }
    : portfolio;
  const projectedMonths = displayedProjection?.months ?? [];
  const maxMonth = Math.max(...projectedMonths.map(month => Number(month.total) || 0), 1);
  const profitLoss = Number(displayedPortfolio?.profit_loss) || 0;
  const pricesUpdatedLabel = isFixedIncome ? null : formatPriceUpdatedAt(portfolio?.prices_updated_at);
  const hasAppliedFilters = Boolean(
    filters.asset_type || filters.fii_segment || filters.active !== undefined || filters.search,
  );

  return (
    <Page>
      <PageHero>
        <div>
          <span><PiggyBank size={14} />{isFixedIncome ? 'Renda fixa' : 'Dividendos'}</span>
          <h1>{isFixedIncome ? 'Acompanhe seus investimentos de renda fixa.' : 'Sua renda passiva, mês a mês.'}</h1>
          <p>{isFixedIncome
            ? 'Cadastre cada produto e acompanhe o capital investido, o valor atual e a estimativa de rendimento mensal.'
            : 'Cotações de ativos com auto cotação atualizam sozinhas uma vez por dia. O provento projetado é uma estimativa, não uma garantia de pagamento.'}</p>
          {pricesUpdatedLabel && (
            <p style={{ marginTop: 8, color: 'var(--muted)', fontSize: 12 }}>
              Última atualização de cotações: {pricesUpdatedLabel}
            </p>
          )}
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {!isFixedIncome && (
            <Button type="button" onClick={() => void refreshPrices({ force: true })} disabled={refreshingPrices}>
              <RefreshCw />{refreshingPrices ? 'Atualizando...' : 'Atualizar cotações'}
            </Button>
          )}
          <Button type="button" $variant="primary" onClick={openCreate}><Plus />{isFixedIncome ? 'Novo investimento' : 'Novo ativo'}</Button>
        </div>
      </PageHero>

      {error && <Panel role="alert" style={{ color: 'var(--error)', padding: 14 }}>{error}</Panel>}
      {bulkError && <Panel role="alert" style={{ color: 'var(--error)', padding: 14 }}>{bulkError}</Panel>}
      {notice && <Panel role="status" style={{ color: 'var(--primary-strong)', padding: 14 }}>{notice}</Panel>}

      <SummaryGrid aria-label="Resumo da carteira">
        <SummaryCard $tone="income">
          <div>
            <small><PiggyBank size={14} />Estimativa mensal</small>
            {isFixedIncome ? (
              <>
                <ProjectionComparison aria-label="Comparação de rendimento bruto e líquido">
                  <div>
                    <small>Bruto</small>
                    <strong>{money(displayedProjection?.monthly_average_gross)}</strong>
                  </div>
                  <div>
                    <small>Líquido</small>
                    <strong>{money(displayedProjection?.monthly_average)}</strong>
                  </div>
                </ProjectionComparison>
                <SummaryNote>
                  No período: bruto {money(displayedProjection?.gross_total)} − IR {money(displayedProjection?.tax_total)} = líquido {money(displayedProjection?.period_total)} · {months} meses
                </SummaryNote>
              </>
            ) : (
              <>
                <strong>{money(displayedProjection?.monthly_average)}</strong>
                <SummaryNote>{money(displayedProjection?.period_total)} no período · {months} meses</SummaryNote>
              </>
            )}
          </div>
        </SummaryCard>
        <SummaryCard>
          <div>
            <small>Total investido</small>
            <strong>{money(displayedPortfolio?.invested_total)}</strong>
            <SummaryNote>Capital aplicado</SummaryNote>
          </div>
        </SummaryCard>
        <SummaryCard>
          <div>
            <small>Valor atual da carteira</small>
            <strong>{money(displayedPortfolio?.current_total)}</strong>
            <SummaryNote>Valor de mercado da carteira</SummaryNote>
          </div>
        </SummaryCard>
        <SummaryCard $tone="result" $negative={profitLoss < 0}>
          <div>
            <small><TrendingUp size={14} />Resultado</small>
            <strong>{money(displayedPortfolio?.profit_loss)}</strong>
            <SummaryNote>
              {displayedPortfolio?.profit_loss_percent != null
                ? `${profitLoss < 0 ? '' : '+'}${Number(displayedPortfolio.profit_loss_percent).toFixed(2)}% sobre o investido`
                : 'Variação da carteira'}
            </SummaryNote>
          </div>
        </SummaryCard>
      </SummaryGrid>

      <ContentGrid>
        <AssetsPanel>
          <SectionHeading>
            <div>
              <PanelTitle><PiggyBank size={19} />Meus ativos</PanelTitle>
              <SectionDescription>Consulte valores, proventos e situação de cada posição.</SectionDescription>
            </div>
            <BulkActions>
              <PositionCount>{Number(displayedPortfolio?.holdings_count) || pagination?.total || 0} ativos</PositionCount>
              <Button
                type="button"
                $variant={hasActiveHoldings ? 'danger' : 'primary'}
                title={hasActiveHoldings ? 'Desativar todos os ativos desta lista.' : 'Ativar todos os ativos desta lista.'}
                disabled={loading || loadingActivityStatus || hasActiveHoldings === null || bulkChanging}
                onClick={() => void toggleAllActive()}
              >
                {bulkChanging || loadingActivityStatus
                  ? <LoaderCircle className="spin" />
                  : hasActiveHoldings ? <Pause /> : <Play />}
                {bulkChanging
                  ? 'Atualizando situação...'
                  : loadingActivityStatus
                    ? 'Verificando situação...'
                    : hasActiveHoldings ? 'Desativar todos' : 'Ativar todos'}
              </Button>
            </BulkActions>
          </SectionHeading>
          <Toolbar onSubmit={applyFilters}>
            {!isFixedIncome && (
              <Field htmlFor="div-filter-type">Tipo
                <select id="div-filter-type" value={draft.asset_type} onChange={event => setDraft(current => ({ ...current, asset_type: event.target.value }))}>
                  <option value="">Todos</option>
                  {assetTypes.map(type => <option key={type.id} value={type.id}>{type.label}</option>)}
                </select>
              </Field>
            )}
            <Field htmlFor="div-filter-segment">Segmento
              <select id="div-filter-segment" value={draft.fii_segment} onChange={event => setDraft(current => ({ ...current, fii_segment: event.target.value }))}>
                <option value="">Todos</option>
                {(Object.keys(segmentLabels) as FiiSegment[]).map(segment => <option key={segment} value={segment}>{segmentLabels[segment]}</option>)}
              </select>
            </Field>
            <Field htmlFor="div-filter-active">Situação
              <select id="div-filter-active" value={draft.active} onChange={event => setDraft(current => ({ ...current, active: event.target.value }))}>
                <option value="">Todos</option>
                <option value="true">Ativos</option>
                <option value="false">Inativos</option>
              </select>
            </Field>
            <Field htmlFor="div-filter-search">Buscar ativo
              <input id="div-filter-search" type="search" value={draft.search} onChange={event => setDraft(current => ({ ...current, search: event.target.value }))} placeholder="Ticker ou nome" />
            </Field>
            <ToolbarActions>
              <Button type="submit">Aplicar filtros</Button>
              {hasAppliedFilters && <Button type="button" onClick={clearFilters}>Limpar</Button>}
            </ToolbarActions>
          </Toolbar>

          {!isFixedIncome && (
            <SectionDescription role={marketRatingsError ? 'alert' : 'note'} style={{ marginTop: -8 }}>
              {marketRatingsError
                ? `${marketRatingsError} As etiquetas de análise podem não estar disponíveis.`
                : 'Perfil moderado. FIIs: patrimônio, idade, P/VP, regularidade dos proventos, retorno e risco histórico; vacância não disponível em fonte padronizada. Ações: retorno ajustado por proventos, CDI, volatilidade e queda máxima; sem balanços, lucro ou dívida. Nota 65+ favorável; 45–64 neutra; 30–44 atenção; abaixo de 30 evitar.'}
            </SectionDescription>
          )}

          {loading ? (
            <EmptyState><LoaderCircle /><p>Carregando ativos...</p></EmptyState>
          ) : holdings.length ? (
            <List>
              {holdings.map(holding => {
                const fixedIncomeProjectionItem = holding.asset_type === 'renda_fixa'
                  ? projectedMonths[0]?.items.find(item => String(item.holding_id) === String(holding.id))
                  : undefined;
                const grossFixedIncomeEstimate = Number(
                  fixedIncomeProjectionItem?.gross_amount ?? fixedIncomeProjectionItem?.amount ?? 0,
                );
                const fixedIncomeEstimate = Number(
                  fixedIncomeProjectionItem?.net_amount ?? fixedIncomeProjectionItem?.amount ?? 0,
                );
                const estimatedTax = Number(
                  fixedIncomeProjectionItem?.tax_amount
                    ?? Math.max(grossFixedIncomeEstimate - fixedIncomeEstimate, 0),
                );
                const estimatedPayment = holding.asset_type === 'renda_fixa'
                  ? fixedIncomeEstimate
                  : (Number(holding.quantity) || 0) * (Number(holding.dividend_per_share) || 0);
                const holdingResult = Number(holding.profit_loss) || 0;
                const resultNegative = holdingResult < 0;
                const mark = holding.ticker.slice(0, 4);
                const analysisClass = holding.asset_type === 'fii' || holding.asset_type === 'fiagro'
                  ? 'fiis'
                  : ['acao', 'bdr', 'etf'].includes(holding.asset_type) ? 'acoes_br' : undefined;
                const marketRating = analysisClass
                  ? marketRatings.get(`${analysisClass}:${holding.ticker.toUpperCase()}`)
                  : undefined;
                const qualityTag = marketRating
                  ? qualityTagMeta(analysisClass, marketRating.rating, marketRating.analysis_type)
                  : undefined;
                return (
                  <Card key={String(holding.id)} $inactive={!holding.is_active}>
                    <CardTop>
                      <CardIdentity>
                        <TickerMark title={holding.ticker}>{mark}</TickerMark>
                        <CardTitle>
                          <h3>{holding.ticker}</h3>
                          <p>{holding.name || assetLabel(holding.asset_type)}</p>
                          <ChipRow>
                            <Chip>{assetLabel(holding.asset_type)}</Chip>
                            {holding.fii_segment && <Chip>{segmentLabels[holding.fii_segment]}</Chip>}
                            {qualityTag && (
                              <MarketAnalysisTag
                                label={qualityTag.label}
                                color={qualityTag.color}
                                details={[
                                  `Nota ${marketRating?.score}/100 · perfil moderado · classificação: ${marketRating ? ratingMeta[marketRating.rating].label : 'indisponível'}.`,
                                  ...(marketRating?.analysis_factors ?? ['Análise detalhada não disponível para este ativo.']),
                                  ...(marketRating?.analysis_type === 'fii_fundamentals'
                                    ? ['Vacância: não disponível nos dados padronizados consultados; não foi estimada nem pontuada.']
                                    : marketRating?.analysis_type === 'equity_market_history'
                                      ? ['Não avalia lucro, dívida, ROE ou valuation fundamentalista da empresa.']
                                      : []),
                                ]}
                              />
                            )}
                            {analysisClass && marketRatingsLoaded && !marketRatingsError && !marketRating && (
                              <Chip>Sem análise de mercado</Chip>
                            )}
                            {holding.asset_type === 'renda_fixa' ? (
                              <>
                                <Chip>{Number(holding.cdi_percent) || 0}% do CDI</Chip>
                                {holding.investment_date && <Chip>Desde {paymentDateLabel(holding.investment_date)}</Chip>}
                              </>
                            ) : (
                              <>
                                <Chip>{frequencyLabels[holding.frequency] ?? holding.frequency}</Chip>
                                <Chip>Dia {holding.payment_day}</Chip>
                                {holding.auto_price ? <Chip>Auto cotação</Chip> : <Chip>Preço manual</Chip>}
                              </>
                            )}
                            <ActivityChip $active={holding.is_active}>
                              {holding.is_active ? 'Ativo' : 'Desativado'}
                            </ActivityChip>
                          </ChipRow>
                          {marketRating?.analysis_factors && marketRating.analysis_factors.length > 0 && (
                            <details>
                              <summary>Ver critérios da análise · nota {marketRating.score}/100</summary>
                              <ul>
                                {marketRating.analysis_factors.map((factor, index) => <li key={`${holding.ticker}-${index}`}>{factor}</li>)}
                              </ul>
                            </details>
                          )}
                        </CardTitle>
                      </CardIdentity>
                      <Actions>
                        <IconButton $active={holding.is_active} type="button" title={holding.is_active ? 'Desativar' : 'Ativar'} aria-label={`${holding.is_active ? 'Desativar' : 'Ativar'} ${holding.ticker}`} disabled={bulkChanging || togglingIds.has(String(holding.id))} onClick={() => { void toggleActive(holding); }}>
                          {holding.is_active ? <Pause /> : <Play />}
                        </IconButton>
                        <IconButton type="button" title="Editar" aria-label={`Editar ${holding.ticker}`} onClick={() => openEdit(holding)}><Pencil /></IconButton>
                        <IconButton type="button" data-danger="true" title="Excluir" aria-label={`Excluir ${holding.ticker}`} onClick={() => setPendingDelete(holding)}><Trash2 /></IconButton>
                      </Actions>
                    </CardTop>

                    <Metrics>
                      <Metric>
                        <small>{holding.asset_type === 'renda_fixa' ? 'Aplicado' : 'Investido'}</small>
                        <strong>{money(holding.applied_amount ?? holding.invested_amount)}</strong>
                      </Metric>
                      <Metric>
                        <small>Valor atual</small>
                        <strong>{money(holding.current_value)}</strong>
                      </Metric>
                      <Metric $accent={resultNegative ? 'negative' : 'result'}>
                        <small>Resultado</small>
                        <strong>{money(holding.profit_loss)}</strong>
                      </Metric>
                      <Metric $accent="income">
                        <small>{holding.asset_type === 'renda_fixa' ? 'Rendimento líquido no mês projetado' : 'Por pagamento'}</small>
                        <strong>{money(estimatedPayment)}</strong>
                      </Metric>
                    </Metrics>

                    <CardFooter>
                      <span>
                        {holding.asset_type === 'renda_fixa'
                          ? `${money(holding.applied_amount ?? holding.invested_amount)} aplicado · ${Number(holding.cdi_percent) || 0}% do CDI · bruto ${money(grossFixedIncomeEstimate)} · IR ${money(estimatedTax)} · líquido conforme ${projectedMonths[0] ? monthLabel(projectedMonths[0].month) : 'projeção'}`
                          : `${Number(holding.quantity)} cotas · ${perShare.format(Number(holding.dividend_per_share) || 0)} por cota`}
                        {holding.notes ? ` · ${holding.notes}` : ''}
                      </span>
                    </CardFooter>
                  </Card>
                );
              })}
            </List>
          ) : result ? (
            <EmptyState><PiggyBank size={30} /><h3>Nenhum ativo encontrado</h3><p>Cadastre um ativo para projetar seus dividendos.</p><Button type="button" $variant="primary" onClick={openCreate}><Plus />Novo ativo</Button></EmptyState>
          ) : null}

          {pagination && pagination.total > 0 && (
            <PaginationBar>
              <span>{pagination.total} ativos · página {pagination.page} de {Math.max(pagination.totalPages, 1)}</span>
              <div style={{ display: 'flex', gap: 7 }}>
                <Button type="button" disabled={!pagination.hasPreviousPage || loading} onClick={() => setFilters(current => ({ ...current, page: Math.max((current.page ?? 1) - 1, 1) }))}>Anterior</Button>
                <Button type="button" disabled={!pagination.hasNextPage || loading} onClick={() => setFilters(current => ({ ...current, page: (current.page ?? 1) + 1 }))}>Próxima</Button>
              </div>
            </PaginationBar>
          )}
        </AssetsPanel>

        <ProjectionPanel>
          <SectionHeading>
            <div>
              <PanelTitle><TrendingUp size={19} />Projeção mensal</PanelTitle>
              <SectionDescription>
                {isFixedIncome
                  ? 'Informe a taxa CDI anual e selecione um mês para consultar a projeção calculada pela API.'
                  : 'Selecione um mês para ver a data e o valor de cada provento previsto.'}
              </SectionDescription>
            </div>
            <PositionCount>{months} meses</PositionCount>
          </SectionHeading>
          <ProjectionControls>
            <Field htmlFor="div-from">A partir de
              <input id="div-from" type="month" value={from} onChange={event => setFrom(event.target.value || currentMonth())} />
            </Field>
            <Field htmlFor="div-months">Meses
              <select id="div-months" value={months} onChange={event => setMonths(Number(event.target.value))}>
                {[6, 12, 24, 36].map(count => <option key={count} value={count}>{count}</option>)}
              </select>
            </Field>
            {isFixedIncome && (
              <Field htmlFor="div-cdi-rate">CDI anual (%)
                <input
                  id="div-cdi-rate"
                  type="text"
                  inputMode="decimal"
                  value={cdiRate}
                  onChange={event => {
                    setCdiRate(event.target.value);
                    setCdiReferenceDate('');
                    setCdiRateError('');
                  }}
                  aria-describedby="div-cdi-rate-hint"
                  disabled={cdiRateLoading}
                  required
                />
              </Field>
            )}
          </ProjectionControls>
          {isFixedIncome && (
            <SectionDescription id="div-cdi-rate-hint">
              {cdiRateLoading
                ? 'Buscando CDI anualizado atual no Banco Central...'
                : cdiRateError
                  ? cdiRateError
                  : cdiReferenceDate
                    ? `Taxa anualizada do Banco Central (SGS), referência ${cdiReferenceDate}. Você pode editar para simular outros cenários.`
                    : 'Taxa anual para simulação manual (exemplo: 13,65%).'}
            </SectionDescription>
          )}
          {projectedMonths.length ? projectedMonths.map(month => {
            const total = Number(month.total) || 0;
            return (
              <MonthRow
                key={month.month}
                type="button"
                aria-label={`Ver detalhes dos proventos de ${monthLabel(month.month)}, estimados em ${money(total)} líquidos`}
                onClick={() => setSelectedMonth(month)}
              >
                <span><strong>{monthLabel(month.month)}</strong><span>{money(total)}</span><ChevronRight aria-hidden="true" /></span>
                <Track aria-hidden="true">
                  <span style={{ width: `${Math.min((total / maxMonth) * 100, 100)}%` }} />
                </Track>
                {month.items.length > 0 && <small>{month.items.map(item => item.ticker).join(', ')}</small>}
                {isFixedIncome && month.items.length > 0 && (
                  <small>Bruto {money(month.gross_total)} · IR {((Number(month.income_tax_rate) || 0) * 100).toLocaleString('pt-BR')}% ({money(month.tax_total)}) · Líquido {money(month.net_total)}</small>
                )}
              </MonthRow>
            );
          }) : <p style={{ margin: 0, color: 'var(--muted)', fontSize: 12 }}>Cadastre ao menos um ativo para ver a projeção.</p>}
        </ProjectionPanel>
      </ContentGrid>

      <Modal
        open={selectedMonth !== null}
        title={selectedMonth ? `Proventos de ${monthLabel(selectedMonth.month)}` : 'Proventos previstos'}
        icon={<TrendingUp size={18} />}
        onClose={() => setSelectedMonth(null)}
      >
        {selectedMonth && (
          <DividendModalContent>
            <MonthTotal>
              <div>
                <small>{isFixedIncome ? 'Total líquido estimado no mês' : 'Total estimado no mês'}</small>
                <strong>{money(selectedMonth.total)}</strong>
                {isFixedIncome && (
                  <small style={{ display: 'block', marginTop: 6, color: 'var(--muted)' }}>
                    Bruto {money(selectedMonth.gross_total)} · IR {money(selectedMonth.tax_total)}
                  </small>
                )}
              </div>
              <PositionCount>
                {selectedMonth.items.length} {selectedMonth.items.length === 1 ? 'provento' : 'proventos'}
              </PositionCount>
            </MonthTotal>
            <SectionDescription>{isFixedIncome
              ? `IR estimado de ${((Number(selectedMonth.income_tax_rate) || 0) * 100).toLocaleString('pt-BR')}% conforme o prazo do investimento até o pagamento; os valores podem variar.`
              : 'Valores previstos; o pagamento efetivo pode variar.'}</SectionDescription>
            {selectedMonth.items.length ? (
              <DividendEntries aria-label="Detalhes dos proventos previstos">
                {selectedMonth.items.map((item, index) => (
                  <DividendEntry key={`${String(item.holding_id)}-${item.payment_date}-${index}`}>
                    <DividendInfo>
                      <h3>{item.ticker}</h3>
                      <p>{item.name || assetLabel(item.asset_type)} · {paymentDateLabel(item.payment_date)}</p>
                      <small>
                        {item.asset_type === 'renda_fixa'
                          ? `${Number(item.cdi_percent) || 0}% do CDI${item.investment_date ? ` · aplicado desde ${paymentDateLabel(item.investment_date)}` : ''}`
                          : `${quantityLabel(item.quantity ?? 0)} cotas × ${perShare.format(Number(item.dividend_per_share) || 0)} por cota`}
                      </small>
                      {isFixedIncome && (
                        <small style={{ display: 'block', marginTop: 5 }}>
                          Bruto {money(item.gross_amount)} · IR {((Number(item.income_tax_rate) || 0) * 100).toLocaleString('pt-BR')}% ({money(item.tax_amount)}) · Líquido {money(item.net_amount ?? item.amount)}
                        </small>
                      )}
                    </DividendInfo>
                    <DividendPayout>
                      <strong>{money(item.amount)}</strong>
                      <small>{isFixedIncome ? 'Valor líquido a receber' : 'Provento previsto'}</small>
                    </DividendPayout>
                  </DividendEntry>
                ))}
              </DividendEntries>
            ) : (
              <EmptyState><p>Nenhum provento detalhado para este mês.</p></EmptyState>
            )}
          </DividendModalContent>
        )}
      </Modal>

      <Modal
        open={formOpen}
        title={editing ? (isFixedIncome ? 'Editar investimento' : 'Editar ativo') : (isFixedIncome ? 'Novo investimento' : 'Novo ativo')}
        icon={editing ? <Pencil size={18} /> : <Plus size={18} />}
        busy={saving}
        onClose={closeForm}
      >
        <Form onSubmit={event => { void submit(event); }}>
          <Hint>
            {isFixedIncome
              ? 'Informe o valor aplicado, o percentual do CDI e a data; a estimativa mensal usa a taxa CDI da projeção.'
              : selectedType?.auto_quote
              ? 'Se deixar o preço atual vazio, a API busca a cotação automaticamente para este tipo.'
              : 'Informe o preço atual manualmente quando quiser acompanhar o valor da posição.'}
          </Hint>
          <Field htmlFor="div-ticker">Ticker *
            <input id="div-ticker" maxLength={40} value={form.ticker} onChange={event => setForm(current => ({ ...current, ticker: event.target.value.toUpperCase() }))} placeholder="Ex.: MXRF11" required />
          </Field>
          <Field htmlFor="div-name">Nome
            <input id="div-name" maxLength={160} value={form.name} onChange={event => setForm(current => ({ ...current, name: event.target.value }))} placeholder="Ex.: Maxi Renda" />
          </Field>
          {!isFixedIncome && (
            <Field htmlFor="div-type">Tipo
              <select id="div-type" value={form.asset_type} onChange={event => changeAssetType(event.target.value as DividendAssetType)}>
                {assetTypes.map(type => <option key={type.id} value={type.id}>{type.label}</option>)}
              </select>
            </Field>
          )}
          {showSegmentField && (
            <Field htmlFor="div-segment">Segmento (FII/Fiagro)
              <select id="div-segment" value={form.fii_segment} onChange={event => setForm(current => ({ ...current, fii_segment: event.target.value as FiiSegment | '' }))}>
                <option value="">Não informado</option>
                {(Object.keys(segmentLabels) as FiiSegment[]).map(segment => <option key={segment} value={segment}>{segmentLabels[segment]}</option>)}
              </select>
            </Field>
          )}
          {isFixedIncome ? (
            <>
              <Field htmlFor="div-applied-amount">Valor aplicado (R$) *
                <input id="div-applied-amount" type="text" inputMode="numeric" autoComplete="off" value={form.applied_amount} onChange={event => setForm(current => ({ ...current, applied_amount: maskMoney(event.target.value) }))} placeholder="R$ 10.000,00" required />
              </Field>
              <Field htmlFor="div-cdi-percent">Percentual do CDI (%) *
                <input id="div-cdi-percent" type="text" inputMode="decimal" value={form.cdi_percent} onChange={event => setForm(current => ({ ...current, cdi_percent: event.target.value }))} placeholder="120" required />
              </Field>
              <Field htmlFor="div-investment-date">Data do investimento *
                <input id="div-investment-date" type="date" value={form.investment_date} onChange={event => setForm(current => ({ ...current, investment_date: event.target.value }))} required />
              </Field>
            </>
          ) : (
          <>
          <Field htmlFor="div-quantity">Quantidade de cotas *
            <input id="div-quantity" type="number" min={0} step="any" value={form.quantity} onChange={event => setForm(current => ({ ...current, quantity: event.target.value }))} required />
          </Field>
          <Field htmlFor="div-average">Preço médio pago (R$)
            <input id="div-average" type="text" inputMode="numeric" autoComplete="off" value={form.average_price} onChange={event => setForm(current => ({ ...current, average_price: maskMoney(event.target.value) }))} placeholder="R$ 9,80" />
          </Field>
          <Field htmlFor="div-current">Preço atual (R$)
            <input id="div-current" type="text" inputMode="numeric" autoComplete="off" value={form.current_price} onChange={event => setForm(current => ({ ...current, current_price: maskMoney(event.target.value) }))} placeholder={selectedType?.auto_quote ? 'Vazio = cotação automática' : 'Opcional'} />
          </Field>
          <Field htmlFor="div-per-share">Provento por cota (R$)
            <input id="div-per-share" type="text" inputMode="numeric" autoComplete="off" value={form.dividend_per_share} onChange={event => setForm(current => ({ ...current, dividend_per_share: maskMoney(event.target.value) }))} placeholder="R$ 0,10" />
          </Field>
          <Field htmlFor="div-frequency">Frequência
            <select id="div-frequency" value={form.frequency} onChange={event => setForm(current => ({ ...current, frequency: event.target.value as DividendFrequency }))}>
              {(Object.keys(frequencyLabels) as DividendFrequency[]).map(item => <option key={item} value={item}>{frequencyLabels[item]}</option>)}
            </select>
          </Field>
          {needsReference && (
            <Field htmlFor="div-reference">Mês de um pagamento
              <select id="div-reference" value={form.reference_month} onChange={event => setForm(current => ({ ...current, reference_month: event.target.value }))}>
                {monthNames.map((name, index) => <option key={name} value={index + 1}>{name}</option>)}
              </select>
            </Field>
          )}
          </>
          )}
          <Field htmlFor="div-day">Dia do pagamento
            <input id="div-day" type="number" min={1} max={31} step={1} value={form.payment_day} onChange={event => setForm(current => ({ ...current, payment_day: event.target.value }))} required />
          </Field>
          <Field htmlFor="div-active">Situação
            <select id="div-active" value={String(form.is_active)} onChange={event => setForm(current => ({ ...current, is_active: event.target.value === 'true' }))}>
              <option value="true">Ativo (entra na projeção)</option>
              <option value="false">Inativo</option>
            </select>
          </Field>
          <Field htmlFor="div-notes">Observações
            <textarea id="div-notes" maxLength={2000} value={form.notes} onChange={event => setForm(current => ({ ...current, notes: event.target.value }))} />
          </Field>
          <FormActions>
            <Button type="button" onClick={closeForm} disabled={saving}><X />Cancelar</Button>
            <Button type="submit" $variant="primary" disabled={saving}>{saving ? <LoaderCircle /> : <Check />}{editing ? 'Salvar alterações' : 'Cadastrar'}</Button>
          </FormActions>
        </Form>
      </Modal>

      <ConfirmDialog
        open={pendingDelete !== null}
        title="Excluir ativo?"
        description={pendingDelete ? `${pendingDelete.ticker} será removido permanentemente.` : ''}
        confirmLabel="Excluir"
        busy={false}
        onConfirm={() => { void confirmDelete(); }}
        onCancel={() => setPendingDelete(null)}
      />
    </Page>
  );
}
