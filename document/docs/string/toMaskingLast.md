# toMaskingLast

문자열 마스킹 - 뒤 기준 \
toMasking 보다 조금 더 세밀한 옵션을 제공합니다.

```ts
toMaskingLast(소스 문자열, {
  [mask = '*']: 마스킹 문자열
  [maxShow: number]: 마스킹 되지 않는 최대 문자수
});
```

```ts
toMaskingLast('0'); // '0'
toMaskingLast('01'); // '0*'
toMaskingLast('012'); // '0**'
toMaskingLast('0123'); // '01**'
toMaskingLast('01234'); // '01***'
toMaskingLast('012345'); // '012***'
toMaskingLast('0123456'); // '012****'
toMaskingLast('01234567'); // '0123****'
toMaskingLast('012345678'); // '0123*****'
toMaskingLast('0123456789'); // '01234*****'
toMaskingLast('0', { maxShow: 2 }); // '0'
toMaskingLast('01', { maxShow: 2 }); // '0*'
toMaskingLast('012', { maxShow: 2 }); // '0**'
toMaskingLast('0123', { maxShow: 2 }); // '01**'
toMaskingLast('01234', { maxShow: 2 }); // '01***'
toMaskingLast('012345', { maxShow: 2 }); // '01****'
toMaskingLast('0123456', { maxShow: 2 }); // '01*****'
toMaskingLast('01234567', { maxShow: 2 }); // '01******'
toMaskingLast('012345678', { maxShow: 2 }); // '01*******'
toMaskingLast('0123456789', { maxShow: 2 }); // '01********'
```