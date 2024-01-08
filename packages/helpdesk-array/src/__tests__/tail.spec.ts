import { tail } from '../tail';

describe('helpdesk-array: tail', () => {
  it('지정된 배열의 뒤쪽 index 아이템을 반환해야 합니다.', () => {
    const arr1 = [1, 2, 3, 4];
    expect(tail(arr1, -1)).toBe(4);
    expect(tail(arr1, 0)).toBe(4);
    expect(tail(arr1, 1)).toBe(3);
    expect(tail(arr1, 2)).toBe(2);
    expect(tail(arr1, 3)).toBe(1);
    expect(tail(arr1, 4)).toBe(1);
    expect(tail(arr1, 5)).toBe(1);

    const arr2 = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }];
    expect(tail(arr2, -1)).toEqual({ a: 4 });
    expect(tail(arr2, 0)).toEqual({ a: 4 });
    expect(tail(arr2, 1)).toEqual({ a: 3 });
    expect(tail(arr2, 2)).toEqual({ a: 2 });
    expect(tail(arr2, 3)).toEqual({ a: 1 });
    expect(tail(arr2, 4)).toEqual({ a: 1 });
    expect(tail(arr2, 5)).toEqual({ a: 1 });

    const arr3 = [1, "s", { a: 3 }];
    expect(tail(arr3, 0)).toEqual({ a: 3 });
    expect(tail(arr3, 1)).toBe("s");
  });

  it('지정된 index 가 length 보다 크고 safe 옵션을 끈다면 undefined 를 반환해야 합니다.', () => {
    expect(tail([1, 2, 3, 4], 10, false)).toBe(undefined);
  });

  it('지정된 index 가 length 보다 크고 safe 옵션을 킨다면 첫번째 아이템을 반환해야 합니다.', () => {
    expect(tail([1, 2, 3, 4], 10, true)).toBe(1);
  });

  it('지정된 index 를 알 수 없다면 마지막 아이템을 반환해야 합니다.', () => {
    expect(tail([1, 2, 3, 4], undefined)).toBe(4);
  });
});
