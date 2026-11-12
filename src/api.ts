import axios from 'axios';
import type {
  CreateGoalPayload, CreateTaskPayload, DailyChecklistItem, DailyChecklistItemUpdate,
  DailyHistoryDayDetail, DailyTaskRecord, GoalStep, HistoryRecord, LifeGoal, ObjectiveStepStatus, PaginatedDailyHistory,
  PaginatedDailyPeriodHistory, PaginatedSchedule, PaginatedScheduleAlerts, PaginatedTasks,
  SchedulePayload, ScheduleEvent, ScheduleQuery, Task, TaskId, UpdateGoalPayload, UpdateTaskPayload,
  AssistantMessage, AuthCredentials, AuthUser, PaginatedStudyResources, RegisterResult, StudyResource, StudyResourceArea, StudyResourcePayload,
  SubscriptionPayment, SubscriptionPlansResponse, UserSubscription,
  FinanceAccount, FinanceAccountPayload, FinanceAccountUpdatePayload, FinanceSummary, FinanceCurrency, FinanceAsset, FinanceAssetPayload, FinanceLiability, FinanceLiabilityPayload, ActivityEvent, ActivitySummary, PaginatedActivity,
  DividendAssetType, DividendAssetTypeOption, DividendCdiRate, DividendFilters, DividendHolding, DividendHoldingPayload, DividendLookup, DividendPortfolio, DividendPriceRefreshResult, DividendProjection, FixedIncomeHistory, PaginatedDividendHoldings,
  Expense, ExpenseCategory, ExpenseFilters, ExpensePayload, ExpenseSummary, FuelCalculatorPayload,
  FuelCalculatorResult, PaginatedExpenses, DailyRouteDayPayload, SavedDailyRouteDay, PaginatedDailyRouteDays,
  MarketOpportunities, MarketOpportunityItem, MarketRiskProfile, OpportunityRating, MarketNewsResponse,
  BacktestParams, BacktestResult, FiiCompareParams, FiiComparison, PortfolioAnalysis, PortfolioParams, SwitchSimulation,
  EnglishStudyGoal, EnglishStudySession, EnglishStudySessionFilters, EnglishStudySessionPayload, EnglishStudySummary, PaginatedEnglishStudySessions,
} from './types';

const api = axios.create({
  baseURL: 'http://localhost:3333/api',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

function authUserFromResponse(value: unknown): AuthUser {
  const payload = value as { user?: AuthUser; data?: AuthUser | { user?: AuthUser } };
  if (payload.user) return payload.user;
  if (payload.data && typeof payload.data === 'object' && 'user' in payload.data && payload.data.user) {
    return payload.data.user;
  }
  if (payload.data && typeof payload.data === 'object' && 'email' in payload.data) {
    return payload.data as AuthUser;
  }
  return value as AuthUser;
}

export async function register(credentials: AuthCredentials): Promise<RegisterResult> {
  const response = await api.post<{ data: RegisterResult }>('/auth/register', credentials);
  return response.data.data;
}

export async function login(credentials: AuthCredentials): Promise<AuthUser> {
  const response = await api.post('/auth/login', credentials);
  return authUserFromResponse(response.data);
}

export async function getCurrentUser(): Promise<AuthUser> {
  const response = await api.get('/auth/me');
  return authUserFromResponse(response.data);
}

export async function logout(): Promise<void> {
  await api.post('/auth/logout');
}

export async function getSubscriptionPlans(): Promise<SubscriptionPlansResponse> {
  const response = await api.get<{ data: SubscriptionPlansResponse } | SubscriptionPlansResponse>('/subscriptions/plans');
  const body = response.data;
  if (body && typeof body === 'object' && 'data' in body && body.data) return body.data;
  return body as SubscriptionPlansResponse;
}

export async function getMySubscription(): Promise<{ subscription: UserSubscription | null; payment?: SubscriptionPayment | null }> {
  const response = await api.get<{
    data: { subscription: UserSubscription | null; payment?: SubscriptionPayment | null } | UserSubscription;
  }>('/subscriptions/me');
  const body = response.data.data;
  if (body && typeof body === 'object' && 'subscription' in body) {
    return body as { subscription: UserSubscription | null; payment?: SubscriptionPayment | null };
  }
  return { subscription: (body as UserSubscription) ?? null };
}

export async function getSubscriptionPayment(id: TaskId): Promise<SubscriptionPayment> {
  const response = await api.get<{ data: SubscriptionPayment }>(
    `/subscriptions/payments/${encodeURIComponent(String(id))}`
  );
  return response.data.data;
}

export async function sendAssistantMessage(
  message: string,
  history: AssistantMessage[] = []
): Promise<string> {
  const response = await api.post<{ message?: string; data?: { message?: string } }>('/assistant/chat', {
    message,
    history,
  });
  return response.data.data?.message ?? response.data.message ?? '';
}

export async function getStudyResources(
  filters: { area?: string; type?: string; search?: string; page?: number; limit?: number } = {}
): Promise<PaginatedStudyResources> {
  const response = await api.get<PaginatedStudyResources>('/study-resources', { params: filters });
  return response.data;
}

export async function getStudyResourceAreas(): Promise<StudyResourceArea[]> {
  const response = await api.get<{ data: StudyResourceArea[] }>('/study-resources/areas');
  return response.data.data;
}

export async function getEnglishStudySessions(
  filters: EnglishStudySessionFilters = {}
): Promise<PaginatedEnglishStudySessions> {
  const response = await api.get<PaginatedEnglishStudySessions>('/english-study/sessions', { params: filters });
  return response.data;
}

export async function createEnglishStudySession(payload: EnglishStudySessionPayload): Promise<EnglishStudySession> {
  const response = await api.post<{ data: EnglishStudySession }>('/english-study/sessions', payload);
  return response.data.data;
}

export async function updateEnglishStudySession(
  id: TaskId,
  payload: Partial<EnglishStudySessionPayload>
): Promise<EnglishStudySession> {
  const response = await api.patch<{ data: EnglishStudySession }>(
    `/english-study/sessions/${encodeURIComponent(String(id))}`,
    payload
  );
  return response.data.data;
}

export async function deleteEnglishStudySession(id: TaskId): Promise<void> {
  await api.delete(`/english-study/sessions/${encodeURIComponent(String(id))}`);
}

export async function getEnglishStudyGoal(): Promise<EnglishStudyGoal> {
  const response = await api.get<{ data: EnglishStudyGoal }>('/english-study/goal');
  return response.data.data;
}

export async function updateEnglishStudyGoal(dailyGoalMinutes: number): Promise<EnglishStudyGoal> {
  const response = await api.put<{ data: EnglishStudyGoal }>('/english-study/goal', {
    daily_goal_minutes: dailyGoalMinutes,
  });
  return response.data.data;
}

export async function getEnglishStudySummary(
  filters: Pick<EnglishStudySessionFilters, 'from' | 'to'> = {}
): Promise<EnglishStudySummary> {
  const response = await api.get<{ data: EnglishStudySummary }>('/english-study/summary', { params: filters });
  return response.data.data;
}

export async function getExpenses(filters: ExpenseFilters = {}): Promise<PaginatedExpenses> {
  const response = await api.get<PaginatedExpenses>('/expenses', { params: filters });
  return response.data;
}

export async function getExpenseCategories(): Promise<ExpenseCategory[]> {
  const response = await api.get<{ data: ExpenseCategory[] }>('/expenses/categories');
  return response.data.data;
}

export async function getExpenseSummary(month?: string): Promise<ExpenseSummary> {
  const response = await api.get<{ data: ExpenseSummary }>('/expenses/summary', { params: { month } });
  return response.data.data;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isNullableNumber(value: unknown): value is number | null {
  return value === null || (typeof value === 'number' && Number.isFinite(value));
}

function isFuelCostEstimate(value: unknown): boolean {
  return isRecord(value)
    && isNullableNumber(value.liters)
    && isNullableNumber(value.cost)
    && isNullableNumber(value.cost_per_km);
}

function isFuelCalculatorResult(value: unknown): value is FuelCalculatorResult {
  if (!isRecord(value) || !isRecord(value.vehicle) || !isRecord(value.fuel_prices)
    || !isRecord(value.comparison) || !isRecord(value.estimates)) return false;

  const { comparison, estimates, fuel_prices: prices, vehicle } = value;
  return typeof vehicle.model === 'string'
    && (vehicle.type === 'carro' || vehicle.type === 'moto')
    && (value.analysis_method === 'consumo_informado' || value.analysis_method === 'regra_dos_70_por_cento')
    && (value.selected_fuel === 'gasolina' || value.selected_fuel === 'alcool')
    && typeof prices.gasolina === 'number'
    && typeof prices.alcool === 'number'
    && isNullableNumber(comparison.ethanol_price_as_percentage_of_gasoline)
    && isNullableNumber(comparison.ethanol_break_even_price)
    && (comparison.recommended_fuel === 'gasolina' || comparison.recommended_fuel === 'alcool')
    && typeof comparison.selected_fuel_is_cheaper === 'boolean'
    && isNullableNumber(comparison.estimated_savings_for_distance)
    && isNullableNumber(estimates.distance_km)
    && isFuelCostEstimate(estimates.gasolina)
    && isFuelCostEstimate(estimates.alcool)
    && isFuelCostEstimate(estimates.selected_fuel_cost)
    && Array.isArray(value.notes)
    && value.notes.every(note => typeof note === 'string');
}

function getFuelCalculatorResponseIssues(value: unknown): string[] {
  if (!isRecord(value)) return ['resposta deve ser um objeto'];

  const issues: string[] = [];
  const requireRecord = (parent: Record<string, unknown>, key: string, path: string): Record<string, unknown> | undefined => {
    const child = parent[key];
    if (!isRecord(child)) {
      issues.push(`${path}: ausente ou não é um objeto`);
      return undefined;
    }
    return child;
  };
  const requireString = (parent: Record<string, unknown>, key: string, path: string) => {
    if (typeof parent[key] !== 'string') issues.push(`${path}: ausente ou inválido`);
  };
  const requireNullableNumber = (parent: Record<string, unknown>, key: string, path: string) => {
    if (!isNullableNumber(parent[key])) issues.push(`${path}: ausente ou deve ser número ou null`);
  };

  const vehicle = requireRecord(value, 'vehicle', 'vehicle');
  if (vehicle) {
    requireString(vehicle, 'model', 'vehicle.model');
    if (vehicle.type !== 'carro' && vehicle.type !== 'moto') issues.push('vehicle.type: ausente ou deve ser "carro" ou "moto"');
  }

  if (value.analysis_method !== 'consumo_informado' && value.analysis_method !== 'regra_dos_70_por_cento') {
    issues.push('analysis_method: ausente ou inválido');
  }
  if (value.selected_fuel !== 'gasolina' && value.selected_fuel !== 'alcool') {
    issues.push('selected_fuel: ausente ou inválido');
  }

  const prices = requireRecord(value, 'fuel_prices', 'fuel_prices');
  if (prices) {
    if (typeof prices.gasolina !== 'number') issues.push('fuel_prices.gasolina: ausente ou inválido');
    if (typeof prices.alcool !== 'number') issues.push('fuel_prices.alcool: ausente ou inválido');
  }

  const comparison = requireRecord(value, 'comparison', 'comparison');
  if (comparison) {
    requireNullableNumber(comparison, 'ethanol_price_as_percentage_of_gasoline', 'comparison.ethanol_price_as_percentage_of_gasoline');
    requireNullableNumber(comparison, 'ethanol_break_even_price', 'comparison.ethanol_break_even_price');
    if (comparison.recommended_fuel !== 'gasolina' && comparison.recommended_fuel !== 'alcool') {
      issues.push('comparison.recommended_fuel: ausente ou inválido');
    }
    if (typeof comparison.selected_fuel_is_cheaper !== 'boolean') {
      issues.push('comparison.selected_fuel_is_cheaper: ausente ou inválido');
    }
    requireNullableNumber(comparison, 'estimated_savings_for_distance', 'comparison.estimated_savings_for_distance');
  }

  const estimates = requireRecord(value, 'estimates', 'estimates');
  if (estimates) {
    requireNullableNumber(estimates, 'distance_km', 'estimates.distance_km');
    for (const fuel of ['gasolina', 'alcool', 'selected_fuel_cost']) {
      const estimate = requireRecord(estimates, fuel, `estimates.${fuel}`);
      if (estimate) {
        requireNullableNumber(estimate, 'liters', `estimates.${fuel}.liters`);
        requireNullableNumber(estimate, 'cost', `estimates.${fuel}.cost`);
        requireNullableNumber(estimate, 'cost_per_km', `estimates.${fuel}.cost_per_km`);
      }
    }
  }

  if (value.notes !== undefined && (!Array.isArray(value.notes) || !value.notes.every(note => typeof note === 'string'))) {
    issues.push('notes: formato inválido; esperado uma lista de textos');
  }

  return issues;
}

export async function calculateFuelCost(payload: FuelCalculatorPayload): Promise<FuelCalculatorResult> {
  const response = await api.post<unknown>('/expenses/fuel-calculator', payload);
  const body = response.data;
  const responseData = isRecord(body) && 'data' in body ? body.data : body;
  const result = isRecord(responseData) && responseData.notes === undefined
    ? { ...responseData, notes: [] }
    : responseData;
  if (!isFuelCalculatorResult(result)) {
    const issues = getFuelCalculatorResponseIssues(result);
    throw new Error(`Resposta do calculador incompleta. Campos ausentes ou inválidos: ${issues.join('; ') || 'formato inesperado'}.`);
  }
  return result;
}

export async function getDailyRouteDays(page = 1, limit = 20): Promise<PaginatedDailyRouteDays> {
  const response = await api.get<PaginatedDailyRouteDays>('/expenses/daily-routes', {
    params: { page, limit },
  });
  return response.data;
}

export async function saveDailyRouteDay(date: string, payload: DailyRouteDayPayload): Promise<SavedDailyRouteDay> {
  const response = await api.put<{ data: SavedDailyRouteDay }>(
    `/expenses/daily-routes/${encodeURIComponent(date)}`,
    payload
  );
  return response.data.data;
}

export async function createExpense(payload: ExpensePayload): Promise<Expense> {
  const response = await api.post<{ data: Expense }>('/expenses', payload);
  return response.data.data;
}

export async function updateExpense(id: TaskId, payload: Partial<ExpensePayload>): Promise<Expense> {
  const response = await api.patch<{ data: Expense }>(`/expenses/${encodeURIComponent(String(id))}`, payload);
  return response.data.data;
}

export async function deleteExpense(id: TaskId): Promise<void> {
  await api.delete(`/expenses/${encodeURIComponent(String(id))}`);
}

export async function getDividendTypes(): Promise<DividendAssetTypeOption[]> {
  const response = await api.get<{ data: DividendAssetTypeOption[] }>('/dividends/types');
  return response.data.data;
}

export async function getDividendLookup(ticker: string, assetType: DividendAssetType): Promise<DividendLookup> {
  const response = await api.get<{ data: DividendLookup } | DividendLookup>(
    `/dividends/lookup/${encodeURIComponent(ticker)}`,
    { params: { asset_type: assetType } },
  );
  const body = response.data;
  return 'data' in body && body.data ? body.data : body as DividendLookup;
}

export async function getDividendHoldings(filters: DividendFilters = {}): Promise<PaginatedDividendHoldings> {
  const response = await api.get<PaginatedDividendHoldings>('/dividends', { params: filters });
  return response.data;
}

export async function getDividendHolding(id: TaskId): Promise<DividendHolding> {
  const response = await api.get<{ data: DividendHolding }>(`/dividends/${encodeURIComponent(String(id))}`);
  return response.data.data;
}

export async function getDividendPortfolio(): Promise<DividendPortfolio> {
  const response = await api.get<{ data: DividendPortfolio }>('/dividends/portfolio');
  return response.data.data;
}

const ratingMeta: Record<OpportunityRating, true> = { otimo: true, bom: true, neutro: true, atencao: true, evitar: true };

export function ratingFromScore(score: number): OpportunityRating {
  if (score >= 80) return 'otimo';
  if (score >= 65) return 'bom';
  if (score >= 45) return 'neutro';
  if (score >= 30) return 'atencao';
  return 'evitar';
}

function normalizeOpportunityItem(raw: Record<string, unknown>, index: number): MarketOpportunityItem {
  const score = Math.min(100, Math.max(0, Number(raw.score) || 0));
  const rating = String(raw.rating ?? '') as OpportunityRating;
  const ticker = raw.ticker ? String(raw.ticker) : undefined;
  const label = String(raw.label ?? ticker ?? raw.id ?? `Item ${index + 1}`);
  const topAssets = Array.isArray(raw.top_assets) ? raw.top_assets.map(String) : undefined;
  return {
    id: String(raw.id ?? ticker ?? `${label}-${index}`),
    label,
    ticker,
    class_id: raw.id && !ticker ? String(raw.id) : raw.asset_class ? String(raw.asset_class) : undefined,
    score,
    rating: rating in ratingMeta ? rating : ratingFromScore(score),
    reasons: Array.isArray(raw.reasons) ? raw.reasons.map(String) : [],
    top_assets: topAssets,
    in_portfolio: raw.in_portfolio === true,
    analysis_type: raw.analysis_type === 'fii_fundamentals'
      || raw.analysis_type === 'equity_market_history'
      || raw.analysis_type === 'short_term_market'
      ? raw.analysis_type
      : undefined,
    analysis_factors: Array.isArray(raw.analysis_factors) ? raw.analysis_factors.map(String) : undefined,
  };
}

function normalizeOpportunityList(value: unknown): MarketOpportunityItem[] {
  return Array.isArray(value)
    ? value.map((item, index) => normalizeOpportunityItem((item ?? {}) as Record<string, unknown>, index))
    : [];
}

export async function getMarketOpportunities(
  perfil?: MarketRiskProfile,
  includePortfolio = true,
): Promise<MarketOpportunities> {
  const response = await api.get<Record<string, unknown>>(
    '/market/opportunities',
    {
      params: {
        ...(perfil ? { perfil } : {}),
        carteira: includePortfolio ? 'true' : 'false',
      },
      timeout: 60000,
    },
  );
  const body = response.data;
  const allocation = (body.suggested_allocation_pct ?? {}) as Record<string, unknown>;
  return {
    profile: body.profile ? (String(body.profile) as MarketRiskProfile) : undefined,
    generated_at: body.generated_at ? String(body.generated_at) : undefined,
    disclaimer: body.disclaimer ? String(body.disclaimer) : undefined,
    warnings: Array.isArray(body.warnings) ? body.warnings.map(String) : [],
    classes: normalizeOpportunityList(body.classes),
    assets: normalizeOpportunityList(body.ranking),
    portfolio: normalizeOpportunityList(body.portfolio),
    suggested_allocation: Object.entries(allocation).map(([id, percent]) => ({ id, percent: Number(percent) || 0 })),
  };
}

export async function getInvestmentNews(forceRefresh = false): Promise<MarketNewsResponse> {
  const response = await api.get<MarketNewsResponse>('/market/news', {
    params: forceRefresh ? { refresh: true } : undefined,
    timeout: 20000,
  });
  return response.data;
}

export async function getMarketBacktest(params: BacktestParams): Promise<BacktestResult> {
  const response = await api.get<BacktestResult>('/market/backtest', {
    params: {
      valor: params.valor,
      anos: params.anos,
      aporte_mensal: params.aporte_mensal,
      reajustar_aporte_ipca: params.reajustar_aporte_ipca,
      perfil: params.perfil,
    },
    timeout: 90000,
  });
  return response.data;
}

export async function compareFiis(params: FiiCompareParams): Promise<FiiComparison> {
  const response = await api.get<FiiComparison>('/market/fiis/compare', {
    params: {
      ...(params.tickers.length ? { tickers: params.tickers.join(',') } : {}),
      anos: params.anos,
      valor: params.valor,
    },
    // A primeira chamada baixa os arquivos da CVM e pode levar cerca de 10 segundos.
    timeout: 120000,
  });
  return response.data;
}

function portfolioQuery(params: PortfolioParams) {
  return {
    perfil: params.perfil,
    anos: params.anos,
    prazo_meses: params.prazo_meses,
    cdi_percent: params.cdi_percent,
    lci_percent: params.lci_percent,
    ...(params.meta_renda_fixa !== undefined ? { meta_renda_fixa: params.meta_renda_fixa } : {}),
  };
}

export async function analyzeFiiPortfolio(params: PortfolioParams): Promise<PortfolioAnalysis> {
  // Analisa cada FII da carteira; a primeira chamada baixa os dados da CVM.
  const response = await api.get<PortfolioAnalysis>('/market/portfolio/fii-analysis', {
    params: portfolioQuery(params),
    timeout: 120000,
  });
  return response.data;
}

export async function simulatePortfolioSwitch(
  params: PortfolioParams,
  sales: Array<{ ticker: string; sell_pct: number }>,
): Promise<SwitchSimulation> {
  const response = await api.get<SwitchSimulation>('/market/portfolio/switch-simulation', {
    params: {
      ...portfolioQuery(params),
      vender: sales.map(sale => `${sale.ticker}:${sale.sell_pct}`).join(','),
      meses: '12,24,60',
    },
    timeout: 120000,
  });
  return response.data;
}

export async function refreshDividendPrices(): Promise<DividendPriceRefreshResult> {
  const response = await api.post<{ data: DividendPriceRefreshResult }>('/dividends/refresh-prices', undefined, { timeout: 60000 });
  return response.data.data;
}

export async function getDividendProjection(from?: string, months?: number, cdiRate?: number): Promise<DividendProjection> {
  const response = await api.get<{ data: DividendProjection }>('/dividends/projection', { params: { from, months, cdi_rate: cdiRate } });
  return response.data.data;
}

export async function getDividendCdiRate(): Promise<DividendCdiRate> {
  const response = await api.get<{ data: DividendCdiRate }>('/dividends/cdi-rate');
  return response.data.data;
}

export async function getFixedIncomeHistory(id: TaskId, cdiRate?: number): Promise<FixedIncomeHistory> {
  const response = await api.get<{ data: FixedIncomeHistory }>(
    `/dividends/${encodeURIComponent(String(id))}/fixed-income-history`,
    { params: { cdi_rate: cdiRate }, timeout: 20000 }
  );
  return response.data.data;
}

export async function createDividendHolding(payload: DividendHoldingPayload): Promise<DividendHolding> {
  const response = await api.post<{ data: DividendHolding }>('/dividends', payload);
  return response.data.data;
}

export async function updateDividendHolding(id: TaskId, payload: Partial<DividendHoldingPayload>): Promise<DividendHolding> {
  const response = await api.patch<{ data: DividendHolding }>(`/dividends/${encodeURIComponent(String(id))}`, payload);
  return response.data.data;
}

export async function deleteDividendHolding(id: TaskId): Promise<void> {
  await api.delete(`/dividends/${encodeURIComponent(String(id))}`);
}

export async function getStudyResource(id: TaskId): Promise<StudyResource> {
  const response = await api.get<StudyResource | { data: StudyResource }>(
    `/study-resources/${encodeURIComponent(String(id))}`
  );
  const body = response.data;
  if (body && typeof body === 'object' && 'data' in body && body.data) return body.data;
  return body as StudyResource;
}

export async function createStudyResource(payload: StudyResourcePayload): Promise<void> {
  await api.post('/study-resources', payload);
}

export async function updateStudyResource(id: TaskId, payload: StudyResourcePayload): Promise<void> {
  await api.patch(`/study-resources/${encodeURIComponent(String(id))}`, payload);
}

export async function deleteStudyResource(id: TaskId): Promise<void> {
  await api.delete(`/study-resources/${encodeURIComponent(String(id))}`);
}

export async function getFinanceSummary(): Promise<FinanceSummary> {
  const response = await api.get('/finances/summary');
  const raw = response.data?.data ?? response.data;
  const totalPatrimony = Number(raw?.total_patrimony ?? raw?.total_balance ?? raw?.total ?? 0);
  return {
    total_balance: totalPatrimony,
    account_count: Number(raw?.account_count ?? raw?.accounts_count ?? raw?.accountCount ?? raw?.count ?? 0),
    total_patrimony: totalPatrimony,
    exchange_rate: raw?.exchange_rate == null ? null : Number(raw.exchange_rate),
    exchange_rate_date: raw?.exchange_rate_date ?? raw?.rate_date ?? null,
    asset_count: Number(raw?.asset_count ?? raw?.assetCount ?? 0),
    total_assets: Number(raw?.total_assets ?? raw?.assets_total_brl ?? 0),
    total_debt: Number(raw?.total_debt ?? raw?.liabilities_total_brl ?? 0),
    total_liabilities: Number(raw?.total_liabilities ?? raw?.liabilities_total_brl ?? raw?.total_debt ?? 0),
    monthly_payments: Number(raw?.monthly_payments ?? raw?.monthly_liability_payments_brl ?? raw?.monthly_payment_total ?? 0),
    assets_total_brl: Number(raw?.assets_total_brl ?? raw?.total_assets ?? 0),
    liabilities_total_brl: Number(raw?.liabilities_total_brl ?? raw?.total_liabilities ?? raw?.total_debt ?? 0),
    monthly_liability_payments_brl: Number(raw?.monthly_liability_payments_brl ?? raw?.monthly_payments ?? 0),
    investment_portfolio_invested_brl: Number(raw?.investment_portfolio_invested_brl ?? 0),
    investment_portfolio_value_brl: Number(raw?.investment_portfolio_value_brl ?? 0),
    investment_portfolio_total_value_brl: Number(raw?.investment_portfolio_total_value_brl ?? raw?.investment_portfolio_value_brl ?? 0),
    investment_portfolio_profit_loss_brl: Number(raw?.investment_portfolio_profit_loss_brl ?? 0),
  };
}

export async function getFinanceAccounts(): Promise<FinanceAccount[]> {
  const response = await api.get<{ data?: FinanceAccount[] } | FinanceAccount[]>('/finances/accounts');
  const accounts = Array.isArray(response.data) ? response.data : response.data.data ?? [];
  return accounts.map(account => ({
    ...account,
    currency: (account.currency ?? 'BRL') as FinanceCurrency,
    balance: Number(account.balance) || 0,
    balance_brl: Number(account.balance_brl ?? account.balance) || 0,
    is_active: account.is_active ?? true,
  }));
}

export async function createFinanceAccount(payload: FinanceAccountPayload): Promise<FinanceAccount> {
  const response = await api.post<{ data?: FinanceAccount } | FinanceAccount>('/finances/accounts', payload);
  return 'data' in response.data && response.data.data ? response.data.data : response.data as FinanceAccount;
}

export async function updateFinanceAccount(id: TaskId, payload: FinanceAccountUpdatePayload): Promise<FinanceAccount> {
  const response = await api.patch<{ data?: FinanceAccount } | FinanceAccount>(
    `/finances/accounts/${encodeURIComponent(String(id))}`,
    payload
  );
  return 'data' in response.data && response.data.data ? response.data.data : response.data as FinanceAccount;
}

export async function deleteFinanceAccount(id: TaskId): Promise<void> {
  await api.delete(`/finances/accounts/${encodeURIComponent(String(id))}`);
}

function normalizeFinanceAsset(asset: FinanceAsset): FinanceAsset {
  return {
    ...asset,
    currency: (asset.currency ?? 'BRL') as FinanceCurrency,
    estimated_value: Number(asset.estimated_value) || 0,
    monthly_rent: Number(asset.monthly_rent) || 0,
    value_brl: asset.value_brl == null ? undefined : Number(asset.value_brl),
    estimated_value_brl: asset.estimated_value_brl == null ? undefined : Number(asset.estimated_value_brl),
    debt_brl: asset.debt_brl == null ? undefined : Number(asset.debt_brl),
    net_value_brl: asset.net_value_brl == null ? undefined : Number(asset.net_value_brl),
  };
}

export async function getFinanceAssets(): Promise<FinanceAsset[]> {
  const response = await api.get<{ data?: FinanceAsset[] } | FinanceAsset[]>('/finances/assets');
  const assets = Array.isArray(response.data) ? response.data : response.data.data ?? [];
  return assets.map(normalizeFinanceAsset);
}

export async function createFinanceAsset(payload: FinanceAssetPayload): Promise<FinanceAsset> {
  const response = await api.post<{ data?: FinanceAsset } | FinanceAsset>('/finances/assets', payload);
  const asset = 'data' in response.data && response.data.data ? response.data.data : response.data as FinanceAsset;
  return normalizeFinanceAsset(asset);
}

export async function updateFinanceAsset(id: TaskId, payload: FinanceAssetPayload): Promise<FinanceAsset> {
  const response = await api.patch<{ data?: FinanceAsset } | FinanceAsset>(`/finances/assets/${encodeURIComponent(String(id))}`, payload);
  const asset = 'data' in response.data && response.data.data ? response.data.data : response.data as FinanceAsset;
  return normalizeFinanceAsset(asset);
}

export async function deleteFinanceAsset(id: TaskId): Promise<void> {
  await api.delete(`/finances/assets/${encodeURIComponent(String(id))}`);
}

function normalizeFinanceLiability(liability: FinanceLiability): FinanceLiability {
  return {
    ...liability,
    currency: (liability.currency ?? 'BRL') as FinanceCurrency,
    original_amount: Number(liability.original_amount) || 0,
    outstanding_balance: Number(liability.outstanding_balance) || 0,
    monthly_payment: Number(liability.monthly_payment) || 0,
    value_brl: liability.value_brl == null ? undefined : Number(liability.value_brl),
    outstanding_balance_brl: liability.outstanding_balance_brl == null ? undefined : Number(liability.outstanding_balance_brl),
    monthly_payment_brl: liability.monthly_payment_brl == null ? undefined : Number(liability.monthly_payment_brl),
  };
}

export async function getFinanceLiabilities(): Promise<FinanceLiability[]> {
  const response = await api.get<{ data?: FinanceLiability[] } | FinanceLiability[]>('/finances/liabilities');
  const liabilities = Array.isArray(response.data) ? response.data : response.data.data ?? [];
  return liabilities.map(normalizeFinanceLiability);
}

export async function createFinanceLiability(payload: FinanceLiabilityPayload): Promise<FinanceLiability> {
  const response = await api.post<{ data?: FinanceLiability } | FinanceLiability>('/finances/liabilities', payload);
  const liability = 'data' in response.data && response.data.data ? response.data.data : response.data as FinanceLiability;
  return normalizeFinanceLiability(liability);
}

export async function updateFinanceLiability(id: TaskId, payload: FinanceLiabilityPayload): Promise<FinanceLiability> {
  const response = await api.patch<{ data?: FinanceLiability } | FinanceLiability>(`/finances/liabilities/${encodeURIComponent(String(id))}`, payload);
  const liability = 'data' in response.data && response.data.data ? response.data.data : response.data as FinanceLiability;
  return normalizeFinanceLiability(liability);
}

export async function deleteFinanceLiability(id: TaskId): Promise<void> {
  await api.delete(`/finances/liabilities/${encodeURIComponent(String(id))}`);
}

export async function getTasks(page = 1, limit = 10): Promise<PaginatedTasks> {
  const response = await api.get<PaginatedTasks>('/tasks', {
    params: { page, limit },
  });
  return response.data;
}

export async function getDailyTasks(date?: string): Promise<DailyTaskRecord[]> {
  const response = await api.get<{ data: DailyTaskRecord[] }>('/daily', {
    params: date ? { date } : undefined,
  });
  return response.data.data;
}

export async function getDailyHistory(page = 1, limit = 10, date?: string): Promise<PaginatedDailyHistory> {
  const response = await api.get<PaginatedDailyHistory>('/daily/history', {
    params: { page, limit, ...(date ? { date } : {}) },
  });
  return response.data;
}

export async function getDailyHistoryByDate(date: string): Promise<DailyHistoryDayDetail> {
  const response = await api.get<DailyHistoryDayDetail>(`/daily/history/${encodeURIComponent(date)}`);
  return response.data;
}

export async function getWeeklyHistory(page = 1, limit = 10, date?: string): Promise<PaginatedDailyPeriodHistory> {
  const response = await api.get<PaginatedDailyPeriodHistory>('/daily/history/week', {
    params: { page, limit, ...(date ? { date } : {}) },
  });
  return response.data;
}

export async function getMonthlyHistory(page = 1, limit = 10, date?: string): Promise<PaginatedDailyPeriodHistory> {
  const response = await api.get<PaginatedDailyPeriodHistory>('/daily/history/month', {
    params: { page, limit, ...(date ? { date } : {}) },
  });
  return response.data;
}

export async function getActivity(page = 1, limit = 20): Promise<PaginatedActivity> {
  const response = await api.get<PaginatedActivity>('/activity', { params: { page, limit } });
  return response.data;
}

export async function getActivitySummary(): Promise<ActivitySummary> {
  const response = await api.get<{ data: ActivitySummary }>('/activity/summary');
  return response.data.data;
}

export async function getGoals(): Promise<LifeGoal[]> {
  const response = await api.get<{ data: LifeGoal[] }>('/objectives');
  return response.data.data;
}

export async function createGoal(payload: CreateGoalPayload): Promise<LifeGoal> {
  const response = await api.post<{ data: LifeGoal }>('/objectives', payload);
  return response.data.data;
}

export async function updateGoal(goalId: TaskId, payload: UpdateGoalPayload): Promise<LifeGoal> {
  const response = await api.patch<{ data: LifeGoal }>(
    `/objectives/${encodeURIComponent(String(goalId))}`,
    payload
  );
  return response.data.data;
}

export async function deleteGoal(goalId: TaskId): Promise<void> {
  await api.delete(`/objectives/${encodeURIComponent(String(goalId))}`);
}

export async function addGoalStep(goalId: TaskId, title: string): Promise<GoalStep> {
  const response = await api.post<{ data: GoalStep }>(
    `/objectives/${encodeURIComponent(String(goalId))}/steps`,
    { title, status: 'pendente' }
  );
  return response.data.data;
}

export async function setGoalStepStatus(
  goalId: TaskId,
  stepId: TaskId,
  status: ObjectiveStepStatus
): Promise<GoalStep & { activity?: ActivityEvent | null; activities?: ActivityEvent[] }> {
  const response = await api.patch<{ data: GoalStep; activity?: ActivityEvent | null; activities?: ActivityEvent[] }>(
    `/objectives/${encodeURIComponent(String(goalId))}/steps/${encodeURIComponent(String(stepId))}`,
    { status }
  );
  return { ...response.data.data, activity: response.data.activity, activities: response.data.activities };
}

export async function deleteGoalStep(goalId: TaskId, stepId: TaskId): Promise<void> {
  await api.delete(
    `/objectives/${encodeURIComponent(String(goalId))}/steps/${encodeURIComponent(String(stepId))}`
  );
}

export async function getSchedule(query: ScheduleQuery, page = 1, limit = 20): Promise<PaginatedSchedule> {
  const params: Record<string, string | number> = { page, limit };
  if (query.mode === 'date') {
    params.date = query.date;
  } else if (query.mode === 'range') {
    params.from = query.from;
    params.to = query.to;
  }
  const response = await api.get<PaginatedSchedule>('/schedule', {
    params,
  });
  return response.data;
}

export async function getScheduleAlerts(page = 1, limit = 20): Promise<PaginatedScheduleAlerts> {
  const response = await api.get<PaginatedScheduleAlerts>('/schedule/alerts', {
    params: { page, limit },
  });
  return response.data;
}

export async function createScheduleEvent(payload: SchedulePayload): Promise<ScheduleEvent> {
  const response = await api.post<{ data: ScheduleEvent }>('/schedule', payload);
  return response.data.data;
}

export async function updateScheduleEvent(
  eventId: TaskId,
  payload: Partial<SchedulePayload>
): Promise<ScheduleEvent> {
  const response = await api.patch<{ data: ScheduleEvent }>(
    `/schedule/${encodeURIComponent(String(eventId))}`,
    payload
  );
  return response.data.data;
}

export async function deleteScheduleEvent(eventId: TaskId): Promise<void> {
  await api.delete(`/schedule/${encodeURIComponent(String(eventId))}`);
}

export async function createTask(payload: CreateTaskPayload): Promise<Task> {
  const response = await api.post<{ data: Task }>('/tasks', payload);
  return response.data.data;
}

export async function updateTask(taskId: TaskId, payload: UpdateTaskPayload): Promise<void> {
  await api.patch(`/tasks/${encodeURIComponent(String(taskId))}`, payload);
}

export async function deleteTask(taskId: TaskId): Promise<void> {
  await api.delete(`/tasks/${taskId}`);
}

// Requer endpoint GET /tasks/history?period=week|month|year no backend.
export async function getHistory(period: string): Promise<HistoryRecord[]> {
  const response = await api.get<{ data: HistoryRecord[] }>('/tasks/history', {
    params: { period },
  });
  return response.data.data;
}

export async function setItemCompleted(
  dailyItemId: TaskId,
  isCompleted: boolean
): Promise<DailyChecklistItemUpdate> {
  const response = await api.patch<{ data: DailyChecklistItemUpdate; activity?: ActivityEvent | null }>(
    `/daily/items/${encodeURIComponent(String(dailyItemId))}`,
    { is_completed: isCompleted }
  );
  return { ...response.data.data, activity: response.data.activity };
}

export async function deactivateTask(taskId: TaskId): Promise<void> {
  await api.patch(`/tasks/${taskId}/deactivate`);
}

export async function activateTask(taskId: TaskId): Promise<void> {
  await api.patch(`/tasks/${taskId}/activate`);
}
