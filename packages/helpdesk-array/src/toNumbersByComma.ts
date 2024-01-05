import { isNumber } from '@jood/helpdesk-core';

/**
 * 콤마(,) 숫자 문자열을 배열로 반환합니다.
 * ex: "1,2,3" -> [1,2,3]
 */
export const toNumbersByComma = (source: string) => {
  return (source || '')
    .split(',')
    .filter((v) => isNumber(v))
    .map((v) => Number(v));
};
