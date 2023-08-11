import { MaskingOptions } from './toMasking.types';

/**
 * 문자열 마스킹 - 양쪽 기준
 * @param {string} text 소수 문자열
 * @param {MaskingOptions} [options={}] 마스킹 옵션
 */
export const toMaskingJustify = (text: string, options: MaskingOptions = {}) => {
  const strLength = text.length;
  if (!strLength || strLength <= 1) return text;
  const { mask = '*', maxShow = 0 } = options;
  const strHalf = Math.floor(strLength / 2);
  const cutPivot = maxShow ? Math.min(maxShow, strHalf) : strHalf;
  const cutFirst = Math.max(1, Math.ceil((strLength - cutPivot) / 2));
  const cutLast = Math.max(0, strLength - cutFirst - cutPivot);
  const strFirst = text.slice(0, cutFirst).replace(/./g, mask);
  const strMiddle = cutLast ? text.slice(cutFirst, -cutLast) : text.slice(cutFirst);
  const strLast = cutLast ? text.slice(-cutLast).replace(/./g, mask) : '';
  return strFirst + strMiddle + strLast;
};
