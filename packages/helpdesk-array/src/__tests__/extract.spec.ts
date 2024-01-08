import { extract } from '../extract';

describe('helpdesk-array: extract', () => {
  it('지정된 배열의 index 에서 deleteCount 만큼 제거되어야 합니다.', () => {
    expect(extract([1, 2, 3, 4])).toEqual([2, 3, 4]);
    expect(extract([1, 2, 3, 4], 1, 1)).toEqual([1, 3, 4]);
    expect(extract([1, 2, 3, 4], 2, 1)).toEqual([1, 2, 4]);
    expect(extract([1, 2, 3, 4], 3, 1)).toEqual([1, 2, 3]);
    expect(extract([1, 2, 3, 4], 0, 2)).toEqual([3, 4]);
    expect(extract([1, 2, 3, 4], 0, 10)).toEqual([]);
    expect(extract([1, 2, 3, 4], 2, 10)).toEqual([1, 2]);
  });

  it('참조된 원본 배열이 변경되어야 합니다.', () => {
    const origin = [1, 2, 3, 4];
    expect(extract(origin, 1, 2)).toBe(origin);
    expect(origin).toEqual([1, 4]);
  });
});
