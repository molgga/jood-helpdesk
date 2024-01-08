# insert

지정된 source 배열의 index 에 value 를 삽입합니다. (원본 source 가 직접 변경됩니다.)

```ts
insert(
  source = 소스 배열
  [index=0] = 삽입될 인덱스
  value = 삽입될 값
);
```

```ts
insert([1, 2, 3], 1, 99); // [1, 99, 2, 3]
insert([1, 2, 3], 1, ["A", "B"]); // [1, "A", "B", 2, 3];
insert([1, 2, 3], 10, 99); // [1, 2, 3, 99]);
insert([1, 2, 3], 10, ["A", "B"]); // [1, 2, 3, "A", "B"];
insert([1, 2, 3], null, "A"); // ["A", 1, 2, 3];
```