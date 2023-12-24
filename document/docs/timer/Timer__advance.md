<script setup>
import GuideQuick1 from './components/GuideQuick1.vue'
</script>

# Timer

 - UI 에서 시간 관련 표시를 하게 되는 경우가 종종 있습니다.
 - javascript 의 setTimeout, setInterval 은 정확한 실행 시간을 보장하지 않습니다.
 - Timer 역시 정확한 실행 시점을 보장하긴 어려우나, (어느정도)초/분 단위 실행 시간이 보장 되도록 setTimeout 을 보완합니다.
 - **Timer 는 시간을 출력하기 위함이 아니라 정해진 간격 마다 알림을 주기 위한 용도로 만들어 졌습니다.**

## 데모

SecondTimer 와 MinuteTimer 의 간단한 사용예 입니다.

<GuideQuick1 />

💡 **아래 코드를 살펴보기 전 참고하세요.**

<!-- prettier-ignore -->
- SecondTimer 와 MinuteTimer 의 차이는 실행 간격의 차이가 있습니다. SecondTimer 는 1초, MinuteTimer 는 1분의 간격으로 실행 됩니다.
- Timer 는 시간을 출력하기 위함이 아니라 정해진 간격 마다 알림을 주기 위한 용도로 만들어 졌습니다.
- 브라우저의 비활성화(sleep) 상태와 같이 타이머의 업데이트가 화면에 표시가 된다는것을 보장하기 어려운 경우가 있습니다. SecondTimer 의 경우
  실행 간격이 짧기 때문에 금새 화면이 업데이트 되어 문제를 알아차리기 어렵지만, MinuteTimer 의 경우 실행 간격이 길기 때문에 비활성 상태에 빠져있던 경우 화면에 업데이트 되기까지 MinuteTimer 의 실행 간격인 최대 1분이 걸릴 수 있습니다. 이 점을 보완하기 위해 Visibility API 와 같이 화면이 활성화 되는 시점을 할 수 있다면 직접 업데이트를 해주는것도 좋습니다.

```vue
<template>
  <div>
    <div class="times">
      <dl class="time">
        <dt>SecondTimer</dt>
        <dd>{{ viewState.labelSecondTimer }}</dd>
      </dl>
      <dl class="time">
        <dt>MinuteTimer</dt>
        <dd>{{ viewState.labelMinuteTimer }}</dd>
      </dl>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted, reactive } from 'vue';
import { SecondTimer, MinuteTimer } from '@jood/helpdesk-timer';
import { Subscription } from 'rxjs';

export default defineComponent({
  setup() {
    const serverTime = Date.now();
    const secondTimer = new SecondTimer();
    const minuteTimer = new MinuteTimer();
    const listener = new Subscription();

    const state = reactive({
      secondDate: null,
      minuteDate: null,
    });

    const viewState = computed(() => {
      const { secondDate, minuteDate } = state;
      const labelSecondTimer = secondDate?.toLocaleString() || '';
      const labelMinuteTimer = minuteDate?.toLocaleString() || '';
      return {
        labelSecondTimer,
        labelMinuteTimer,
      };
    });

    const onSecondUpdated = () => {
      updateSecondTimer();
    };

    const onMinuteUpdated = () => {
      updateMinuteTimer();
    };

    const updateSecondTimer = () => {
      const timeAt = serverTime + secondTimer.getExecuteGap();
      state.secondDate = new Date(timeAt);
    };

    const updateMinuteTimer = () => {
      const timeAt = serverTime + minuteTimer.getExecuteGap();
      state.minuteDate = new Date(timeAt);
    };

    onMounted(() => {
      listener.add(secondTimer.observe().subscribe(onSecondUpdated));
      secondTimer.start();

      listener.add(minuteTimer.observe().subscribe(onMinuteUpdated));
      minuteTimer.start();

      updateSecondTimer();
      updateMinuteTimer();
    });

    onUnmounted(() => {
      secondTimer.stop();
      minuteTimer.stop();
      listener.unsubscribe();
    });

    return {
      state,
      viewState,
    };
  },
});
</script>
```

시간 출력을 업데이트 하는 부분을 살펴보세요. `getExecuteGap` 은 Timer 가 start 된 후 지나간 시간 입니다.

```typescript
const updateSecondTimer = () => {
  const timeAt = serverTime + secondTimer.getExecuteGap();
  state.secondDate = new Date(timeAt);
};
```

<!-- prettier-ignore -->
클라이언트 시간만으로는 PC/디바이스 시간 설정에 영향을 받는 문제로 
(데모에서는 Date.now() 를 사용했지만) serverTime 을 내려받은 시간을 기준으로 카운트 다운을 한다거나 지나간 시간을 표시하는 사례는 종종 있습니다. 이런 경우 `getExecuteGap` 를 사용하면 됩니다. timezone 과 같은 문제를 다루는건 사용자의 몫 입니다.

