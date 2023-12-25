import { getRandomizer } from '@jood/helpdesk-number';

/**
 * 배열을 섞습니다.
 * @param ref 소스 배열
 * @param [seed] [getRandomizer]{@link getRandomizer}
 * @example
 * const arr = [1,2,3,4];
 * shuffle(arr);
 * console.log(arr); // [?,?,?,?]
 */
export function shuffle<T>(ref: T[], seed?: number): void {
  const random = getRandomizer(seed);
  for (let i = ref.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    const temp = ref[i];
    ref[i] = ref[j];
    ref[j] = temp;
  }
}
