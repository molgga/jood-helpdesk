# isNumber

지정된 소스를 number 로 문제없이 변경이 가능한지 여부를 반환합니다.

```ts
isNumber(소스);
```

```ts
isNumber(0); // true
isNumber(1); // true
isNumber("0"); // true
isNumber("1"); // true
isNumber(" 1 "); // true
isNumber("1e+10"); // true
isNumber(" 1abc "); // false
isNumber("  "); // false
isNumber(true); // false
isNumber(null); // false
isNumber(undefined); // false
isNumber({}); // false
isNumber(Date); // false
isNumber(new Date()); // true
```