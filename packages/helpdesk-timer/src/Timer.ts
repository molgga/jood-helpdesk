import { Observable, Subject } from 'rxjs';
import { TimerOption } from './types';
import { toTimezoneOffsetAt } from '@jood/helpdesk-date';

/**
 * UI 에서 시간 관련 표시를 하게 되는 경우가 종종 있는데,
 * javascript 의 setTimeout 으로는 정확한 실행 시간이 보장되지 않기 때문에 이를 보완한다.
 *
 * fallbackLoose 관련 값은 위의 실행시간 보장이 안되는 문제로 약간의 오차(fallbackLooseTimeout)를 두고,
 * 한번 더 시간을 비교하여 단위(예: 분)이 갱신 되었다면 옵저버에 trigger 한다.
 */
export class Timer {
  protected fallbackLoose = true;
  protected fallbackLooseTimeout = 1000;
  protected timer: any = null;
  protected timerLoose: any = null;
  protected timezoneOffset = 540;
  protected startAt = 0;
  protected executeAt = 0;
  protected executeGap = 0;
  protected subject: Subject<void>;
  protected observable: Observable<void>;
  protected isDestroy = false;

  constructor(option: TimerOption = {}) {
    const { fallbackLoose = true, fallbackLooseTimeout, timezoneOffset } = option;
    this.fallbackLoose = fallbackLoose;
    if (fallbackLooseTimeout) this.fallbackLooseTimeout = fallbackLooseTimeout;
    if (timezoneOffset) this.timezoneOffset = timezoneOffset;
    this.subject = new Subject();
    this.observable = this.subject.asObservable();
  }

  /**
   * 호출 시점 현재 Date
   */
  nowDate(): Date {
    return toTimezoneOffsetAt(Date.now(), this.timezoneOffset);
  }

  /**
   * 호출 시점 현재 시간
   */
  nowAt(): number {
    return this.nowDate().getTime();
  }

  /**
   * minuteTimer 가 분 단위로 execute 되었을 때 시간
   */
  getCurrentNowAt() {
    return this.executeAt;
  }

  /**
   * execute 지난 시간
   */
  getExecuteGap() {
    return this.executeGap;
  }

  protected executeTimout() {
    clearTimeout(this.timer);
    const date = this.nowDate();
    const nextGap = this.getNextGap(date);
    this.executeAt = date.getTime();
    this.executeGap += nextGap;
    this.timer = setTimeout(() => {
      this.dispatch();
      this.executeTimout();
    }, nextGap);
    if (this.fallbackLoose) {
      this.timerLoose = setTimeout(() => {
        this.dispatch();
      }, nextGap + this.fallbackLooseTimeout);
    }
  }

  protected getNextGap(date: Date) {
    const gap = date.getMilliseconds();
    const nextGap = 1000 - gap; // 후에 timeout 실행
    return nextGap;
  }

  protected isTargetChanged() {
    return false;
  }

  protected dispatch() {
    if (this.isDestroy) return;
    if (!this.isTargetChanged()) return;
    this.subject.next();
  }

  /**
   * 옵저버블: 분 단위
   */
  observe() {
    return this.observable;
  }

  /**
   * 타이머 시작
   */
  start() {
    this.startAt = this.nowAt();
    this.executeTimout();
  }

  /**
   * 타이머 정지
   */
  stop() {
    clearTimeout(this.timer);
    clearTimeout(this.timerLoose);
  }

  /**
   * 파기
   */
  destroy() {
    this.stop();
    this.isDestroy = true;
    this.subject.unsubscribe();
  }
}
