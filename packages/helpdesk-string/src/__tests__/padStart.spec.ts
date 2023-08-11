import { padStart } from '../padStart';

describe('utils/string/padStart', () => {
  test('padStart', () => {
    expect(padStart(1, '0', 2)).toBe('01');
    expect(padStart('1', '0', 2)).toBe('01');
    expect(padStart('123', '0', 5)).toBe('00123');
    expect(padStart('foo', '#', 3)).toBe('foo');
    expect(padStart('foo', '#', 4)).toBe('#foo');
    expect(padStart('hello', '0', 1)).toBe('h');
    expect(padStart('hello', '0', 2)).toBe('he');
    expect(padStart('hello', '0', 3)).toBe('hel');
    expect(padStart('hello', '0', 4)).toBe('hell');
    expect(padStart('hello', '0', 5)).toBe('hello');
    expect(padStart('hello', '0', 6)).toBe('0hello');
    expect(padStart('hello', '@@', 5)).toBe('hello');
    expect(padStart('hello', '@@', 6)).toBe('@hello');
    expect(padStart('hello', '0', undefined)).toBe('hello');
    expect(padStart('', '0', 1)).toBe('0');
    expect(padStart(undefined, '@@', 6)).toBe(undefined);
    expect(padStart(null, '@@', 6)).toBe(null);
  });
});
