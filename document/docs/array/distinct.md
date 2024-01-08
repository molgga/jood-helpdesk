# distinct

중복된 값을 제외시킨 배열을 반환합니다.

```ts
distinct(
  source = 소스 배열,
  [uniqueFn= (v) => boolean] = 직접 filter 할 key 값을 반환할 수 있는 함수
);
```

```ts
distinct([1, 2, 3, 4, 5]); 
// [1, 2, 3, 4, 5]

distinct([1, 2, 1, 3, 4, 4, 3, 5, 1]);
// [1, 2, 3, 4, 5]

distinct([
  { id: 1, name: "google" },
  { id: 2, name: "microsoft" },
  { id: 1, name: "google" },
  { id: 3, name: "amazone" }
], item => item.id); 
// [{ id: 1, name: "google" }, { id: 2, name: "microsoft" }, { id: 3, name: "amazone" }]
```