# toMaskingFirst

문자열 마스킹 - 앞 기준 \
toMasking 보다 조금 더 세밀한 옵션을 제공합니다.

```ts
toMaskingFirst(소스 문자열, {
  [mask = '*']: 마스킹 문자열
  [maxShow: number]: 마스킹 되지 않는 최대 문자수
});
```

```ts
toMaskingFirst('0'); // '0'
toMaskingFirst('01'); // '*1'
toMaskingFirst('012'); // '**2'
toMaskingFirst('0123'); // '**23'
toMaskingFirst('01234'); // '***34'
toMaskingFirst('012345'); // '***345'
toMaskingFirst('0123456'); // '****456'
toMaskingFirst('01234567'); // '****4567'
toMaskingFirst('012345678'); // '*****5678'
toMaskingFirst('0123456789'); // '*****56789'
toMaskingFirst('0', { maxShow: 2 }); // '0'
toMaskingFirst('01', { maxShow: 2 }); // '*1'
toMaskingFirst('012', { maxShow: 2 }); // '**2'
toMaskingFirst('0123', { maxShow: 2 }); // '**23'
toMaskingFirst('01234', { maxShow: 2 }); // '***34'
toMaskingFirst('012345', { maxShow: 2 }); // '****45'
toMaskingFirst('0123456', { maxShow: 2 }); // '*****56'
toMaskingFirst('01234567', { maxShow: 2 }); // '******67'
toMaskingFirst('012345678', { maxShow: 2 }); // '*******78'
toMaskingFirst('0123456789', { maxShow: 2 }); // '********89'
```