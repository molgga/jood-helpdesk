import { debounce } from '../debounce';

describe('utils/functional/debounce', () => {

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
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
    jest.advanceTimersByTime(150);
    expect(callCount).toBe(1);
  });
});