<template>
  <div class="scroll-exam">
    <div ref="refScrollElement" class="scroll-wrap">
      <div v-for="i in 5" :key="i" class="box"></div>
    </div>
    <div class="scroll-state">{{ JSON.stringify(state, null, 4) }}</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref } from 'vue';
import { DomScroll } from '@jood/helpdesk-module/browser-scroll';
import { Subscription } from 'rxjs';

const refScrollElement = ref<HTMLElement>(null);
const scroller = new DomScroll();
const listener = new Subscription();

const state = reactive({
  scrollTop: 0,
  scrollLeft: 0,
  directionY: 0,
  directionX: 0,
  directionLooseY: 0,
  directionLooseX: 0,
  countEndY: 0,
  countEndX: 0,
});

onMounted(() => {
  const observeScroll = scroller.observeScroll().subscribe((scrollState) => {
    // x, y 스크롤 발생하면
    state.scrollTop = scrollState.scrollTop;
    state.scrollLeft = scrollState.scrollLeft;
  });

  const observeDirectionY = scroller.observeDirectionY().subscribe((scrollState) => {
    // 스크롤의 Y 방향이 바뀌면
    state.directionY = scrollState.directionY;
  });

  const observeDirectionLooseY = scroller.observeDirectionLooseY().subscribe((scrollState) => {
    // 스크롤의 Y 방향이 바뀌면 알리는데, 바뀐 방향으로 setDirectionLooseGapY 에 지정한 값 만큼 이동했을 때에만 알림
    state.directionLooseY = scrollState.directionY;
  });

  const observeEndY = scroller.observeEndY().subscribe((scrollState) => {
    // 스크롤이 Y 끝에 도달할 때
    state.countEndY++;
  });

  const observeDirectionX = scroller.observeDirectionX().subscribe((scrollState) => {
    state.directionX = scrollState.directionX;
  });

  const observeDirectionLooseX = scroller.observeDirectionLooseX().subscribe((scrollState) => {
    state.directionLooseX = scrollState.directionX;
  });

  const observeEndX = scroller.observeEndX().subscribe((scrollState) => {
    state.countEndX++;
  });

  listener.add(observeScroll);

  // Y 축
  listener.add(observeDirectionY);
  listener.add(observeDirectionLooseY);
  listener.add(observeEndY);

  // X 축
  listener.add(observeDirectionX);
  listener.add(observeDirectionLooseX);
  listener.add(observeEndX);

  scroller.setElement(refScrollElement.value);
  scroller.init();
});

onUnmounted(() => {
  listener.unsubscribe();
  scroller.destroy();
});
</script>

<style lang="scss" scoped>
.scroll-exam {
  display: flex;
}
.scroll-wrap {
  flex: 1;
  border: 1px dashed #999;
  height: 300px;
  overflow: auto;
  .box {
    margin: 10px;
    padding: 100px 10px;
    width: 600px;
    text-align: center;
    border: 1px dashed #ddd;
  }
}
.scroll-state {
  flex: 1;
  padding: 10px 20px;
  white-space: pre;
}
</style>
