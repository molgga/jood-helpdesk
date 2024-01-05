import { CacheValue } from './CacheValue';
import type { Serializable } from './types';

/**
 * ttl 캐시.
 * 일정 시간만 캐싱을 하기 위한 용도.
 * setTimeout 을 사용하므로 정확한 시간을 보장하는게 아님.
 * @export
 * @class TTLCache
 */
export class TTLCache {
  protected cacheMap: Map<string, CacheValue> = new Map();
  protected now(): number {
    return Date.now();
  }

  /**
   * CacheValue 에 등록된 expire 시간(정도) 후 CacheValue 로 부터 호출을 기대하는 콜백
   * @protected
   */
  protected fnExpireNotify = (key: string) => {
    this.remove(key);
  };

  expireNotifyDeplay = 900;

  /**
   * 보유 맵
   * @readonly
   * @type {Map<string, CacheValue>}
   */
  get map(): Map<string, CacheValue> {
    return this.cacheMap;
  }

  /**
   * 맵의 value
   * @protected
   * @param {string} key
   * @returns {CacheValue}
   */
  protected getCache(key: string): CacheValue {
    return this.cacheMap.get(key);
  }

  /**
   * key 가 존재하는 경우 값이 expire 되었는지 여부 확인.
   * key 가 존재하지 않는 경우 true.
   * @param {string} key
   */
  expired(key: string): boolean {
    if (this.cacheMap.has(key)) {
      const now = this.now();
      const cacheValue = this.getCache(key);
      const expireAt = cacheValue.expireAt;
      if (expireAt < now) {
        this.remove(key);
        return true;
      } else {
        return false;
      }
    }
    return true;
  }

  /**
   * key 에 해당하는 값 반환
   * @template T
   * @param {string} key
   */
  get<T>(key: string): T {
    if (this.has(key)) {
      if (this.expired(key)) {
        return;
      } else {
        return this.getCache(key).value;
      }
    }
    return;
  }

  /**
   * key 에 value 를 expire(millisecond) 만큼 저장
   * @template T
   * @param {string} key
   * @param {T} value
   * @param {number} expire
   */
  set<T>(key: string, value: T, expire: number): void {
    if (!expire) return;
    const now = this.now();
    const cacheValue = new CacheValue<T>();
    const existCache = this.getCache(key);
    if (existCache) {
      existCache.destroy();
    }
    cacheValue.setKey(key);
    cacheValue.setValue(value);
    cacheValue.setExpireNotifyDeplay(this.expireNotifyDeplay);
    cacheValue.setExpireNotify(expire, this.fnExpireNotify);
    cacheValue.setExpireAt(now + +expire);
    this.cacheMap.set(key, cacheValue);
  }

  /**
   * key 가 존재하는지 여부
   * @param {string} key
   */
  has(key: string): boolean {
    return !this.expired(key) ? this.cacheMap.has(key) : false;
  }

  /**
   * key 삭제
   * @param {string} key
   */
  remove(key: string): void {
    const cacheValue = this.getCache(key);
    if (cacheValue) {
      cacheValue.destroy();
    }
    this.cacheMap.delete(key);
  }

  /**
   * key 배열 반환
   * @returns {string[]}
   */
  getKeys(): string[] {
    return Array.from(this.cacheMap.keys());
  }

  /**
   * expire 된것 삭제
   */
  flushExpired() {
    this.getKeys().forEach((key) => {
      if (this.expired(key)) {
        this.remove(key);
      }
    });
  }

  /**
   * 비우기
   */
  flushAll() {
    this.getKeys().forEach((key) => {
      this.remove(key);
    });
  }

  /**
   * 보유하고 있는 key&value 를 모두 반환
   */
  toJson() {
    const keys = Array.from(this.cacheMap.keys());
    const hash: { [key: string]: Serializable } = {};
    keys.map((key) => {
      if (!this.expired(key)) {
        hash[key.toString()] = this.get(key);
      }
    });
    return hash;
  }

  /**
   * 파기
   */
  destroy() {
    try {
      this.flushAll();
    } catch (err) {
      console.error(err);
    }
  }
}
