# uniqueFilter

unique 필터를 만듭니다.

```ts
const arr1 = [
  { id: 1, name: "google" },
  { id: 2, name: "microsoft" },
  { id: 1, name: "google" },
  { id: 3, name: "amazone" }
];
const idFilter = uniqueFilter((item) => item.id);
const nameFilter = uniqueFilter((item) => item.name);
arr1.filter(idFilter); 
// [{id:1, name:"google"}, {id:2, name:"microsoft"}, {id:3, name:"amazone"}]

arr1.filter(nameFilter); 
// [{id:1, name:"google"}, {id:2, name:"microsoft"}, {id:3, name:"amazone"}]
```