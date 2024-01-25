# scatterRangeBySource

source 배열의 분포도 정보를 반환합니다. 범위(min, max)값은 source 의 값을 기준으로 찾습니다.

```ts
const result = scatterRangeBySource({
  source: [130, 128, 131, 134, 142, 150, 149, 147, 143],
  split: 5
});
```

```ts
// result
{
  min: 128,
  max: 150,
  axis: [ 128, 134, 140, 146, 152 ],
  range: [
    [ 128, 134 ],
    [ 134, 140 ],
    [ 140, 146 ],
    [ 146, 152 ],
    [ 152, 300 ]
  ],
  series: [ [ 128, 3 ], [ 134, 1 ], [ 140, 2 ], [ 146, 3 ], [ 152, 0 ] ]
}
```