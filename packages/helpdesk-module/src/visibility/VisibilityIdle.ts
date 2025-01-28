import { Observable, Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { PageVisibility } from './PageVisibility';
import { VisibilityState } from './types';
import { VisibilityIdleState, VisibilityIdleType } from './types';

export class VisibilityIdle {
  private subject!: Subject<VisibilityIdleType>;
  private observable!: Observable<VisibilityIdleType>;
  private observeListener!: Subscription;
  private visibility!: PageVisibility;
  private state: VisibilityIdleState = {
    nowAt: 0,
    hiddenAt: 0,
    isHidden: false,
    isChangedDay: false,
    idleTime: 0,
    idleSecond: 0,
    idleMinute: 0,
    idleHour: 0,
  };

  init() {
    this.subject = new Subject();
    this.observable = this.subject.asObservable();
    this.observeListener = new Subscription();
    this.visibility = new PageVisibility();
    this.visibility.init();
    this.observeListener.add(this.visibility.observeState().subscribe(this.onChangeVisibility.bind(this)));
  }

  private onChangeVisibility(visibilityState: VisibilityState) {
    const { hidden } = visibilityState;
    const now = Date.now();
    this.state.isHidden = hidden;
    this.state.nowAt = now;
    if (hidden) {
      this.state.hiddenAt = now;
      this.state.isChangedDay = false;
    } else if (0 < this.state.hiddenAt) {
      const dateNow = new Date(this.state.nowAt);
      const dateHidden = new Date(this.state.hiddenAt);
      const time = now - this.state.hiddenAt;
      const second = Math.floor(time / 1000);
      const minute = Math.floor(second / 60);
      const hour = Math.floor(minute / 60);
      this.state.isChangedDay = dateNow.getDay() !== dateHidden.getDay();
      this.state.idleTime = time;
      this.state.idleSecond = second;
      this.state.idleMinute = minute;
      this.state.idleHour = hour;
      this.dispatch(VisibilityIdleType.IDEL);
    }
    this.dispatch(VisibilityIdleType.VISIBLE);
  }

  private dispatch(type: VisibilityIdleType) {
    this.subject.next(type);
  }

  private pipeObserve(observable: Observable<VisibilityIdleType>, filterType: VisibilityIdleType) {
    return observable.pipe(
      filter((type) => type === filterType),
      map(() => this.getState()),
    );
  }

  getState() {
    return { ...this.state };
  }

  observeIdle() {
    return this.pipeObserve(this.observable, VisibilityIdleType.IDEL);
  }

  observeVisible() {
    return this.pipeObserve(this.observable, VisibilityIdleType.VISIBLE);
  }

  destroy() {
    this.observeListener.unsubscribe();
    this.visibility.destroy();
  }
}
