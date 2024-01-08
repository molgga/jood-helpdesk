# availableOr

지정된 avaliable[] 에 value 가 포함되는 경우 value 를, 그렇지 않은 경우 or 값을 반환합니다.

```ts
availableOr(
  available[] = 유효한 값들, 
  value = 검사할 값, 
  or = 검사할 값이 유효한 값에 포함되지 않을때 반환 값
);
```

```ts
const availables = [1, 2, 3];
availableOr(availables, 1, 1); // 1
availableOr(availables, 2, 1); // 2
availableOr(availables, 3, 1); // 3
availableOr(availables, 3, null); // 3
availableOr(availables, 11, 1); // 1
availableOr(availables, 22, 1); // 1
availableOr(availables, 33, 1); // 1
availableOr(availables, 44, null); // null
```