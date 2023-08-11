/**
 * 소스 문자열의 맨 앞 문자를 대문자로 변경
 * @param text 소스 문자열
 * @example
 * console.log(toUpperCaseHead("abc")); // "Abc"
 */
export const toUpperCaseHead = (text: string) => {
  const head = text.substring(0, 1).toUpperCase();
  const tail = text.substring(1, text.length);
  return `${head}${tail}`;
};
