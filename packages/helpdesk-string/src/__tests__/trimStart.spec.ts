import { trimStart } from '../trimStart';

describe('helpdesk-string: trimStart', () => {
  test('trimStart', () => {
    expect(trimStart(' a')).toBe('a');
    expect(trimStart('   a ')).toBe('a ');
    expect(trimStart(' a b ')).toBe('a b ');
    expect(trimStart('\u2800 a b ')).toBe('a b ');
    expect(trimStart(' \u2800 a b')).toBe('a b');
    expect(trimStart('&#10240; \u2800 a b')).toBe('a b');
  });
});
