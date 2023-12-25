/**
 * 지정된 배열의 뒤쪽 index 아이템을 반환 합니다.
 * @template T
 * @param array 소스 배열
 * @param [shiftIndex=0] 아이템을 꺼낼 index. (뒤에서 앞으로)
 * @param [overflowSafe=true] 계산된 index 가 0 보다 작은 경우는 맨 앞, length 보다 큰 경우는 마지막 아이템 index 로 찾을지 여부
 * @example
 * console.log(tail([1, 2, 3, 4])); // 4
 * console.log(tail([1, 2, 3, 4],1)); // 3
 * console.log(tail([1, 2, 3, 4],2)); // 2
 * console.log(tail([1, 2, 3, 4],3)); // 1
 * console.log(tail([1, 2, 3, 4],4)); // 1
 * console.log(tail([1, 2, 3, 4],-1)); // 4
 */
export function tail<T>(array: ArrayLike<T>, shiftIndex = 0, overflowSafe = true): T {
  const lastIndex = array.length - 1;
  let index = lastIndex - shiftIndex;
  if (overflowSafe) {
    if (index < 0) {
      index = 0;
    } else if (lastIndex < index) {
      index = lastIndex;
    }
  }
  return array[index];
}
