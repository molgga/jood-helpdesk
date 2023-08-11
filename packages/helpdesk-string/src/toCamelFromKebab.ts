/**
 * 소스 문자열의 하이픈(-)을 카멜 케이스로 변경
 * @param text 소스 문자열
 * @example
 * console.log(toCamelFromKebab("user-name")); // "userName"
 */
export const toCamelFromKebab = (text: string) => {
  return text.replace(/([-][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace('-', '');
  });
};
