# transposeRowFilter

1차원 행[]을 2차원 행열[][]로 바꿉니다. 필터를 거친 요소로 변경합니다.

```ts
const arr = [{id:1,name:'A'}, {id:2,name:'B'}, {id:3,name:'C'}];
const rows = transposeRowFilter(arr, (params) => {
  const { rowIndex, columnIndex, item } = params;
  return {
    ...item,
    myValue1: item.name.toLowerCase(),
    rowIndex,
    columnIndex,
  };
});
// [
//   [
//     {"id":1,"name":"A","myValue1":"a","rowIndex":0,"columnIndex":0},
//     {"id":2,"name":"B","myValue1":"b","rowIndex":0,"columnIndex":1},
//     {"id":3,"name":"C","myValue1":"c","rowIndex":0,"columnIndex":2}
//   ],
//   [
//     {"id":1,"name":"A","myValue1":"a","rowIndex":1,"columnIndex":0},
//     {"id":2,"name":"B","myValue1":"b","rowIndex":1,"columnIndex":1},
//     {"id":3,"name":"C","myValue1":"c","rowIndex":1,"columnIndex":2}
//   ],
//   [
//     {"id":1,"name":"A","myValue1":"a","rowIndex":2,"columnIndex":0},
//     {"id":2,"name":"B","myValue1":"b","rowIndex":2,"columnIndex":1},
//     {"id":3,"name":"C","myValue1":"c","rowIndex":2,"columnIndex":2}
//   ]
// ];
```