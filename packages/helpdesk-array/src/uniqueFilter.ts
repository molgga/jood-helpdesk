/**
 * unique 필터를 만들 때 흔히 반복되는 구문을 구현해 놓은 함수
 * @template T
 * @param uniqueFn filter 할 key 값을 반환할 수 있는 함수
 * @example
 * const arr1 = [
 *   { id: 1, name: "google" },
 *   { id: 2, name: "microsoft" },
 *   { id: 1, name: "google" },
 *   { id: 3, name: "amazone" }
 * ];
 * const idFilter = item => {
 *   return item.id;
 * };
 * const nameFilter = item => {
 *   return item.name;
 * };
 * console.log(arr1.filter(uniqueFilter(idFilter))); // [{ id: 1, name: "google" },{ id: 2, name: "microsoft" },{ id: 3, name: "amazone" } ]
 * console.log(arr1.filter(uniqueFilter(nameFilter))); // [{ id: 1, name: "google" },{ id: 2, name: "microsoft" },{ id: 3, name: "amazone" } ]
 */
export function uniqueFilter<T>(uniqueFn: (item: T) => string | any): (item: T) => boolean {
  const hash: { [key: string]: boolean } = {};
  return (item) => {
    const key = uniqueFn(item);
    if (hash[key]) return false;
    hash[key] = true;
    return true;
  };
}
