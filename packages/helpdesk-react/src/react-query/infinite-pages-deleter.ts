type PagesWithRecord<T> = { pages: Record<string, T[]>[] };
type PagesWithArray<T> = { pages: T[][] };
type QueryInfiniteData<T = unknown> = PagesWithRecord<T> | PagesWithArray<T>;

interface SettledResult<T = unknown> {
  deletedCount: number;
  deletedList: T[];
}

/**
 * useInfiniteQuery 에서 특정 아이템을 찾고 list 에서 제거한다.
 */
export const infinitePagesDeleter = <T = unknown>(config: {
  onCompare: (item: T) => boolean;
  onSettled?: (result: SettledResult<T>) => void;
  pagesListKey?: string;
  ifMatchedBreak?: boolean;
}) => {
  return (queryInfiniteData: QueryInfiniteData<T>) => {
    const {
      onCompare,
      onSettled,
      pagesListKey,
      ifMatchedBreak = true,
    } = config;
    const queryPages = queryInfiniteData?.pages ?? [];
    const queryPagesLen = queryPages.length;
    let isMatched = false;
    let deletedCount = 0;
    const deletedList: T[] = [];
    for (let i = 0; i < queryPagesLen; i++) {
      const pages = queryPages[i];
      const list = (Array.isArray(pages) ? pages : pages[pagesListKey!]) || [];
      for (let k = 0; k < list.length; k++) {
        isMatched = !!onCompare(list[k]);
        if (isMatched) {
          const deletedItem = list.splice(k, 1);
          if (deletedItem?.length) {
            deletedList.push(deletedItem[0]);
            k -= 1;
            deletedCount += 1;
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
    onSettled?.({
      deletedCount,
      deletedList,
    });
    return queryInfiniteData;
  };
};
