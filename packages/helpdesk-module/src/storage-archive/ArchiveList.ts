import {
  ArchiveRow,
  ArchiveListConfig,
  ArchiveExistProcessType,
  ArchiveFindExistFunction,
} from './types';

enum InsertType {
  PUSH = 'push',
  UNSHIFT = 'unshift',
}

/**
 * 로컬 보관소(로컬 스토리지) 데이터 저장과 expire 지원. 배열형.
 * @class ArchiveList
 * @template D 저장 데이터 타입
 */
export class ArchiveList<D = any> {
  private archiveKey: string;
  private archiveMax: number;
  private dataExpire: number = 0;
  private findExist: ArchiveFindExistFunction<D>;
  private existProcessType: ArchiveExistProcessType;
  private storage: Storage;

  constructor(storage: Storage) {
    this.storage = storage;
  }

  get key() {
    if (!this.archiveKey) throw new Error(`not allow key = "${this.archiveKey}"`);
    return this.archiveKey;
  }

  /**
   * 초기화
   * @param {ArchiveListConfig<D>} config
   */
  init(config: ArchiveListConfig<D>) {
    const {
      key = '',
      max = 0,
      dataExpire = 0,
      existProcessType = ArchiveExistProcessType.IGNORE,
      findExist,
    } = config;
    if (!key) throw new Error(`not allow key = "${key}"`);
    this.archiveKey = key;
    this.archiveMax = max;
    this.dataExpire = dataExpire;
    this.existProcessType = existProcessType;
    this.findExist = findExist;
  }

  /**
   * 보유 리스트
   * @returns {Array<ArchiveRow<D>>}
   */
  getList(): Array<ArchiveRow<D>> {
    const list: Array<ArchiveRow<D>> = JSON.parse(this.storage.getItem(this.archiveKey) || '[]');
    const now = this.nowTime();
    const aliveList: Array<ArchiveRow<D>> = [];
    list.forEach((item: ArchiveRow<D>) => {
      const { expireAt = 0, data } = item;
      if (data !== undefined && data !== null) {
        if (now < expireAt) {
          aliveList.push(item);
        }
      }
    });
    return aliveList;
  }

  /**
   * 뒤에 추가
   * @param {D} data
   */
  push(data: D) {
    const list = this.insert(InsertType.PUSH, data);
    const aliveList =
      0 < this.archiveMax && this.archiveMax < list.length
        ? list.slice(list.length - this.archiveMax)
        : list;
    this.storage.setItem(this.key, JSON.stringify(aliveList));
  }

  /**
   * 앞에 추가
   * @param {D} data
   */
  unshift(data: D) {
    const list = this.insert(InsertType.UNSHIFT, data);
    const aliveList = 0 < this.archiveMax ? list.slice(0, this.archiveMax) : list;
    this.storage.setItem(this.key, JSON.stringify(aliveList));
  }

  private insert(insertType: InsertType, data: D) {
    const list = this.getList();
    const expireAt = this.nowExpireAt();
    const findExistIndex = this.findExist ? this.findExist(data, list) : -1;
    if (findExistIndex === -1) {
      // 새로 추가
      list[insertType]({ expireAt, data: data });
    } else {
      if (this.existProcessType === ArchiveExistProcessType.UPDATE) {
        // 이미 있으면서 expire 시간 갱신 타입이면 시간 갱신
        const archiveRow = list.splice(findExistIndex, 1)[0];
        list[insertType]({
          ...archiveRow,
          data: { ...archiveRow.data, ...data },
          expireAt, // expire 시간 갱신
        });
      }
    }
    return list;
  }

  /**
   * index 위치 아이템 제거
   * @param {number} index
   * @returns
   */
  removeByIndex(index: number) {
    if (index === null || isNaN(index) || index < 0) return;
    const list = this.getList();
    list.splice(Math.max(0, Math.min(list.length - 1, index)), 1);
    this.storage.setItem(this.key, JSON.stringify(list));
  }

  /**
   * 지우기
   */
  clear() {
    this.storage.removeItem(this.key);
  }

  /**
   * expire 된것만 지우거나, 비어있다면 아예 지우기
   */
  clearByExpired() {
    const list = this.getList();
    if (list.length) {
      this.storage.setItem(this.key, JSON.stringify(list));
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
