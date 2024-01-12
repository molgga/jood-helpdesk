import {initialExtract} from '../initialExtract';

describe('helpdesk-module: hangul-core: initialExtract', () => {

  test('initialExtract', () => {
    expect(initialExtract('가나다')).toEqual(['ㄱ', 'ㄴ', 'ㄷ']);
    expect(initialExtract('밟다.')).toEqual(['ㅂ', 'ㄷ']);
    expect(initialExtract('가나다. Abc! 꽁치')).toEqual(['ㄱ', 'ㄴ', 'ㄷ', 'ㄲ', 'ㅊ']);
  });
});