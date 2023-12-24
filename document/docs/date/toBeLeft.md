# toBeLeft

fromAt, toAt 두 시간의 차이를 각 시간 단위(초, 분, 시간, 일)로 반환합니다.

```ts
toBeLeft(fromAt, toAt);
```

```ts
toBeLeft(
  new Date('2023-12-25 9:00:00').getTime(), 
  new Date('2023-12-25 11:00:00').getTime()
); // { second: 7200, minute: 120, hour: 2 , day: 0 }

toBeLeft(
  new Date('2023-12-25 10:00:00').getTime(), 
  new Date('2023-12-27 12:00:00').getTime()
); // { second: 180000, minute: 3000, hour: 50, day: 2 }
```
