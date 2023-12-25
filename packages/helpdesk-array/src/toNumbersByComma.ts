import { isNumber } from '@smartad/core/utils/number';

/**
 * 콤마(,) 숫자 문자열을 배열로 반환
 * ex: "1,2,3" -> [1,2,3]
 */
export const toNumbersByComma = (str: string) => {
  return (str || '')
    .split(',')
    .filter((v) => isNumber(v))
    .map((v) => Number(v));
};
