// prettier-ignore
export const KR_SOURCE_FIRST = Object.freeze(['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ']);

// prettier-ignore
export const KR_SOURCE_MIDDLE = Object.freeze(['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ']);

// prettier-ignore
export const KR_SOURCE_LAST = Object.freeze(['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ']);

// charCodeAt 한글(단어) 범위
export const KR_WORD_START_AT = 44032; // '가'.charCodeAt();
export const KR_WORD_END_AT = 55203; // '힣'.charCodeAt();
export const SIZE_SOURCE_FIRST = KR_SOURCE_FIRST.length; // 19 초성 수
export const SIZE_SOURCE_MIDDLE = KR_SOURCE_MIDDLE.length; // 21 중성 수
export const SIZE_SOURCE_LAST = KR_SOURCE_LAST.length; // 28 종성 수 (종성이 없는(공백) 경우까지 포함)
export const SIZE_COMBINE_TOTAL = SIZE_SOURCE_FIRST * SIZE_SOURCE_MIDDLE * SIZE_SOURCE_LAST; // 11172
export const SIZE_COMBINE_MEDIAL = SIZE_SOURCE_MIDDLE * SIZE_SOURCE_LAST; // 588
