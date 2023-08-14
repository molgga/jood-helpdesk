import { trimEnd } from '../trimEnd';

describe('helpdesk-string: trimEnd', () => {
  test('trimEnd', () => {
    expect(trimEnd('a ')).toBe('a');
    expect(trimEnd('   a ')).toBe('   a');
    expect(trimEnd(' a b ')).toBe(' a b');
    expect(trimEnd('a b \u2800')).toBe('a b');
    expect(trimEnd('  a b \u2800 ')).toBe('  a b');
    expect(trimEnd('a b &#10240; \u2800')).toBe('a b');
  });
});
