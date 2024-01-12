import {  characterMatrix } from '../characterMatrix';

describe('helpdesk-module: hangul-core: characterMatrix', () => {
  it('초/중/종성이 분리된 2차원 배열로 반환 되어야 합니다.', () => {
    expect(characterMatrix('우리집 Cat 방울이~')).toEqual([
      ['ㅇ', 'ㅜ'],
      ['ㄹ', 'ㅣ'],
      ['ㅈ', 'ㅣ', 'ㅂ'],
      [' '],
      ['C'],
      ['a'],
      ['t'],
      [' '],
      ['ㅂ', 'ㅏ', 'ㅇ'],
      ['ㅇ', 'ㅜ', 'ㄹ'],
      ['ㅇ', 'ㅣ'],
      ['~'],
    ]);
  });
});