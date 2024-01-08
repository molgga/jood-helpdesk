/**
 * 지정된 source 배열의 index ~ deleteCount 만큼 제거합니다.
 * (원본 source 가 직접 변경됩니다.)
 * @template T
 * @param source 소스 배열
 * @param [index=0] 삭제 시작 index
 * @param [deleteCount=1] 삭제 갯수
 * @example
 * console.log(extract([1, 2, 3, 4])); // [2, 3, 4];
 * console.log(extract([1, 2, 3, 4], 1, 1)); // [1, 3, 4];
 * console.log(extract([1, 2, 3, 4], 2, 1)); // [1, 2, 4];
 * console.log(extract([1, 2, 3, 4], 3, 1)); // [1, 2, 3];
 * console.log(extract([1, 2, 3, 4], 0, 2)); // [3, 4];
 * console.log(extract([1, 2, 3, 4], 0, 10)); // [];
 * console.log(extract([1, 2, 3, 4], 2, 10)); // [1, 2];
 */
export function extract<T = any>(source: T[], index = 0, deleteCount = 1): T[] {
  if (isNaN(index) || index < 0 || source.length <= index) {
    return source;
  }
  source.splice(index, deleteCount);
  return source;
}
