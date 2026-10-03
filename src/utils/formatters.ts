export type CurrencyCode = 'NGN' | 'USD' | 'GBP' | 'EUR';

export const CURRENCY_RATES: Record<CurrencyCode, { symbol: string; rate: number }> = {
  NGN: { symbol: '₦', rate: 1 },
  USD: { symbol: '$', rate: 0.00065 }, // approx $1 = ~1,540 NGN
  GBP: { symbol: '£', rate: 0.00052 }, // approx £1 = ~1,920 NGN
  EUR: { symbol: '€', rate: 0.00060 }
};

export function formatPrice(priceInNgn: number, currency: CurrencyCode = 'NGN'): string {
  const { symbol, rate } = CURRENCY_RATES[currency];
  const converted = Math.round(priceInNgn * rate);
  return `${symbol}${converted.toLocaleString('en-US')}`;
}
