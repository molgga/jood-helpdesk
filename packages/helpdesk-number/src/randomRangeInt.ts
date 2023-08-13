/**
 * 랜덤으로 숫자(int) 뽑기
 * @param min
 * @param max
 * @example
 * console.log(randomRangeInt(0, 10)); // 0 ~ 10
 */
export function randomRangeInt(min: number, max: number) {
  if (max < min) return 0;
  if (max === min) return max;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
