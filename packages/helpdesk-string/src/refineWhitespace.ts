/**
 * u+2800, &#10240 을 일반 문자 공백으로 치환
 * @param {string} text 소스 문자열
 * @example
 * console.log(refineWhitespace("&#10240;\u2800")); // "  "
 */
export const refineWhitespace = (text: string): string => {
  return text.replace(/(\u2800|&#10240;)/g, ' ');
};
