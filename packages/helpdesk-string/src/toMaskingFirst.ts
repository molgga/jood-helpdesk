import { MaskingOptions } from './toMasking.types';

/**
 * 문자열 마스킹 - 앞 기준
 * @param {string} text 소수 문자열
 * @param {MaskingOptions} [options={}] 마스킹 옵션
 */
export const toMaskingFirst = (text: string, options: MaskingOptions = {}): string => {
  const strLength = text.length;
  if (!strLength || strLength <= 1) return text;
  const { mask = '*', maxShow = 0 } = options;
  const strHalf = Math.floor(strLength / 2);
  const cutPivot = maxShow ? Math.min(maxShow, strHalf) : strHalf;
  const cutFirst = strLength - Math.max(1, cutPivot);
  const strFirst = Array.from(Array(cutFirst))
    .map(() => mask)
    .join('');
  const strLast = text.slice(cutFirst);
  return strFirst + strLast;
};
