import { BrowserCookie } from '../BrowserCookie';
/**
 * @jest-environment jsdom
 */
describe('helpdesk-storage: BrowserCookie', () => {
  let cookie: BrowserCookie;
  const TEST_COOKIES = [
    { name: 'a', value: '11' },
    { name: 'b', value: '22' },
    { name: 'c', value: '33' },
  ];

  beforeEach(() => {
    cookie = new BrowserCookie();
    TEST_COOKIES.forEach((cook: any) => {
      cookie.set(cook);
    });
  });

  afterEach(() => {
    cookie.deleteAll();
  });

  it('get 으로 key 를 꺼낼때, key 가 존재하는 경우 저장된 값이 그대로 반환 되어야 합니다.', () => {
    expect(cookie.get('a')).toBe('11');
    expect(cookie.get('b')).toBe('22');
    expect(cookie.get('c')).toBe('33');
  });

  it('get 으로 key 를 꺼낼때, key 가 존재하지 않는 경우 반환값은 null 이어야 합니다.', () => {
    expect(cookie.get('d')).toBe(null);
  });

  it('has 으로 key 여부를 확인할 때, key 가 존재하는 경우 true 가 반환 되어야 합니다.', () => {
    expect(cookie.has('a')).toBe(true);
    expect(cookie.has('b')).toBe(true);
    expect(cookie.has('c')).toBe(true);
  });

  it('has 으로 key 여부를 확인할 때, key 가 존재하지 않는 경우 false 가 반환 되어야 합니다.', () => {
    expect(cookie.has('d')).toBe(false);
  });

  test('set', () => {
    expect(cookie.has('d')).toBe(false);
    cookie.set({ name: 'd', value: 'hello' });
    expect(cookie.has('d')).toBe(true);
  });

  test('delete', () => {
    expect(cookie.has('d')).toBe(false);
    cookie.set({ name: 'd', value: 'hello' });
    expect(cookie.has('d')).toBe(true);
    cookie.delete('d');
    expect(cookie.has('d')).toBe(false);
  });

  test('getAll', () => {
    const all = cookie.getAll();
    expect(all.a).toBe('11');
    expect(all.b).toBe('22');
    expect(all.c).toBe('33');
  });

  test('getCookies', () => {
    const expectString = TEST_COOKIES.map((cook) => {
      return `${cook.name}=${cook.value}`;
    }).join('; ');
    const cookieString = cookie.getCookies();
    expect(cookieString).toBe(expectString);
  });
});
