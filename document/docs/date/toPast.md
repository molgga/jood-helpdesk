# toPast

pastAt 이 fromAt 으로 부터 지나간 시간을 지정된 옵션에 따라 반환합니다.

```ts
toPast(fromAt, pastAt, {
  [justMax = 60]: 방금 전으로 표시될 최대 시간(초)
  [justLabel = '방금 전']: '방금 전' 라벨
  [minuteMax = 3600]: 'n분 전' 으로 표시될 최대 시간(초)
  [minuteLabel = '분 전']: '분 전' 라벨
  [hourMax = 86400]: 'n시간 전' 으로 표시될 최대 시간(초)
  [hourLabel = '시간 전']: '시간 전' 라벨
  [dayMax = 2592000]: 'n일 전' 으로 표시될 최대 시간(초)
  [dayLabel = '일 전']: '일 전' 라벨
  [format = 'YYYY-MM-DD hh:mm:ss']: dayMax 도 넘어가는 시간인 경우 표시될 날짜 포맷
  [alternative = 'Unknown']: invalid 할 때 대체 문자
  [overThenJust = true]: 시간이 지나지 않은 경우 '방금 전' 으로 표기할지 여부
})
```

```ts
toPast(now, new Date('2023-12-22 08:09:21').getTime()); // '방금 전'
toPast(now, new Date('2023-12-22 08:00:20').getTime()); // '10분 전'
toPast(now, new Date('2023-12-22 07:10:20').getTime()); // '1시간 전'
toPast(now, new Date('2023-12-21 08:10:21').getTime()); // '23시간 전'
toPast(now, new Date('2023-12-20 08:10:20').getTime()); // '2일 전'
toPast(now, new Date('2023-12-10 08:10:19').getTime(), { format: 'YYYY년 MM월 DD일' }); // '2023년 12월 10일'
```

```ts
const now = new Date('2023-12-22 08:10:20').getTime();
const options = {
  justLabel: '방금',
  minuteLabel: '분',
  hourLabel: '시간',
  dayLabel: '일',
  alternative: '알 수 없음',
};
toPast(now, new Date('2023-12-22 08:09:21').getTime(), options); // '방금'
toPast(now, new Date('2023-12-22 08:00:20').getTime(), options); // '10분'
toPast(now, new Date('2023-12-22 07:10:20').getTime(), options); // '1시간'
toPast(now, new Date('2023-12-21 08:10:21').getTime(), options); // '23시간'
toPast(now, new Date('2023-12-20 08:10:20').getTime(), options); // '2일'
toPast(now, null, options); // '알 수 없음'
```