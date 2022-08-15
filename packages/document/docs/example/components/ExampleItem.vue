<template>
  <div>
    <div class="times">
      <dl class="time">
        <dt>SecondTimer</dt>
        <dd>{{ viewState.labelSecond }}</dd>
      </dl>
      <dl class="time">
        <dt>SecondTimer - korea</dt>
        <dd>{{ viewState.labelSecondKr }}</dd>
      </dl>
      <dl class="time">
        <dt>MinuteTimer</dt>
        <dd>{{ viewState.labelMinute }}</dd>
      </dl>
      <dl class="time">
        <dt>MinuteTimer - korea</dt>
        <dd>{{ viewState.labelMinuteKr }}</dd>
      </dl>
    </div>
    <div>
      <button @click="onForceMinuteTimerExecute">onForceMinuteTimerExecute</button>
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
    const serverTime = Date.now(); // - 1000 * 60 * 60 * 2;
    let startTimezone = new Date().getTimezoneOffset();

    const state = reactive({
      secondDate: null,
      minuteDate: null,
      secondDateKr: null,
      minuteDateKr: null,
    });

    const viewState = computed(() => {
      const { secondDate, secondDateKr, minuteDate, minuteDateKr } = state;
      const labelSecond = secondDate?.toLocaleString() || '';
      const labelMinute = minuteDate?.toLocaleString() || '';
      const labelSecondKr = secondDateKr?.toLocaleString() || '';
      const labelMinuteKr = minuteDateKr?.toLocaleString() || '';
      return {
        labelSecond,
        labelMinute,
        labelSecondKr,
        labelMinuteKr,
      };
    });

    const onSecondUpdated = () => {
      updateSecondTimer();
    };

    const onMinuteUpdated = () => {
      updateMinuteTimer();
    };

    const getTimezoneForKor = (offset: number) => {
      return (offset + 540) * 1000 * 60;
    };

    const updateSecondTimer = () => {
      const timeAt = serverTime + secondTimer.getExecuteGap();
      const currentTimezone = new Date().getTimezoneOffset();
      const timezoneForKr = getTimezoneForKor(currentTimezone);
      if (startTimezone !== currentTimezone) {
        startTimezone = currentTimezone;
        secondTimer.stop();
        secondTimer.start();
        minuteTimer.stop();
        minuteTimer.start();
        minuteTimer.executeTimout();
      }
      state.secondDate = new Date(timeAt);
      state.secondDateKr = new Date(timeAt + timezoneForKr);
    };

    const updateMinuteTimer = () => {
      const timeAt = serverTime + minuteTimer.getExecuteGap();
      const currentTimezone = new Date().getTimezoneOffset();
      const timezoneForKr = getTimezoneForKor(currentTimezone);
      state.minuteDate = new Date(timeAt);
      state.minuteDateKr = new Date(timeAt + timezoneForKr);
    };

    const onForceMinuteTimerExecute = () => {
      minuteTimer.executeTimout();
      onMinuteUpdated();
    };

    onMounted(() => {
      listener.add(secondTimer.observe().subscribe(onSecondUpdated));
      secondTimer.start();

      listener.add(minuteTimer.observe().subscribe(onMinuteUpdated));
      minuteTimer.start();

      // state.secondDate = new Date(serverTime + secondTimer.getExecuteGap());
      // state.minuteDate = new Date(serverTime + minuteTimer.getExecuteGap());
      updateSecondTimer();
      updateMinuteTimer();

      console.log(new Date().toLocaleString());
    });

    onUnmounted(() => {
      listener.unsubscribe();
    });
    return {
      state,
      viewState,
      onForceMinuteTimerExecute,
    };
  },
});
</script>

<style lang="scss" scoped>
.times {
  .time {
    margin-top: 10px;
    padding: 10px 20px;
    font-weight: bold;
    color: #222;
    border-radius: 10px;
    border: 1px solid #f0f0f0;
    background: #f9f9f9;
    &:first-child {
      margin-top: 0;
    }
    dt {
      margin: 0;
      font-size: 0.8rem;
    }
    dd {
      margin: 0;
      padding-top: 5px;
      font-size: 1.4rem;
    }
  }
}
</style>
