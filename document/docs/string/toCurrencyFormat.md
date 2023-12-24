# toCurrencyFormat

지정된 숫자를 가격 포맷 옵션으로 변환합니다.

```ts
toCurrencyFormat(가격 문자 | 숫자,{
  [fixed = 0]: 소숫점 까지 표시되어야 하는 경우 지정된 숫자만큼 표시
  [replaceChar = ',']: 가격 표시 중간에 들어갈 대치 문자
});
```

```ts
toCurrencyFormat(-0.1); // '-0.1'
toCurrencyFormat(-1.1); // '-1.1'
toCurrencyFormat(-1.12); // '-1.12'
toCurrencyFormat(-1.123); // '-1.123'
toCurrencyFormat(-1.1234); // '-1.1234'
toCurrencyFormat(-1.12345); // '-1.12345'
toCurrencyFormat(-12.1234); // '-12.1234'
toCurrencyFormat(-123.1234); // '-123.1234'
toCurrencyFormat(-1234.1234); // '-1,234.1234'
toCurrencyFormat(-12341234.1234); // '-12,341,234.1234'

toCurrencyFormat(0); // '0'
toCurrencyFormat(1234); // '1,234'
toCurrencyFormat(1234567); // '1,234,567'
toCurrencyFormat(0.9999); // '0.9999'
toCurrencyFormat(1234.1234); // '1,234.1234'
```

```ts
const options: CurrencyPriceOption = { fixed: 2 };
toCurrencyFormat(0, options); // '0.00'
toCurrencyFormat(1234, options); // '1,234.00'
toCurrencyFormat(1234567, options); // '1,234,567.00'
toCurrencyFormat(99.9999, options); // '99.99'
toCurrencyFormat(0.9999, options); // '0.99'
toCurrencyFormat(1234.1234, options); // '1,234.12'
```