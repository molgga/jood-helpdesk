import { infinitePagesDeleter } from '../infinite-pages-deleter';

describe('infinitePagesDeleter', () => {
  it('compare 로 일치하는 아이템은 list 에서 제거되어야 합니다.', () => {
    const queryInfiniteData = {
      pages: [
        {
          list: [
            { id: 1, memo: 'm1' },
            { id: 2, memo: 'm2' },
            { id: 3, memo: 'm3' },
          ],
        },
        {
          list: [
            { id: 11, memo: 'm11' },
            { id: 12, memo: 'm12' },
            { id: 13, memo: 'm13' },
          ],
        },
      ],
    };

    infinitePagesDeleter<{ id: number; memo?: string }>({
      pagesListKey: 'list', // pages 가 오브젝트 일 때 사용할 list key 명 (pages 를 배열로 다루는 형태면 안넣으면 됨)
      onCompare: (item) => item.id === 1, // pages 를 순환하며 호출한다. true 로 반환하는 경우 해당 updater 가 실행된다.
    })(queryInfiniteData);

    expect(queryInfiniteData.pages[0].list[0].memo).toBe('m2');
    expect(queryInfiniteData.pages[0].list[1].memo).toBe('m3');
    expect(queryInfiniteData.pages[0].list.length).toBe(2);
    expect(queryInfiniteData.pages[1].list[0].memo).toBe('m11');
    expect(queryInfiniteData.pages[1].list[1].memo).toBe('m12');
    expect(queryInfiniteData.pages[1].list[2].memo).toBe('m13');
    expect(queryInfiniteData.pages[1].list.length).toBe(3);
  });

  it('pagesListKey 로 지정한 key 명으로 대상을 찾아야 합니다.', () => {
    const queryInfiniteData = {
      pages: [
        {
          products: [
            { id: 1, memo: 'm1' },
            { id: 2, memo: 'm2' },
            { id: 3, memo: 'm3' },
          ],
        },
        {
          products: [
            { id: 11, memo: 'm11' },
            { id: 12, memo: 'm12' },
            { id: 13, memo: 'm13' },
          ],
        },
      ],
    };

    infinitePagesDeleter<{ id: number; memo?: string }>({
      pagesListKey: 'products',
      onCompare: (item) => item.id === 12,
    })(queryInfiniteData);

    expect(queryInfiniteData.pages[0].products[0].memo).toBe('m1');
    expect(queryInfiniteData.pages[0].products[1].memo).toBe('m2');
    expect(queryInfiniteData.pages[0].products[2].memo).toBe('m3');
    expect(queryInfiniteData.pages[0].products.length).toBe(3);
    expect(queryInfiniteData.pages[1].products[0].memo).toBe('m11');
    expect(queryInfiniteData.pages[1].products[1].memo).toBe('m13');
    expect(queryInfiniteData.pages[1].products.length).toBe(2);
  });

  it('pagesListKey 값을 지정하지 않으면 infinite pages 데이터를 배열로 다뤄야 하고 동작에 차이가 없어야 합니다.', () => {
    const queryInfiniteData = {
      pages: [
        [
          { id: 1, memo: 'm1' },
          { id: 2, memo: 'm2' },
          { id: 3, memo: 'm3' },
        ],
        [
          { id: 11, memo: 'm11' },
          { id: 12, memo: 'm12' },
          { id: 13, memo: 'm13' },
        ],
      ],
    };

    infinitePagesDeleter<{ id: number; memo?: string }>({
      onCompare: (item) => item.id === 1,
    })(queryInfiniteData);

    expect(queryInfiniteData.pages[0][0].memo).toBe('m2');
    expect(queryInfiniteData.pages[0][1].memo).toBe('m3');
    expect(queryInfiniteData.pages[0].length).toBe(2);
    expect(queryInfiniteData.pages[1][0].memo).toBe('m11');
    expect(queryInfiniteData.pages[1][1].memo).toBe('m12');
    expect(queryInfiniteData.pages[1][2].memo).toBe('m13');
    expect(queryInfiniteData.pages[1].length).toBe(3);
  });

  it('onSettled 는 완료시 호출되며, 삭제된 부가 정보를 보내줘야 합니다.', () => {
    const queryInfiniteData = {
      pages: [
        [
          { id: 1, memo: 'm1' },
          { id: 2, memo: 'm2' },
          { id: 3, memo: 'm3' },
        ],
        [
          { id: 11, memo: 'm11' },
          { id: 12, memo: 'm12' },
          { id: 13, memo: 'm13' },
        ],
      ],
    };

    let deletedCount = 0;
    let deletedList: { id: number; memo?: string }[] = [];
    infinitePagesDeleter<{ id: number; memo?: string }>({
      onCompare: (item) => item.id === 1,
      onSettled: (vo) => {
        deletedCount = vo.deletedCount;
        deletedList = vo.deletedList;
      },
    })(queryInfiniteData);

    expect(deletedCount).toBe(1);
    expect(deletedList.length).toBe(1);
    expect(deletedList[0].id).toBe(1);
  });

  it('onSettled 는 ifMatchedBreak false 지정시 삭제된 정보의 갯수가 맞아야 합니다.', () => {
    const queryInfiniteData = {
      pages: [
        [
          { id: 1, memo: 'm1' },
          { id: 2, memo: 'm2' },
          { id: 3, memo: 'm3' },
        ],
        [
          { id: 1, memo: 'm11' },
          { id: 2, memo: 'm22' },
          { id: 3, memo: 'm33' },
        ],
      ],
    };

    let deletedCount = 0;
    let deletedList: { id: number; memo?: string }[] = [];
    infinitePagesDeleter<{ id: number; memo?: string }>({
      ifMatchedBreak: false,
      onCompare: (item) => item.id === 1,
      onSettled: (vo) => {
        deletedCount = vo.deletedCount;
        deletedList = vo.deletedList;
      },
    })(queryInfiniteData);

    expect(deletedCount).toBe(2);
    expect(deletedList.length).toBe(2);
    expect(deletedList[0].id).toBe(1);
    expect(deletedList[0].memo).toBe('m1');
    expect(deletedList[1].id).toBe(1);
    expect(deletedList[1].memo).toBe('m11');
  });
});
