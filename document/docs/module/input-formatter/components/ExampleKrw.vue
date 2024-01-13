<template>
  <div>
    <input
      class="my-input"
      inputmode="numeric"
      placeholder="0"
      :value="formmater.getValue()"
      @keydown="formmater.handleKeydown"
      @input="formmater.handleInput"
    />
    <div>{{ state }}</div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { inputFormatterKrw } from '@jood/helpdesk-module/input-formatter';

const state = reactive({
  myPrice: 0,
});

const formmater = inputFormatterKrw();
formmater.setValue(state.myPrice.toString());
formmater.onUpdated((value) => {
  state.myPrice = formmater.toNumber(value);
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
