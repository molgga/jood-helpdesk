# toFormat

지정된 시간을 지정된 옵션의 포맷으로 변경합니다.

```ts
toFormat(시간, {
  [format = 'YYYY-MM-DD hh:mm:ss']: at 정보를 변경할 문자 포맷 (예: YYYY-MM-DD AA hh -> 2020-01-01 오전 12시)
  [alternative = '']: at 정보가 invalid 할 때 대체 문자
  [multiple = 1]: at 의 곱셈 (예: 초 단위로 다루는 at 을 밀리세컨드로 반환하려면 1000 지정)
  [labelDays = ['일', '월', '화', '수', '목', '금', '토']]: 요일 처리 문자
});
```

```ts
const at1 = 1553146437000; // new Date("2019-03-21 14:33:57").getTime();
const at2 = 1553146437; // unixtime
toFormat(at1); // "2019-03-21 14:33:57"
toFormat(at1, { format: "YYYY-MM-DD(d)" }); // "2019-03-21(목)"
toFormat(at1, { format: "hh:mm:ss YYYY/MM/DD" }); // "14:33:57 2019/03/21"
toFormat(at2, { multiple: 1000 }); // "2019-03-21 14:33:57"
toFormat("", { alternative: "Unknown" }); // "Unknown"
```