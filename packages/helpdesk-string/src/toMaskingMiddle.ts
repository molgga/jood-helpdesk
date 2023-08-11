import { MaskingOptions } from './toMasking.types';

/**
 * 문자열 마스킹 - 중간 기준
 * @param {string} text 소수 문자열
 * @param {MaskingOptions} [options={}] 마스킹 옵션
 */
export const toMaskingMiddle = (text: string, options: MaskingOptions = {}) => {
  const strLength = text.length;
  if (!strLength || strLength <= 1) return text;
  const { mask = '*', maxShow = 0 } = options;
  const strHalf = Math.floor(strLength / 2);
  const cutPivot = maxShow ? Math.min(maxShow, strHalf) : strHalf;
  const cutFirst = Math.max(1, Math.ceil(cutPivot / 2));
  const cutLast = Math.max(0, cutPivot - cutFirst);
  const strFirst = text.slice(0, cutFirst);
  const strMiddle = Array.from(Array(strLength - cutFirst - cutLast))
    .map(() => mask)
    .join('');
  const strLast = cutLast ? text.slice(-cutLast) : '';
  return strFirst + strMiddle + strLast;
};
