import { formatPercentage, formatPrice, getChangeMeta } from './price-helpers';

describe('price helpers', () => {
  it('should format prices with compact decimal handling', () => {
    expect(formatPrice(1234.56789)).toBe('1,234.56789');
  });

  it('should format percentage as absolute value', () => {
    expect(formatPercentage(-2.456)).toBe('2.46%');
  });

  it('should expose change metadata for positive and negative values', () => {
    expect(getChangeMeta(1).isUp).toBe(true);
    expect(getChangeMeta(-1).isUp).toBe(false);
  });
});
