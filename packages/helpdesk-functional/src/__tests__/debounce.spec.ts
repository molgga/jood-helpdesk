import { debounce } from '../debounce';

describe('utils/functional/debounce', () => {

  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('debounce', () => {
    let callCount = 0;
    function executeDebounce() {
      callCount++;
    }

    const onDebounce = debounce(executeDebounce, 100);
    onDebounce();
    onDebounce();
    onDebounce();
    onDebounce();
    onDebounce();
    vi.advanceTimersByTime(150);
    expect(callCount).toBe(1);
  });
});