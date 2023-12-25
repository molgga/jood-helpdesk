interface TransposeRowFilterParams<T> {
  rowIndex: number;
  columnIndex: number;
  item: T;
}

/**
 * 1차원 행[]을 2차원 행열[][]로 바꿉니다. 필터를 거친 요소로 변경합니다.
 * @template T 각 행의 타입
 * @template C 필터한 열의 타입
 * @param {T[]} ref 변경 할 배열
 * @param {Function} filter (params: TransposeRowFilterParams<T>) => C 각 요소를 정제할 함수.
 * @returns {C[][]}
 * @example
 * const arr = [{id:1,name:'A'},{id:2,name:'B'},{id:3,name:'C'}];
 * const rows = transposeRowFilter(arr, (params) => {
 *   const { rowIndex, columnIndex, item } = params;
 *   return {
 *     ...item,
 *     myValue1: item.name.toLowerCase(),
 *     rowIndex,
 *     columnIndex,
 *   };
 * });
 * console.log(rows); // [[{"id":1,"name":"A","myValue1":"a","rowIndex":0,"columnIndex":0},{"id":2,"name":"B","myValue1":"b","rowIndex":0,"columnIndex":1},{"id":3,"name":"C","myValue1":"c","rowIndex":0,"columnIndex":2}],[{"id":1,"name":"A","myValue1":"a","rowIndex":1,"columnIndex":0},{"id":2,"name":"B","myValue1":"b","rowIndex":1,"columnIndex":1},{"id":3,"name":"C","myValue1":"c","rowIndex":1,"columnIndex":2}],[{"id":1,"name":"A","myValue1":"a","rowIndex":2,"columnIndex":0},{"id":2,"name":"B","myValue1":"b","rowIndex":2,"columnIndex":1},{"id":3,"name":"C","myValue1":"c","rowIndex":2,"columnIndex":2}]];
 */
export function transposeRowFilter<T, C>(
  ref: T[],
  filter: (params: TransposeRowFilterParams<T>) => C
): C[][] {
  const refLen = ref.length;
  const newRow: C[][] = Array(refLen);
  for (let r = 0; r < refLen; r++) {
    const newColumn: C[] = Array(refLen);
    for (let c = 0; c < refLen; c++) {
      newColumn[c] = filter({
        rowIndex: r,
        columnIndex: c,
        item: ref[c],
      });
    }
    newRow[r] = newColumn;
  }
  return newRow;
}
