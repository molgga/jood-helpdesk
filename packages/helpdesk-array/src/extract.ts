/**
 * 지정된 ref 배열의 index ~ deleteCount 만큼 제거합니다.
 * (원본 ref 가 직접 변경 됩니다.)
 * @template T
 * @param ref 소스 배열
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
export function extract<T>(ref: ArrayLike<T>, index = 0, deleteCount = 1): ArrayLike<T> {
  if (isNaN(index) || index < 0 || ref.length <= index) {
    return ref;
  }
  (ref as any[]).splice(index, deleteCount);
  return ref;
}
