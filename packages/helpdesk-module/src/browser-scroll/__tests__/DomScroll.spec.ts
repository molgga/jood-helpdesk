import { DomScroll } from "../DomScroll";

describe('DomScroll', () => {
  let element = document.createElement('div');
  let domScroll: DomScroll;

  beforeEach(() => {
    domScroll = new DomScroll();
    domScroll.setElement(element);
    domScroll.init();
  });

  afterEach(() => {
    domScroll.destroy();
    domScroll = null;
  });

  it('Element 를 지정하지 않고 초기화 하는 경우 오류를 던져야 합니다.',  () => {
    const domScroll = new DomScroll();
    expect(() => {
      domScroll.init();
    }).toThrow();

    expect(() => {
      domScroll.setElement(element);
      domScroll.init();
    }).not.toThrow();
  });
});