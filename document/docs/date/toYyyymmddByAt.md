# toYyyymmddByAt

timestamp(at)로 지정된 정보로 문자열로 시간 정보로 변환합니다.

```ts
const at = new Date('2023-06-12T13:23:33+00:00').getTime();
toYyyymmddByAt(at); // '2023-06-12'

toYyyymmddByAt(at); // ''
toYyyymmddByAt(null); // ''
toYyyymmddByAt(undefined); // ''
```
