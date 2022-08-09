import { ArchiveRow, ArchiveDataConfig } from './types';

/**
 * 로컬 보관소(로컬 스토리지) 데이터 저장과 expire 지원.
 * @class ArchiveData
 * @template D 저장 데이터 타입
 */
export class ArchiveData<D = any> {
  protected archiveKey: string;
  protected dataExpire: number = 0;
  protected storage: Storage;

  constructor(storage: Storage) {
    this.storage = storage;
  }

  get key() {
    if (!this.archiveKey) throw new Error(`not allow key = "${this.archiveKey}"`);
    return this.archiveKey;
  }

  /**
   * 초기화
   * @param {ArchiveDataConfig} config
   */
  init(config: ArchiveDataConfig) {
    const { key = '', dataExpire = 0 } = config;
    if (!key) throw new Error(`not allow key = "${key}"`);
    this.archiveKey = key;
    this.dataExpire = dataExpire;
  }

  /**
   * 보관 임시값
   */
  createTempRow() {
    return JSON.stringify({ expireAt: 0, data: null });
  }

  /**
   * 꺼내기
   */
  get() {
    let row: ArchiveRow<D> = null;
    try {
      row = JSON.parse(this.storage.getItem(this.key));
    } catch (err) {
      console.error(err);
    }
    if (!row) row = JSON.parse(this.createTempRow());
    const isExpire = row.expireAt < this.nowTime();
    return !isExpire ? row : null;
  }

  /**
   * 저장하기
   */
  set(data: D) {
    const expireAt = this.nowExpireAt();
    this.storage.setItem(this.key, JSON.stringify({ expireAt, data: data }));
  }

  /**
   * 제거하기
   */
  clear() {
    this.storage.removeItem(this.key);
  }

  /**
   * 저장된 데이터가 expire 되었다면 제거하기
   */
  clearByExpired() {
    const row = this.get();
    if (row) {
      this.storage.setItem(this.key, JSON.stringify(row));
    } else {
      this.storage.removeItem(this.key);
    }
  }

  /**
   * 현재 시간
   */
  nowTime() {
    return Date.now();
  }

  /**
   * 데이터의 expire 시간
   */
  nowExpireAt() {
    return this.nowTime() + this.dataExpire;
  }
}
