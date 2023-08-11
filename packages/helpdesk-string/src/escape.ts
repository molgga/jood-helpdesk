/**
 * html 문자열의 엔티티 처리
 * @param text 소스(html) 문자열
 * @example
 * console.log(escape("<div>ab&cd</div>")); // "&lt;div&gt;ab&amp;cd&lt;/div&gt;"
 */
export const escape = (text: string): string => {
  return text.replace(/[<>&"']/g, function (match) {
    switch (match) {
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '&':
        return '&amp;';
      case '"':
        return '&quot;';
      case "'":
        return '&#039;';
      default:
        return match;
    }
  });
};
/**
 * html 디코드 처리
 * @param text 소스(html) 문자열
 * @example
 */
export const unescape = (text: string): string => {
  return text.replace(/&lt;|&gt;|&amp;|&quot;|&#039;/g, function (match) {
    switch (match) {
      case '&lt;':
        return '<';
      case '&gt;':
        return '>';
      case '&amp;':
        return '&';
      case '&quot;':
        return '"';
      case '&#039;':
        return "'";
      default:
        return match;
    }
  });
};
