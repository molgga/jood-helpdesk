import {
  KR_WORD_START_AT,
  KR_WORD_END_AT,
  KR_SOURCE_FIRST,
  KR_SOURCE_MIDDLE,
  KR_SOURCE_LAST,
  SIZE_SOURCE_MIDDLE,
  SIZE_SOURCE_LAST,
} from './types';

/**
 * 문자 초/중/종성 분리
 * @param char
 */
export function characterToken(char: string) {
  const arr: string[] = [];
  const charCode = char.charCodeAt(0);
  if (charCode < KR_WORD_START_AT || KR_WORD_END_AT < charCode) {
    arr.push(char);
    return arr;
  }
  const koCode = charCode - KR_WORD_START_AT;
  const indexF = Math.floor(koCode / SIZE_SOURCE_LAST / SIZE_SOURCE_MIDDLE);
  const indexM = Math.floor((koCode / SIZE_SOURCE_LAST) % SIZE_SOURCE_MIDDLE);
  const indexL = koCode % SIZE_SOURCE_LAST;
  const charF = KR_SOURCE_FIRST[indexF];
  const charM = KR_SOURCE_MIDDLE[indexM];
  const charL = KR_SOURCE_LAST[indexL];
  if (charF) arr.push(charF);
  if (charM) arr.push(charM);
  if (charL) arr.push(charL);
  return arr;
}

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
