import { typingMatrix } from '../typingMatrix';

describe('helpdesk-module: hangul-core: typingMatrix', () => {
  it('타이핑 순서에 맞게 행렬로 분리 되어야 합니다.', () => {
    expect(typingMatrix('끓이다.')).toEqual([
      ['ㄲ', '끄', '끌', '끓'],
      ['ㅇ', '이'],
      ['ㄷ', '다'],
      ['.'],
    ]);
  });

  test('typingMatrix - "Hello 안녕하세요!"', () => {
    expect(typingMatrix('Hello 안녕하세요!')).toEqual([
      ['H'],
      ['e'],
      ['l'],
      ['l'],
      ['o'],
      [' '],
      ['ㅇ', '아', '안'],
      ['ㄴ', '녀', '녕'],
      ['ㅎ', '하'],
      ['ㅅ', '세'],
      ['ㅇ', '요'],
      ['!'],
    ]);
  });
});
