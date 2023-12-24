# toMaskingJustify

문자열 마스킹 - 양쪽 기준 \
toMasking 보다 조금 더 세밀한 옵션을 제공합니다.

```ts
toMaskingJustify(소스 문자열, {
  [mask = '*']: 마스킹 문자열
  [maxShow: number]: 마스킹 되지 않는 최대 문자수
})
```

```ts
toMaskingJustify('0'); // '0'
toMaskingJustify('01'); // '*1'
toMaskingJustify('012'); // '*1*'
toMaskingJustify('0123'); // '*12*'
toMaskingJustify('01234'); // '**23*'
toMaskingJustify('012345'); // '**234*'
toMaskingJustify('0123456'); // '**234**'
toMaskingJustify('01234567'); // '**2345**'
toMaskingJustify('012345678'); // '***3456**'
toMaskingJustify('0123456789'); // '***34567**'
toMaskingJustify('0', { maxShow: 2 }); // '0'
toMaskingJustify('01', { maxShow: 2 }); // '*1'
toMaskingJustify('012', { maxShow: 2 }); // '*1*'
toMaskingJustify('0123', { maxShow: 2 }); // '*12*'
toMaskingJustify('01234', { maxShow: 2 }); // '**23*'
toMaskingJustify('012345', { maxShow: 2 }); // '**23**'
toMaskingJustify('0123456', { maxShow: 2 }); // '***34**'
toMaskingJustify('01234567', { maxShow: 2 }); // '***34***'
toMaskingJustify('012345678', { maxShow: 2 }); // '****45***'
toMaskingJustify('0123456789', { maxShow: 2 }); // '****45****'
```