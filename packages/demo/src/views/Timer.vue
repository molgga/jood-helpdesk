<template>
  <div>
    <div class="time">
      <dl>
        <dt>SecondTimer</dt>
        <dd>{{ viewState.labelSecond }}</dd>
      </dl>
    </div>
    <div class="time">
      <dl>
        <dt>MinuteTimer</dt>
        <dd>{{ viewState.labelMinute }}</dd>
      </dl>
      <div>
        <button @click="onForceMinuteTimerExecute">onForceMinuteTimerExecute</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onUnmounted, reactive } from 'vue';
import { SecondTimer, MinuteTimer } from '@jood/helpdesk-timer';

export default defineComponent({
  setup() {
    const state = reactive({
      secondDate: null, //new Date(),
      minuteDate: null, //new Date(),
    });

    const viewState = computed(() => {
      const { secondDate, minuteDate } = state;
      const labelSecond = secondDate.toLocaleString();
      const labelMinute = minuteDate.toLocaleString();
      return {
        labelSecond,
        labelMinute,
      };
    });

    const serverTime = Date.now(); // - 1000 * 60 * 60 * 2;

    const onSecondUpdated = () => {
      console.log('SeconTimer::now:', new Date().toLocaleString());
      console.log('SeconTimer::gap:', new Date(serverTime + secondTimer.getExecuteGap()).toLocaleString());
      state.secondDate = new Date(serverTime + secondTimer.getExecuteGap());
    };

    const onMinuteUpdated = () => {
      console.log(' ################################ ');
      console.log('MinuteTimer::now:', new Date().toLocaleString());
      console.log('MinuteTimer::gap:', new Date(serverTime + minuteTimer.getExecuteGap()).toLocaleString());
      console.log(' ================================ ');
      state.minuteDate = new Date(serverTime + minuteTimer.getExecuteGap());
    };

    const onForceMinuteTimerExecute = () => {
      minuteTimer.executeTimout();
      onMinuteUpdated();
    };

    const secondTimer = new SecondTimer();
    const secondListener = secondTimer.observe().subscribe(onSecondUpdated);
    secondTimer.start();

    const minuteTimer = new MinuteTimer();
    const minuteListener = minuteTimer.observe().subscribe(onMinuteUpdated);
    minuteTimer.start();

    state.secondDate = new Date(serverTime + secondTimer.getExecuteGap());
    state.minuteDate = new Date(serverTime + minuteTimer.getExecuteGap());

    console.log(new Date().toLocaleString());

    onUnmounted(() => {
      secondListener.unsubscribe();
      minuteListener.unsubscribe();
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
.time {
  padding: 20px;
  font-weight: bold;
  color: #222;
  dt {
    padding: 0;
    margin: 0;
    font-size: 20px;
  }
  dd {
    padding: 0;
    margin: 0;
    font-size: 40px;
  }
}
</style>
