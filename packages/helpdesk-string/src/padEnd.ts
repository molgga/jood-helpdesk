/**
 * 문자열 우측을 지정된 길이로 채웁니다.
 * 문자열의 길이가 지정된 길이 보다 길다면 우측 부터 잘라냅니다.
 * @param text 소스 문자열
 * @param addText 추가될 문자열
 * @param expectCount 합쳐진 문자열 수
 * @example
  console.log(padEnd("123", "0", 5)); // "12300"
  console.log(padEnd("hello", "0", 1)); // "o"
  console.log(padEnd("hello", "0", 2)); // "lo"
  console.log(padEnd("hello", "0", 3)); // "llo"
  console.log(padEnd("hello", "0", 4)); // "ello"
  console.log(padEnd("hello", "0", 5)); // "hello"
  console.log(padEnd("hello", "0", 6)); // "hello0"
 */
export const padEnd = (
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
      refine = `${text}${adds.join('')}`;
      if (expectCount < refine.length) {
        refine = refine.substring(0, expectCount);
      }
    } else {
      refine = refine.substring(len - expectCount, len);
    }
  } else {
    refine = text;
  }
  return refine;
};
