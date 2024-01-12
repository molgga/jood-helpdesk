import { characterToken } from './characterToken';

/**
 * 문자열 초/중/종성 분리
 * @param str
 */
export function characterMatrix(str: string) {
  const arr: string[][] = [];
  str.split('').forEach((char) => {
    arr.push(characterToken(char));
  });
  return arr;
}
