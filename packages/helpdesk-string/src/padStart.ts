/**
 * 문자열 좌측을 지정된 길이로 채웁니다.
 * 문자열의 길이가 지정된 길이 보다 길다면 좌측 부터 잘라냅니다.
 * @param text 소스 문자열
 * @param addText 추가될 문자열
 * @param expectCount 최종 문자열 수
 * @example
  console.log(padStart("123", "0", 5)); // "00123"
  console.log(padStart("hello", "0", 1)); // "h"
  console.log(padStart("hello", "0", 2)); // "he"
  console.log(padStart("hello", "0", 3)); // "hel"
  console.log(padStart("hello", "0", 4)); // "hell"
  console.log(padStart("hello", "0", 5)); // "hello"
  console.log(padStart("hello", "0", 6)); // "0hello"
 */
export const padStart = (
  text: string | number,
  addText: string,
  expectCount?: number
): string | number => {
  let refine: any;
  if (!expectCount) {
    return text;
  }
  if (typeof text === 'string' || typeof text === 'number') {
    refine = text.toString();
    const len = refine.length;
    if (len < expectCount) {
      const count = expectCount - len;
      const adds = Array.from(Array(count)).map(() => addText);
      refine = `${adds.join('')}${text}`;
      if (expectCount < refine.length) {
        refine = refine.substring(refine.length - expectCount, refine.length);
      }
    } else {
      refine = refine.substring(0, expectCount);
    }
  } else {
    refine = text;
  }
  return refine;
};
