/**
 * 지정된 source 배열의 index 에 value 를 삽입합니다.
 * (원본 source 가 직접 변경 됩니다.)
 * @param source 소스 배열
 * @param [index=0] 삽입될 인덱스
 * @param value 삽입될 값
 * @example
 * console.log(insert([1, 2, 3], 1, 99)); // [1, 99, 2, 3]
 * console.log(insert([1, 2, 3], 1, ["A", "B"])); // [1, "A", "B", 2, 3];
 * console.log(insert([1, 2, 3], 10, 99)); // [1, 2, 3, 99]);
 * console.log(insert([1, 2, 3], 10, ["A", "B"])); // [1, 2, 3, "A", "B"];
 * console.log(insert([1, 2, 3], null, "A")); // ["A", 1, 2, 3];
 */
export function insert<T = any>(source: T[], index = 0, value: T): T[] {
  if (isNaN(index) || index < 0 || source.length <= index) {
    if (value instanceof Array) {
      source.push(...value);
    } else {
      source.push(value);
    }
  } else {
    if (value instanceof Array) {
      source.splice(index, 0, ...value);
    } else {
      source.splice(index, 0, value);
    }
  }
  return source;
}
