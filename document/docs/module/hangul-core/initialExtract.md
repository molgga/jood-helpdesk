# hangul-core

## initialExtract

한글 초성만 추출합니다.
- 한글 초성이 아닌 문자는 제거됩니다.

```ts
initialExtract('가나다'); // ['ㄱ', 'ㄴ', 'ㄷ']
initialExtract('밟다.'); // ['ㅂ', 'ㄷ']
initialExtract('가나다. Abc! 꽁치'); // ['ㄱ', 'ㄴ', 'ㄷ', 'ㄲ', 'ㅊ']
```
