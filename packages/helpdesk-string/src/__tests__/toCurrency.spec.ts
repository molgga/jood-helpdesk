import { toCurrency } from '../toCurrency';

describe('utils/string/toCurrency', () => {
  test('toCurrency', () => {
    expect(toCurrency(0)).toBe('0');
    expect(toCurrency(1)).toBe('1');
    expect(toCurrency(12)).toBe('12');
    expect(toCurrency(123)).toBe('123');
    expect(toCurrency(1234)).toBe('1,234');
    expect(toCurrency(12345)).toBe('12,345');
    expect(toCurrency(123456)).toBe('123,456');
    expect(toCurrency(1234567)).toBe('1,234,567');

    expect(toCurrency(0.99)).toBe('0.99');
    expect(toCurrency(0.9999)).toBe('0.9999');
    expect(toCurrency(0.999999)).toBe('0.999999');
    expect(toCurrency(12.99)).toBe('12.99');
    expect(toCurrency(1234.99)).toBe('1,234.99');
    expect(toCurrency(1234.9999)).toBe('1,234.9999');
    expect(toCurrency(1234.999999)).toBe('1,234.999999');

    expect(toCurrency(null)).toBe(null);
    expect(toCurrency(undefined)).toBe(undefined);
  });
});