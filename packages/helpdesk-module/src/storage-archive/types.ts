export interface ArchiveRow<T = any> {
  expireAt: number;
  data: T;
}

export enum ArchiveExistProcessType {
  IGNORE,
  UPDATE,
}

export interface ArchiveDataConfig {
  key: string; // 스토리지 키
  dataExpire: number; // expire time
}

export interface ArchiveListConfig<D = any> {
  key: string; // 스토리지 키
  dataExpire: number; // expire time
  max: number; // 최대 갯수
  findExist?: ArchiveFindExistFunction<D>; // 삽입 전 체크
  existProcessType?: ArchiveExistProcessType; // 삽입 전 체크를 설정한 경우 처리 방법
}

export type ArchiveFindExistFunction<D> = (item: D, list: Array<ArchiveRow<D>>) => number;
