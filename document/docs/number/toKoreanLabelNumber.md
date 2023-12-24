# toKoreanLabelNumber

숫자를 한글/한국식 표기로 반환합니다.

```ts
toKoreanLabelNumber(소스, {
  [labelType = 'korean']: 숫자 표기 방식 // 'korean'(한글) | 'number'(숫자)
});
```

```ts
toKoreanLabelNumber(0); // ''
toKoreanLabelNumber(123); // '일백이십삼'
toKoreanLabelNumber(1234); // '일천이백삼십사'
toKoreanLabelNumber(12345); // '일만이천삼백사십오'
toKoreanLabelNumber(20000); // '이만'
toKoreanLabelNumber(5830000); // '오백팔십삼만'
toKoreanLabelNumber(132000000); // '일억삼천이백만'
toKoreanLabelNumber(302003000); // '삼억이백만삼천'
```

```ts
toKoreanLabelNumber(123, { labelType: 'number' }); // '1백2십3'
toKoreanLabelNumber(1234, { labelType: 'number' }); // '1천2백3십4'
toKoreanLabelNumber(12345, { labelType: 'number' }); // '1만2천3백4십5'
toKoreanLabelNumber(20000, { labelType: 'number' }); // '2만'
toKoreanLabelNumber(5830000, { labelType: 'number' }); // '5백8십3만'
toKoreanLabelNumber(132000000, { labelType: 'number' }); // '1억3천2백만'
toKoreanLabelNumber(302003000, { labelType: 'number' }); // '3억2백만3천'
```