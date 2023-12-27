# isCollision

면의 교차점을 비교하여 충돌점이 있는지 확인합니다.

```ts
// 면
interface CollisionBound {
  x: number;
  y: number;
  w: number;
  h: number;
}

isCollision(비교 면1, 비교 면2): boolean;
```

```ts
//  |----------|
//  |          |
//  |     |---------|
//  |     |    |    |
//  |----------|    |
//        |         |
//        |---------|

const one = { x: 0, y: 0, w: 100, h: 100 };
const two = { x: 50, y: 50, w: 100, h: 100 };
isCollision(one, two); // true
```

```ts

//  |----------|
//  |          |
//  |          |
//  |          |
//  |----------|
//               |----------|
//               |          |
//               |          |
//               |          |
//               |----------|

const one = { x: 0, y: 0, w: 100, h: 100 };
const two = { x: 120, y: 120, w: 100, h: 100 };
isCollision(one, two)); // false
```