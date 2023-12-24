import { DatePastOption } from './types';
import { toBeLeft } from './toBeLeft';
import { toFormat } from './toFormat';

/**
 * pastAt 이 fromAt 으로 부터 지나간 시간을 지정된 옵션에 따라 반환합니다.
 * @param fromAt 기준 시간
 * @param pastAt 비교할 시간
 * @param options 옵션
 * @example
 * const now = new Date("2019-03-12 08:10:20").getTime();
 * console.log(toPast(now, new Date("2019-03-12 08:09:21").getTime())); // '방금 전'
 * console.log(toPast(now, new Date("2019-03-12 08:00:20").getTime())); // '10분 전'
 * console.log(toPast(now, new Date("2019-03-12 07:10:20").getTime())); // '1시간 전'
 * console.log(toPast(now, new Date("2019-03-11 08:10:21").getTime())); // '23시간 전'
 * console.log(toPast(now, new Date("2019-03-10 08:10:20").getTime())); // '2일 전'
 * console.log(toPast(now, new Date("2019-02-10 08:10:19").getTime(), { format: "YYYY년 MM월 DD일"})); // "2019년 02월 10일"
 */
export const toPast = (fromAt: number | string, pastAt: number | string, options: DatePastOption = {}): string => {
  const {
    justMax = 60,
    minuteMax = 3600,
    hourMax = 86400,
    dayMax = 2592000,
    justLabel = '방금 전',
    minuteLabel = '분 전',
    hourLabel = '시간 전',
    dayLabel = '일 전',
    format = 'YYYY-MM-DD hh:mm:ss',
    alternative = 'Unknown',
    overThenJust = true,
  }: DatePastOption = options;
  if (!pastAt || !fromAt) {
    return alternative;
  }
  const atFrom: number = fromAt && fromAt.constructor === String ? new Date(fromAt).getTime() : (fromAt as number);
  const atPast: number = pastAt && pastAt.constructor === String ? new Date(pastAt).getTime() : (pastAt as number);
  if (!overThenJust && atFrom <= atPast) {
    return alternative;
  }
  const pastTime = overThenJust ? Math.min(atFrom, atPast) : atPast;
  const beLeft = toBeLeft(pastTime, atFrom);
  if (beLeft.second < justMax) return justLabel;
  if (beLeft.second < minuteMax) return `${beLeft.minute}${minuteLabel}`;
  if (beLeft.second < hourMax) return `${beLeft.hour}${hourLabel}`;
  if (beLeft.second <= dayMax) return `${beLeft.day}${dayLabel}`;
  return toFormat(pastAt, { format });
};
