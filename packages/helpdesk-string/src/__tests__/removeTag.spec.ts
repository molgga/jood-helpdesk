import { removeTag } from '../removeTag';

describe('helpdesk-string: removeTag', () => {
  test('removeTag', () => {
    /*eslint-disable */ // 줄바꿈 테스트로 lint 제외

    const test1 = `<h2 id="도구_자원">도구 &amp; 자원</h2>`;
    const test2 = `<p><strong>JavaScript</strong> 코드 작성과 디버깅</p>`;
    const test3 = `<div><h1>Complete beginners</h1>
<h2>first steps</h2></div>`;

    expect(removeTag('\t<div>AAA</div>\t\t<br/>BBB', false)).toBe('\tAAA\t\tBBB');
    expect(removeTag('\t<div>AAA</div>\t\t<br/>BBB', true)).toBe('AAABBB');
    expect(removeTag(test1)).toBe('도구 &amp; 자원');
    expect(removeTag(test2)).toBe('JavaScript 코드 작성과 디버깅');
    expect(removeTag(test3)).toBe(`Complete beginners
first steps`);

    /*eslint-enable */
  });
});
