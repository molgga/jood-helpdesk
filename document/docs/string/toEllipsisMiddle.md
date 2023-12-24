# toEllipsisMiddle

지정된 소스 문자열이 기준 수를 넘어가면 좌, 우로 잘라내고 사이에 대체 문자열을 삽입합니다.

```ts
toEllipsisEnd(소스 문자열, 잘라낼 기준 수, 잘라낸 문자열 사이에 들어갈 문자열);
```

```ts
toEllipsisMiddle("https://developers.google.com/web/fundamentals/architecture/app-shell", 30); 
// "https://develop...cture/app-shell"

toEllipsisMiddle("01234567890", 6); // "012...789"
toEllipsisMiddle("01234567890", 10); // "0123456789"
toEllipsisMiddle("01234567890", 11); // "0123456789"
```