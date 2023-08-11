/**
 * allow 이상 연속되는 줄바꿈을 제거
 * @param text
 * @param [allow=2]
 * @example
 * console.log(collapseMutiline("hello\n\n\n\nfoo", 2)); // "hello\n\nfoo"
 * console.log(collapseMutiline("hello\n\n\n\nfoo", 3)); // "hello\n\n\nfoo"
 */
export const collapseMultiline = (text: string, allow = 2): string => {
  const separate = text.split(/\n/);
  const refine: string[] = [];
  const testReg = /[^\s]/;
  let cnt = 0;
  separate.forEach((str: string) => {
    const isBreak = !testReg.test(str);
    if (isBreak) {
      cnt++;
      if (cnt < allow) {
        refine.push(str);
      }
    } else {
      refine.push(str);
      cnt = 0;
    }
  });
  return refine.join('\n');
};
