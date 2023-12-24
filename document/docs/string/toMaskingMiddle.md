# toMaskingMiddle

문자열 마스킹 - 중간 기준 \
toMasking 보다 조금 더 세밀한 옵션을 제공합니다.

```ts
toMaskingMiddle(소스 문자열, {
  [mask = '*']: 마스킹 문자열
  [maxShow: number]: 마스킹 되지 않는 최대 문자수
})
```

```ts
toMaskingMiddle('0'); // '0'
toMaskingMiddle('01'); // '0*'
toMaskingMiddle('012'); // '0**'
toMaskingMiddle('0123'); // '0**3'
toMaskingMiddle('01234'); // '0***4'
toMaskingMiddle('012345'); // '01***5'
toMaskingMiddle('0123456'); // '01****6'
toMaskingMiddle('01234567'); // '01****67'
toMaskingMiddle('012345678'); // '01*****78'
toMaskingMiddle('0123456789'); // '012*****89'
toMaskingMiddle('0', { maxShow: 2 }); // '0'
toMaskingMiddle('01', { maxShow: 2 }); // '0*'
toMaskingMiddle('012', { maxShow: 2 }); // '0**'
toMaskingMiddle('0123', { maxShow: 2 }); // '0**3'
toMaskingMiddle('01234', { maxShow: 2 }); // '0***4'
toMaskingMiddle('012345', { maxShow: 2 }); // '0****5'
toMaskingMiddle('0123456', { maxShow: 2 }); // '0*****6'
toMaskingMiddle('01234567', { maxShow: 2 }); // '0******7'
toMaskingMiddle('012345678', { maxShow: 2 }); // '0*******8'
toMaskingMiddle('0123456789', { maxShow: 2 }); // '0********9'
```