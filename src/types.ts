export interface TaskItem {
  id: number;
  title: string;
  sort_order: number;
  completed?: boolean;
  completed_at?: string | null;
}

export type TaskId = string | number;

export interface AuthUser {
  id: TaskId;
  email: string;
  name?: string | null;
}

export type SubscriptionPlan = 'monthly' | 'annual';
export type PaymentMethod = 'pix' | 'card';
export type SubscriptionStatus = 'pending_payment' | 'active' | 'canceled' | 'expired' | string;
export type PaymentStatus = 'pending' | 'paid' | 'failed' | 'canceled' | string;

export interface PaymentCardDetails {
  holder_name: string;
  number: string;
  exp_month: number;
  exp_year: number;
  cvv: string;
}

export interface AuthCredentials {
  email: string;
  password: string;
  name?: string;
  plan?: SubscriptionPlan;
  payment_method?: PaymentMethod;
  card?: PaymentCardDetails;
}

export interface SubscriptionPlanOption {
  id: SubscriptionPlan;
  label: string;
  price: number;
  currency: string;
  interval: 'month' | 'year' | string;
  description?: string | null;
}

export interface SubscriptionPaymentMethods {
  pix: boolean;
  card: boolean;
}

export interface SubscriptionPlansResponse {
  plans: SubscriptionPlanOption[];
  payment_methods: SubscriptionPaymentMethods;
  currency?: string;
}

export interface UserSubscription {
  id: TaskId;
  plan: SubscriptionPlan;
  status: SubscriptionStatus;
  price?: number;
  currency?: string;
  started_at?: string | null;
  expires_at?: string | null;
  created_at?: string;
  updated_at?: string;
}

export interface SubscriptionPaymentPix {
  copy_paste: string | null;
  qr_code_base64: string | null;
  ready: boolean;
  message?: string | null;
}

export interface SubscriptionPaymentCardInfo {
  brand?: string | null;
  last4?: string | null;
  holder_name?: string | null;
}

export interface SubscriptionPayment {
  id: TaskId;
  payment_method: PaymentMethod;
  status: PaymentStatus;
  amount: number;
  currency: string;
  pix?: SubscriptionPaymentPix | null;
  card?: SubscriptionPaymentCardInfo | null;
  created_at?: string;
  updated_at?: string;
}

export interface RegisterResult {
  user: AuthUser;
  subscription: UserSubscription;
  payment: SubscriptionPayment;
  next_step?: string;
}

export interface AssistantMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface ActivityEvent {
  id: TaskId;
  event_type: string;
  entity_id: TaskId;
  title: string;
  message: string;
  created_at: string;
}

export interface ActivitySummary {
  events_count: number;
  checks_completed: number;
  goal_steps_completed: number;
  goals_completed: number;
  last_activity_at: string | null;
}

export interface PaginatedActivity {
  data: ActivityEvent[];
  pagination: Omit<TaskPagination, 'activeTotal' | 'inactiveTotal'>;
}

export type FinanceAccountType = 'conta_corrente' | 'poupanca' | 'investimento' | 'dinheiro' | 'outro';
export type FinanceCurrency = 'BRL' | 'USD';

export interface FinanceAccount {
  id: TaskId;
  institution: string;
  account_name: string;
  account_type: FinanceAccountType;
  currency: FinanceCurrency;
  balance: number;
  balance_brl: number;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface FinanceSummary {
  total_balance: number;
  account_count: number;
  total_patrimony?: number;
  exchange_rate?: number | null;
  exchange_rate_date?: string | null;
  asset_count?: number;
  total_assets?: number;
  total_debt?: number;
  total_liabilities?: number;
  monthly_payments?: number;
  assets_total_brl?: number;
  liabilities_total_brl?: number;
  monthly_liability_payments_brl?: number;
  investment_portfolio_invested_brl?: number;
  investment_portfolio_value_brl?: number;
  investment_portfolio_total_value_brl?: number;
  investment_portfolio_profit_loss_brl?: number;
}

export interface FinanceAccountPayload {
  institution: string;
  account_type: FinanceAccountType;
  currency: FinanceCurrency;
  balance: number;
}

export type FinanceAccountUpdatePayload = Partial<FinanceAccountPayload> & {
  is_active?: boolean;
};

export type FinanceAssetType = 'carro' | 'moto' | 'imovel' | 'outro';
export type FinanceOwnershipStatus = 'proprio' | 'financiado' | 'alugado' | 'outro';

export interface FinanceAsset {
  id: TaskId;
  name: string;
  asset_type: FinanceAssetType;
  estimated_value: number;
  currency: FinanceCurrency;
  ownership_status: FinanceOwnershipStatus;
  monthly_rent: number;
  include_in_patrimony: boolean;
  value_brl?: number;
  estimated_value_brl?: number;
  debt_brl?: number;
  net_value_brl?: number;
  created_at?: string;
  updated_at?: string;
}

export interface FinanceAssetPayload {
  name: string;
  asset_type: FinanceAssetType;
  estimated_value: number;
  currency: FinanceCurrency;
  ownership_status: FinanceOwnershipStatus;
  monthly_rent: number;
  include_in_patrimony: boolean;
}

export type FinanceLiabilityType = 'financiamento' | 'cartao_credito' | 'emprestimo' | 'aluguel' | 'conta' | 'outro';

export interface FinanceLiability {
  id: TaskId;
  name: string;
  liability_type: FinanceLiabilityType;
  original_amount: number;
  outstanding_balance: number;
  monthly_payment: number;
  currency: FinanceCurrency;
  due_date?: string | null;
  value_brl?: number;
  outstanding_balance_brl?: number;
  monthly_payment_brl?: number;
  created_at?: string;
  updated_at?: string;
}

export interface FinanceLiabilityPayload {
  name: string;
  liability_type: FinanceLiabilityType;
  original_amount: number;
  outstanding_balance: number;
  monthly_payment: number;
  currency: FinanceCurrency;
  due_date: string | null;
}

export type StudyResourceType = 'link' | 'texto' | 'documento' | 'video' | 'curso' | 'livro' | 'artigo' | 'outro';

export interface StudyResource {
  id: TaskId;
  title: string;
  area: string;
  type: StudyResourceType;
  url: string | null;
  content: string | null;
  tags: string[];
  created_at?: string;
  updated_at?: string;
}

export interface StudyResourcePayload {
  title: string;
  area: string;
  type: StudyResourceType;
  url: string | null;
  content: string | null;
  tags: string[];
}

export interface PaginatedStudyResources {
  data: StudyResource[];
  pagination: Omit<TaskPagination, 'activeTotal' | 'inactiveTotal'>;
}

export interface StudyResourceArea {
  area: string;
  count: number;
}

export type EnglishStudyStatus = 'planejado' | 'concluido' | 'cancelado';

export interface EnglishStudySession {
  id: TaskId;
  title: string;
  study_date: string;
  topic: string | null;
  study_time: string | null;
  duration_minutes: number;
  status: EnglishStudyStatus;
  material_url: string | null;
  content: string | null;
  created_at: string;
  updated_at: string;
}

export interface EnglishStudySessionPayload {
  title: string;
  study_date: string;
  topic: string | null;
  study_time: string | null;
  duration_minutes: number;
  status: EnglishStudyStatus;
  material_url: string | null;
  content: string | null;
}

export interface EnglishStudySessionFilters {
  from?: string;
  to?: string;
  status?: EnglishStudyStatus;
  page?: number;
  limit?: number;
}

export interface PaginatedEnglishStudySessions {
  data: EnglishStudySession[];
  pagination: Omit<TaskPagination, 'activeTotal' | 'inactiveTotal'>;
}

export interface EnglishStudyGoal {
  daily_goal_minutes: number;
}

export interface EnglishStudyDailySummary {
  study_date: string;
  sessions: number;
  total_minutes: number;
}

export interface EnglishStudySummary extends EnglishStudyGoal {
  minutes_today: number;
  minutes_remaining_today: number;
  goal_progress_percent: number;
  daily: EnglishStudyDailySummary[];
}

export type ExpenseType = 'compra' | 'fixa';

export interface Expense {
  id: TaskId;
  name: string;
  expense_type: ExpenseType;
  category: string;
  amount: number | string;
  expense_date: string | null;
  due_day: number | null;
  is_active: boolean;
  notes: string | null;
  created_at?: string;
  updated_at?: string;
}

export interface ExpensePayload {
  name: string;
  expense_type: ExpenseType;
  amount: number;
  category?: string;
  expense_date?: string | null;
  due_day?: number | null;
  is_active?: boolean;
  notes?: string | null;
}

export interface ExpenseFilters {
  type?: ExpenseType;
  category?: string;
  month?: string;
  active?: boolean;
  search?: string;
  page?: number;
  limit?: number;
}

export interface PaginatedExpenses {
  data: Expense[];
  pagination: Omit<TaskPagination, 'activeTotal' | 'inactiveTotal'>;
}

export interface ExpenseCategory {
  category: string;
  expense_count: number | string;
}

export interface ExpenseSummary {
  month: string;
  fixed_total: number | string;
  purchases_total: number | string;
  total: number | string;
  comparison?: {
    previous_month: string;
    previous_total: number | string;
    difference: number | string;
    change_percentage: number | string | null;
  };
  top_category?: { category: string; total: number | string; expense_count: number | string; percentage: number | string } | null;
  by_category: Array<{ category: string; total: number | string; expense_count: number | string; percentage?: number | string }>;
  daily_spending?: Array<{ date: string; total: number | string; expense_count?: number | string }>;
}

export type DividendAssetType =
  | 'fii' | 'fiagro' | 'acao' | 'bdr' | 'etf' | 'fundo' | 'tesouro' | 'cdb' | 'lci_lca'
  | 'debenture' | 'previdencia' | 'cripto' | 'acao_us' | 'renda_fixa' | 'outro';
export type DividendFrequency = 'mensal' | 'trimestral' | 'semestral' | 'anual';
export type FiiSegment = 'papel' | 'tijolo' | 'hibrido';
export type DividendQuoteMarket = 'b3' | 'us' | 'crypto' | string | null;

export interface DividendAssetTypeOption {
  id: DividendAssetType;
  label: string;
  default_frequency: DividendFrequency;
  auto_quote: boolean;
  quote_market: DividendQuoteMarket;
  uses_fii_segment: boolean;
}

export interface DividendHolding {
  id: TaskId;
  ticker: string;
  name: string | null;
  asset_type: DividendAssetType;
  fii_segment: FiiSegment | null;
  quantity: number | string;
  applied_amount?: number | string | null;
  cdi_percent?: number | string | null;
  investment_date?: string | null;
  dividend_per_share?: number | string | null;
  frequency: DividendFrequency;
  reference_month: number;
  payment_day: number;
  average_price: number | string;
  current_price: number | string | null;
  auto_price: boolean;
  price_updated_at: string | null;
  invested_amount: number | string;
  current_value: number | string;
  profit_loss: number | string;
  is_active: boolean;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface DividendHoldingPayload {
  ticker: string;
  quantity?: number;
  asset_type?: DividendAssetType;
  applied_amount?: number;
  cdi_percent?: number;
  investment_date?: string;
  name?: string | null;
  fii_segment?: FiiSegment | null;
  dividend_per_share?: number;
  average_price?: number;
  current_price?: number | null;
  auto_price?: boolean;
  frequency?: DividendFrequency;
  reference_month?: number;
  payment_day?: number;
  is_active?: boolean;
  notes?: string | null;
}

export interface DividendFilters {
  asset_type?: DividendAssetType;
  fii_segment?: FiiSegment;
  active?: boolean;
  search?: string;
  page?: number;
  limit?: number;
}

export interface PaginatedDividendHoldings {
  data: DividendHolding[];
  pagination: Omit<TaskPagination, 'activeTotal' | 'inactiveTotal'>;
}

export interface DividendPriceRefreshResult {
  updated_count: number;
  failed_count: number;
  results: { holding_id: TaskId; ticker: string; updated: boolean; current_price?: number; error?: string }[];
}

export interface DividendPortfolioGroup {
  key: string;
  label: string;
  holdings_count: number | string;
  invested_total: number | string;
  current_total: number | string;
  profit_loss: number | string;
}

export interface DividendPortfolio {
  holdings_count: number | string;
  prices_updated_at: string | null;
  invested_total: number | string;
  current_total: number | string;
  profit_loss: number | string;
  profit_loss_percent: number | string | null;
  by_asset_type: DividendPortfolioGroup[];
  by_fii_segment: DividendPortfolioGroup[];
}

export interface DividendProjectionItem {
  holding_id: TaskId;
  ticker: string;
  name: string | null;
  asset_type: DividendAssetType;
  quantity?: number | string;
  cdi_percent?: number | string;
  investment_date?: string;
  dividend_per_share?: number | string | null;
  amount: number | string;
  gross_amount?: number | string;
  tax_amount?: number | string;
  net_amount?: number | string;
  income_tax_rate?: number | string;
  payment_date: string;
}

export interface DividendProjectionMonth {
  month: string;
  total: number | string;
  gross_total?: number | string;
  tax_total?: number | string;
  income_tax_rate?: number | string;
  net_total?: number | string;
  items: DividendProjectionItem[];
}

export interface DividendProjection {
  from: string;
  months_count: number;
  cdi_rate?: number | string;
  income_tax_rate?: number | string;
  gross_total?: number | string;
  tax_total?: number | string;
  total?: number | string;
  net_total?: number | string;
  period_total: number | string;
  monthly_average: number | string;
  monthly_average_gross?: number | string;
  monthly_average_tax?: number | string;
  months: DividendProjectionMonth[];
}

export interface DividendCdiRate {
  rate: number;
  reference_date: string;
  source: string;
}

export interface Task {
  id: TaskId;
  title: string;
  description: string | null;
  priority?: TaskPriority | null;
  frequencia?: string | null;
  start_date: string;
  end_date: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  items: TaskItem[];
}

export type MarketRiskProfile = 'conservador' | 'moderado' | 'arrojado';
export type OpportunityRating = 'otimo' | 'bom' | 'neutro' | 'atencao' | 'evitar';

export interface MarketOpportunityItem {
  id: string;
  label: string;
  ticker?: string;
  class_id?: string;
  score: number;
  rating: OpportunityRating;
  reasons: string[];
  top_assets?: string[];
  in_portfolio?: boolean;
  analysis_type?: 'fii_fundamentals' | 'equity_market_history' | 'short_term_market';
  analysis_factors?: string[];
}

export interface MarketOpportunities {
  profile?: MarketRiskProfile;
  generated_at?: string;
  disclaimer?: string;
  warnings: string[];
  classes: MarketOpportunityItem[];
  assets: MarketOpportunityItem[];
  portfolio: MarketOpportunityItem[];
  suggested_allocation: Array<{ id: string; percent: number }>;
}

export interface BacktestYear {
  year: number;
  partial: boolean;
  return_pct: number;
  value_without_contributions: number;
  value_with_contributions: number;
}

export interface BacktestAsset {
  id: string;
  name: string;
  kind: 'ativo' | 'carteira';
  note?: string;
  weights_pct?: Record<string, number>;
  rating: OpportunityRating;
  rating_label: string;
  preserved_purchasing_power: boolean;
  without_contributions: {
    final_value: number;
    multiple: number;
    final_value_in_initial_purchasing_power: number;
    cagr_pct: number;
    real_cagr_pct: number;
    annual_volatility_pct: number;
    max_drawdown_pct: number;
    peak: string | null;
    trough: string | null;
    recovered_at: string | null;
    months_to_recover: number | null;
    best_year: BacktestYear | null;
    worst_year: BacktestYear | null;
    negative_years: number;
  };
  with_contributions: {
    total_invested: number;
    final_value: number;
    gain: number;
    return_on_invested_pct: number;
    annual_irr_pct: number;
    final_value_in_initial_purchasing_power: number;
  };
  yearly: BacktestYear[];
}

export interface BacktestCrisis {
  id: string;
  name: string;
  period: { start: string; end: string };
  inflation_pct: number;
  results: Array<{
    id: string;
    name: string;
    return_pct: number;
    worst_drop_pct: number;
    value_at_start: number;
    value_at_end: number;
  }>;
}

export interface BacktestResult {
  generated_at: string;
  parameters: {
    initial_amount: number;
    monthly_contribution: number;
    contribution_indexed_to_ipca: boolean;
    start_year: number;
    period: { start: string; end: string; months: number; years: number };
    profile: MarketRiskProfile;
  };
  inflation: {
    ipca_accumulated_pct: number;
    ipca_average_annual_pct: number;
    initial_amount_corrected_to_today: number;
    initial_amount_today_in_start_purchasing_power: number;
  };
  highlights: string[];
  portfolio: BacktestAsset;
  assets: BacktestAsset[];
  crises: BacktestCrisis[];
  unavailable: Array<{ id: string; reason: string }>;
  disclaimer: string;
}

export interface BacktestParams {
  valor: number;
  anos: number;
  aporte_mensal: number;
  reajustar_aporte_ipca: boolean;
  perfil: MarketRiskProfile;
}

export interface FiiWindow {
  months: number;
  from: string;
  to: string;
  price_return_pct: number | null;
  distributions_per_share: number;
  total_return_pct: number | null;
  total_cagr_pct: number | null;
  cdi_cagr_pct: number | null;
  ipca_cagr_pct: number | null;
  excess_over_cdi_pp: number | null;
  real_cagr_pct: number | null;
  annual_volatility_pct: number | null;
  max_drawdown_pct: number | null;
  drawdown_peak: string | null;
  drawdown_trough: string | null;
}

export interface FiiYear {
  year: number;
  months: number;
  partial: boolean;
  price_return_pct: number | null;
  distributions_per_share: number;
  dividend_yield_on_start_price_pct: number | null;
  total_return_pct: number | null;
}

export interface FiiFund {
  ticker: string;
  name: string;
  segment: string | null;
  mandate: string | null;
  management: string | null;
  fund_age_years: number | null;
  listed_age_years: number;
  history: { from: string; to: string; months: number };
  market: {
    price: number;
    price_date: string;
    vp_per_share: number;
    p_vp: number;
    p_vp_median_5y: number | null;
    p_vp_vs_median_pct: number | null;
  };
  distributions: {
    last_12m_per_share: number;
    dividend_yield_12m_pct: number | null;
    average_dividend_yield_5y_pct: number | null;
    months_paid_pct: number | null;
    variation_coefficient_24m?: number | null;
    growth_cagr_3y_pct: number | null;
  };
  equity: {
    net_assets: number | null;
    holders: number | null;
    holders_growth_5y_pct?: number | null;
    vp_cagr_5y_pct?: number | null;
  };
  yearly_history: FiiYear[];
  score: number;
  rating: OpportunityRating;
  rating_label: string;
  reasons: string[];
  common_window: FiiWindow | null;
  simulation: {
    initial_amount: number;
    window: string;
    fii_final_value: number;
    cdi_final_value: number | null;
    inflation_corrected_amount: number | null;
  } | null;
}

export interface FiiComparison {
  generated_at: string;
  comparison: {
    requested_years: number;
    window_months: number;
    window_years: number;
    limited_by_youngest_fund: boolean;
    average_age_years: number;
    oldest: string | null;
    youngest: string | null;
  };
  leaders: {
    best_total_return: string | null;
    highest_dividend_yield: string | null;
    lowest_drawdown: string | null;
    cheapest_p_vp: string | null;
  };
  funds: FiiFund[];
  not_found: Array<{ ticker: string; reason: string }>;
  disclaimer: string;
}

export interface FiiCompareParams {
  tickers: string[];
  anos: number;
  valor: number;
}

export type PortfolioRecommendation = 'vender' | 'reduzir' | 'manter' | 'sem_dados';

export interface PortfolioPosition {
  ticker: string;
  name: string | null;
  segment: string | null;
  quantity: number;
  price: number;
  market_value: number;
  weight_pct: number;
  invested: number | null;
  gain: number | null;
  estimated_sale_tax: number;
  cost_basis_missing: boolean;
  recommendation: PortfolioRecommendation;
  suggested_sell_pct: number;
  sell_score: number | null;
  quality_score: number | null;
  quality_rating?: string;
  quality_reasons?: string[];
  vp_per_share?: number | null;
  net_assets?: number | null;
  fund_age_years?: number | null;
  listed_age_years?: number | null;
  variation_coefficient_24m?: number | null;
  months_paid_pct?: number | null;
  annual_volatility_pct?: number | null;
  excess_over_cdi_pp?: number | null;
  vacancy_rate_pct?: number | null;
  dividend_yield_12m_pct: number | null;
  yield_on_cost_pct?: number | null;
  p_vp?: number;
  total_cagr_pct?: number | null;
  cdi_cagr_pct?: number | null;
  max_drawdown_pct?: number | null;
  reasons: string[];
}

export interface FixedIncomeProduct {
  id: string;
  name: string;
  gross_annual_pct: number;
  income_tax_pct: number;
  net_annual_pct: number;
  note: string;
}

export interface SellPlan {
  mode: 'meta_renda_fixa' | 'recomendacao';
  sales: Array<{ ticker: string; sell_pct: number; gross: number; tax: number; net: number; income_lost: number; forced: boolean }>;
  totals: {
    gross_proceeds: number;
    estimated_tax: number;
    net_proceeds: number;
    fii_income_lost_per_year: number;
    fixed_income_income_per_year: number;
    income_change_per_year: number;
    tax_payback_months: number | null;
    fixed_income_share_after_pct: number | null;
  };
  message: string;
}

export interface PortfolioAnalysis {
  generated_at: string;
  profile: MarketRiskProfile;
  portfolio: {
    total_value: number;
    allocation_pct: Record<string, number>;
    fixed_income_target_pct: number;
    fixed_income_gap_pct: number | null;
    fiis_count: number;
  };
  fixed_income: {
    holding_period_months: number;
    best_net_option: string;
    products: FixedIncomeProduct[];
    cdi: number;
    selic: number;
    ipca_12m: number;
  };
  positions: PortfolioPosition[];
  sell_plan: SellPlan;
  notes: string[];
}

export interface SwitchSimulation {
  sold: Array<{ ticker: string; sell_pct: number; gross_proceeds: number; estimated_tax: number; net_proceeds: number; dividend_yield_12m_pct: number }>;
  totals: { gross_proceeds: number; estimated_tax: number; net_proceeds: number };
  break_even: {
    weighted_fii_dividend_yield_pct: number;
    best_fixed_income_net_pct: number;
    fii_price_appreciation_needed_per_year_pct: number;
    note: string;
  };
  projections: Array<{
    months: number;
    keep_funds_value: number;
    switch_values: Record<string, number>;
    best_switch_option: string;
    difference_best_switch_vs_keep: number;
  }>;
  assumptions: string[];
}

export interface PortfolioParams {
  perfil: MarketRiskProfile;
  anos: number;
  prazo_meses: number;
  cdi_percent: number;
  lci_percent: number;
  meta_renda_fixa?: number;
}

export interface TaskPagination {
  page: number;
  limit: number;
  total: number;
  activeTotal: number;
  inactiveTotal: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface PaginatedTasks {
  data: Task[];
  pagination: TaskPagination;
}

export type ObjectiveStatus = 'pendente' | 'em_andamento' | 'concluido';
export type ObjectiveStepStatus = 'pendente' | 'concluido';

export interface GoalStep {
  id: TaskId;
  title: string;
  status: ObjectiveStepStatus;
  step_order: number;
}

export interface LifeGoal {
  id: TaskId;
  title: string;
  description: string | null;
  target_date: string;
  status: ObjectiveStatus;
  created_at: string;
  steps: GoalStep[];
}

export interface CreateGoalStepPayload {
  title: string;
  status?: ObjectiveStepStatus;
  step_order?: number;
}

export interface CreateGoalPayload {
  title: string;
  description: string | null;
  target_date: string;
  status: ObjectiveStatus;
  steps: CreateGoalStepPayload[];
}

export type UpdateGoalPayload = Partial<Omit<CreateGoalPayload, 'steps'>>;

export interface DailyChecklistItem {
  id: TaskId;
  task_item_id: TaskId;
  title: string;
  is_completed: boolean;
  completed_at: string | null;
  record_date?: string;
}

export interface DailyChecklistItemUpdate extends Omit<DailyChecklistItem, 'title'> {
  title?: string;
  item_title?: string;
  activity?: ActivityEvent | null;
}

export interface DailyTaskRecord {
  task_id: TaskId;
  record_date: string;
  task_title: string;
  items: DailyChecklistItem[];
  total_items: number;
  completed_items: number;
}

export interface DailyHistoryItem extends DailyChecklistItem {
  task_id: TaskId;
  task_title: string;
}

export interface DailyHistoryDay {
  date: string;
  total_items: number;
  completed_items: number;
  pending_items: number;
  completion_percentage: number | null;
  items: DailyHistoryItem[];
}

export interface PaginatedDailyHistory {
  data: DailyHistoryDay[];
  pagination: Omit<TaskPagination, 'activeTotal' | 'inactiveTotal'>;
}

export interface DailyHistoryDayDetail {
  period: 'day';
  date: string;
  summary: {
    total_items: number;
    completed_items: number;
    pending_items: number;
    completion_percentage: number | null;
  };
  data: Array<{
    id: TaskId;
    date: string;
    task_item_id: TaskId;
    item_title: string;
    sort_order: number;
    task_id: TaskId;
    task_title: string;
    is_completed: boolean;
    completed_at: string | null;
  }>;
}

export interface DailyHistoryPeriod {
  start_date: string;
  end_date: string;
  total_items: number;
  completed_items: number;
  pending_items: number;
  completion_percentage: number | null;
  items: Array<DailyHistoryItem & { date: string }>;
}

export interface PaginatedDailyPeriodHistory {
  period: 'week' | 'month';
  data: DailyHistoryPeriod[];
  pagination: Omit<TaskPagination, 'activeTotal' | 'inactiveTotal'>;
}

export type ScheduleEventType = 'lembrete' | 'atividade' | 'aniversario';
export type ScheduleEventStatus = 'pendente' | 'concluido' | 'cancelado';
export type ScheduleAlertReason = 'lembrete_definido' | 'evento_proximo';

export interface ScheduleEvent {
  id: TaskId;
  title: string;
  description: string | null;
  type: ScheduleEventType;
  event_date: string;
  occurrence_date?: string;
  event_time: string | null;
  reminder_at: string | null;
  repeat_yearly: boolean;
  status: ScheduleEventStatus;
  created_at?: string;
  updated_at?: string;
}

export interface SchedulePayload {
  title: string;
  description: string | null;
  type: ScheduleEventType;
  event_date: string;
  event_time: string | null;
  reminder_at: string | null;
  repeat_yearly: boolean;
  status: ScheduleEventStatus;
}

export type ScheduleQuery =
  | { mode: 'all' }
  | { mode: 'date'; date: string }
  | { mode: 'range'; from: string; to: string };

export interface PaginatedSchedule {
  data: ScheduleEvent[];
  pagination: Omit<TaskPagination, 'activeTotal' | 'inactiveTotal'>;
}

export interface ScheduleAlert extends ScheduleEvent {
  alert_reasons: ScheduleAlertReason[];
}

export interface PaginatedScheduleAlerts {
  data: ScheduleAlert[];
  pagination: Omit<TaskPagination, 'activeTotal' | 'inactiveTotal'>;
  window_hours: number;
}

export type TaskPriority = 'low' | 'medium' | 'high';
export type TaskFrequency = 'diaria' | 'semana' | 'mensal';

export interface CreateTaskPayload {
  title: string;
  description: string | null;
  priority?: TaskPriority;
  frequencia: TaskFrequency;
  start_date?: string;
  end_date: string | null;
  items: string[];
}

export type UpdateTaskPayload = CreateTaskPayload;

export interface HistoryRecord {
  id: number;
  task_id?: number;
  task_title?: string;
  task_item_id?: number;
  title: string;
  record_date: string;
  completed: boolean;
  completed_at?: string | null;
}
