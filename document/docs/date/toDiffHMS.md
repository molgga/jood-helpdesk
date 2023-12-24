# toDiffHMS

fromAt 이 toAt 까지 얼마나 남았는지 반환합니다.
일자의 차이는 +24시간 으로 계산한다.

```ts
toDiffHMS(fromAt, toAt);
```

```ts
toDiffHMS(
    new Date('2023-12-25 07:32:33').getTime(),
    new Date('2023-12-25 23:59:59').getTime()
); // { hour: 16, minute: 27, second: 26 }

toDiffHMS(
  new Date('2023-12-25 21:59:33').getTime(),
  new Date('2023-12-25 23:59:59').getTime()
); // { hour: 2, minute: 0, second: 26 }

toDiffHMS(
  new Date('2023-12-25 21:59:39').getTime(),
  new Date('2023-12-26 23:59:59').getTime()
); // { hour: 26, minute: 0, second: 20 }
```