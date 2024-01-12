import {initialIncludes} from '../initialIncludes';

describe('helpdesk-module: hangul-core: initialIncludes', () => {

  it('한글 초성이 포함되는 경우 true 를 반환해야 합니다.', () => {
    expect(initialIncludes('가나다 123 밟다. AB꿍C!', 'ㄱㄴㄷ')).toBe(true);
    expect(initialIncludes('가나다 123 밟다. AB꿍C!', 'ㄱㄴ')).toBe(true);
    expect(initialIncludes('가나다 123 밟다. AB꿍C!', 'ㄴㄷ')).toBe(true);
  });

  it('한글 초성이 포함되지 않는 경우 false 를 반환해야 합니다.', () => {
    expect(initialIncludes('가나다 123 밟다. AB꿍C!', 'ㄱㄴㄷㄹ')).toBe(false);
    expect(initialIncludes('가나다 123 밟다. AB꿍C!', 'ㅇㄴㅇ')).toBe(false);
    expect(initialIncludes('가나다 123 밟다. AB꿍C!', 'ㅂㄷ ㄲ')).toBe(false);
  });

  it('한글 초성이 아닌 문자는 제거된 상태로 비교되어야 합니다.', () => {
    expect(initialIncludes('가나다 123 밟다. AB꿍C!', 'ㄱㄴㄷㅂㄷㄲ')).toBe(true);
    expect(initialIncludes('가나다 123 밟다. AB꿍C!', 'ㅂㄷㄲ')).toBe(true);
  });
});