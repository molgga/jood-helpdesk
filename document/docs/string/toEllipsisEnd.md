# toEllipsisEnd

지정된 소스 문자열이 기준 수를 넘어가면 마지막을 잘라내고 문자열을 삽입합니다.

```ts
toEllipsisEnd(소스 문자열, 잘라낼 기준 수, 잘라낸 문자열 마지막에 들어갈 문자열);
```

```ts
toEllipsisEnd("https://developers.google.com/web/fundamentals/architecture/app-shell", 10); 
// "https://de..."

toEllipsisEnd("01234567890", 5); // "01234..."
toEllipsisEnd("01234567890", 10); // "01234567890"
toEllipsisEnd("01234567890", 11); // "01234567890"
```