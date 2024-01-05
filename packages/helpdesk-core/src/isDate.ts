/**
 * Date 객체인지 여부 확인
 */
export const isDate = (date: Date) => {
  return date instanceof Date && !isNaN(date as any);
};
