/**
 * 소스 문자열의 언더바(_)를 카멜 케이스로 변경
 * @param text 소스 문자열
 * @example
 * console.log(toCamelFromSnake("user_name")); // "userName"
 */
export const toCamelFromSnake = (text: string) => {
  return text.replace(/([_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace('_', '');
  });
};
