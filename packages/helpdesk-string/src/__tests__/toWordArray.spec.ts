import { toWordArray } from '../toWordArray';

describe('utils/string/toWordArray', () => {
  test('toWordArray', () => {
    expect(toWordArray('hello foo bar')).toEqual(['hello', 'foo', 'bar']);
    expect(toWordArray('  hello  foo bar  ')).toEqual(['hello', 'foo', 'bar']);
    expect(toWordArray('')).toEqual([]);
  });
});
