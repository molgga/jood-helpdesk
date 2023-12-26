# toAtByYyyymmdd

문자열로 지정된 시간 정보를 timestamp(at) 정보로 변환합니다.

```ts
toAtByYyyymmdd('2023-06-12') === new Date('2023-06-12T00:00:00+00:00').getTime(); // true
toAtByYyyymmdd('2023-06-12T12:33:00+00:00') === new Date('2023-06-12T12:33:00+00:00').getTime(); // true

toAtByYyyymmdd(''); // null
toAtByYyyymmdd('foo'); // null
toAtByYyyymmdd('2023-99-00'); // null
toAtByYyyymmdd(null); // null
toAtByYyyymmdd(undefined); // null
```