import { escape } from '../escape';

describe('utils/string/escape', () => {
  test('escape', () => {
    const test1 = `<div>abcd</div>`;
    const test2 = `<div>ab&cd</div>`;
    expect(escape(test1)).toEqual('&lt;div&gt;abcd&lt;/div&gt;');
    expect(escape(test2)).toEqual('&lt;div&gt;ab&amp;cd&lt;/div&gt;');
  });
});
