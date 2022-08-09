import { WatchOptions } from 'vue';
import { Observable } from 'rxjs';
import { Observables, WatchObservable } from 'vue-rx';

declare module 'vue/types/vue' {
  interface Vue {
    $observables: Observables;
    $watchAsObservable(expr: string, options?: WatchOptions): Observable<WatchObservable<unknown>>;
    $watchAsObservable<T>(
      fn: (this: this) => T,
      options?: WatchOptions
    ): Observable<WatchObservable<T>>;
    $eventToObservable(event: string): Observable<{ name: string; msg: unknown }>;
    $subscribeTo<T>(
      observable: Observable<T>,
      next: (t: T) => void,
      error?: (e: unknown) => void,
      complete?: () => void
    ): void;
    $fromDOMEvent(selector: string | null, event: string): Observable<Event>;
    $createObservableMethod(methodName: string): Observable<unknown>;
  }
}
