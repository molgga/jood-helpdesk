# toNumbersByComma

콤마(,) 숫자 문자열을 배열로 반환합니다.

```ts
toNumbersByComma("1,2,3"); // [1,2,3]
toNumbersByComma('1,2,3'); // [1,2,3]
toNumbersByComma('1,,3'); // [1,3]
toNumbersByComma('1,foo,3'); // [1,3]
toNumbersByComma('1,foo,null'); // [1]
toNumbersByComma(''); // []
toNumbersByComma('null'); // []
```