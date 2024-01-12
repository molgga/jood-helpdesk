# hangul-core

## typingToken

초/중/종성을 타이핑 순서로 분리한다.

```ts
typingToken('푸'); // [ "ㅍ", "푸" ]   
typingToken('밟'); // [ "ㅂ", "바", "발", "밟" ]
typingToken('꿍'); // [ "ㄲ", "꾸", "꿍" ]
typingToken('의'); // [ "ㅇ", "으", "의" ]
typingToken('왜'); // [ "ㅇ", "오", "왜" ]
```
