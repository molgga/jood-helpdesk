type Func<T extends any[]> = (...args: T) => void;

export function throttle<T extends any[]>(fn: Func<T>, delay: number): Func<T> {
  let timer: any;
  return (...args: T) => {
    if (!timer) {
      timer = setTimeout(() => {
        fn(...args);
        timer = undefined;
      }, delay);
    }
  };
}
