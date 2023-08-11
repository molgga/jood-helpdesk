/**
 * @ignore
 */
let _domParser: DOMParser = null;

/**
 * 엔티티 코드로 변형된 html 을 태그 문자열로 변경
 * (예: &lt;&nbsp;1&amp;2&nbsp;&gt; -> < 1&2 >)
 * @param source 소스 문자열
 * @example
 * console.log(refineSafeHtmlText("&lt;div&gt;1&lt;/div&gt;")); // "<div>1</div>"
 */
export const refineSafeHtmlText = (source: string): string => {
  let refine = '';
  try {
    if (!_domParser) _domParser = new DOMParser();
    const dom = _domParser.parseFromString(source, 'text/html');
    refine = dom.body.textContent;
  } catch (err) {
    refine = source;
  }
  console.log(112, refine);
  return refine;
};
