export interface TimerOption {
  /**
   * 기준 시간
   */
  pivotAt?: number;

  /**
   * setTimeout 으로는 정확한 시간(초)에 실행 되는것을 보장할 수 없기 때문에
   * 일정시간(fallbackLooseTimeout) 후 한번 더 observable 로 트리거 하는것을 사용
   * @type {boolean}
   * @memberof TimerOption
   */
  fallbackLoose?: boolean;
  fallbackLooseTimeout?: number;

  /**
   * (한국시간으로 계산하기 위한)타임존 추가 분(시간)
   * 한국은 GTM+9 (javascript Date timezoneoffset 은 -540)
   * @type {number}
   * @memberof TimerOption
   */
  timezoneOffset?: number;
}
