import { insert } from '../insert';

describe('utils/array/insert', () => {
  it('지정된 배열의 index 에 value 가 삽입되어야 합니다.', () => {
    expect(insert([1, 2, 3], 1, 99)).toEqual([1, 99, 2, 3]);
    expect(insert([1, 2, 3], 1, ["A", "B"])).toEqual([1, "A", "B", 2, 3]);
    expect(insert([1, 2, 3], 10, 99)).toEqual([1, 2, 3, 99]);
    expect(insert([1, 2, 3], 10, ["A", "B"])).toEqual([1, 2, 3, "A", "B"]);
    expect(insert([1, 2, 3], null, "A")).toEqual(["A", 1, 2, 3]);
    expect(insert([1, 2, 3], undefined, "A")).toEqual(["A", 1, 2, 3]);
  });

  it('참조된 원본 배열이 변경되어야 합니다.', () => {
    const origin = [1, 2, 3];
    expect(insert(origin, 1, 99)).toEqual([1, 99, 2, 3]);
    expect(origin).toEqual([1, 99, 2, 3]);
  });
});
