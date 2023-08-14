import { refineSafeHtmlText } from '../refineSafeHtmlText';

describe('helpdesk-string: refineSafeHtmlText', () => {
  test('refineSafeHtmlText', () => {
    const test1 = `&lt;div&gt;1&lt;/div&gt;`;
    const test2 = `&lt;div&gt;1&lt;span&gt;2&lt;/span&gt;&lt;/div&gt;`;
    const test3 = `&lt;div attr1="1"&gt;1&nbsp;&amp;&nbsp;2&lt;/div&gt;`;
    const test4 = `<div>1&amp;2</div>`;
    expect(refineSafeHtmlText(test1)).toEqual('<div>1</div>');
    expect(refineSafeHtmlText(test2)).toEqual('<div>1<span>2</span></div>');
    expect(refineSafeHtmlText(test3)).toEqual('<div attr1="1">1 & 2</div>');
    expect(refineSafeHtmlText(test4)).toEqual('1&2');
  });
});
