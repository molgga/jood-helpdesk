import { Timer } from './Timer';

/**
 * 분 단위 타이머
 */
export class MinuteTimer extends Timer {
  protected fallbackLooseTimeout = 1000;

  protected getNextGap(date: Date) {
    const nowSecond = date.getSeconds() * 1000 + date.getMilliseconds();
    return 60000 - nowSecond;
  }

  protected isTargetChanged() {
    return new Date(this.executeAt).getMinutes() !== new Date(this.nowAt()).getMinutes();
  }
}
