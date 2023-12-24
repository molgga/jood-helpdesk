<script setup>
import ToDiffHMS from './components/ToDiffHMS.vue'
</script>

# toDiffHMS - 두개의 시간 차이

💡 `09시 12분 22초 남았습니다`, `이제 곧 종료 됩니다`

```typescript{2}
toDiffHMS(대상시간, 비교시간);
toDiffHMS(Date.now(), 1660295996286); // { hour: 11, minute: 2, second: 33 }
```

## 예제

<ToDiffHMS />

아래 코드는 위 예제의 일부 입니다. 버튼을 클릭해서 `execute` 를 실행해 보세요.

```typescript
const midnight = new Date();
midnight.setHours(24, 0, 0, 0);

const execute = () => {
  const { hour, minute, second } = toDiffHMS(Date.now(), midnight.getTime());
  // ...
};
```
