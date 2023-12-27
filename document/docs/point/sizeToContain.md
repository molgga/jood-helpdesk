# sizeToContain

원본 사이즈(sw, sh)의 비율을 유지 하면서, 컨테이너 사이즈(cw, ch) 내부에 들어갈 때 그려져야 하는 바운더리(dx, dy, dw, dh) 정보를 반환합니다.

 - css 의 object-fit/bakground-size contain 과 동일합니다.
 - dx, dy 는 음수가 나올 수 없습니다.
 - dw, dh 가 cw, ch 보다 클 수 없습니다.

```ts
sizeToContain(원본 width, 원본 height, 컨테이너 width, 컨테이너 height);
```

```ts
const img = { width: 100, height: 100 };
const box = { width: 200, height: 200 };
const draw = sizeToContain(img.width, img.height, box.width, box.height); 
// { dx: 50, dy: 50, dw: 100, dh: 100 }

img.top = draw.dy;
img.left = draw.dx;
img.width = draw.dw;
img.height = draw.dh;
```

```ts
const img = { width: 300, height: 200 };
const box = { width: 200, height: 200 };
const draw = sizeToContain(img.width, img.height, box.width, box.height); 
// { dx: 0, dy: 33.5, dw: 200, dh: 133 }

img.top = draw.dy;
img.left = draw.dx;
img.width = draw.dw;
img.height = draw.dh;
```