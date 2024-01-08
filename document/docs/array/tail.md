# tail

지정된 배열의 뒤쪽 index 아이템을 반환합니다.

```ts
tail(
  source = 소스 배열
  [shiftIndex=0] = 아이템을 꺼낼 index (뒤에서 앞으로)
  [overflowSafe=true] = 계산된 index 가 0 보다 작은 경우는 맨 앞, length 보다 큰 경우는 마지막 아이템 index 로 찾을지 여부
)
```

```ts
tail([1, 2, 3, 4]); // 4
tail([1, 2, 3, 4], 1); // 3
tail([1, 2, 3, 4], 2); // 2
tail([1, 2, 3, 4], 3); // 1
tail([1, 2, 3, 4], 4); // 1
tail([1, 2, 3, 4], -1); // 4
```