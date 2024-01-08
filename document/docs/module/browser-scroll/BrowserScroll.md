<script setup>
import ExampleBrowserScroll from './components/ExampleBrowserScroll.vue'
</script>

# BrowserScroll

## ScrollState

- scrollTop: Y 스크롤 위치
- scrollHeight: 스크롤 height
- innerHeight: window innerHeight
- directionY: Y 스크롤 방향 (0: 방향없음(모름), -1: 위로, 1: 아래로)
- holdEndY: observeEndY 도달 알림 보류 상태 여부
- percentY: Y 축 스크롤 퍼센트
- endY: Y 스크롤 end 위치
- scrollLeft: X 스크롤 위치
- scrollWidth: 스크롤 width
- innerWidth: window innerWidth
- directionX: X 스크롤 방향 (0: 방향없음(모름), -1: 좌로, 1: 우로)
- holdEndX: observeEndX 도달 알림 보류 상태 여부
- percentX: X 축 스크롤 퍼센트
- endX: X 스크롤 end 위치

<ExampleBrowserScroll />

<<< ./components/ExampleBrowserScroll.vue