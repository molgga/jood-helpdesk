import { toEllipsisEnd } from '../toEllipsisEnd';

describe('helpdesk-string: toEllipsisEnd', () => {
  test('toEllipsisEnd', () => {
    const test1 = 'https://developers.google.com/web/fundamentals/architecture/app-shell';
    const test2 = '0123456789012345678901234567890123456789';
    const test3 = '0123456789';
    expect(toEllipsisEnd(test1, 10)).toBe('https://de...');
    expect(toEllipsisEnd(test2, 20)).toBe('01234567890123456789...');
    expect(toEllipsisEnd(test3, 9)).toBe('012345678...');
    expect(toEllipsisEnd(test3, 5)).toBe('01234...');
    expect(toEllipsisEnd(test3, 10)).toBe('0123456789');
    expect(toEllipsisEnd(test3, 11)).toBe('0123456789');
    expect(toEllipsisEnd(null, 11)).toBe(null);
    expect(toEllipsisEnd(undefined, 11)).toBe(undefined);

    const def = toEllipsisEnd(test1);
    expect(def).toBe('https://developers.google.com/web/fundamentals/arc...');
    expect(def.length).toBe(53); // 기본값 50 + ...(alternative 3)
  });
});
