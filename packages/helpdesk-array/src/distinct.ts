import { uniqueFilter } from './uniqueFilter';

/**
 * 중복된 값을 제외시킨 배열을 반환합니다.
 * @param source 소스 배열
 * @param [uniqueFn] 직접 filter 할 key 값을 반환할 수 있는 함수
 * @example
 * const arr1 = [1, 2, 3, 4, 5];
 * const arr2 = [1, 2, 1, 3, 4, 4, 3, 5, 1];
 * const arr3 = [
 *   { id: 1, name: "google" },
 *   { id: 2, name: "microsoft" },
 *   { id: 1, name: "google" },
 *   { id: 3, name: "amazone" }
 * ];
 * console.log(distinct(arr1)); // [1, 2, 3, 4, 5]
 * console.log(distinct(arr2)); // [1, 2, 3, 4, 5]
 * console.log(distinct(arr3, v => v.id)); // [{ id: 1, name: "google" }, { id: 2, name: "microsoft" }, { id: 3, name: "amazone" }]
 */
export function distinct<T = any>(source: ReadonlyArray<T>, uniqueFn?: (item: T) => any): T[] {
  if (!uniqueFn) {
    return source.filter((item, index) => source.indexOf(item) === index);
  }
  return source.filter(uniqueFilter(uniqueFn));
}
