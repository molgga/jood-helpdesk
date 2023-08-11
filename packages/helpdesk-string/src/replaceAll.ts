/**
 * 일치하는 모든 문자를 변경
 * @param text 소스 문자열
 * @param find 검색 문자열
 * @param replace 치환 문자열
 * @example
 * console.log(replaceAll("a-b-c", "-", "@")); // "a@b@c"
 */
export const replaceAll = (text: string, find: string, replace = '') => {
  if (!text) return text;
  if (!find) return text;
  return text.split(find).join(replace);
};
