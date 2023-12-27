# sizeToCover


원본 사이즈(sw, sh)의 비율을 유지 하면서, 컨테이너 사이즈(cw, ch)를 가득 채우는 바운더리 정보를 반환합니다.

 - css 의 object-fit/bakground-size cover 과 동일합니다.
 - dx, dy 는 양수가 나올 수 없습니다.
 - dw, dh 가 cw, ch 보다 작을 수 없습니다.

```ts
sizeToCover(원본 width, 원본 height, 컨테이너 width, 컨테이너 height);
```

```ts
const img = { width: 100, height: 100 };
const box = { width: 200, height: 200 };
const draw = sizeToCover(img.width, img.height, box.width, box.height); 
// { dx: 0, dy: 0, dw: 200, dh: 200 }

img.top = draw.dy;
img.left = draw.dx;
img.width = draw.dw;
img.height = draw.dh;
```

```ts
const img = { width: 300, height: 200 };
const box = { width: 200, height: 200 };
const draw = sizeToCover(img.width, img.height, box.width, box.height); 
// { dx: -50, dy: 0, dw: 300, dh: 200 }

img.top = draw.dy;
img.left = draw.dx;
img.width = draw.dw;
img.height = draw.dh;
```