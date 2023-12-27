# intersect

축 교차점을 비교하여 겹치는 구간이 있다면 range 를 출력합니다.

```ts
// 축
interface IntersectRange {
  start: number; // 시작점
  end: number; // 종료점
}

intersect(비교 축1, 비교 축2): boolean
```

```ts
//  |----------|
//     |----------|
intersect({ start: 0, end: 100 }, { start: 20, end: 120 }); // { start: 20, end: 100 }
```

```ts
//  |----------|
//             |----------|
intersect({ start: 20, end: 120 }, { start: 120, end:200 }); // { start: 0, end: 0 }
```

```ts
//  |----------|
//               |----------|
intersect({ start: 20, end: 120 }, { start: 140, end:200 }); // { start: 0, end: 0 }
```