import { distinct } from '../distinct';

describe('utils/array/distinct', () => {
  it('중복된 값을 제외시킨 배열을 반환해야 합니다.', () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [1, 2, 1, 3, 4, 4, 3, 5, 1];
    expect(distinct(arr1)).toEqual([1, 2, 3, 4, 5]);
    expect(distinct(arr2)).toEqual([1, 2, 3, 4, 5]);
  });

  it('객체도 동일하다면 제외시켜야 합니다.', () => {
    var a1 = { id: 1, name: "google" };
    var a2 = { id: 2, name: "microsoft" };
    const arr = [a1, a2, a1, a1, a1, a2];
    expect(distinct(arr)).toEqual([a1, a2]);
  });

  it('값은 같더라도 동일한 객체가 아닌것은 제외되지 않아야 합니다.', () => {
    const arr = [
      { id: 1, name: "google" },
      { id: 2, name: "microsoft" },
      { id: 1, name: "google" },
      { id: 1, name: "google" },
      { id: 3, name: "amazone" },
    ];
    expect(distinct(arr)).toEqual([
      { id: 1, name: "google" },
      { id: 2, name: "microsoft" },
      { id: 1, name: "google" },
      { id: 1, name: "google" },
      { id: 3, name: "amazone" },
    ]);
  });

  it('동일한 객체가 아닌것은 두번째 필터링 함수로 제외시킬 수 있어야 합니다.', () => {
    const arr = [
      { id: 1, name: "google" },
      { id: 2, name: "microsoft" },
      { id: 1, name: "google" },
      { id: 1, name: "google" },
      { id: 3, name: "amazone" },
    ];
    expect(distinct(arr, (item) => {
      return item.id; // 유티크한 key 로 보는것을 반환
    })).toEqual([
      { id: 1, name: "google" },
      { id: 2, name: "microsoft" },
      { id: 3, name: "amazone" },
    ]);
  });
});
