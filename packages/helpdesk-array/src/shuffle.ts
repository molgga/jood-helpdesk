import { getRandomizer } from '@jood/helpdesk-number';

/**
 * 배열을 섞습니다.  (원본 source 가 직접 변경됩니다.)
 * @param source 소스 배열
 * @param [seed] [getRandomizer]{@link getRandomizer}
 * @example
 * const arr = [1,2,3,4];
 * shuffle(arr);
 * console.log(arr); // [?,?,?,?]
 */
export function shuffle<T = any>(source: T[], seed?: number): void {
  const random = getRandomizer(seed);
  for (let i = source.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    const temp = source[i];
    source[i] = source[j];
    source[j] = temp;
  }
}
