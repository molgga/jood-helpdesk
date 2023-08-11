/**
 * 지정된 소스 문자열이 기준 수를 넘어가면 마지막을 잘라내고 문자를 삽입.
 * (예: abcdefghijklmn -> abcd...)
 * @param text 소스 문자열
 * @param max 잘라낼 기준 수
 * @param alternative 잘라낸 문자열 마지막에 들어갈 문자열
 * @example
 console.log(toEllipsisEnd("https://developers.google.com/web/fundamentals/architecture/app-shell", 10)); // "https://de..."
 console.log(toEllipsisEnd("01234567890", 5)); // "01234..."
 console.log(toEllipsisEnd("01234567890", 10)); // "01234567890"
 console.log(toEllipsisEnd("01234567890", 11)); // "01234567890"
 */
export const toEllipsisEnd = (text: string, max = 50, alternative = '...'): string => {
  if (!text) return text;
  let refine = text.toString();
  const strLen = refine.length;
  if (max < strLen) {
    refine = `${refine.substring(0, max)}${alternative}`;
  }
  return refine;
};
