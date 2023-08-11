import { toEllipsisMiddle } from '../toEllipsisMiddle';

describe('utils/string/toEllipsisMiddle', () => {
  test('toEllipsisMiddle', () => {
    const test1 = 'https://developers.google.com/web/fundamentals/architecture/app-shell';
    const test2 = '0123456789012345678901234567890123456789';
    const test3 = '0123456789';
    expect(toEllipsisMiddle(test1, 30)).toBe('https://develop...cture/app-shell');
    expect(toEllipsisMiddle(test2, 20)).toBe('0123456789...0123456789');
    expect(toEllipsisMiddle(test3, 9)).toBe('0123...6789');
    expect(toEllipsisMiddle(test3, 8)).toBe('0123...6789');
    expect(toEllipsisMiddle(test3, 7)).toBe('012...789');
    expect(toEllipsisMiddle(test3, 6)).toBe('012...789');
    expect(toEllipsisMiddle(test3, 10)).toBe('0123456789');
    expect(toEllipsisMiddle(test3, 11)).toBe('0123456789');
    expect(toEllipsisMiddle(null, 11)).toBe(null);
    expect(toEllipsisMiddle(undefined, 11)).toBe(undefined);

    const def = toEllipsisMiddle(test1);
    expect(def).toBe('https://developers.google...ls/architecture/app-shell');
    expect(def.length).toBe(53); // 기본값 50 + ...(alternative 3)
  });
});
