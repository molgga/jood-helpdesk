import { characterToken } from '../characterToken';

describe('helpdesk-module: hangul-core: characterToken', () => {
  it('초/중/종성이 분리된 1차원 배열로 반환 되어야 합니다.', () => {
    expect(characterToken('뚱')).toEqual(['ㄸ', 'ㅜ', 'ㅇ']);
  });

  it('종성이 없는 경우 초/중성만 분리된 길이 2의 배열로 반환 되어야 합니다.', () => {
    expect(characterToken('뚜')).toEqual(['ㄸ', 'ㅜ']);
  });

  it('한글이 아닌 문자는 문자 그대로 배열로 반환 되어야 합니다.', () => {
    expect(characterToken('A')).toEqual(['A']);
    expect(characterToken('!')).toEqual(['!']);
    expect(characterToken('9')).toEqual(['9']);
    expect(characterToken(' ')).toEqual([' ']);
  });

  test('characterToken - "밟"', () => {
    expect(characterToken('밟')).toEqual(['ㅂ', 'ㅏ', 'ㄼ']);
  });

  test('characterToken - "깡"', () => {
    expect(characterToken('깡')).toEqual(['ㄲ', 'ㅏ', 'ㅇ']);
  });

  test('characterToken - "A"', () => {
    expect(characterToken('A')).toEqual(['A']);
  });

  test('characterToken - "!"', () => {
    expect(characterToken('!')).toEqual(['!']);
  });

  test('characterToken - " "', () => {
    expect(characterToken(' ')).toEqual([' ']);
  });

  test('characterToken - "ㅂ"', () => {
    expect(characterToken('ㅂ')).toEqual(['ㅂ']);
  });

  test('characterToken - "ㅠ"', () => {
    expect(characterToken('ㅠ')).toEqual(['ㅠ']);
  });

  test('characterToken - "😎"', () => {
    expect(characterToken('😎')).toEqual(['😎']);
  });
});
