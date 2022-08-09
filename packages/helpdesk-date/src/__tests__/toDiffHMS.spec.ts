import { toDiffHMS } from '../toDiffHMS';

describe('toDiffHMS', () => {
  it('두 시간 사이의 남은 시간을 반환해야 합니다.', () => {
    expect(
      toDiffHMS(
        new Date('2022-07-25 07:32:33').getTime(),
        new Date('2022-07-25 23:59:59').getTime()
      )
    ).toEqual({ hour: 16, minute: 27, second: 26 });
  });

  it('두 시간 사이의 남은 시간이 일자(day)가 넘어가는 경우 일자는 24시간을 곱해서 반환해야 합니다.', () => {
    expect(
      toDiffHMS(
        new Date('2022-07-25 21:59:39').getTime(),
        new Date('2022-07-26 23:59:59').getTime()
      )
    ).toEqual({ hour: 26, minute: 0, second: 20 });
  });
});
