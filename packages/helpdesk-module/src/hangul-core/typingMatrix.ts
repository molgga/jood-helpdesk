import { typingToken } from './typingToken';

/**
 * 지정된 문자열(sourceStr)을 초/중/종성을 타이핑 순서로 분리한다.
 * @param sourceStr 소스 문자열
 * @returns
 */
export function typingMatrix(sourceStr: string) {
  const arr: string[][] = [];
  [...sourceStr].forEach((char) => {
    arr.push(typingToken(char));
  });
  return arr;
}
