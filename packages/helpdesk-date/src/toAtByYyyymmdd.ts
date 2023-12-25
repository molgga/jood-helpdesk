import { isDate } from './isDate';

/**
 * "YYYY-MM-DD" 를 at 으로 반환
 * ex: "2023-06-21" -> 1687305600000
 */
export const toAtByYyyymmdd = (yyyymmdd: string, options?: { defaultValue?: any }) => {
  const { defaultValue = null } = options || {};
  let safeDate = yyyymmdd || '';
  if (safeDate.length === 19 && safeDate.indexOf(' ') === 10) {
    safeDate = safeDate.split(' ').join('T');
  }
  const date = new Date(safeDate || '');
  const at = isDate(date) ? date.getTime() : null;
  return 0 < at ? at : defaultValue;
};
