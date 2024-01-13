<template>
  <div>
    <input
      class="my-input"
      inputmode="numeric"
      maxlength="13"
      :value="formmater.getValue()"
      @keydown="formmater.handleKeydown"
      @input="formmater.handleInput"
    />
    <div>{{ state }}</div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { inputFormatterDecimal } from '@jood/helpdesk-module/input-formatter';

const state = reactive({
  myValue: '',
});

const formmater = inputFormatterDecimal({ max: 100 });
formmater.setValue(state.myValue);
formmater.onUpdated((value) => {
  state.myValue = value;
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
