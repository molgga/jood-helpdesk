import { collapseMultiline } from '../collapseMultiline';

describe('utils/string/collapseMultiline', () => {
  test('collapseMultiline', () => {
    /*eslint-disable */
    expect(
      collapseMultiline(`1


      2`)
    ).toBe(`1

      2`);

    // 한줄 허용
    expect(
      collapseMultiline(
        `1


      2`,
        1
      )
    ).toBe(`1
      2`);
    /*eslint-enable */
  });
});
