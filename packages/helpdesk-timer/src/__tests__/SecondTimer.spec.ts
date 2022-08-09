import { SecondTimer } from '../SecondTimer';

describe('SecondTimer', () => {
  let timer: SecondTimer;

  beforeEach(() => {
    jest.useFakeTimers();
    timer = new SecondTimer();
  });

  afterEach(() => {
    jest.useRealTimers();
    timer.destroy();
    timer = null;
  });

  it('1초가 지날때 마다 구독한 알림이 트리거 되어야 합니다.', () => {
    const onObserve = jest.fn();
    timer.observe().subscribe(onObserve);
    timer.start();
    expect(onObserve).toHaveBeenCalledTimes(0);
    jest.advanceTimersByTime(1000);
    expect(onObserve).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(1000);
    expect(onObserve).toHaveBeenCalledTimes(2);
    jest.advanceTimersByTime(1000);
    expect(onObserve).toHaveBeenCalledTimes(3);
    jest.advanceTimersByTime(1000);
    expect(onObserve).toHaveBeenCalledTimes(4);
    jest.advanceTimersByTime(1000);
    expect(onObserve).toHaveBeenCalledTimes(5);
  });

  it('30초가 지났다면 구독의 알림은 30회 트리거 되어야 합니다.', () => {
    const onObserve = jest.fn();
    timer.observe().subscribe(onObserve);
    timer.start();
    expect(onObserve).toHaveBeenCalledTimes(0);
    jest.advanceTimersByTime(30000);
    expect(onObserve).toHaveBeenCalledTimes(30);
  });

  it('실제 시간을 기준으로 하기 때문에 start 된 시간과 다음 1초가 되는 시간의 차이가 1초 보다 작을 수 있습니다.', () => {
    const onObserve = jest.fn();
    const spyNowDate = jest.spyOn(timer, 'nowDate');
    const nowDateValue = new Date();
    nowDateValue.setHours(0, 0, nowDateValue.getSeconds() - 1, 300);
    spyNowDate.mockReturnValue(nowDateValue);
    timer.observe().subscribe(onObserve);
    timer.start(); // 이때 time 이 300ms(mock한 값)이기 때문에 700ms 후에 트리거 된다.
    spyNowDate.mockRestore();

    expect(onObserve).toHaveBeenCalledTimes(0);
    jest.advanceTimersByTime(100);
    expect(onObserve).toHaveBeenCalledTimes(0); // 100ms 지난 후 0
    jest.advanceTimersByTime(500);
    expect(onObserve).toHaveBeenCalledTimes(0); // 100 + 500ms 지난 후 0
    jest.advanceTimersByTime(100);
    expect(onObserve).toHaveBeenCalledTimes(1); // 100 + 500 + 100ms 지난 후 1 (mock 한 값이 300ms 이기 때문에 700ms 후에 트리거 된다.)
    jest.advanceTimersByTime(1000);
    expect(onObserve).toHaveBeenCalledTimes(2);
  });
});
