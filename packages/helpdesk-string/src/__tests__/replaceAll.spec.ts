import { replaceAll } from '../replaceAll';

describe('utils/string/replaceAll', () => {
  test('replaceAll', () => {
    expect(replaceAll('a-b-c', '-', '@')).toBe('a@b@c');
    expect(replaceAll('a-b-c', '', '@')).toBe('a-b-c');
    expect(replaceAll('a-b-c', '-', '')).toBe('abc');
    expect(replaceAll('a-b-c', '-', undefined)).toBe('abc');
    expect(replaceAll(null, '-', '')).toBe(null);
    expect(replaceAll(undefined, '-', '')).toBe(undefined);
  });
});
