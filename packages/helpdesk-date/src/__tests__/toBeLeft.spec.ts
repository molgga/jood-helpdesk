import { toBeLeft } from '../toBeLeft';

describe('helpdesk-date: toBeLeft', () => {
  it('2시간 전은 7200초 전이어야 합니다.', () => {
    expect(
      toBeLeft(new Date('2022-07-25 9:00:00').getTime(), new Date('2022-07-25 11:00:00').getTime())
        .second
    ).toBe(7200);
  });

  it('2시간 전은 120분 전이어야 합니다.', () => {
    expect(
      toBeLeft(new Date('2022-07-25 9:00:00').getTime(), new Date('2022-07-25 11:00:00').getTime())
        .minute
    ).toBe(120);
  });

  it('1시간 30분 전은 5400초 전이어야 합니다.', () => {
    expect(
      toBeLeft(new Date('2022-07-25 9:30:00').getTime(), new Date('2022-07-25 11:00:00').getTime())
        .second
    ).toBe(5400);
  });

  it('1시간 30분 전은 90분 전이어야 합니다.', () => {
    expect(
      toBeLeft(new Date('2022-07-25 9:30:00').getTime(), new Date('2022-07-25 11:00:00').getTime())
        .minute
    ).toBe(90);
  });

  it('25시간 전은 1일 전이어야 합니다.', () => {
    expect(
      toBeLeft(new Date('2022-07-25 10:00:00').getTime(), new Date('2022-07-26 11:00:00').getTime())
        .day
    ).toBe(1);
  });

  it('50시간 전은 2일 전이어야 합니다.', () => {
    expect(
      toBeLeft(new Date('2022-07-25 10:00:00').getTime(), new Date('2022-07-27 12:00:00').getTime())
        .day
    ).toBe(2);
  });

  it('각 시간 단위로 지나간 시간을 반환해야 합니다.', () => {
    expect(
      toBeLeft(new Date('2022-07-25 9:00:00').getTime(), new Date('2022-07-25 11:00:00').getTime())
    ).toEqual({ second: 7200, minute: 120, hour: 2, day: 0 });

    expect(
      toBeLeft(new Date('2022-07-25 9:30:00').getTime(), new Date('2022-07-25 11:00:00').getTime())
    ).toEqual({ second: 5400, minute: 90, hour: 1, day: 0 });

    expect(
      toBeLeft(new Date('2022-07-25 10:00:00').getTime(), new Date('2022-07-26 11:00:00').getTime())
    ).toEqual({ second: 90000, minute: 1500, hour: 25, day: 1 });
  });
});
