import { initialExtract } from '../initialExtract';

describe('helpdesk-module: hangul-core: initialExtract', () => {

  it('한글 초성만 분리되어 배열로 반환되어야 합니다.', () => {
    expect(initialExtract('가나다')).toEqual(['ㄱ', 'ㄴ', 'ㄷ']);
    expect(initialExtract('밟다.')).toEqual(['ㅂ', 'ㄷ']);
  });

  it('한글 초성이 아닌 문자는 제거되어야 합니다.', () => {
    expect(initialExtract('가나다. Abc! 꽁치')).toEqual(['ㄱ', 'ㄴ', 'ㄷ', 'ㄲ', 'ㅊ']);
  });
});