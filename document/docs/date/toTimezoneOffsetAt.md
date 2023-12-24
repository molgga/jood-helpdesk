# toTimezoneOffsetAt

지정된 시간(at)의 지정된 타임존(offset)을 더해 offset 타임존으로 Date 를 반환한다.

```ts
toTimezoneOffsetAt(시간, [계산될 타임존 = 540])
```

```ts
toTimezoneOffsetAt(new Date().getTime(), 540).toLocaleString()); // 타임존이 다른 위치(예: 런던)여도 한국 시간으로 출력된다.
```

