import { isNumber } from '@jood/helpdesk-core';

/**
 * 지정된 시간 숫자 앞에 0을 채워야 하는 경우 0을 채움.
 * (예: 2 -> 02, 9 -> 09, 10 -> 10)
 * @param time 시간 표시용 숫자 | 문자
 * @example
 * console.log(leadingTime(5)); // "05"
 */
export const toLeadingTime = (time: string | number): string => {
  let refine: string | number;
  if (isNumber(time)) {
    const safeNum = Number(time);
    refine = 0 <= safeNum && safeNum < 10 ? `0${safeNum}` : time.toString();
  } else {
    refine = time;
  }
  return refine as string;
};
