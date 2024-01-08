# toStringsByComma

콤마(,) 문자열을 문자열 배열로 반환합니다.

```ts
toStringsByComma('1,2,3'); // ['1','2','3']
toStringsByComma('1,,3'); // ['1','3']
toStringsByComma('1,foo,bar'); // ['1','foo', 'bar']
toStringsByComma('1,null,3'); // ['1','null','3']
toStringsByComma('1,true,3'); // ['1','true','3']
toStringsByComma('1,true,false'); // ['1','true','false']
```