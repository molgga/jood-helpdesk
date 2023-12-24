# toMasking

문자열에 마스킹 처리를 합니다.

```ts
toMasking(소스 문자열,{
  [mask = '*']: 마스킹 문자열
  [direction = 'end']: 마스킹 처리 부분 // 'start'(앞) | 'middle'(중간) | 'end'(끝) | 'justify'(양쪽)
});
```

```ts
toMasking('a'); // 'a'
toMasking('ab'); // 'a*'
toMasking('abc'); // 'a**'
toMasking('abcdefgh'); // '****efgh'
toMasking('ab', { direction: 'middle' }); // 'a*'
toMasking('abc', { direction: 'middle' }); // 'a*c'
toMasking('abcdefgh', { direction: 'middle' }); // 'a******h'
toMasking('ab', { direction: 'start' }); // '*b'
toMasking('abc', { direction: 'start' }); // '*bc'
toMasking('abcdefgh', { direction: 'start' }); // '****efgh'
toMasking('ab', { direction: 'justify' }); // 'a*'
toMasking('abc', { direction: 'justify' }); // '*b*'
toMasking('abcdefgh', { direction: 'justify' }); // '**cdef**'
```