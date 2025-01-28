import { Subject, Subscription, fromEvent } from 'rxjs';
import { VisibilityState } from './types';

declare global {
  interface Document {
    msHidden: boolean;
    webkitHidden: boolean;
  }
}

/**
 * @class PageVisibility
 * @link https://developer.mozilla.org/ko/docs/Web/API/Page_Visibility_API
 */
export class PageVisibility {
  private subjectState: Subject<VisibilityState>;
  private eventListener: Subscription;
  private hiddenProp!: 'hidden' | 'msHidden' | 'webkitHidden';
  private hiddenEventName!: string;
  constructor() {
    this.eventListener = new Subscription();
    this.subjectState = new Subject();
  }

  /**
   * 초기화
   */
  init() {
    this.initCompatibility();
    const visibilityObserver = fromEvent(document, this.hiddenEventName);
    this.eventListener.add(visibilityObserver.subscribe(this.onVisibilityChange.bind(this)));
  }

  private initCompatibility() {
    if ('hidden' in document) {
      this.hiddenProp = 'hidden';
      this.hiddenEventName = 'visibilitychange';
    } else if ('msHidden' in document) {
      this.hiddenProp = 'msHidden';
      this.hiddenEventName = 'msvisibilitychange';
    } else if ('webkitHidden' in document) {
      this.hiddenProp = 'webkitHidden';
      this.hiddenEventName = 'webkitvisibilitychange';
    }
  }

  private onVisibilityChange() {
    this.subjectState.next(this.getState());
  }

  /**
   * 현재 hidden 상태인지 여부
   */
  isHidden() {
    return !!document[this.hiddenProp];
  }

  /**
   * 옵저버블: 상태
   */
  observeState() {
    return this.subjectState.asObservable();
  }

  /**
   * 상태
   */
  getState() {
    const hidden = this.isHidden();
    return {
      hidden,
    };
  }

  /**
   * 파기
   */
  destroy() {
    if (this.eventListener) {
      this.eventListener.unsubscribe();
    }
  }
}
