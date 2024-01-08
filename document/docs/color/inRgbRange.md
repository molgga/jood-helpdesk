<script setup>
import ExampleInRgbRange from './components/ExampleInRgbRange.vue'
</script>

# inRgbRange

minRgb 과 maxRgb 값 사이의 percent 에 해당하는 rgb 값을 반환합니다.

```ts
const min = [200, 0, 0];
const max = [255, 255, 0];
inRgbRange(min, max, 0); // [200, 0, 0]
inRgbRange(min, max, 0.25); // [214, 64, 0]
inRgbRange(min, max, 0.5); // [228, 128, 0]
inRgbRange(min, max, 0.75); // [241, 191, 0]
inRgbRange(min, max, 1); // [255, 255, 0]
```

<ExampleInRgbRange />

<<< ./components/ExampleInRgbRange.vue