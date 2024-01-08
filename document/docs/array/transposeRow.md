# transposeRow

1차원 행[]을 2차원 행열[][]로 바꿉니다. 원본 컬럼을 그대로 사용합니다.

```ts
const arr = [{id:1,name:'A'}, {id:2,name:'B'}, {id:3,name:'C'}];
const rows = transposeRow(arr);
//  [
//    [{"id":1,"name":"A"}, {"id":2,"name":"B"}, {"id":3,"name":"C"}],
//    [{"id":1,"name":"A"}, {"id":2,"name":"B"}, {"id":3,"name":"C"}],
//    [{"id":1,"name":"A"}, {"id":2,"name":"B"}, {"id":3,"name":"C"}]
//  ]
```