import { isNumber } from '@jood/helpdesk-core';

/**
 * 지정된 시간 숫자 앞에 0을 채워야 하는 경우 0을 채움.
 * (예: 2 -> 02, 9 -> 09, 10 -> 10)
 * @param time 시간 표시용 숫자 | 문자
 * @param pad '0' 으로 채울 숫자
 * @example
 * console.log(toLeadingTime(5)); // "05"
 */
export const toLeadingTime = (time: string | number, pad = 2): string => {
  return time.toString().padStart(pad, '0');
};
