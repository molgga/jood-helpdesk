import { toCurrencyFormat, CurrencyPriceOption } from '../toCurrencyFormat';

describe('utils/string/toCurrencyFormat', () => {
  test('toCurrencyFormat', () => {
    expect(toCurrencyFormat(-0.1)).toBe('-0.1');
    expect(toCurrencyFormat(-1.1)).toBe('-1.1');
    expect(toCurrencyFormat(-1.12)).toBe('-1.12');
    expect(toCurrencyFormat(-1.123)).toBe('-1.123');
    expect(toCurrencyFormat(-1.1234)).toBe('-1.1234');
    expect(toCurrencyFormat(-1.12345)).toBe('-1.12345');
    expect(toCurrencyFormat(-12.1234)).toBe('-12.1234');
    expect(toCurrencyFormat(-123.1234)).toBe('-123.1234');
    expect(toCurrencyFormat(-1234.1234)).toBe('-1,234.1234');
    expect(toCurrencyFormat(-12341234.1234)).toBe('-12,341,234.1234');

    expect(toCurrencyFormat(0)).toBe('0');
    expect(toCurrencyFormat(1234)).toBe('1,234');
    expect(toCurrencyFormat(1234567)).toBe('1,234,567');
    expect(toCurrencyFormat(0.9999)).toBe('0.9999');
    expect(toCurrencyFormat(1234.1234)).toBe('1,234.1234');

    let options: CurrencyPriceOption = { fixed: 2 };
    expect(toCurrencyFormat(0, options)).toBe('0.00');
    expect(toCurrencyFormat(1234, options)).toBe('1,234.00');
    expect(toCurrencyFormat(1234567, options)).toBe('1,234,567.00');
    expect(toCurrencyFormat(99.9999, options)).toBe('99.99');
    expect(toCurrencyFormat(0.9999, options)).toBe('0.99');
    expect(toCurrencyFormat(1234.1234, options)).toBe('1,234.12');

    options = { fixed: 6 };
    expect(toCurrencyFormat(0, options)).toBe('0.000000');
    expect(toCurrencyFormat(1234, options)).toBe('1,234.000000');
    expect(toCurrencyFormat(1234567, options)).toBe('1,234,567.000000');
    expect(toCurrencyFormat(99.9999, options)).toBe('99.999900');
    expect(toCurrencyFormat(0.9999, options)).toBe('0.999900');
    expect(toCurrencyFormat(1234.1234, options)).toBe('1,234.123400');

    options = { fixed: 2, replaceChar: '#' };
    expect(toCurrencyFormat(0, options)).toBe('0.00');
    expect(toCurrencyFormat(1234, options)).toBe('1#234.00');
    expect(toCurrencyFormat(1234567, options)).toBe('1#234#567.00');
    expect(toCurrencyFormat(99.9999, options)).toBe('99.99');
    expect(toCurrencyFormat(0.9999, options)).toBe('0.99');
    expect(toCurrencyFormat(1234.1234, options)).toBe('1#234.12');

    expect(toCurrencyFormat(null)).toBe(null);
    expect(toCurrencyFormat(undefined)).toBe(undefined);
  });
});
