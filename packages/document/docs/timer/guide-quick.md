<script setup>
import GuideQuick1 from './components/GuideQuick1.vue'
</script>

# 간단한 사용 방법

javascript 의 setTimeout, setInterval 은 정확한 실행 시간을 보장하지 않습니다. 이미 많이 알려져 있는 부분으로 1초 후 실행으로 명령한다고 해
서 정확히 1초 후에 실행되는게 아닙니다. Timer 역시 마찬가지로 정확한 실행 시점을 보장하긴 어려우나, (어느정도)정확한 시간을 알아내야 하는 상
황을 돕기 위해 만들어졌습니다.

<GuideQuick1 />

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
import { computed, defineComponent, onUnmounted, reactive } from 'vue';
import { SecondTimer, MinuteTimer } from '@jood/helpdesk-timer';

export default defineComponent({
  setup() {
    const serverTime = Date.now();
    const state = reactive({
      secondDate: null,
      minuteDate: null,
    });

    const viewState = computed(() => {
      const { secondDate, minuteDate } = state;
      const labelSecondTimer = secondDate.toLocaleString();
      const labelMinuteTimer = minuteDate.toLocaleString();
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

    const secondTimer = new SecondTimer();
    const secondListener = secondTimer.observe().subscribe(onSecondUpdated);
    secondTimer.start();

    const minuteTimer = new MinuteTimer();
    const minuteListener = minuteTimer.observe().subscribe(onMinuteUpdated);
    minuteTimer.start();

    updateSecondTimer();
    updateMinuteTimer();

    onUnmounted(() => {
      secondTimer.stop();
      minuteTimer.stop();
      secondListener.unsubscribe();
      minuteListener.unsubscribe();
    });

    return {
      state,
      viewState,
    };
  },
});
</script>
```

<!-- prettier-ignore -->
::: warning 
브라우저의 비활성화(sleep) 상태와 같이 타이머의 업데이트가 화면에 표시가 된다는것을 보장하기 어려운 경우가 있습니다.
SecondTimer 의 경우 실행 간격(1초)이 짧기 때문에 금새 화면이 업데이트 되어 문제를 알아차리기 어렵지만, 
MinuteTimer 의 경우 실행 간격(1분)이 길기 때문에 비활성 상태에 빠져있던 경우 화면에 업데이트 되기까지 MinuteTimer 의 실행 간격인 최대 1분이 걸릴 수 있습니다.

<!-- prettier-ignore -->
이 점을 보완하기 위해 Visibility API 와 같이 화면이 활성화 될 때 직접 업데이트를 해주는게 좋습니다.
:::
