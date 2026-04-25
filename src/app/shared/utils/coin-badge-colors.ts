export const COIN_BADGE_COLORS: Record<string, string> = {
  btc: 'bg-orange-500',
  eth: 'bg-blue-500',
  bnb: 'bg-yellow-500',
  sol: 'bg-purple-500',
  xrp: 'bg-sky-500',
  ada: 'bg-indigo-600',
  doge: 'bg-yellow-600',
  ton: 'bg-cyan-500',
  trx: 'bg-red-500',
  avax: 'bg-rose-500',
};

export function getCoinBadgeColor(symbol: string): string {
  return COIN_BADGE_COLORS[symbol.trim().toLowerCase()] ?? 'bg-gray-600';
}
