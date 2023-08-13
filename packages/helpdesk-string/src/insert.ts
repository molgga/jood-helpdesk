import { isNumber } from '@jood/helpdesk-number';

/**
 * 지정된 인덱스에 문자를 삽입
 * @param text 소스 문자열
 * @param index 삽입될 인덱스
 * @param addText 삽입될 문자열
 * @example
 * console.log(insert("abcde", 1, "@")); // "a@bcde"
 */
export const insert = (text: string, index: number, addText: string) => {
  let head = null;
  let tail = null;
  let refine;
  if (isNumber(index)) {
    const textLen = text.length;
    const safeIndex = index < 0 ? 0 : Math.min(index, textLen);
    head = text.substring(0, safeIndex);
    tail = text.substring(safeIndex, textLen);
    refine = `${head}${addText}${tail}`;
  } else {
    refine = text;
  }
  return refine;
};
