import { SecondTimer } from '../SecondTimer';

describe('helpdesk-module: timer: SecondTimer', () => {
  let timer: SecondTimer;

  beforeEach(() => {
    vi.useFakeTimers();
    timer = new SecondTimer();
    timer.setExecuteSafeGap(0); // 실제 사용 환경에서는 약간의 오차(10ms 정도)시간을 기본값으로 잡고 있으나, 테스트 시에는 오차 시간이 없다고 가정한다.
  });

  afterEach(() => {
    vi.useRealTimers();
    timer.destroy();
    timer = null;
  });

  it('1초가 지날때 마다 구독한 알림이 트리거 되어야 합니다.', () => {
    const onObserve = vi.fn();
    timer.observe().subscribe(onObserve);
    timer.start();
    expect(onObserve).toHaveBeenCalledTimes(0);
    vi.advanceTimersByTime(1000);
    expect(onObserve).toHaveBeenCalledTimes(1);
    vi.advanceTimersByTime(1000);
    expect(onObserve).toHaveBeenCalledTimes(2);
    vi.advanceTimersByTime(1000);
    expect(onObserve).toHaveBeenCalledTimes(3);
    vi.advanceTimersByTime(1000);
    expect(onObserve).toHaveBeenCalledTimes(4);
    vi.advanceTimersByTime(1000);
    expect(onObserve).toHaveBeenCalledTimes(5);
  });

  it('30초가 지났다면 구독의 알림은 30회 트리거 되어야 합니다.', () => {
    const onObserve = vi.fn();
    timer.observe().subscribe(onObserve);
    timer.start();
    expect(onObserve).toHaveBeenCalledTimes(0);
    vi.advanceTimersByTime(30000);
    expect(onObserve).toHaveBeenCalledTimes(30);
  });

  it('실제 시간을 기준으로 하기 때문에 start 된 시간과 다음 1초가 되는 시간의 차이가 1초 보다 작을 수 있습니다.', () => {
    const onObserve = vi.fn();
    const spyNowDate = vi.spyOn(timer, 'nowDate');
    const nowDateValue = new Date();
    nowDateValue.setHours(0, 0, nowDateValue.getSeconds() - 1, 300);
    spyNowDate.mockReturnValue(nowDateValue);
    timer.observe().subscribe(onObserve);
    timer.start(); // 이때 time 이 300ms(mock한 값)이기 때문에 700ms 후에 트리거 된다.
    spyNowDate.mockRestore();

    expect(onObserve).toHaveBeenCalledTimes(0);
    vi.advanceTimersByTime(100);
    expect(onObserve).toHaveBeenCalledTimes(0); // 100ms 지난 후 0
    vi.advanceTimersByTime(500);
    expect(onObserve).toHaveBeenCalledTimes(0); // 100 + 500ms 지난 후 0
    vi.advanceTimersByTime(100);
    expect(onObserve).toHaveBeenCalledTimes(1); // 100 + 500 + 100ms 지난 후 1 (mock 한 값이 300ms 이기 때문에 700ms 후에 트리거 된다.)
    vi.advanceTimersByTime(1000);
    expect(onObserve).toHaveBeenCalledTimes(2);
  });

  it('timer 가 시작된 후 실행된 누적 시간이 실제 지나간 시간과 일치해야 합니다.', () => {
    timer.start();
    const nowAt = timer.nowAt();
    vi.advanceTimersByTime(1000);
    const firstGap = timer.getExecuteGap();
    expect(firstGap <= 1000).toBe(true); // start 시 millisecond 만큼의 오차로 timeout 되기 때문에
    vi.advanceTimersByTime(1000);
    expect(timer.getExecuteGap()).toBe(firstGap + 1000);
    vi.advanceTimersByTime(1000);
    expect(timer.getExecuteGap()).toBe(firstGap + 2000);
    vi.advanceTimersByTime(3000);
    expect(timer.getExecuteGap()).toBe(firstGap + 5000);
    vi.advanceTimersByTime(10000);
    expect(timer.getExecuteGap()).toBe(firstGap + 15000);
    vi.advanceTimersByTime(60000);
    expect(timer.getExecuteGap()).toBe(firstGap + 75000);
    vi.advanceTimersByTime(600000);
    expect(timer.getExecuteGap()).toBe(firstGap + 675000);
    vi.advanceTimersByTime(1000 * 60 * 60 * 6);
    expect(timer.getExecuteGap()).toBe(firstGap + 675000 + 1000 * 60 * 60 * 6);
  });
});
