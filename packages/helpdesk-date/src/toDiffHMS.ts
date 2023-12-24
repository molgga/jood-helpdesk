import { toBeLeft } from './toBeLeft';

/**
 * fromAt 이 toAt 까지 얼마나 남았는지 반환합니다.
 * 일자의 차이는 +24시간 으로 계산합니다.
 * @param fromAt 이 시간 부터
 * @param toAt 이 시간 까지
 * @example
 * console.log(toDiffHMS(new Date('2022-07-25 07:32:33').getTime(), new Date('2022-07-25 23:59:59').getTime())); // {hour: 16, minute: 27, second: 26}
 * console.log(toDiffHMS(new Date('2022-07-25 21:59:33').getTime(), new Date('2022-07-25 23:59:59').getTime())); // {hour: 2, minute: 0, second: 26}
 * console.log(toDiffHMS(new Date('2022-07-25 21:59:39').getTime(), new Date('2022-07-26 23:59:59').getTime())); // {hour: 26, minute: 0, second: 20}
 */
export const toDiffHMS = (fromAt: number, toAt: number) => {
  const beLeft = toBeLeft(fromAt, toAt);
  const hour = beLeft.hour;
  const minute = beLeft.minute % 60;
  const second = beLeft.second % 60;
  return { hour, minute, second };
};
