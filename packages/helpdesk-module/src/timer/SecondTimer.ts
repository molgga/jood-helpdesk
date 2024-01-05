import { Timer } from './Timer';

/**
 * 초 단위 타이머
 */
export class SecondTimer extends Timer {
  protected fallbackLooseTimeout = 200;

  protected getNextGap(date: Date) {
    const nowSecond = date.getMilliseconds();
    return 1000 - nowSecond;
  }

  protected isTargetChanged() {
    return new Date(this.executeAt).getSeconds() !== new Date(this.nowAt()).getSeconds();
  }
}
