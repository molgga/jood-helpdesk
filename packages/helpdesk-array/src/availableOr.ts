/**
 * 지정된 avaliable 에 value 가 포함되는 경우 value 를, 그렇지 않은 경우 or 값을 반환합니다.
 * @template T
 * @param [available=[]] 유효한 값들
 * @param value 검사할 값
 * @param [or=null] 검사할 값이 유효한 값에 포함되지 않을 경우 대체 값
 * @example
 * const codes = [10, 20, 30];
 * console.log(availableOr(codes, 10, 10)); // 10
 * console.log(availableOr(codes, 20, 10)); // 20
 * console.log(availableOr(codes, 30, 10)); // 30
 * console.log(availableOr(codes, 30, null)); // 30
 * console.log(availableOr(codes, 111, 10)); // 10
 * console.log(availableOr(codes, 222, 10)); // 10
 * console.log(availableOr(codes, 333, 10)); // 10
 * console.log(availableOr(codes, 444, null)); // null
 */
export function availableOr<T>(availables: ArrayLike<T> = [], value: any, or = null): T {
  if (!availables.length) return or;
  const index = (availables as any[]).findIndex((compare: any) => {
    return compare === value;
  });
  return -1 < index ? value : or;
}
