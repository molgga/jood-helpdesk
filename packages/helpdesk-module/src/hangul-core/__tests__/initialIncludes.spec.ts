import {initialIncludes} from '../initialIncludes';

describe('helpdesk-module: hangul-core: initialIncludes', () => {

  test('initialIncludes', () => {
    expect(initialIncludes('가나다 123 밟다. AB꿍C!', 'ㄱㄴㄷ')).toBe(true);
    expect(initialIncludes('가나다 123 밟다. AB꿍C!', 'ㄱㄴ')).toBe(true);
    expect(initialIncludes('가나다 123 밟다. AB꿍C!', 'ㄴㄷ')).toBe(true);
    expect(initialIncludes('가나다 123 밟다. AB꿍C!', 'ㅂㄷㄲ')).toBe(true);
  });

  test('initialIncludes', () => {
    expect(initialIncludes('가나다 123 밟다. AB꿍C!', 'ㄱㄴㄷㄹ')).toBe(false);
    expect(initialIncludes('가나다 123 밟다. AB꿍C!', 'ㅇㄴㅇ')).toBe(false);
    expect(initialIncludes('가나다 123 밟다. AB꿍C!', 'ㅂㄷ ㄲ')).toBe(false);
  });
});