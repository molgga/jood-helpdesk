type PagesWithRecord<T> = { pages: Record<string, T[]>[] };
type PagesWithArray<T> = { pages: T[][] };
type QueryInfiniteData<T = unknown> = PagesWithRecord<T> | PagesWithArray<T>;

/**
 * useInfiniteQuery 에서 특정 아이템을 찾고 수동으로 업데이트 한다.
 */
export const infinitePagesUpdater = <T = unknown>(config: {
  onCompare: (item: T) => boolean;
  onUpdater?: (item: T) => T;
  pagesListKey?: string;
  ifMatchedBreak?: boolean;
}) => {
  return (queryInfiniteData: QueryInfiniteData<T>) => {
    const {
      onCompare,
      onUpdater,
      pagesListKey,
      ifMatchedBreak = true,
    } = config;
    const queryPages = queryInfiniteData?.pages ?? [];
    const queryPagesLen = queryPages.length;
    let isMatched = false;
    for (let i = 0; i < queryPagesLen; i++) {
      const pages = queryPages[i];
      const list = (Array.isArray(pages) ? pages : pages[pagesListKey!]) || [];
      for (let k = 0; k < list.length; k++) {
        isMatched = !!onCompare(list[k]);
        if (isMatched) {
          if (onUpdater) {
            list[k] = onUpdater(list[k]);
          }
          if (ifMatchedBreak) {
            break;
          }
        }
      }
      if (isMatched && ifMatchedBreak) {
        break;
      }
    }
    return queryInfiniteData;
  };
};
