<template>
  <div>
    <div>
      <input
        ref="refInput"
        class="my-input"
        inputmode="numeric"
        placeholder="0"
        :value="formatter.getValue()"
        @keydown="formatter.handleKeydown"
        @input="formatter.handleInput"
      />
      &nbsp;
      <el-button @click="onPlus(1000)">+1000</el-button>
      <el-button @click="onMinus(-1000)">-1000</el-button>
    </div>
    <div>{{ state }}</div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, shallowRef } from 'vue';
import { inputFormatterKrw } from '@jood/helpdesk-module/input-formatter';

const refInput = shallowRef<HTMLInputElement>(null);
const state = reactive({
  myValue: 0,
});

const formatter = inputFormatterKrw();

const onPlus = (add: number) => {
  const value = (Number(formatter.getValue().replace(/[^0-9]/g, '')) + add).toString();
  formatter.setValue(value);
};

const onMinus = (add: number) => {
  const value = Math.max(0, Number(formatter.getValue().replace(/[^0-9]/g, '')) + add).toString();
  formatter.setValue(value);
};

onMounted(() => {
  formatter.setElement(refInput.value);
  formatter.setValue(state.myValue.toString());
  formatter.onUpdated((value) => {
    state.myValue = formatter.toNumber(value);
  });
});
</script>

<style lang="scss" scoped>
.my-input {
  padding: 0 10px;
  height: 48px;
  font-size: 20px;
  font-weight: 600;
  border: 1px solid #ddd;
  appearance: none;
}
</style>
