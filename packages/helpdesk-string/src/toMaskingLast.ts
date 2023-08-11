import { MaskingOptions } from './toMasking.types';

/**
 * 문자열 마스킹 - 뒤 기준
 * @param {string} text 소수 문자열
 * @param {MaskingOptions} [options={}] 마스킹 옵션
 */
export const toMaskingLast = (text: string, options: MaskingOptions = {}) => {
  const strLength = text.length;
  if (!strLength || strLength <= 1) return text;
  const { mask = '*', maxShow = 0 } = options;
  const strHalf = Math.floor(strLength / 2);
  const cutPivot = maxShow ? Math.min(maxShow, strHalf) : strHalf;
  const cutFirst = Math.max(1, cutPivot);
  const strFirst = text.slice(0, cutFirst);
  const strLast = Array.from(Array(strLength - cutFirst))
    .map(() => mask)
    .join('');
  return strFirst + strLast;
};
