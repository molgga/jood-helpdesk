# SecondTimer

초 단위 타이머

```ts
const serverTime = Date.now();
const secondTimer = new SecondTimer();

// rxjs observer
secondTimer.observe().subscribe(() => { // 초 단위로 실행됩니다.
  const timeAt = serverTime + secondTimer.getExecuteGap();
  console.log(new Date(timeAt));
});

secondTimer.start();

```