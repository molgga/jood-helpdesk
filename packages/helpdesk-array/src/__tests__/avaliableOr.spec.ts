import { availableOr } from '../availableOr';

describe('utils/array/availableOr', () => {
  it('허용되는 배열에 존재하면 존재한 값이 반환되어야 합니다.', () => {
    const values = [0, 1, 2, 3];
    expect(availableOr(values, 0, 99)).toBe(0);
    expect(availableOr(values, 1, 99)).toBe(1);
    expect(availableOr(values, 2, 99)).toBe(2);
    expect(availableOr(values, 3, 99)).toBe(3);
  });

  it('허용되는 배열에 존재하지 않으면 대체 값을 반환해야 합니다.', () => {
    const values = [0, 1, 2, 3];
    expect(availableOr(values, 30, 99)).toBe(99);
    expect(availableOr(values, 111, 99)).toBe(99);
    expect(availableOr(values, 222, 0)).toBe(0);
    expect(availableOr(values, 'selected-value', 0)).toBe(0);
    expect(availableOr(values, 'selected-value', null)).toBe(null);
  });
});
