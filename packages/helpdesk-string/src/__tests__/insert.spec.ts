import { insert } from '../insert';

describe('helpdesk-string: insert', () => {
  test('insert', () => {
    expect(insert('abcde', 1, '@')).toBe('a@bcde');
    expect(insert('abcde', 5, '@')).toBe('abcde@');
    expect(insert('abcde', 11, '@')).toBe('abcde@');
    expect(insert('abcde', -12, '@')).toBe('@abcde');
    expect(insert('abcde', null, '@')).toBe('abcde');
  });
});
