# isDate

Date 객체 타입을 확인합니다.

```ts
isDate(new Date()); // true
isDate(new Date('2023-12-31T01:59:33')); // true
isDate(new Date('ABC')); // false
isDate(null); // false
isDate(undefined); // false
```