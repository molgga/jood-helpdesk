# throttle

제약 시간내에서는 이벤트를 한번만 발생하도록 합니다.

```ts
const someThrottle = throttle(() => {
  console.log('foo');
}, 1000);

someThrottle();
someThrottle();
someThrottle();
// ...
someThrottle(); // 'foo' - 1000ms 내에는 한번만 발생
// ...
someThrottle(); // 'foo' - 1000ms 내에는 한번만 발생
```