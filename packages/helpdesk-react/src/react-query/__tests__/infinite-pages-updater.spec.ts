import { infinitePagesUpdater } from '../infinite-pages-updater';

describe('infinitePagesUpdater', () => {
  it('onCompare 로 일치하는 아이템을 찾고, 일치하는 아이템이 있는 경우 onUpdater 에서 반환된 값으로 업데이트 되어야 합니다.', () => {
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

    infinitePagesUpdater<{ id: number; memo?: string }>({
      pagesListKey: 'list', // pages 가 오브젝트 일 때 사용할 list key 명 (pages 를 배열로 다루는 형태면 안넣으면 됨)
      onCompare: (item) => item.id === 1, // pages 를 순환하며 호출한다. true 로 반환하는 경우 해당 updater 가 실행된다.
      onUpdater: (item) => ({ ...item, memo: 'foo' }), // 매칭된 게 있다면 실행된다. 반환값으로 해당 요소를 업데이트 한다.
    })(queryInfiniteData);

    expect(queryInfiniteData.pages[0].list[0].memo).toBe('foo');
    expect(queryInfiniteData.pages[0].list[1].memo).toBe('m2');
    expect(queryInfiniteData.pages[0].list[2].memo).toBe('m3');
    expect(queryInfiniteData.pages[1].list[0].memo).toBe('m11');
    expect(queryInfiniteData.pages[1].list[1].memo).toBe('m12');
    expect(queryInfiniteData.pages[1].list[2].memo).toBe('m13');
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

    infinitePagesUpdater<{ id: number; memo?: string }>({
      pagesListKey: 'products',
      onCompare: (item) => item.id === 12,
      onUpdater: (item) => ({ ...item, memo: 'foo' }),
    })(queryInfiniteData);

    expect(queryInfiniteData.pages[0].products[0].memo).toBe('m1');
    expect(queryInfiniteData.pages[0].products[1].memo).toBe('m2');
    expect(queryInfiniteData.pages[0].products[2].memo).toBe('m3');
    expect(queryInfiniteData.pages[1].products[0].memo).toBe('m11');
    expect(queryInfiniteData.pages[1].products[1].memo).toBe('foo');
    expect(queryInfiniteData.pages[1].products[2].memo).toBe('m13');
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

    infinitePagesUpdater<{ id: number; memo?: string }>({
      onCompare: (item) => item.id === 1,
      onUpdater: (item) => ({ ...item, memo: 'foo' }),
    })(queryInfiniteData);

    expect(queryInfiniteData.pages[0][0].memo).toBe('foo');
    expect(queryInfiniteData.pages[0][1].memo).toBe('m2');
    expect(queryInfiniteData.pages[0][2].memo).toBe('m3');
    expect(queryInfiniteData.pages[1][0].memo).toBe('m11');
    expect(queryInfiniteData.pages[1][1].memo).toBe('m12');
    expect(queryInfiniteData.pages[1][2].memo).toBe('m13');
  });

  it('ifMatchedBreak 값을 지정하지 않으면 최초 매칭된 데이터만 updater 가 실행되어야 합니다.', () => {
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
            { id: 1, memo: 'm11' },
            { id: 2, memo: 'm12' },
            { id: 3, memo: 'm13' },
          ],
        },
      ],
    };

    infinitePagesUpdater<{ id: number; memo?: string }>({
      pagesListKey: 'list',
      onCompare: (item) => item.id === 1,
      onUpdater: (item) => ({ ...item, memo: 'foo' }),
    })(queryInfiniteData);

    expect(queryInfiniteData.pages[0].list[0].memo).toBe('foo'); // 업데이트 O
    expect(queryInfiniteData.pages[0].list[1].memo).toBe('m2');
    expect(queryInfiniteData.pages[0].list[2].memo).toBe('m3');
    expect(queryInfiniteData.pages[1].list[0].memo).toBe('m11'); // 업데이트 X // 최초 매칭된 것만 업데이트 되어야한다.
    expect(queryInfiniteData.pages[1].list[1].memo).toBe('m12');
    expect(queryInfiniteData.pages[1].list[2].memo).toBe('m13');
  });

  it('ifMatchedBreak 를 false 로 지정시 일치하는 정보를 모두 찾아야 하고, 일치하는 정보 모두 updater 가 실행되어야 합니다.', () => {
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
            { id: 1, memo: 'm11' },
            { id: 2, memo: 'm12' },
            { id: 3, memo: 'm13' },
          ],
        },
      ],
    };

    infinitePagesUpdater<{ id: number; memo?: string }>({
      pagesListKey: 'list',
      ifMatchedBreak: false,
      onCompare: (item) => item.id === 1,
      onUpdater: (item) => ({ ...item, memo: 'foo' }),
    })(queryInfiniteData);

    expect(queryInfiniteData.pages[0].list[0].memo).toBe('foo'); // 업데이트 O
    expect(queryInfiniteData.pages[0].list[1].memo).toBe('m2');
    expect(queryInfiniteData.pages[0].list[2].memo).toBe('m3');
    expect(queryInfiniteData.pages[1].list[0].memo).toBe('foo'); // 업데이트 O
    expect(queryInfiniteData.pages[1].list[1].memo).toBe('m12');
    expect(queryInfiniteData.pages[1].list[2].memo).toBe('m13');
  });
});
