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
import { inputFormatterPhone } from '@jood/helpdesk-module/input-formatter';

const state = reactive({
  myPhone: '',
});

const formmater = inputFormatterPhone();
formmater.setValue(state.myPhone);
formmater.onUpdated((value) => {
  state.myPhone = value;
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
