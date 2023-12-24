<script setup>
import ToPast from './components/ToPast.vue'
import option1 from './components/to-past-option1.ts';
import option2 from './components/to-past-option2.ts';
</script>

# toPast - 지나간 시간

💡 `방금 전`, `n분 전`, `n일 전`, `2022년 09월 01일`

```typescript{2}
toPastAt(대상시간, 비교시간, 옵션);
toPastAt(Date.now(), 1660295996286); // "방금 전" || "7일전" ...
```

## 예제1

<<< @/date/components/to-past-option1.ts

위 옵션은 이런 의미를 갖습니다.

- `justMax` 는 60초 미만 까지 `justLabel` 로 표시 합니다.
- `minuteMax` 는 3600초(1시간) 미만 까지 `minuteLabel` 로 표시 합니다.
- `dayMax` 는 2592000(30일) 까지 `dayLabel` 로 표시 합니다.
- `dayMax` 를 초과하면 `format` 로 표시 합니다.
- 날짜 형식이 잘못되었다면 `alternative` 로 표시 합니다.
- 지난 시간의 값인 target 시간이 오히려 from 보다 크다면 `justLabel` 로 표시할지, `alternative` 로 표시 할지를 결정합니다.

<ToPast :sampleOption="option1" />

## 예제2

<<< @/date/components/to-past-option2.ts

위 **`예제1`** 과 대상 시간은 같습니다. 옵션에 따라 출력이 어떻게 달라지는지 확인해 보세요.

<ToPast :sampleOption="option2" />
