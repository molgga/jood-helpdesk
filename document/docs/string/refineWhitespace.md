# refineWhitespace

공백 코드 u+2800, &#10240 을 일반 공백 문자로 치환합니다.

```ts
refineWhitespace(소스 문자열);
```

```ts
refineWhitespace("&#10240;\u2800"); // "  "
```