/**
 * 지정된 소스 문자열이 기준 수를 넘어가면 좌, 우로 잘라내고 사이에 대체 문자를 삽입.
 * @param text 소스 문자열
 * @param max 잘라낼 기준 수
 * @param alternative 잘라낸 문자열 사이에 들어갈 문자열
 * @example
 console.log(toEllipsisMiddle("https://developers.google.com/web/fundamentals/architecture/app-shell", 30)); // "https://develop...cture/app-shell"
 console.log(toEllipsisMiddle("01234567890", 6)); // "012...789"
 console.log(toEllipsisMiddle("01234567890", 10)); // "0123456789"
 console.log(toEllipsisMiddle("01234567890", 11)); // "0123456789"
 */
export const toEllipsisMiddle = (text: string, max = 50, alternative = '...'): string => {
  if (!text) return text;
  let refine = text.toString();
  const strLen = refine.length;
  if (max < strLen) {
    const half = Math.floor(max / 2);
    const strStart = refine.substring(0, half);
    const strEnd = refine.substring(strLen - half, strLen);
    refine = `${strStart}${alternative}${strEnd}`;
  }
  return refine;
};
