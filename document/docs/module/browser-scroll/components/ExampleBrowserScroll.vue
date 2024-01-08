<template>
  <div>
    <div v-for="i in 5" :key="i" class="box">
      {{ state }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, reactive } from 'vue';
import { BrowserScroll } from '@jood/helpdesk-module/browser-scroll';
import { Subscription } from 'rxjs';

const scroller = new BrowserScroll();
const listener = new Subscription();

const state = reactive({
  scrollTop: 0,
  directionY: 0,
  directionLooseY: 0,
  countEndY: 0,
});

onMounted(() => {
  const observeScroll = scroller.observeScroll().subscribe((scrollState) => {
    // x, y 스크롤 발생하면
    state.scrollTop = scrollState.scrollTop;
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

  const observeDirectionX = scroller.observeDirectionX().subscribe((scrollState) => {});
  const observeDirectionLooseX = scroller.observeDirectionLooseX().subscribe((scrollState) => {});
  const observeEndX = scroller.observeEndX().subscribe((scrollState) => {});

  listener.add(observeScroll);

  // Y 축
  listener.add(observeDirectionY);
  listener.add(observeDirectionLooseY);
  listener.add(observeEndY);

  // X 축
  listener.add(observeDirectionX);
  listener.add(observeDirectionLooseX);
  listener.add(observeEndX);

  scroller.init();
});

onUnmounted(() => {
  listener.unsubscribe();
  scroller.destroy();
});
</script>

<style lang="scss" scoped>
.box {
  margin: 10px;
  padding: 100px 10px;
  text-align: center;
  border: 1px dashed #ddd;
}
</style>
