# isIntersect

축 교차점을 비교하여 겹치는 구간이 있는지 확인합니다.

```ts
// 축
interface IntersectRange {
  start: number; // 시작점
  end: number; // 종료점
}

isIntersect(비교 축1, 비교 축2): boolean
```

```ts
//  |----------|
//     |----------|
isIntersect({ start: 0, end: 100 }, { start: 20, end: 120 }); // true
```

```ts
//  |----------|
//             |----------|
isIntersect({ start: 20, end: 120 }, { start: 120, end:200 }); // false
```

```ts
//  |----------|
//               |----------|
isIntersect({ start: 20, end: 120 }, { start: 140, end:200 }); // false
```