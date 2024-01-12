# hangul-core

## characterToken

초/중/종성을 분리한다.

```ts
characterToken('푸'); // [ "ㅍ", "ㅜ" ]
characterToken('밟'); // [ "ㅂ", "ㅏ", "ㄼ" ]
characterToken('꿍'); // [ "ㄲ", "ㅜ", "ㅇ" ]
characterToken('의'); // [ "ㅇ", "ㅢ" ]
characterToken('왜'); // [ "ㅇ", "ㅙ" ]
```
