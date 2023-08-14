import { ArchiveData } from '../ArchiveData';
import { MockStorage } from './mock';

describe('helpdesk-storage: ArchiveData', () => {
  let archive: ArchiveData<string>;
  let mockStorage: MockStorage;

  beforeEach(() => {
    mockStorage = new MockStorage();
    archive = new ArchiveData(mockStorage as any);
  });

  afterEach(() => {});

  it('저장소가 비어있는 경우 get 으로 값을 꺼낼 시 null 을 반환해야 합니다.', () => {
    archive.init({ key: 'A', dataExpire: 15 });
    expect(archive.get()).toBe(null);
  });

  it('set 으로 값을 저장하고, get 으로 해당 값을 꺼낼 수 있어야 합니다.', () => {
    archive.init({ key: 'A', dataExpire: 15 });
    archive.set('some-data');
    expect(archive.get().data).toBe('some-data');
  });

  it('값이 추가된 후 dataExpire 시간 만큼 지난 후에는 값이 제거된 상태여야 합니다.', () => {
    archive.init({ key: 'A', dataExpire: 20 });

    let row = archive.get();
    expect(row).toBe(null);

    archive.nowTime = jest.fn(() => 0);
    archive.set('some-data');
    row = archive.get();
    expect(row.data).toBe('some-data');

    archive.nowTime = jest.fn(() => 10);
    row = archive.get();
    expect(row.data).toBe('some-data');

    archive.nowTime = jest.fn(() => 21);
    row = archive.get();
    expect(row).toBe(null);
  });

  it('expire 전 다시 값을 저장하면 expire 시간이 갱신 되어야 합니다.', () => {
    archive.init({ key: 'A', dataExpire: 15 });

    let row = archive.get();
    expect(row).toBe(null);

    archive.nowTime = jest.fn(() => 0);
    archive.set('some-data');
    row = archive.get();
    expect(row.data).toBe('some-data');

    archive.nowTime = jest.fn(() => 10);
    archive.set('some-data'); // 다시 set
    row = archive.get();
    expect(row.data).toBe('some-data');

    archive.nowTime = jest.fn(() => 20);
    row = archive.get();
    expect(row.data).toBe('some-data');

    archive.nowTime = jest.fn(() => 30);
    row = archive.get();
    expect(row).toBe(null);
  });

  it('clear 시 해당 key 의 값은 제거 되어야 합니다.', () => {
    archive.init({ key: 'A', dataExpire: 15 });
    archive.set('some-data');
    expect(archive.get().data).toBe('some-data');
    archive.clear();
    expect(archive.get()).toBe(null);
  });
});
