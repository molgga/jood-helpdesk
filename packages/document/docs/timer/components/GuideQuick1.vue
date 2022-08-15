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
    const secondTimer = new SecondTimer();
    const minuteTimer = new MinuteTimer();
    const listener = new Subscription();

    const serverTime = Date.now();
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

<style lang="scss" scoped>
.times {
  margin-top: 10px;
  padding: 5px 20px;
  color: var(--vp-code-block-color);
  border-radius: 10px;
  background: var(--vp-code-block-bg);
  .time {
    display: flex;
    align-items: flex-end;
    margin: 0;
    padding: 20px 0;
    font-weight: bold;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    &:first-child {
      margin-top: 0;
      border-top-width: 0;
    }
    dt {
      flex: 1;
      margin: 0;
      padding: 0;
      font-size: 0.9rem;
    }
    dd {
      margin: 0;
      font-size: 1.4rem;
    }
  }
}
@media screen and (max-width: 540px) {
  .times {
    .time {
      display: block;
    }
    .dt {
      padding-top: 5px;
    }
  }
}
</style>
