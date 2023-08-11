/**
 * 끝 공백 제거
 * @param {string} text 소스 문자열
 * @example
 * console.log(trimEnd(" a b &#10240; \u2800")); // " a b"
 */
export const trimEnd = (text: string): string => {
  return text.replace(/(\u2800|&#10240;|\s)+$/g, '');
};
