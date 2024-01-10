import { TTLCache } from "../TTLCache";

describe("TTLCache", () => {
  let ttlCache: TTLCache;
  beforeEach(() => {
    vi.useFakeTimers();
    ttlCache = new TTLCache();
    ttlCache.expireNotifyDeplay =  0;
  });
  afterEach(() => {
    vi.useRealTimers();
    ttlCache.destroy();
  });

  it("expired 는 expire 시간이 0 으로 지정한 값은 true 가 반환되어야 합니다.", () => {
    ttlCache.set("A", "myValue1", 0);
    expect(ttlCache.expired("A")).toBe(true);
  });

  it("expired 는 지정되지 않은 key 인 경우 true 를 반환해야 합니다.", () => {
    expect(ttlCache.expired("unknown-k1")).toBe(true);
    expect(ttlCache.expired("unknown-k2")).toBe(true);
  });

  it("expired 는 expire 시간이 지나지 않은 key 는 false, 지난값은 true 를 반환해야 합니다.", () => {
    ttlCache.set("A", "myValue1", 0);
    ttlCache.set("B", "myValue2", 100);
    ttlCache.set("C", "myValue3", 200);
    expect(ttlCache.expired("A")).toBe(true);
    expect(ttlCache.expired("B")).toBe(false);
    expect(ttlCache.expired("C")).toBe(false);
    vi.advanceTimersByTime(150);
    expect(ttlCache.expired("A")).toBe(true);
    expect(ttlCache.expired("B")).toBe(true);
    expect(ttlCache.expired("C")).toBe(false);
  });

  it("get 은 expire 시간이 0 으로 지정한 값은 undefined 가 반환되어야 합니다.", () => {
    ttlCache.set("A", "myValue1", 0);
    expect(ttlCache.get("A")).toBe(undefined);
  });

  it("get 은 지정되지 않은 key 인 경우 undefined 를 반환해야 합니다.", () => {
    expect(ttlCache.get("unknown-k1")).toBe(undefined);
    expect(ttlCache.get("unknown-k2")).toBe(undefined);
  });

  it("get 은 expire 시간이 지나지 않은 key 는 저장한 값을, 지난값은 false 를 반환해야 합니다.", () => {
    ttlCache.set("A", "myValue1", 0);
    ttlCache.set("B", "myValue2", 100);
    ttlCache.set("C", "myValue3", 200);
    expect(ttlCache.get("A")).toBe(undefined);
    expect(ttlCache.get("B")).toBe("myValue2");
    expect(ttlCache.get("C")).toBe("myValue3");
    vi.advanceTimersByTime(150); 
    expect(ttlCache.get("A")).toBe(undefined);
    expect(ttlCache.get("B")).toBe(undefined);
    expect(ttlCache.get("C")).toBe("myValue3");
  });

  it("has 는 expire 시간이 0 으로 지정한 값은 false 가 반환되어야 합니다.", () => {
    ttlCache.set("A", "myValue1", 0);
    expect(ttlCache.has("A")).toBe(false);
  });

  it("has 는 지정되지 않은 key 인 경우 false 를 반환해야 합니다.", () => {
    expect(ttlCache.has("unknown-k1")).toBe(false);
    expect(ttlCache.has("unknown-k2")).toBe(false);
  });

  it("has 는 expire 시간이 지나지 않은 key 는 true, 지난값은 false 를 반환해야 합니다.", () => {
    ttlCache.set("A", "myValue1", 0);
    ttlCache.set("B", "myValue2", 100);
    ttlCache.set("C", "myValue3", 200);
    expect(ttlCache.has("A")).toBe(false);
    expect(ttlCache.has("B")).toBe(true);
    expect(ttlCache.has("C")).toBe(true);
    vi.advanceTimersByTime(150); 
    expect(ttlCache.has("A")).toBe(false);
    expect(ttlCache.has("B")).toBe(false);
    expect(ttlCache.has("C")).toBe(true);
  });

  it("remove 하면 값은 제거 되어야 합니다.", () => {
    ttlCache.set("A", "myValue1", 100);
    ttlCache.set("B", "myValue2", 100);
    ttlCache.set("C", "myValue3", 200);
    expect(ttlCache.has("A")).toBe(true);
    expect(ttlCache.has("B")).toBe(true);
    expect(ttlCache.has("C")).toBe(true);
    ttlCache.remove("A");
    ttlCache.remove("B");
    ttlCache.remove("C");
    expect(ttlCache.has("A")).toBe(false);
    expect(ttlCache.has("B")).toBe(false);
    expect(ttlCache.has("C")).toBe(false);
  });
  
  it("존재하는 key 를 다시 set 하는 경우 갱신 되어야 합니다.", () => {
    ttlCache.set("A", "myValue1", 100);
    expect(ttlCache.getKeys().length).toBe(1);
    vi.advanceTimersByTime(150); 
    expect(ttlCache.getKeys().length).toBe(0);
    ttlCache.set("A", "myValue1", 100);
    expect(ttlCache.getKeys().length).toBe(1);
    vi.advanceTimersByTime(50); 
    ttlCache.set("A", "myValue1", 100);
    expect(ttlCache.getKeys().length).toBe(1);
    vi.advanceTimersByTime(150); 
    expect(ttlCache.getKeys().length).toBe(0);
  });

  test("flushExpired 는 expire 된 key 를 모두 제거해야 합니다.", () => {
    ttlCache.set("A", "myValue1", 100);
    ttlCache.set("B", "myValue2", 200);
    ttlCache.set("C", "myValue3", 300);
    expect(ttlCache.getKeys().length).toBe(3);
    ttlCache.flushExpired();
    expect(ttlCache.getKeys().length).toBe(3);
  });

  test("flushAll 은 expire 시간과 관계없이 모든 key 를 제거해야 합니다.", () => {
    ttlCache.set("A", "myValue1", 100);
    ttlCache.set("B", "myValue2", 200);
    ttlCache.set("C", "myValue3", 300);
    expect(ttlCache.getKeys().length).toBe(3);
    ttlCache.flushAll();
    expect(ttlCache.getKeys().length).toBe(0);
  });

  test("toJson", () => {
    ttlCache.set("A", "myValue1", 0);
    ttlCache.set("B", "myValue2", 100);
    ttlCache.set("C", "myValue3", 200);
    expect(ttlCache.toJson()).toEqual({ B: "myValue2", C: "myValue3" });
    vi.advanceTimersByTime(150); 
    expect(ttlCache.toJson()).toEqual({ C: "myValue3" });
  });

  test("map", async () => {
    expect(ttlCache.map).not.toBeNull();
    expect(ttlCache.map.constructor).toBe(Map);
  });

  test("destroy", () => {
    ttlCache.set("A", "myValue1", 100);
    ttlCache.set("B", "myValue2", 200);
    ttlCache.set("C", "myValue3", 300);
    expect(ttlCache.getKeys().length).toBe(3);
    ttlCache.destroy();
    expect(ttlCache.getKeys().length).toBe(0);
  });
});
