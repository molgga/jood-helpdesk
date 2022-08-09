import { Subject, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import {
  StorageCastObserver,
  StorageCastEvent,
  StorageCastConfig,
  StorageCastDispatchType,
} from './types';

/**
 * storage 이벤트를 이용해 다중 웹뷰(탭)에 이벤트를 전파하기 위한 용도.
 * 예)
 * 좋아요 가능한 컨텐츠가 있고 웹뷰A, 웹뷰B 두 개가 같은 컨텐츠를 다루고 있을때,
 * 웹뷰B 에서 좋아요 발생시, dispatch 를 통해 웹뷰A 로 이벤트를 전파할 수 있음.
 * (웹뷰A 에서는 observe 를 통해 관찰 상태로 있으면 됨)
 *
 * @example
 * 웹뷰A
 * const cast = new StorageCast({ storageKey: 'someTempEventKey' });
 * cast.bindWindow(window);
 * cast.init();
 * cast.observe('FOO_LIKE', (evt) => { // 'someTempEventKey' 으로 dispatch 된 이벤트를 관찰 가능
 *   console.log(evt.event); // evt 참조
 *   console.log(evt.key); // 'someTempEventKey'
 *   console.log(evt.dispatchType); // 'FOO_LIKE'
 *   console.log(evt.dispatchValue); // { liked: true }
 * })
 *
 * 웹뷰B
 * const cast = new StorageCast({ storageKey: 'someTempEventKey' });
 * cast.bindWindow(window);
 * cast.init();
 *
 * const onLikeToggle = () => {
 *   cast.dispatch('FOO_LIKE', { liked: !someState.isLike });
 * };
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event
 */
export class StorageCast {
  protected _window: Window;
  protected _init: boolean;
  protected _subject: Subject<StorageCastEvent>;
  protected _configStorageKey: string;
  protected _configRemoveDispatched: boolean;
  protected _onStorage: any;
  readonly storageEventName = 'storage';

  get window() {
    return this._window || window;
  }

  get document() {
    return this.window.document;
  }

  get localStorage() {
    return this.window.localStorage;
  }

  bindWindow(win: Window) {
    this._window = win;
  }

  /**
   * 초기화
   */
  init(config: StorageCastConfig) {
    if (this._init) return;
    const { storageKey, removeDispatched = true } = config;
    this._configStorageKey = storageKey;
    this._configRemoveDispatched = removeDispatched;
    this._subject = new Subject();
    this._init = true;
    this._onStorage = this.onStorage.bind(this);
    this.window.addEventListener(this.storageEventName, this._onStorage);
  }

  /**
   * 파기
   */
  destroy() {
    this.window.removeEventListener(this.storageEventName, this._onStorage);
    this._window = undefined;
    this._subject.unsubscribe();
    this._subject = undefined;
  }

  /**
   * storage event 핸들러
   * - storage 이벤트는 동일한 페이지에서는 발생하지 않는게 표준이라고 하는데, 사파리에서는 동일한 페이지에서도 이벤트가 발생함.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event
   */
  private onStorage(evt: StorageEvent) {
    const { key, oldValue, newValue } = evt;
    const focus = this.document.hasFocus();
    const visibility = this.document.visibilityState;
    const isFocusOut = !focus || visibility === 'hidden';
    const isSameKey = key === this._configStorageKey;
    const isChanged = oldValue !== newValue;
    if (isFocusOut && isSameKey && isChanged) {
      let value: any = {};
      try {
        value = JSON.parse(newValue) || {};
      } catch (err) {
        console.log(err);
      }
      const { dispatchType, data: dispatchValue } = value;
      this._subject.next({
        key,
        event: evt,
        dispatchType,
        dispatchValue,
      });
    }
  }

  /**
   * 상태 전파
   * @param dispatchType 이벤트 명과 같다
   * @param serializableData 전달할 데이터. 직렬화 가능하다면 무엇이든.
   */
  dispatch(dispatchType: StorageCastDispatchType, serializableData?: any) {
    const value = JSON.stringify({ dispatchType, data: serializableData, stamp: Date.now() });
    this.localStorage.setItem(this._configStorageKey, value);
    if (this._configRemoveDispatched) {
      this.localStorage.removeItem(this._configStorageKey);
    }
  }

  /**
   * 상태 관찰. 지정한 dispatchType 에 대한 변경사항만 관찰된다.
   * @param dispatchType 관찰할 전파명
   * @param observer 응답 핸들러
   */
  observe<T = any>(
    dispatchType: StorageCastDispatchType,
    observer: StorageCastObserver<T>
  ): Subscription {
    return this._subject
      .pipe(filter((evt) => evt.dispatchType === dispatchType))
      .subscribe(observer);
  }

  /**
   * dispatchType 과 상관없이, config 에서 지정한 동일한 storageKey 에서 발생한 상태 변경은 모두 관찰.
   * @param observer 응답 핸들러
   */
  observeAny<T = any>(observer: StorageCastObserver<T>): Subscription {
    return this._subject.subscribe(observer);
  }
}
