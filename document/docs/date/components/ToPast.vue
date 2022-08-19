<template>
  <div class="to-past">
    <div class="now-label">{{ state.nowLabel }}</div>
    <div class="sample-list">
      <div v-for="(data, index) in state.resultList" :key="index" class="sample-item">
        <div class="target">{{ data.target }}</div>
        <div class="spacer"></div>
        <div class="result">{{ data.result }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import { toPast } from '@jood/helpdesk-date';
import { createSampleDates } from './to-past-samples';

export default defineComponent({
  props: {
    optionSample: {
      type: Number,
      default: 1,
    },
    sampleOption: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const sampleDates = createSampleDates();

    const state = reactive({
      nowAt: 0,
      nowLabel: '',
      resultList: [],
    });

    const onExecute = () => {
      execute();
    };

    const execute = () => {
      const now = new Date();
      state.nowAt = now.getTime();
      state.nowLabel = now.toLocaleString();
      state.resultList = [];
      sampleDates.forEach((target) => {
        state.resultList.push({
          target: target?.toLocaleString() || 'null',
          result: toPast(state.nowAt, target?.getTime(), props.sampleOption),
        });
      });
    };

    onMounted(() => {
      execute();
    });

    return {
      state,
      onExecute,
    };
  },
});
</script>

<style lang="scss" scoped>
.to-past {
  padding: 30px 12px;
  border-radius: 10px;
  border: 1px solid rgb(238, 238, 238);
  .now-label {
    display: block;
    padding: 0 12px;
    font-size: 1.4rem;
    font-weight: bold;
  }
  .sample-list {
    display: block;
    margin-top: 10px;
    padding: 0 12px;
  }
  .sample-item {
    display: flex;
    align-items: center;
    padding: 12px 0;
    font-size: 1rem;
    border-top: 1px solid rgb(238, 238, 238);
    &:first-child {
      border-top-width: 0;
    }
    .spacer {
      flex: 1;
    }
    .result {
      font-size: 1.4rem;
      font-weight: bold;
    }
  }
}
</style>
