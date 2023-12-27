import { isIntersect } from '../isIntersect';

describe('helpdesk-point: isIntersect', () => {
  test('isIntersect', () => {
    expect(isIntersect({ start: 0, end: 100 }, { start: 20, end: 120 })).toBe(true);
    expect(isIntersect({ start: 120, end: 200 }, { start: 20, end: 120 })).toBe(false);
  });
});
