import { refineWhitespace } from '../refineWhitespace';

describe('utils/string/refineWhitespace', () => {
  test('refineWhitespace', () => {
    expect(refineWhitespace('\u2800')).toBe(' ');
    expect(refineWhitespace('&#10240;')).toBe(' ');
    expect(refineWhitespace('&#10240;\u2800')).toBe('  ');
    expect(refineWhitespace('&#10240;\u2800&#10240;\u2800')).toBe('    ');
  });
});
