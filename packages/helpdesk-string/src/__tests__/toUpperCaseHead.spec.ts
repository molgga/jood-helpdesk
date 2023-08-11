import { toUpperCaseHead } from '../toUpperCaseHead';

describe('utils/string/toUpperCaseHead', () => {
  test('toUpperCaseHead', () => {
    expect(toUpperCaseHead('abc')).toBe('Abc');
    expect(toUpperCaseHead(' abc')).toBe(' abc');
    expect(toUpperCaseHead('')).toBe('');
  });
});
