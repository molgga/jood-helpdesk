<template>
  <div>
    sizeToCover
    <div class="img-container">
      <img class="img-item" src="./bangw2.png" :style="styleImage" />
    </div>

    <br />
    original
    <img class="img-origin" src="./bangw2.png" />
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';
import { sizeToCover } from '@jood/helpdesk-point';

const { dx, dy, dw, dh } = sizeToCover(920, 1354, 200, 200);
const drawState = reactive({ dx, dy, dw, dh });

const styleImage = computed(() => {
  const { dx, dy, dw, dh } = drawState;
  return {
    top: `${dy}px`,
    left: `${dx}px`,
    width: `${dw}px`,
    height: `${dh}px`,
  };
});
</script>

<style lang="scss" scoped>
.img-container {
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.05);

  .img-item {
    position: absolute;
    top: 0;
    left: 0;
  }
}
.img-origin {
  display: block;
  max-width: 320px;
}
</style>
