/**
 * 랜덤으로 숫자(float) 뽑기
 * @param min
 * @param max
 * @example
 * console.log(randomRangeFloat(0, 10)); // 0.* ~ 10.*
 */
export function randomRangeFloat(min: number, max: number) {
  if (max < min) return 0;
  if (max === min) return max;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.random() * (max - min) + min;
}
