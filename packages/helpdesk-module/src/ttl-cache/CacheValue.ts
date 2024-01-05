/**
 * ttl 캐시 값
 * @export
 * @class CacheValue
 * @template T
 */
export class CacheValue<T = any> {
  private _key: string;
  private _value: T;
  private _expireAt: number;
  private _expireNotifyTimer: any;
  private _expireNotifyDelay = 900;
  /**
   * 캐시 값
   * @readonly
   */
  get value() {
    return this._value;
  }
  /**
   * 캐시 시간
   * @readonly
   */
  get expireAt() {
    return this._expireAt;
  }
  /**
   * 캐시 키 지정
   * @param {string} key
   */
  setKey(key: string) {
    this._key = key;
  }
  /**
   * 캐시 값 지정
   * @param {T} value
   */
  setValue(value: T) {
    this._value = value;
  }
  /**
   * 캐시 시간 지정
   * @param {number} at
   */
  setExpireAt(at: number) {
    this._expireAt = at;
  }
  /**
   * 파기 여유 시간
   * @param {number} at
   */
  setExpireNotifyDeplay(delay: number) {
    this._expireNotifyDelay = delay;
  }
  /**
   * 지정된 expire 시간 만큼 대기 후 fnCallback 을 트리거
   * @param {number} expire
   * @param {Function} fnCallback
   */
  setExpireNotify(expire: number, fnCallback: (key: string) => void) {
    clearTimeout(this._expireNotifyTimer);
    this._expireNotifyTimer = setTimeout(() => {
      fnCallback(this._key);
    }, expire + this._expireNotifyDelay);
  }
  /**
   * 파기
   */
  destroy() {
    try {
      clearTimeout(this._expireNotifyTimer);
    } catch (err) {
      console.error(err);
    }
  }
}
