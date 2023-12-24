# padStart

문자열 좌측을 지정된 길이로 채웁니다. \
문자열의 길이가 지정된 길이 보다 길다면 좌측 부터 잘라냅니다.

```ts
padStart(소스 문자열, 추가될 문자열, 합쳐진 문자열 수);
```

```ts
padStart("123", "0", 5); // "00123"
padStart("hello", "0", 1); // "h"
padStart("hello", "0", 2); // "he"
padStart("hello", "0", 3); // "hel"
padStart("hello", "0", 4); // "hell"
padStart("hello", "0", 5); // "hello"
padStart("hello", "0", 6); // "0hello"
```