import { isDate } from './isDate';

/**
 * at 을 "YYYY-MM-DD" 로 반환
 * ex: 1687317234578 -> "2023-06-21"
 */
export const toYyyymmddByAt = (at: number | string, options?: { defaultValue?: any; partition?: string; isMonth?: boolean }): string => {
  const { defaultValue = '', partition = '-', isMonth = false } = options || {};
  const dateAt = Number(at) || null;
  const date = 0 < dateAt && new Date(dateAt);
  if (isDate(date)) {
    const yyyy = date.getFullYear().toString();
    const mm = (date.getMonth() + 1).toString().padStart(2, '0');
    const dd = date.getDate().toString().padStart(2, '0');
    return isMonth ? `${yyyy}${partition}${mm}` : `${yyyy}${partition}${mm}${partition}${dd}`;
  }
  return defaultValue;
};
