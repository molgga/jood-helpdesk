<script setup>
import ExampleInHexRange from './components/ExampleInHexRange.vue'
</script>

# inHexRange

minHex 와 maxHex 값 사이의 percent 에 해당하는 rgb 값을 반환 합니다.

```ts
const min = "#c80000";
const max = "#ffff00";
inHexRange(min, max, 0); // [200, 0, 0]
inHexRange(min, max, 0.25); // [214, 64, 0]
inHexRange(min, max, 0.5); // [228, 128, 0]
inHexRange(min, max, 0.75); // [241, 191, 0]
inHexRange(min, max, 1); // [255, 255, 0]
```

<ExampleInHexRange />

<<< ./components/ExampleInHexRange.vue