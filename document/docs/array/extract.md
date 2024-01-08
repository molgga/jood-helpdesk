# extract

지정된 source 배열의 index ~ deleteCount 만큼 제거합니다. (원본 source 가 직접 변경됩니다.)

```ts
extract(
  source = 소스 배열,
  [index=0] = 삭제 시작 index
  [deleteCount=1] = 삭제 갯수
)
```

```ts
extract([1, 2, 3, 4]); // [2, 3, 4];
extract([1, 2, 3, 4], 1, 1); // [1, 3, 4];
extract([1, 2, 3, 4], 2, 1); // [1, 2, 4];
extract([1, 2, 3, 4], 3, 1); // [1, 2, 3];
extract([1, 2, 3, 4], 0, 2); // [3, 4];
extract([1, 2, 3, 4], 0, 10); // [];
extract([1, 2, 3, 4], 2, 10); // [1, 2];
```