import { toDiffHMS } from '../toDiffHMS';

describe('helpdesk-date: toDiffHMS', () => {
  it('두 시간 사이의 남은 시간을 반환해야 합니다.', () => {
    expect(
      toDiffHMS(
        new Date('2022-07-25T07:32:33').getTime(),
        new Date('2022-07-25T23:59:59').getTime()
      )
    ).toEqual({ hour: 16, minute: 27, second: 26 });
  });

  it('두 시간 사이의 남은 시간이 일자(day)가 넘어가는 경우 일자는 24시간을 곱해서 반환해야 합니다.', () => {
    expect(
      toDiffHMS(
        new Date('2022-07-25T21:59:39').getTime(),
        new Date('2022-07-26T23:59:59').getTime()
      )
    ).toEqual({ hour: 26, minute: 0, second: 20 });
  });
});
