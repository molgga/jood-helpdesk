import { Subscription } from 'rxjs';
import { BrowserScroll } from "../BrowserScroll";

interface SpyMocks {
  mockScrollTop?: jest.SpyInstance<number, []>;
  mockScrollHeight?: jest.SpyInstance<number, []>;
  mockInnerHeight?: jest.SpyInstance<number, []>;
  mockScrollLeft?: jest.SpyInstance<number, []>;
  mockScrollWidth?: jest.SpyInstance<number, []>;
  mockInnerWidth?: jest.SpyInstance<number, []>;
}

function spyCreate(browserScroll: BrowserScroll) {
  const mockScrollTop = jest.spyOn(browserScroll, 'scrollTop', 'get');
  const mockScrollHeight = jest.spyOn(browserScroll, 'scrollHeight', 'get');
  const mockInnerHeight = jest.spyOn(browserScroll, 'innerHeight', 'get');
  const mockScrollLeft = jest.spyOn(browserScroll, 'scrollLeft', 'get');
  const mockScrollWidth = jest.spyOn(browserScroll, 'scrollWidth', 'get');
  const mockInnerWidth = jest.spyOn(browserScroll, 'innerWidth', 'get');
  return {
    mockScrollTop,
    mockScrollHeight,
    mockInnerHeight,
    mockScrollLeft,
    mockScrollWidth,
    mockInnerWidth,
  }
}

interface SpyProps {
  scrollTop?: number;
  scrollHeight?: number;
  innerHeight?: number; 
  scrollLeft?: number;
  scrollWidth?: number;
  innerWidth?: number;
}

function spyScroll(mocks: SpyMocks, props: SpyProps, scrollEvent = true) {
  const { scrollTop, scrollHeight, innerHeight, scrollLeft, scrollWidth, innerWidth} = props;
  const { mockScrollTop, mockScrollHeight, mockInnerHeight, mockScrollLeft, mockScrollWidth, mockInnerWidth } = mocks;
  if (mockScrollTop && !isNaN(scrollTop)) mockScrollTop.mockReturnValue(scrollTop);
  if (mockScrollHeight && !isNaN(scrollHeight)) mockScrollHeight.mockReturnValue(scrollHeight);
  if (mockInnerHeight && !isNaN(innerHeight)) mockInnerHeight.mockReturnValue(innerHeight);
  if (mockScrollLeft && !isNaN(scrollLeft)) mockScrollLeft.mockReturnValue(scrollLeft);
  if (mockScrollWidth && !isNaN(scrollWidth)) mockScrollWidth.mockReturnValue(scrollWidth);
  if (mockInnerWidth && !isNaN(innerWidth)) mockInnerWidth.mockReturnValue(innerWidth);
  if (scrollEvent) {
    triggerScrollEvent();
  }
  return {
    mockScrollTop,
    mockScrollHeight,
    mockInnerHeight,
  };
}

function spyClear(mocks: SpyMocks) {
  const { mockScrollTop, mockScrollHeight, mockInnerHeight } = mocks;
  if (mockScrollTop) mockScrollTop.mockClear();
  if (mockScrollHeight) mockScrollHeight.mockClear();
  if (mockInnerHeight) mockInnerHeight.mockClear();
}

function triggerScrollEvent() {
  window.dispatchEvent(new Event('scroll'));
}

describe('BrowserScroll', () => {
  const listener: Subscription = new Subscription();
  let browserScroll: BrowserScroll;

  beforeEach(() => {
    // mockConsole({ silent: false });
    browserScroll = new BrowserScroll();
    browserScroll.init();
  });

  afterEach(() => {
    // mockConsole({ silent: true });
    browserScroll.destroy();
    browserScroll = null;
  });

  afterAll(() => {
    listener.unsubscribe();
  });

  it('리사이즈 이벤트가 발생하면 스크롤 이벤트가 발생하고 내부 스크롤 핸들러(스크롤 정보 확인)가 동작해야 합니다.', () => {
    const mockScroll = jest.spyOn(browserScroll, 'scrollTop', 'get');
    expect(mockScroll.mock.calls.length).toBe(0);
    window.dispatchEvent(new Event('resize'));
    expect(1 <= mockScroll.mock.calls.length).toBe(true);
  });

  it('스크롤 이벤트 발생시 observeScroll 로 알림이 수신되어야 합니다.', () => {
    const expectScrollTops = [];
    const observe = browserScroll.observeScroll().subscribe(state => {
      expectScrollTops.push(state.scrollTop);
    });
    listener.add(observe);
    const mocks = spyCreate(browserScroll);
    spyScroll(mocks, { scrollTop: 10, scrollHeight: 200, innerHeight: 100 });
    spyScroll(mocks, { scrollTop: 20, scrollHeight: 200, innerHeight: 100 });
    spyScroll(mocks, { scrollTop: 30, scrollHeight: 200, innerHeight: 100 });
    spyScroll(mocks, { scrollTop: 40, scrollHeight: 200, innerHeight: 100 });
    spyScroll(mocks, { scrollTop: 50, scrollHeight: 200, innerHeight: 100 });
    expect(expectScrollTops).toEqual([10,20,30,40,50]);
  });


  it('스크롤 이벤트 발생시 Y축의 스크롤 방향이 바뀌면 observeDirectionY 로 알림이 수신되어야 합니다.', () => {
    let expectDirection = 0;
    const observe = browserScroll.observeDirectionY().subscribe(state => {
      expectDirection = state.directionY;
    });
    listener.add(observe);
    const mocks = spyCreate(browserScroll);
    spyScroll(mocks, { scrollTop: 0, scrollHeight: 200, innerHeight: 100 });
    expect(expectDirection).toBe(0);
    spyScroll(mocks, { scrollTop: 10, scrollHeight: 200, innerHeight: 100 });
    expect(expectDirection).toBe(1);
    spyScroll(mocks, { scrollTop: 20, scrollHeight: 200, innerHeight: 100 });
    expect(expectDirection).toBe(1);
    spyScroll(mocks, { scrollTop: 10, scrollHeight: 200, innerHeight: 100 });
    expect(expectDirection).toBe(-1);
    spyScroll(mocks, { scrollTop: 20, scrollHeight: 200, innerHeight: 100 });
    expect(expectDirection).toBe(1);
  });

  it('스크롤 이벤트 발생시 X축의 스크롤 방향이 바뀌면 observeDirectionY 로 알림이 수신되어야 합니다.', () => {
    let expectDirection = 0;
    const observe = browserScroll.observeDirectionX().subscribe(state => {
      expectDirection = state.directionX;
    });
    listener.add(observe);
    const mocks = spyCreate(browserScroll);
    spyScroll(mocks, { scrollLeft: 0, scrollWidth: 200, innerWidth: 100 });
    expect(expectDirection).toBe(0);
    spyScroll(mocks, { scrollLeft: 10, scrollWidth: 200, innerWidth: 100 });
    expect(expectDirection).toBe(1);
    spyScroll(mocks, { scrollLeft: 20, scrollWidth: 200, innerWidth: 100 });
    expect(expectDirection).toBe(1);
    spyScroll(mocks, { scrollLeft: 10, scrollWidth: 200, innerWidth: 100 });
    expect(expectDirection).toBe(-1);
    spyScroll(mocks, { scrollLeft: 20, scrollWidth: 200, innerWidth: 100 });
    expect(expectDirection).toBe(1);
  });

  it('스크롤 이벤트 발생시 Y축의 스크롤 방향이 지정된 느슨한 방향 이동값 만큼 바뀌면 observeDirectionLooseY 로 알림이 수신되어야 합니다.', () => {
    let expectDirection = 0;
    const observe = browserScroll.observeDirectionLooseY().subscribe(state => {
      expectDirection = state.directionY;
    });
    browserScroll.setDirectionLooseGapY(20);
    listener.add(observe);
    const mocks = spyCreate(browserScroll);
    spyScroll(mocks, { scrollTop: 0, scrollHeight: 200, innerHeight: 100 });
    expect(expectDirection).toBe(0);
    spyScroll(mocks, { scrollTop: 10, scrollHeight: 200, innerHeight: 100 });
    expect(expectDirection).toBe(0);
    spyScroll(mocks, { scrollTop: 30, scrollHeight: 200, innerHeight: 100 });
    expect(expectDirection).toBe(1);
    spyScroll(mocks, { scrollTop: 20, scrollHeight: 200, innerHeight: 100 });
    expect(expectDirection).toBe(1);
    spyScroll(mocks, { scrollTop: 0, scrollHeight: 200, innerHeight: 100 });
    expect(expectDirection).toBe(-1);
    spyScroll(mocks, { scrollTop: 20, scrollHeight: 200, innerHeight: 100 });
    expect(expectDirection).toBe(1);
  });

  it('스크롤 이벤트 발생시 X축의 스크롤 방향이 지정된 느슨한 방향 이동값 만큼 바뀌면 observeDirectionLooseY 로 알림이 수신되어야 합니다.', () => {
    let expectDirection = 0;
    const observe = browserScroll.observeDirectionLooseX().subscribe(state => {
      expectDirection = state.directionX;
    });
    browserScroll.setDirectionLooseGapX(20);
    listener.add(observe);
    const mocks = spyCreate(browserScroll);
    spyScroll(mocks, { scrollTop: 0, scrollHeight: 200, innerHeight: 100 });
    spyScroll(mocks, { scrollLeft: 0, scrollWidth: 200, innerWidth: 100 });
    expect(expectDirection).toBe(0);
    spyScroll(mocks, { scrollLeft: 10, scrollWidth: 200, innerWidth: 100 });
    expect(expectDirection).toBe(0);
    spyScroll(mocks, { scrollLeft: 30, scrollWidth: 200, innerWidth: 100 });
    expect(expectDirection).toBe(1);
    spyScroll(mocks, { scrollLeft: 20, scrollWidth: 200, innerWidth: 100 });
    expect(expectDirection).toBe(1);
    spyScroll(mocks, { scrollLeft: 0, scrollWidth: 200, innerWidth: 100 });
    expect(expectDirection).toBe(-1);
    spyScroll(mocks, { scrollLeft: 20, scrollWidth: 200, innerWidth: 100 });
    expect(expectDirection).toBe(1);
  });

  it('스크롤 이벤트 발생시 Y축의 스크롤이 끝점에 도달하면 observeEndY 로 알림이 수신되어야 합니다.', () => {
    let expectCalled = false;
    const observe = browserScroll.observeEndY().subscribe(state => {
      expectCalled = true;
    });
    listener.add(observe);
    const mocks = spyCreate(browserScroll);
    spyScroll(mocks, { scrollTop: 10, scrollHeight: 200, innerHeight: 100 });
    expect(expectCalled).toBe(false);
    spyScroll(mocks, { scrollTop: 99, scrollHeight: 200, innerHeight: 100 });
    expect(expectCalled).toBe(false);
    spyScroll(mocks, { scrollTop: 100, scrollHeight: 200, innerHeight: 100 });
    expect(expectCalled).toBe(true);
  });


  it('스크롤 이벤트 발생시 X축의 스크롤이 끝점에 도달하면 observeEndX 로 알림이 수신되어야 합니다.', () => {
    let expectCalled = false;
    const observe = browserScroll.observeEndX().subscribe(state => {
      expectCalled = true;
    });
    listener.add(observe);
    const mocks = spyCreate(browserScroll);
    spyScroll(mocks, { scrollLeft: 10, scrollWidth: 200, innerWidth: 100 });
    expect(expectCalled).toBe(false);
    spyScroll(mocks, { scrollLeft: 99, scrollWidth: 200, innerWidth: 100 });
    expect(expectCalled).toBe(false);
    spyScroll(mocks, { scrollLeft: 100, scrollWidth: 200, innerWidth: 100 });
    expect(expectCalled).toBe(true);
  });
});