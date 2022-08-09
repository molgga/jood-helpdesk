/**
 * 문자열의 {숫자} 포맷을 치환
 * @param origin 포맷 문자열
 * @param args 치환할 문자들
 * @example
 * toMatchReplace('0123{0}56789', '4'); // '0123456789'
 * toMatchReplace('ab{0}d{1}fg', 'c', 'e'); // 'abcdefg'
 */
export function toMatchReplace(origin: string, ...args: any[]) {
  return origin.replace(/\{(\d+)\}/g, (match, i) => args[i] || '');
}
