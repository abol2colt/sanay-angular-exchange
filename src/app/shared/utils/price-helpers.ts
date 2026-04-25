export function formatPrice(value: number): string {
  return Number(value).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 6,
  });
}

export function formatPercentage(value: number): string {
  return `${Math.abs(Number(value) || 0).toFixed(2)}%`;
}

export function getChangeMeta(change24h: number): {
  isUp: boolean;
  arrow: string;
  className: string;
  label: string;
} {
  const value = Number(change24h) || 0;
  const isUp = value >= 0;

  return {
    isUp,
    arrow: isUp ? '▲' : '▼',
    className: isUp ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400',
    label: `${isUp ? '▲' : '▼'} ${formatPercentage(value)}`,
  };
}
