import { toMatchReplace } from '../toMatchReplace';

describe('toMatchReplace', () => {
  test('test1', () => {
    expect(toMatchReplace('ab{0}defg', 'c')).toBe('abcdefg');
    expect(toMatchReplace('ab{0}d{1}fg', 'c', 'e')).toBe('abcdefg');
    expect(toMatchReplace('ab{0}d{1}f{2}', 'c', 'e', 'g')).toBe('abcdefg');
    expect(toMatchReplace('ab{0}d{1}f{2}', 'c', 'e')).toBe('abcdef');
    expect(toMatchReplace('ab{0}d{1}f{2}', 'c')).toBe('abcdf');
    expect(toMatchReplace('0123{0}56789', '4')).toBe('0123456789');
    expect(toMatchReplace('a{{0}}b', 'foo')).toBe('a{foo}b');
  });
});
