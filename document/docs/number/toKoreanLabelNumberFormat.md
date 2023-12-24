# toKoreanLabelNumberFormat

숫자를 한글/한국식 표기로 반환합니다.

```ts
toKoreanLabelNumberFormat(소스, {
  [unitSpace = true]: 단위별 띄어쓰기 여부
})
```

```ts
toKoreanLabelNumberFormat(0); // ''
toKoreanLabelNumberFormat(123); // '123'
toKoreanLabelNumberFormat(1234); // '1,234'
toKoreanLabelNumberFormat(12345); // '1만 2,345'
toKoreanLabelNumberFormat(20000); // '2만'
toKoreanLabelNumberFormat(5830000); // '583만'
toKoreanLabelNumberFormat(132000000); // '1억 3,200만'
toKoreanLabelNumberFormat(103200000); // '1억 320만'
toKoreanLabelNumberFormat(203290200); // '2억 329만 200'
toKoreanLabelNumberFormat(213291200); // '2억 1,329만 1,200'
toKoreanLabelNumberFormat(302003000); // '3억 200만 3,000'
toKoreanLabelNumberFormat(302000001); // '3억 200만 1'
```

```ts
toKoreanLabelNumberFormat(0, { unitSpace: false }); // ''
toKoreanLabelNumberFormat(123, { unitSpace: false }); // '123'
toKoreanLabelNumberFormat(1234, { unitSpace: false }); // '1,234'
toKoreanLabelNumberFormat(12345, { unitSpace: false }); // '1만2,345'
toKoreanLabelNumberFormat(20000, { unitSpace: false }); // '2만'
toKoreanLabelNumberFormat(5830000, { unitSpace: false }); // '583만'
toKoreanLabelNumberFormat(132000000, { unitSpace: false }); // '1억3,200만'
toKoreanLabelNumberFormat(103200000, { unitSpace: false }); // '1억320만'
toKoreanLabelNumberFormat(203290200, { unitSpace: false }); // '2억329만200'
toKoreanLabelNumberFormat(213291200, { unitSpace: false }); // '2억1,329만1,200'
toKoreanLabelNumberFormat(302003000, { unitSpace: false }); // '3억200만3,000'
toKoreanLabelNumberFormat(302000001, { unitSpace: false }); // '3억200만1'
```