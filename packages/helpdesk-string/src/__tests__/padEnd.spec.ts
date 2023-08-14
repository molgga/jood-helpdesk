import { padEnd } from '../padEnd';

describe('helpdesk-string: padEnd', () => {
  test('padEnd', () => {
    expect(padEnd(1, '0', 2)).toBe('10');
    expect(padEnd('1', '0', 2)).toBe('10');
    expect(padEnd('123', '0', 5)).toBe('12300');
    expect(padEnd('foo', '#', 3)).toBe('foo');
    expect(padEnd('foo', '#', 4)).toBe('foo#');
    expect(padEnd('hello', '0', 1)).toBe('o');
    expect(padEnd('hello', '0', 2)).toBe('lo');
    expect(padEnd('hello', '0', 3)).toBe('llo');
    expect(padEnd('hello', '0', 4)).toBe('ello');
    expect(padEnd('hello', '0', 5)).toBe('hello');
    expect(padEnd('hello', '0', 6)).toBe('hello0');
    expect(padEnd('hello', '@@', 5)).toBe('hello');
    expect(padEnd('hello', '@@', 6)).toBe('hello@');
    expect(padEnd('hello', '0', undefined)).toBe('hello');
    expect(padEnd('', '0', 1)).toBe('0');
    expect(padEnd(undefined, '@@', 6)).toBe(undefined);
    expect(padEnd(null, '@@', 6)).toBe(null);
  });
});
