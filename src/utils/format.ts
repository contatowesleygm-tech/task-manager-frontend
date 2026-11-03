const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
const compact = new Intl.NumberFormat('pt-BR', { notation: 'compact', maximumFractionDigits: 1 });
const pct = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });

export function formatBRL(value: number): string {
  return brl.format(value);
}

// Máscara de moeda para campos de digitação: "R$ 1.234,56" (os dígitos digitados são centavos).
export function maskMoney(value: string): string {
  const digits = value.replace(/\D/g, '').replace(/^0+/, '').slice(0, 13);
  if (!digits) return '';
  const padded = digits.padStart(3, '0');
  const integer = padded.slice(0, -2).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `R$ ${integer},${padded.slice(-2)}`;
}

export function moneyFromNumber(value: number): string {
  return maskMoney(String(Math.round(value * 100)));
}

export function parseMoney(masked: string): number {
  const digits = masked.replace(/\D/g, '');
  return digits ? Number(digits) / 100 : 0;
}

export function formatCompactBRL(value: number): string {
  return `R$ ${compact.format(value)}`;
}

export function formatPercent(value: number, withSign = false): string {
  return `${withSign && value > 0 ? '+' : ''}${pct.format(value)}%`;
}

const assetColors: Record<string, string> = {
  carteira: '#0ea5e9',
  cdi: '#2563eb',
  poupanca: '#14b8a6',
  ibovespa: '#16a34a',
  sp500: '#8b5cf6',
  dolar: '#d97706',
  ouro: '#eab308',
  bitcoin: '#f97316',
};

export function assetColor(id: string): string {
  if (assetColors[id]) return assetColors[id];
  let hash = 0;
  for (const char of id) hash = (hash * 31 + char.charCodeAt(0)) % 360;
  return `hsl(${hash} 60% 50%)`;
}
