# toFormat - 포맷팅

💡 `2023-01-31 14:33:57`, `2023.01.31`, `01/31/2023`


## Options

### format

|Input|Output|Description|
|--|--|--|
| YYYY | 2024 | 4자리 연도를 출력합니다. |
| MM | 01 | 2자리 월을 출력합니다. |
| DD | 31 | 2자리 일을 출력합니다. |
| AA | 오후 | 오전/오후 를 출력합니다. |
| hh | 14 | 2자리 시간의 시(hours)를 출력합니다. |
| mm | 33 | 2자리 시간의 분(minutes)을 출력합니다. |
| ss | 57 | 2자리 시간의 초(seconds)를 출력합니다. |
| d | 목 | 요일을 출력합니다. |

```typescript
const at = new Date("2023-01-31 14:33:57").getTime();

toFormat(at)); // "2023-01-31 14:33:57"
toFormat(at, { format: "YYYY-MM-DD(d) hh:mm:ss" })); // "2023-01-31(화) 14:33:57"
toFormat(at, { format: "YYYY-MM-DD(d) AA hh:mm:ss" })); // "2023-01-31(화) 오후 02:33:57"
toFormat(at, { format: "YYYY/MM/DD" })); // "2023/01/31"
```

### labelDays

요일 라벨을 정의할 수 있습니다.

```typescript
const at = new Date("2023-01-31 14:33:57").getTime();
toFormat(at, {
  labelDays: ['일요일!', '월요일!', '화요일!', '수요일!', '목요일!', '금요일!', '토요일!'],
  format: 'YYYY-MM-DD (d)',
}); // "2023-01-31 (화요일!)"
```

### multiple

종종 시간 timestamp 를 unixtime

```typescript
const at = Math.ceil(new Date("2023-01-31 14:33:57").getTime()/1000);
toFormat(at, { multiple: 1000 }); // "2023-01-31 14:33:57"
```