import { intersect } from '../intersect';

describe('helpdesk-point: intersect', () => {
  test('intersect', () => {
    expect(intersect({ start: 0, end: 100 }, { start: 20, end: 120 })).toEqual({
      start: 20,
      end: 100,
    });
    expect(
      intersect({ start: 120, end: 200 }, { start: 20, end: 120 })
    ).toEqual({
      start: 0,
      end: 0,
    });
  });
});
