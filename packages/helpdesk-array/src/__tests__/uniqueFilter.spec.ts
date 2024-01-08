import { uniqueFilter } from '../uniqueFilter';

describe('helpdesk-array: uniqueFilter', () => {

  it('배열의 filter 에 들어갈 유니크 key 를 걸러내는 함수를 만듭니다.', () => {
    const arr = [
      { id: 1, name: "google" },
      { id: 2, name: "microsoft" },
      { id: 1, name: "google" },
      { id: 3, name: "amazone" },
      { id: 4, name: "amazone" },
      { id: 5, name: "amazone" },
      { id: 6, name: "amazone" },
    ];
    const filterUniqueId = uniqueFilter((item: any) => item.id);
    const filterUniqueName = uniqueFilter((item: any) => item.name);

    expect(arr.filter(filterUniqueId)).toEqual([
      { id: 1, name: "google" },
      { id: 2, name: "microsoft" },
      { id: 3, name: "amazone" },
      { id: 4, name: "amazone" },
      { id: 5, name: "amazone" },
      { id: 6, name: "amazone" },
    ]);

    expect(arr.filter(filterUniqueName)).toEqual([
      { id: 1, name: "google" },
      { id: 2, name: "microsoft" },
      { id: 3, name: "amazone" },
    ]);
  });
});
