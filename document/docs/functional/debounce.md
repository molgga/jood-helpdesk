# debounce

제약 시간내에서 발생한 이벤트를 그룹화하여 하나의 이벤트만 발생하도록 합니다.

```ts
const someDebounce = debounce(() => {
  console.log('foo');
}, 1000);

someDebounce();
someDebounce();
someDebounce();
someDebounce();
someDebounce();
someDebounce();
someDebounce();
someDebounce();
someDebounce(); // 'foo' - 1000ms 내에 실행된 모든 콜백은 무시
```