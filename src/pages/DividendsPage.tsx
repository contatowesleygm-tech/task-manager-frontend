import { useCallback, useEffect, useMemo, useState, type FormEvent } from 'react';
import axios from 'axios';
import { Check, LoaderCircle, Pencil, Pause, PiggyBank, Play, Plus, RefreshCw, Trash2, TrendingUp, X } from 'lucide-react';
import styled from 'styled-components';
import { Button, EmptyState, Field, Modal, Panel, PanelTitle } from '../components/ui';
import ConfirmDialog from '../components/ui/ConfirmDialog';
import {
  createDividendHolding, deleteDividendHolding, getDividendHoldings, getDividendPortfolio,
  getDividendProjection, getDividendTypes, refreshDividendPrices, updateDividendHolding,
} from '../api';
import type {
  DividendAssetType, DividendAssetTypeOption, DividendFilters, DividendFrequency, DividendHolding,
  DividendHoldingPayload, DividendPortfolio, DividendProjection, FiiSegment, PaginatedDividendHoldings,
} from '../types';

const Page = styled.div`
  display: grid;
  gap: 20px;
`;

const Hero = styled.section`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  padding: clamp(22px, 4vw, 36px);
  border: 1px solid var(--border);
  border-radius: 22px;
  background:
    radial-gradient(circle at 85% 20%, color-mix(in srgb, var(--accent) 45%, transparent), transparent 25%),
    linear-gradient(120deg, color-mix(in srgb, var(--primary) 18%, var(--surface)), var(--surface));
  box-shadow: 0 12px 32px var(--shadow);
  > div > span { display: inline-flex; align-items: center; gap: 7px; color: var(--primary-strong); font-size: 11px; font-weight: 850; letter-spacing: .12em; text-transform: uppercase; }
  h1 { margin: 14px 0 8px; color: var(--text); font-size: clamp(28px, 4vw, 40px); letter-spacing: -.05em; }
  p { max-width: 560px; margin: 0; color: var(--muted); font-size: 14px; line-height: 1.65; }
  @media (max-width: 650px) { align-items: stretch; flex-direction: column; }
`;

const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 13px;
  @media (max-width: 720px) { grid-template-columns: 1fr; }
`;

const SummaryCard = styled(Panel)`
  padding: 18px;
  small { display: block; color: var(--muted); font-size: 11px; }
  strong { display: block; margin-top: 4px; color: var(--text); font-size: 23px; }
`;

const HighlightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 13px;
  @media (max-width: 720px) { grid-template-columns: 1fr; }
`;

const FeatureHighlight = styled(Panel)<{ $tone?: 'result' | 'income'; $negative?: boolean }>`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 18px;
  padding: 22px 26px;
  overflow: hidden;
  border-color: ${({ $tone, $negative }) => {
    if ($tone === 'income') return 'color-mix(in srgb, var(--primary) 48%, var(--border))';
    return $negative
      ? 'color-mix(in srgb, #c53e38 48%, var(--border))'
      : 'color-mix(in srgb, #176b4d 48%, var(--border))';
  }};
  background:
    radial-gradient(circle at 100% 0%, ${({ $tone, $negative }) => {
      if ($tone === 'income') return 'color-mix(in srgb, var(--primary) 28%, transparent)';
      return $negative
        ? 'color-mix(in srgb, #c53e38 28%, transparent)'
        : 'color-mix(in srgb, #176b4d 28%, transparent)';
    }}, transparent 42%),
    linear-gradient(120deg,
      ${({ $tone, $negative }) => {
        if ($tone === 'income') return 'color-mix(in srgb, var(--primary) 12%, var(--surface))';
        return $negative
          ? 'color-mix(in srgb, #c53e38 12%, var(--surface))'
          : 'color-mix(in srgb, #176b4d 12%, var(--surface))';
      }},
      var(--surface));
  box-shadow: 0 14px 34px var(--shadow);
  > div:first-child span {
    display: inline-flex;
    color: ${({ $tone, $negative }) => {
      if ($tone === 'income') return 'var(--primary-strong)';
      return $negative ? '#a63d47' : '#176b4d';
    }};
    font-size: 12px;
    font-weight: 850;
    letter-spacing: .1em;
    text-transform: uppercase;
  }
  > div:first-child strong {
    display: block;
    margin-top: 8px;
    color: ${({ $tone, $negative }) => {
      if ($tone === 'income') return 'var(--text)';
      return $negative ? '#c53e38' : '#176b4d';
    }};
    font-size: clamp(30px, 4.4vw, 44px);
    letter-spacing: -.04em;
    line-height: 1;
  }
  > div:last-child {
    color: ${({ $tone, $negative }) => {
      if ($tone === 'income') return 'var(--primary-strong)';
      return $negative ? '#a63d47' : '#176b4d';
    }};
    font-size: 13px;
    font-weight: 750;
    text-align: right;
    opacity: .9;
  }
  @media (max-width: 620px) {
    align-items: flex-start;
    flex-direction: column;
    > div:last-child { text-align: left; }
  }
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
  padding: 14px;
  margin-bottom: 16px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--surface-raised);
  ${Field} { margin: 0; }
  @media (max-width: 1100px) { grid-template-columns: 1fr 1fr; }
  @media (max-width: 480px) { grid-template-columns: 1fr; }
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

const Metrics = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  @media (max-width: 820px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
`;

const Metric = styled.div<{ $accent?: 'result' | 'income' | 'negative' }>`
  padding: 11px 12px;
  border: 1px solid ${({ $accent }) => {
    if ($accent === 'result') return 'color-mix(in srgb, #176b4d 35%, var(--border))';
    if ($accent === 'negative') return 'color-mix(in srgb, #c53e38 35%, var(--border))';
    if ($accent === 'income') return 'color-mix(in srgb, var(--primary) 35%, var(--border))';
    return 'var(--border)';
  }};
  border-radius: 12px;
  background: ${({ $accent }) => {
    if ($accent === 'result') return 'color-mix(in srgb, #176b4d 8%, var(--surface))';
    if ($accent === 'negative') return 'color-mix(in srgb, #c53e38 8%, var(--surface))';
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
      if ($accent === 'result') return '#176b4d';
      if ($accent === 'negative') return '#c53e38';
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

const IconButton = styled.button`
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border: 1px solid var(--border);
  border-radius: 9px;
  color: var(--muted);
  background: var(--surface);
  cursor: pointer;
  &:hover { color: var(--primary); border-color: var(--primary); }
  &[data-danger='true']:hover { color: #c53e38; background: #fff3f2; }
  html[data-theme='dark'] &[data-danger='true']:hover { color: #ffaaa3; background: #39232b; }
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

const MonthRow = styled.div`
  display: grid;
  gap: 5px;
  margin-bottom: 13px;
  > div:first-child { display: flex; justify-content: space-between; gap: 8px; color: var(--text); font-size: 12px; }
  > div:first-child span { color: var(--muted); }
  small { color: var(--muted); font-size: 10px; }
`;

const Track = styled.div`
  height: 8px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--surface-raised);
  > div { height: 100%; border-radius: inherit; background: var(--primary); }
`;

const PaginationBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 16px;
  color: var(--muted);
  font-size: 12px;
`;

interface FormState {
  ticker: string;
  name: string;
  asset_type: DividendAssetType;
  fii_segment: FiiSegment | '';
  quantity: string;
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

function monthLabel(value: string): string {
  const [year, month] = value.split('-');
  return `${monthNames[Number(month) - 1]?.slice(0, 3) ?? month}/${year}`;
}

function emptyForm(types: DividendAssetTypeOption[]): FormState {
  const first = types[0] ?? fallbackTypes[0];
  return {
    ticker: '', name: '', asset_type: first.id, fii_segment: '', quantity: '', average_price: '', current_price: '',
    dividend_per_share: '', frequency: first.default_frequency,
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
    average_price: Number(holding.average_price) ? String(Number(holding.average_price)) : '',
    current_price: holding.current_price == null ? '' : String(Number(holding.current_price)),
    dividend_per_share: String(Number(holding.dividend_per_share)),
    frequency: holding.frequency,
    reference_month: String(holding.reference_month),
    payment_day: String(holding.payment_day),
    is_active: holding.is_active,
    notes: holding.notes ?? '',
  };
}

function makePayload(form: FormState, editing: DividendHolding | null = null): DividendHoldingPayload {
  const quantity = Number(form.quantity.replace(',', '.'));
  if (!Number.isFinite(quantity) || quantity <= 0) throw new Error('Informe uma quantidade de cotas maior que zero.');
  const dividend = form.dividend_per_share ? Number(form.dividend_per_share.replace(',', '.')) : 0;
  if (!Number.isFinite(dividend) || dividend < 0) throw new Error('O provento por cota não pode ser negativo.');
  const paymentDay = Number(form.payment_day);
  const averagePrice = form.average_price ? Number(form.average_price.replace(',', '.')) : 0;
  if (!Number.isFinite(averagePrice) || averagePrice < 0) throw new Error('O preço médio não pode ser negativo.');
  const currentPrice = form.current_price ? Number(form.current_price.replace(',', '.')) : null;
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

export default function DividendsPage() {
  const [assetTypes, setAssetTypes] = useState<DividendAssetTypeOption[]>(fallbackTypes);
  const [result, setResult] = useState<PaginatedDividendHoldings>();
  const [projection, setProjection] = useState<DividendProjection>();
  const [portfolio, setPortfolio] = useState<DividendPortfolio>();
  const [from, setFrom] = useState(currentMonth());
  const [months, setMonths] = useState(12);
  const [filters, setFilters] = useState<DividendFilters>({ page: 1, limit: 20 });
  const [draft, setDraft] = useState({ asset_type: '', fii_segment: '', active: '', search: '' });
  const [form, setForm] = useState<FormState>(() => emptyForm(fallbackTypes));
  const [editing, setEditing] = useState<DividendHolding | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [pendingDelete, setPendingDelete] = useState<DividendHolding | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
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
    let active = true;
    setLoading(true);
    setError('');
    Promise.all([
      getDividendHoldings(filters),
      getDividendProjection(from, months),
      getDividendPortfolio(),
    ]).then(([loaded, loadedProjection, loadedPortfolio]) => {
      if (!active) return;
      setResult(loaded);
      setProjection(loadedProjection);
      setPortfolio(loadedPortfolio);
    }).catch(loadError => {
      if (active) setError(getErrorMessage(loadError, 'Não foi possível carregar os dividendos.'));
    }).finally(() => {
      if (active) setLoading(false);
    });
    return () => { active = false; };
  }, [filters, from, months, refreshVersion]);

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
    if (!shouldAutoRefreshPrices()) return;
    void refreshPrices({ silent: true });
  }, [refreshPrices]);

  function openCreate() {
    setEditing(null);
    setForm(emptyForm(assetTypes));
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
      if (editing) await updateDividendHolding(editing.id, payload);
      else await createDividendHolding(payload);
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
    setError('');
    setNotice('');
    try {
      await updateDividendHolding(holding.id, { is_active: !holding.is_active });
      setRefreshVersion(version => version + 1);
    } catch (toggleError) {
      setError(getErrorMessage(toggleError, 'Não foi possível alterar o ativo.'));
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
      asset_type: (draft.asset_type || undefined) as DividendAssetType | undefined,
      fii_segment: (draft.fii_segment || undefined) as FiiSegment | undefined,
      active: draft.active ? draft.active === 'true' : undefined,
      search: draft.search.trim() || undefined,
      page: 1,
      limit: 20,
    });
  }

  function assetLabel(type: DividendAssetType | string) {
    return typeById.get(type as DividendAssetType)?.label ?? String(type);
  }

  const holdings = result?.data ?? [];
  const pagination = result?.pagination;
  const projectedMonths = projection?.months ?? [];
  const maxMonth = Math.max(...projectedMonths.map(month => Number(month.total) || 0), 1);
  const profitLoss = Number(portfolio?.profit_loss) || 0;
  const pricesUpdatedLabel = formatPriceUpdatedAt(portfolio?.prices_updated_at);

  return (
    <Page>
      <Hero>
        <div>
          <span><PiggyBank size={14} /> Dividendos</span>
          <h1>Sua renda passiva, mês a mês.</h1>
          <p>Cotações de ativos com auto cotação atualizam sozinhas uma vez por dia. O provento projetado é uma estimativa, não uma garantia de pagamento.</p>
          {pricesUpdatedLabel && (
            <p style={{ marginTop: 8, color: 'var(--muted)', fontSize: 12 }}>
              Última atualização de cotações: {pricesUpdatedLabel}
            </p>
          )}
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Button type="button" onClick={() => void refreshPrices({ force: true })} disabled={refreshingPrices}>
            <RefreshCw />{refreshingPrices ? 'Atualizando...' : 'Atualizar cotações'}
          </Button>
          <Button type="button" $variant="primary" onClick={openCreate}><Plus />Novo ativo</Button>
        </div>
      </Hero>

      {error && <Panel role="alert" style={{ color: '#c53e38', padding: 14 }}>{error}</Panel>}
      {notice && <Panel role="status" style={{ color: 'var(--primary-strong)', padding: 14 }}>{notice}</Panel>}

      <HighlightGrid>
        <FeatureHighlight $tone="income" aria-label="Estimativa mensal">
          <div>
            <span>Estimativa mensal</span>
            <strong>{money(projection?.monthly_average)}</strong>
          </div>
          <div>
            {money(projection?.period_total)} no período · {months} meses
          </div>
        </FeatureHighlight>
        <FeatureHighlight $tone="result" $negative={profitLoss < 0} aria-label="Resultado da carteira">
          <div>
            <span>Resultado</span>
            <strong>{money(portfolio?.profit_loss)}</strong>
          </div>
          <div>
            {portfolio?.profit_loss_percent != null
              ? `${profitLoss < 0 ? '' : '+'}${Number(portfolio.profit_loss_percent).toFixed(2)}% sobre o investido`
              : 'Lucro ou prejuízo da carteira'}
          </div>
        </FeatureHighlight>
      </HighlightGrid>

      <SummaryGrid aria-label="Resumo da carteira">
        <SummaryCard><small>Total investido</small><strong>{money(portfolio?.invested_total)}</strong></SummaryCard>
        <SummaryCard><small>Valor atual da carteira</small><strong>{money(portfolio?.current_total)}</strong></SummaryCard>
        <SummaryCard><small>Ativos na carteira</small><strong>{Number(portfolio?.holdings_count) || pagination?.total || 0}</strong></SummaryCard>
      </SummaryGrid>

      <ContentGrid>
        <AssetsPanel>
          <PanelTitle><PiggyBank size={19} />Meus ativos</PanelTitle>
          <Toolbar onSubmit={applyFilters}>
            <Field htmlFor="div-filter-type">Tipo
              <select id="div-filter-type" value={draft.asset_type} onChange={event => setDraft(current => ({ ...current, asset_type: event.target.value }))}>
                <option value="">Todos</option>
                {assetTypes.map(type => <option key={type.id} value={type.id}>{type.label}</option>)}
              </select>
            </Field>
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
            <Field htmlFor="div-filter-search">Buscar
              <input id="div-filter-search" value={draft.search} onChange={event => setDraft(current => ({ ...current, search: event.target.value }))} placeholder="Ticker ou nome" />
            </Field>
            <Button type="submit">Filtrar</Button>
          </Toolbar>

          {loading ? (
            <EmptyState><LoaderCircle /><p>Carregando ativos...</p></EmptyState>
          ) : holdings.length ? (
            <List>
              {holdings.map(holding => {
                const estimatedPayment = (Number(holding.quantity) || 0) * (Number(holding.dividend_per_share) || 0);
                const holdingResult = Number(holding.profit_loss) || 0;
                const resultNegative = holdingResult < 0;
                const mark = holding.ticker.slice(0, 4);
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
                            <Chip>{frequencyLabels[holding.frequency] ?? holding.frequency}</Chip>
                            <Chip>Dia {holding.payment_day}</Chip>
                            {holding.auto_price ? <Chip>Auto cotação</Chip> : <Chip>Preço manual</Chip>}
                            {!holding.is_active && <Chip>Inativo</Chip>}
                          </ChipRow>
                        </CardTitle>
                      </CardIdentity>
                      <Actions>
                        <IconButton type="button" title={holding.is_active ? 'Desativar' : 'Ativar'} aria-label={`${holding.is_active ? 'Desativar' : 'Ativar'} ${holding.ticker}`} onClick={() => { void toggleActive(holding); }}>
                          {holding.is_active ? <Pause /> : <Play />}
                        </IconButton>
                        <IconButton type="button" title="Editar" aria-label={`Editar ${holding.ticker}`} onClick={() => openEdit(holding)}><Pencil /></IconButton>
                        <IconButton type="button" data-danger="true" title="Excluir" aria-label={`Excluir ${holding.ticker}`} onClick={() => setPendingDelete(holding)}><Trash2 /></IconButton>
                      </Actions>
                    </CardTop>

                    <Metrics>
                      <Metric>
                        <small>Investido</small>
                        <strong>{money(holding.invested_amount)}</strong>
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
                        <small>Por pagamento</small>
                        <strong>{money(estimatedPayment)}</strong>
                      </Metric>
                    </Metrics>

                    <CardFooter>
                      <span>
                        {Number(holding.quantity)} cotas · {perShare.format(Number(holding.dividend_per_share) || 0)} por cota
                        {holding.notes ? ` · ${holding.notes}` : ''}
                      </span>
                    </CardFooter>
                  </Card>
                );
              })}
            </List>
          ) : result ? (
            <EmptyState><PiggyBank size={30} /><h3>Nenhum ativo encontrado</h3><p>Cadastre um fundo ou ação para projetar seus dividendos.</p><Button type="button" $variant="primary" onClick={openCreate}><Plus />Novo ativo</Button></EmptyState>
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

        <Panel>
          <PanelTitle><TrendingUp size={19} />Projeção mensal</PanelTitle>
          <Toolbar as="div" style={{ gridTemplateColumns: '1fr 1fr', marginBottom: 16 }}>
            <Field htmlFor="div-from">A partir de
              <input id="div-from" type="month" value={from} onChange={event => setFrom(event.target.value || currentMonth())} />
            </Field>
            <Field htmlFor="div-months">Meses
              <select id="div-months" value={months} onChange={event => setMonths(Number(event.target.value))}>
                {[6, 12, 24, 36].map(count => <option key={count} value={count}>{count}</option>)}
              </select>
            </Field>
          </Toolbar>
          {projectedMonths.length ? projectedMonths.map(month => {
            const total = Number(month.total) || 0;
            return (
              <MonthRow key={month.month}>
                <div><strong>{monthLabel(month.month)}</strong><span>{money(total)}</span></div>
                <Track><div style={{ width: `${Math.min((total / maxMonth) * 100, 100)}%` }} /></Track>
                {month.items.length > 0 && <small>{month.items.map(item => item.ticker).join(', ')}</small>}
              </MonthRow>
            );
          }) : <p style={{ margin: 0, color: 'var(--muted)', fontSize: 12 }}>Cadastre ativos ativos para ver a projeção.</p>}
        </Panel>
      </ContentGrid>

      <Modal
        open={formOpen}
        title={editing ? 'Editar ativo' : 'Novo ativo'}
        icon={editing ? <Pencil size={18} /> : <Plus size={18} />}
        busy={saving}
        onClose={closeForm}
      >
        <Form onSubmit={event => { void submit(event); }}>
          <Hint>
            {selectedType?.auto_quote
              ? 'Se deixar o preço atual vazio, a API busca a cotação automaticamente para este tipo.'
              : 'Informe o preço atual manualmente quando quiser acompanhar o valor da posição.'}
          </Hint>
          <Field htmlFor="div-ticker">Ticker *
            <input id="div-ticker" maxLength={40} value={form.ticker} onChange={event => setForm(current => ({ ...current, ticker: event.target.value.toUpperCase() }))} placeholder="Ex.: MXRF11" required />
          </Field>
          <Field htmlFor="div-name">Nome
            <input id="div-name" maxLength={160} value={form.name} onChange={event => setForm(current => ({ ...current, name: event.target.value }))} placeholder="Ex.: Maxi Renda" />
          </Field>
          <Field htmlFor="div-type">Tipo
            <select id="div-type" value={form.asset_type} onChange={event => changeAssetType(event.target.value as DividendAssetType)}>
              {assetTypes.map(type => <option key={type.id} value={type.id}>{type.label}</option>)}
            </select>
          </Field>
          {showSegmentField && (
            <Field htmlFor="div-segment">Segmento (FII/Fiagro)
              <select id="div-segment" value={form.fii_segment} onChange={event => setForm(current => ({ ...current, fii_segment: event.target.value as FiiSegment | '' }))}>
                <option value="">Não informado</option>
                {(Object.keys(segmentLabels) as FiiSegment[]).map(segment => <option key={segment} value={segment}>{segmentLabels[segment]}</option>)}
              </select>
            </Field>
          )}
          <Field htmlFor="div-quantity">Quantidade de cotas *
            <input id="div-quantity" type="number" min={0} step="any" value={form.quantity} onChange={event => setForm(current => ({ ...current, quantity: event.target.value }))} required />
          </Field>
          <Field htmlFor="div-average">Preço médio pago (R$)
            <input id="div-average" type="number" min={0} step="any" value={form.average_price} onChange={event => setForm(current => ({ ...current, average_price: event.target.value }))} placeholder="9,80" />
          </Field>
          <Field htmlFor="div-current">Preço atual (R$)
            <input id="div-current" type="number" min={0} step="any" value={form.current_price} onChange={event => setForm(current => ({ ...current, current_price: event.target.value }))} placeholder={selectedType?.auto_quote ? 'Vazio = cotação automática' : 'Opcional'} />
          </Field>
          <Field htmlFor="div-per-share">Provento por cota (R$)
            <input id="div-per-share" type="number" min={0} step="any" value={form.dividend_per_share} onChange={event => setForm(current => ({ ...current, dividend_per_share: event.target.value }))} placeholder="0,10" />
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
