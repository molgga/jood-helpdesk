<template>
  <div>
    <div>
      <el-slider v-model="state.range" :min="0" :max="1" :step="0.01" @update:model-value="updateColor" />
    </div>
    <div class="color-hint">
      <div class="aside">#ff0000</div>
      <div class="spacer"></div>
      <div class="bside">#00ff00</div>
    </div>
    <div class="color-bar" :style="styleColorBar"></div>
  </div>
</template>

<script setup lang="ts">
import { inHexRange } from '@jood/helpdesk-color';
import { computed, reactive } from 'vue';

const state = reactive({
  range: 0,
  rgb: [],
});

const styleColorBar = computed(() => {
  const [r = 255, g = 255, b = 255] = state.rgb;
  return { backgroundColor: `rgba(${r}, ${g}, ${b}, 1)` };
});

const updateColor = () => {
  state.rgb = inHexRange('#ff0000', '#00ff00', state.range);
};

updateColor();
</script>

<style lang="scss" scoped>
.color-hint {
  display: flex;
  margin-top: -10px;
  .spacer {
    flex: 1;
  }
}
.color-bar {
  margin-top: 10px;
  height: 10px;
  border-radius: 5px;
}
</style>
