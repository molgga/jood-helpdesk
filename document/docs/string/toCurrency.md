# toCurrency

문자열 포맷팅 방식(toCurrencyFormat) 보다 간결한 방식인 Number.toLocaleString(locale) 를 사용하고, 부동소수로 인해 생기는 문제를 보완합니다.

```ts
toCurrency(숫자, [{ locale: 지역 }]);
```

```ts
toCurrency(12); // '12'
toCurrency(1234); // '1,234'
toCurrency(1234567); // '1,234,567'
toCurrency(0.99); // '0.99'
toCurrency(0.9999); // '0.9999'
toCurrency(1234.999999); // '1,234.999999'
```
