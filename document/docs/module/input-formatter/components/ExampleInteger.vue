<template>
  <div>
    <input
      ref="refInput"
      class="my-input"
      inputmode="numeric"
      maxlength="13"
      :value="formatter.getValue()"
      @keydown="formatter.handleKeydown"
      @input="formatter.handleInput"
    />
    <div>{{ state }}</div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, shallowRef } from 'vue';
import { inputFormatterInteger } from '@jood/helpdesk-module/input-formatter';

const refInput = shallowRef<HTMLInputElement>(null);
const state = reactive({
  myValue: '',
});

const formatter = inputFormatterInteger({ max: 1000000 });

onMounted(() => {
  formatter.setElement(refInput.value);
  formatter.setValue(state.myValue);
  formatter.onUpdated((value) => {
    state.myValue = value;
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
