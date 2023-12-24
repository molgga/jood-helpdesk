# MinuteTimer

분 단위 타이머

```ts
const serverTime = Date.now();
const minuteTimer = new MinuteTimer();

// rxjs observer
minuteTimer.observe().subscribe(() => { // 분 단위로 실행됩니다.
  const timeAt = serverTime + minuteTimer.getExecuteGap();
  console.log(new Date(timeAt));
});

minuteTimer.start();
```