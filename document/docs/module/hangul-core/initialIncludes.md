# hangul-core

## initialIncludes

한글 초성 포함 여부를 확인합니다.
- 한글 초성이 아닌 문자는 제거된 상태로 비교됩니다.

```ts
initialIncludes('가나다 123 밟다. AB꿍C!', 'ㄱㄴㄷ'); // true
initialIncludes('가나다 123 밟다. AB꿍C!', 'ㄱㄴ'); // true
initialIncludes('가나다 123 밟다. AB꿍C!', 'ㄴㄷ'); // true
initialIncludes('가나다 123 밟다. AB꿍C!', 'ㅂㄷㄲ'); // true
initialIncludes('가나다 123 밟다. AB꿍C!', 'ㄱㄴㄷㅂㄷㄲ'); // true)

initialIncludes('가나다 123 밟다. AB꿍C!', 'ㄱㄴㄷㄹ'); // false
initialIncludes('가나다 123 밟다. AB꿍C!', 'ㅇㄴㅇ'); // false
initialIncludes('가나다 123 밟다. AB꿍C!', 'ㅂㄷ ㄲ'); // false
```