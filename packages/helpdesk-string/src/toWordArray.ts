/**
 * 소스 문자열을 단어 단위로 분리
 * @param text 소스 문자열
 * @example
 * console.log(toWordArray("hello foo bar")); // ["hello", "foo", "bar"]
 */
export const toWordArray = (text: string) => {
  const refine = [];
  const strReg = /\s*\S*/g;
  let word = strReg.exec(text)[0].trim();
  while (word) {
    refine.push(word);
    word = strReg.exec(text)[0].trim();
    if (word === '') break;
  }
  return refine;
};
