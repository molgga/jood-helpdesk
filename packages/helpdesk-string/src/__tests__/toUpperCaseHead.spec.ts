import { toUpperCaseHead } from '../toUpperCaseHead';

describe('helpdesk-string: toUpperCaseHead', () => {
  test('toUpperCaseHead', () => {
    expect(toUpperCaseHead('abc')).toBe('Abc');
    expect(toUpperCaseHead(' abc')).toBe(' abc');
    expect(toUpperCaseHead('')).toBe('');
  });
});
