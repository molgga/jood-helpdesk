# padEnd

문자열 우측을 지정된 길이로 채웁니다. \
문자열의 길이가 지정된 길이 보다 길다면 우측 부터 잘라냅니다.

```ts
padEnd(소스 문자열, 추가될 문자열, 합쳐진 문자열 수);
```

```ts
padEnd("123", "0", 5); // "12300"
padEnd("hello", "0", 1); // "o"
padEnd("hello", "0", 2); // "lo"
padEnd("hello", "0", 3); // "llo"
padEnd("hello", "0", 4); // "ello"
padEnd("hello", "0", 5); // "hello"
padEnd("hello", "0", 6); // "hello0"
```