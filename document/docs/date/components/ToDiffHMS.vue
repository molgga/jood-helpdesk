<template>
  <div class="to-diff-hms">
    <div class="print-state">
      <div class="aside">
        <el-button @click="onExecute">👆 오늘 자정까지 남은 시간은?</el-button>
      </div>
      <div class="spacer"></div>
      <div class="bside">
        <div class="result">{{ viewState.result }}</div>
      </div>
    </div>
    <div class="real-state">
      {{ state }}
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive } from 'vue';
import { toDiffHMS, toLeadingTime } from '@jood/helpdesk-date';

export default defineComponent({
  setup() {
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);

    const state = reactive({
      hour: 0,
      minute: 0,
      second: 0,
    });

    const viewState = computed(() => {
      const { hour, minute, second } = state;
      const result = `${toLeadingTime(hour)}시 ${toLeadingTime(minute)}분 ${toLeadingTime(second)}초`;
      return {
        result,
      };
    });

    const onExecute = () => {
      execute();
    };

    const execute = () => {
      const { hour, minute, second } = toDiffHMS(Date.now(), midnight.getTime());
      state.hour = hour;
      state.minute = minute;
      state.second = second;
    };

    onMounted(() => {
      execute();
    });

    return {
      state,
      viewState,
      onExecute,
    };
  },
});
</script>

<style lang="scss" scoped>
.to-diff-hms {
  padding: 15px 20px;
  color: var(--vp-code-block-color);
  border-radius: 10px;
  background: var(--vp-code-block-bg);
  .print-state {
    display: flex;
    align-items: center;
    .spacer {
      flex: 1;
    }
    .result {
      font-weight: bold;
      font-size: 1.4rem;
    }
  }
  .real-state {
    display: block;
    padding-top: 12px;
    text-align: right;
  }
}
</style>
