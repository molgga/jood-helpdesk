export interface StorageCastConfig {
  storageKey: string;
  removeDispatched?: boolean;
}

export interface StorageCastEvent<T = any> {
  event: StorageEvent;
  key: string;
  dispatchType: StorageCastDispatchType;
  dispatchValue: T;
}

export type StorageCastDispatchType = string;

export type StorageCastObserver<T> = (evt: StorageCastEvent<T>) => void;
