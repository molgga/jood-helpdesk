# deepFreeze

객체를 깊게 동결합니다.

참고: <a target="_blank" href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze">
MDN - Object freeze
</a>

```ts
const obj = { a: 1, b: [1,2], c: { c1: 'foo', c2: 200 }};
deepFreeze(obj);
```