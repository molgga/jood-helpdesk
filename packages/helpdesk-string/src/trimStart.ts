/**
 * 시작 공백 제거
 * @param {string} text 소스 문자열
 * @example
 * console.log(trimStart("&#10240; \u2800 a b ")); // "a b "
 */
export const trimStart = (text: string): string => {
  return text.replace(/^(\u2800|&#10240;|\s)+/g, '');
};
