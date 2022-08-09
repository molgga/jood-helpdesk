import { ArchiveList } from '../ArchiveList';
import { ArchiveExistProcessType } from '../types';
import { MockStorage } from './mock';

describe('ArchiveList', () => {
  let archive: ArchiveList<{ id: any; name: any }>;
  let mockStorage: MockStorage;

  beforeEach(() => {
    // mockConsole({ silent: false }); // 테스트 중 console 모두 봐야되면
    mockStorage = new MockStorage();
    archive = new ArchiveList(mockStorage as any);
  });

  afterEach(() => {
    // mockConsole({ silent: true });
  });

  it('push 하면 뒤에서 부터 추가 되어야 하고, max 를 넘어서면 가장 앞의 원소가 제거 되어야 합니다.', () => {
    archive.init({
      key: 'A',
      max: 3,
      dataExpire: 10000,
    });

    let tempList = archive.getList();
    expect(tempList.length).toBe(0);

    archive.push({ id: 1, name: '111' });
    tempList = archive.getList();
    expect(tempList.length).toBe(1);
    expect(tempList[0].data).toEqual({ id: 1, name: '111' });

    archive.push({ id: 2, name: '222' });
    tempList = archive.getList();
    expect(tempList.length).toBe(2);
    expect(tempList[0].data).toEqual({ id: 1, name: '111' });
    expect(tempList[1].data).toEqual({ id: 2, name: '222' });

    archive.push({ id: 3, name: '333' });
    tempList = archive.getList();
    expect(tempList.length).toBe(3);
    expect(tempList[0].data).toEqual({ id: 1, name: '111' });
    expect(tempList[1].data).toEqual({ id: 2, name: '222' });
    expect(tempList[2].data).toEqual({ id: 3, name: '333' });

    archive.push({ id: 4, name: '444' });
    tempList = archive.getList();
    expect(tempList.length).toBe(3);
    expect(tempList[0].data).toEqual({ id: 2, name: '222' });
    expect(tempList[1].data).toEqual({ id: 3, name: '333' });
    expect(tempList[2].data).toEqual({ id: 4, name: '444' });
  });

  it('unshift 하면 앞에서 부터 추가 되어야 하고, max 를 넘어서면 가장 뒤의 원소가 제거 되어야 합니다.', () => {
    archive.init({
      key: 'A',
      max: 3,
      dataExpire: 10000,
    });

    let tempList = archive.getList();
    expect(tempList.length).toBe(0);

    archive.unshift({ id: 1, name: '111' });
    tempList = archive.getList();
    expect(tempList.length).toBe(1);
    expect(tempList[0].data).toEqual({ id: 1, name: '111' });

    archive.unshift({ id: 2, name: '222' });
    tempList = archive.getList();
    expect(tempList.length).toBe(2);
    expect(tempList[0].data).toEqual({ id: 2, name: '222' });
    expect(tempList[1].data).toEqual({ id: 1, name: '111' });

    archive.unshift({ id: 3, name: '333' });
    tempList = archive.getList();
    expect(tempList.length).toBe(3);
    expect(tempList[0].data).toEqual({ id: 3, name: '333' });
    expect(tempList[1].data).toEqual({ id: 2, name: '222' });
    expect(tempList[2].data).toEqual({ id: 1, name: '111' });

    archive.unshift({ id: 4, name: '444' });
    tempList = archive.getList();
    expect(tempList.length).toBe(3);
    expect(tempList[0].data).toEqual({ id: 4, name: '444' });
    expect(tempList[1].data).toEqual({ id: 3, name: '333' });
    expect(tempList[2].data).toEqual({ id: 2, name: '222' });
  });

  it('값이 추가된 후 dataExpire 시간 만큼 지난 후에는 값이 제거된 상태여야 합니다.', () => {
    archive.init({
      key: 'A',
      max: 3,
      dataExpire: 50,
    });
    archive.nowTime = jest.fn(() => 0);
    archive.push({ id: 1, name: '111' });

    let tempList = archive.getList();
    expect(tempList.length).toBe(1);
    expect(tempList[0].data).toEqual({ id: 1, name: '111' });

    archive.nowTime = jest.fn(() => 30);
    archive.push({ id: 2, name: '222' });
    tempList = archive.getList();
    expect(tempList.length).toBe(2);
    expect(tempList[0].data).toEqual({ id: 1, name: '111' });
    expect(tempList[1].data).toEqual({ id: 2, name: '222' });

    archive.nowTime = jest.fn(() => 60);
    archive.push({ id: 3, name: '333' });
    tempList = archive.getList();
    expect(tempList.length).toBe(2);
    expect(tempList[0].data).toEqual({ id: 2, name: '222' });
    expect(tempList[1].data).toEqual({ id: 3, name: '333' });

    archive.nowTime = jest.fn(() => 110);
    tempList = archive.getList();
    expect(tempList.length).toBe(0);
  });

  it('ArchiveExistProcessType 이 IGNORE 인 경우 동일한 값을 추가하려는 경우로 판단되면 추가 동작은 무시되어야 합니다.', () => {
    archive.init({
      key: 'A',
      max: 5,
      dataExpire: 50,
      existProcessType: ArchiveExistProcessType.IGNORE,
      findExist: (item, list) => {
        return list.findIndex((listItem) => item.id === listItem.data.id);
      },
    });
    let tempList = archive.getList();
    expect(tempList.length).toBe(0);

    archive.push({ id: 1, name: '111' });
    archive.push({ id: 2, name: '222' });
    archive.push({ id: 3, name: '333' });

    tempList = archive.getList();
    expect(tempList.length).toBe(3);
    expect(tempList[0].data).toEqual({ id: 1, name: '111' });
    expect(tempList[1].data).toEqual({ id: 2, name: '222' });
    expect(tempList[2].data).toEqual({ id: 3, name: '333' });

    archive.push({ id: 1, name: '111-무시됨' });
    tempList = archive.getList();
    expect(tempList.length).toBe(3);
    expect(tempList[0].data).toEqual({ id: 1, name: '111' });
    expect(tempList[1].data).toEqual({ id: 2, name: '222' });
    expect(tempList[2].data).toEqual({ id: 3, name: '333' });

    archive.push({ id: 2, name: '222-무시됨' });
    tempList = archive.getList();
    expect(tempList.length).toBe(3);
    expect(tempList[0].data).toEqual({ id: 1, name: '111' });
    expect(tempList[1].data).toEqual({ id: 2, name: '222' });
    expect(tempList[2].data).toEqual({ id: 3, name: '333' });

    archive.push({ id: 3, name: '333-무시됨' });
    tempList = archive.getList();
    expect(tempList.length).toBe(3);
    expect(tempList[0].data).toEqual({ id: 1, name: '111' });
    expect(tempList[1].data).toEqual({ id: 2, name: '222' });
    expect(tempList[2].data).toEqual({ id: 3, name: '333' });

    archive.push({ id: 4, name: '444' });
    tempList = archive.getList();
    expect(tempList.length).toBe(4);
    expect(tempList[0].data).toEqual({ id: 1, name: '111' });
    expect(tempList[1].data).toEqual({ id: 2, name: '222' });
    expect(tempList[2].data).toEqual({ id: 3, name: '333' });
    expect(tempList[3].data).toEqual({ id: 4, name: '444' });
  });

  it('ArchiveExistProcessType 이 UPDATE 인 경우 동일한 값을 추가하려는 경우로 판단되면 expire 시간은 갱신되고, push 한 위치로 index 가 이동 되어야 합니다.', () => {
    archive.init({
      key: 'A',
      max: 5,
      dataExpire: 50,
      existProcessType: ArchiveExistProcessType.UPDATE,
      findExist: (item, list) => {
        return list.findIndex((listItem) => item.id === listItem.data.id);
      },
    });

    let tempList = archive.getList();
    expect(tempList.length).toBe(0);

    archive.nowTime = jest.fn(() => 0);
    archive.push({ id: 1, name: '111' });
    archive.push({ id: 2, name: '222' });
    archive.push({ id: 3, name: '333' });

    tempList = archive.getList();
    expect(tempList.length).toBe(3);
    expect(tempList[0].data).toEqual({ id: 1, name: '111' });
    expect(tempList[1].data).toEqual({ id: 2, name: '222' });
    expect(tempList[2].data).toEqual({ id: 3, name: '333' });

    archive.nowTime = jest.fn(() => 10);
    archive.push({ id: 1, name: '111-업데이트' });
    tempList = archive.getList();
    expect(tempList.length).toBe(3);
    expect(tempList[0].data).toEqual({ id: 2, name: '222' });
    expect(tempList[1].data).toEqual({ id: 3, name: '333' });
    expect(tempList[2].data).toEqual({ id: 1, name: '111-업데이트' });
    expect(tempList[0].expireAt < tempList[2].expireAt).toBe(true);

    archive.nowTime = jest.fn(() => 20);
    archive.push({ id: 3, name: '333-업데이트' });
    tempList = archive.getList();
    expect(tempList.length).toBe(3);
    expect(tempList[0].data).toEqual({ id: 2, name: '222' });
    expect(tempList[1].data).toEqual({ id: 1, name: '111-업데이트' });
    expect(tempList[2].data).toEqual({ id: 3, name: '333-업데이트' });
    expect(tempList[0].expireAt < tempList[2].expireAt).toBe(true);

    archive.nowTime = jest.fn(() => 30);
    archive.push({ id: 4, name: '444' });
    tempList = archive.getList();
    expect(tempList.length).toBe(4);
    expect(tempList[0].data).toEqual({ id: 2, name: '222' });
    expect(tempList[1].data).toEqual({ id: 1, name: '111-업데이트' });
    expect(tempList[2].data).toEqual({ id: 3, name: '333-업데이트' });
    expect(tempList[3].data).toEqual({ id: 4, name: '444' });
  });

  it('ArchiveExistProcessType 이 UPDATE 인 경우 동일한 값을 추가하려는 경우로 판단되면 expire 시간은 갱신되고, unshift 한 위치로 index 가 이동 되어야 합니다.', () => {
    archive.init({
      key: 'A',
      max: 5,
      dataExpire: 50,
      existProcessType: ArchiveExistProcessType.UPDATE,
      findExist: (item, list) => {
        return list.findIndex((listItem) => item.id === listItem.data.id);
      },
    });

    let tempList = archive.getList();
    expect(tempList.length).toBe(0);

    archive.nowTime = jest.fn(() => 0);
    archive.unshift({ id: 1, name: '111' });
    archive.unshift({ id: 2, name: '222' });
    archive.unshift({ id: 3, name: '333' });

    tempList = archive.getList();
    expect(tempList.length).toBe(3);
    expect(tempList[0].data).toEqual({ id: 3, name: '333' });
    expect(tempList[1].data).toEqual({ id: 2, name: '222' });
    expect(tempList[2].data).toEqual({ id: 1, name: '111' });

    archive.nowTime = jest.fn(() => 10);
    archive.unshift({ id: 1, name: '111-업데이트' });
    tempList = archive.getList();
    expect(tempList.length).toBe(3);
    expect(tempList[0].data).toEqual({ id: 1, name: '111-업데이트' });
    expect(tempList[1].data).toEqual({ id: 3, name: '333' });
    expect(tempList[2].data).toEqual({ id: 2, name: '222' });
    expect(tempList[2].expireAt < tempList[0].expireAt).toBe(true);

    archive.nowTime = jest.fn(() => 20);
    archive.unshift({ id: 3, name: '333-업데이트' });
    tempList = archive.getList();
    expect(tempList.length).toBe(3);
    expect(tempList[0].data).toEqual({ id: 3, name: '333-업데이트' });
    expect(tempList[1].data).toEqual({ id: 1, name: '111-업데이트' });
    expect(tempList[2].data).toEqual({ id: 2, name: '222' });
    expect(tempList[2].expireAt < tempList[0].expireAt).toBe(true);

    archive.nowTime = jest.fn(() => 30);
    archive.unshift({ id: 4, name: '444' });
    tempList = archive.getList();
    expect(tempList.length).toBe(4);
    expect(tempList[0].data).toEqual({ id: 4, name: '444' });
    expect(tempList[1].data).toEqual({ id: 3, name: '333-업데이트' });
    expect(tempList[2].data).toEqual({ id: 1, name: '111-업데이트' });
    expect(tempList[3].data).toEqual({ id: 2, name: '222' });
  });

  it('removeByIndex 로 지정한 index 의 원소는 제거되어야 합니다.', () => {
    archive.init({
      key: 'A',
      max: 10,
      dataExpire: 50,
    });
    archive.push({ id: 1, name: '111' });
    archive.push({ id: 2, name: '222' });
    archive.push({ id: 3, name: '333' });
    archive.push({ id: 4, name: '444' });
    archive.push({ id: 5, name: '555' });

    let tempList = archive.getList();
    expect(tempList.length).toBe(5);
    expect(tempList[0].data).toEqual({ id: 1, name: '111' });
    expect(tempList[1].data).toEqual({ id: 2, name: '222' });
    expect(tempList[2].data).toEqual({ id: 3, name: '333' });
    expect(tempList[3].data).toEqual({ id: 4, name: '444' });
    expect(tempList[4].data).toEqual({ id: 5, name: '555' });

    archive.removeByIndex(0);
    tempList = archive.getList();
    expect(tempList.length).toBe(4);
    expect(tempList[0].data).toEqual({ id: 2, name: '222' });
    expect(tempList[1].data).toEqual({ id: 3, name: '333' });
    expect(tempList[2].data).toEqual({ id: 4, name: '444' });
    expect(tempList[3].data).toEqual({ id: 5, name: '555' });

    archive.removeByIndex(1);
    tempList = archive.getList();
    expect(tempList.length).toBe(3);
    expect(tempList[0].data).toEqual({ id: 2, name: '222' });
    expect(tempList[1].data).toEqual({ id: 4, name: '444' });
    expect(tempList[2].data).toEqual({ id: 5, name: '555' });
  });

  it('removeByIndex 로 지정한 index 가 존재하는 index 보다 큰 경우 가장 뒤의 원소가 제거 되어야 합니다.', () => {
    archive.init({
      key: 'A',
      max: 10,
      dataExpire: 50,
    });
    archive.push({ id: 1, name: '111' });
    archive.push({ id: 2, name: '222' });
    archive.push({ id: 3, name: '333' });

    archive.removeByIndex(999);
    const tempList = archive.getList();
    expect(tempList.length).toBe(2);
    expect(tempList[0].data).toEqual({ id: 1, name: '111' });
    expect(tempList[1].data).toEqual({ id: 2, name: '222' });
  });

  it('removeByIndex 로 지정한 index 가 0 보다 작거나 index 로 판단할 수 없는 경우 제거되는건 없어야 합니다.', () => {
    archive.init({
      key: 'A',
      max: 10,
      dataExpire: 50,
    });
    archive.push({ id: 1, name: '111' });
    archive.push({ id: 2, name: '222' });
    archive.push({ id: 3, name: '333' });

    let tempList = archive.getList();

    archive.removeByIndex(-1);
    tempList = archive.getList();
    expect(tempList.length).toBe(3);
    expect(tempList[0].data).toEqual({ id: 1, name: '111' });
    expect(tempList[1].data).toEqual({ id: 2, name: '222' });
    expect(tempList[2].data).toEqual({ id: 3, name: '333' });

    archive.removeByIndex(null);
    tempList = archive.getList();
    expect(tempList.length).toBe(3);
    expect(tempList[0].data).toEqual({ id: 1, name: '111' });
    expect(tempList[1].data).toEqual({ id: 2, name: '222' });
    expect(tempList[2].data).toEqual({ id: 3, name: '333' });

    archive.removeByIndex(undefined);
    tempList = archive.getList();
    expect(tempList.length).toBe(3);
    expect(tempList[0].data).toEqual({ id: 1, name: '111' });
    expect(tempList[1].data).toEqual({ id: 2, name: '222' });
    expect(tempList[2].data).toEqual({ id: 3, name: '333' });
  });

  it('clear 시 해당 key 의 값은 제거 되어야 합니다.', () => {
    archive.init({
      key: 'A',
      max: 3,
      dataExpire: 50,
    });

    let tempList = archive.getList();
    archive.push({ id: 1, name: '111' });
    archive.push({ id: 2, name: '222' });
    archive.push({ id: 3, name: '333' });

    tempList = archive.getList();
    expect(archive.getList().length).toBe(3);

    archive.clear();
    tempList = archive.getList();
    expect(tempList.length).toBe(0);

    archive.push({ id: 1, name: '111' });
    tempList = archive.getList();
    expect(tempList.length).toBe(1);
    expect(tempList[0].data).toEqual({ id: 1, name: '111' });

    archive.clear();
    tempList = archive.getList();
    expect(tempList.length).toBe(0);
  });
});
