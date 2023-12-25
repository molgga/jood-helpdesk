/**
 * 1차원 행[]을 2차원 행열[][]로 바꿉니다. 원본 컬럼을 그대로 사용합니다.
 * @template T 각 행의 타입
 * @param {T[]} source 변경 할 배열
 * @returns {T[][]}
 * @example
 * const arr = [{id:1,name:'A'}, {id:2,name:'B'}, {id:3,name:'C'}];
 * const rows = transposeRow(arr);
 * console.log(rows);
 *  //  [
 *  //    [{"id":1,"name":"A"}, {"id":2,"name":"B"}, {"id":3,"name":"C"}],
 *  //    [{"id":1,"name":"A"}, {"id":2,"name":"B"}, {"id":3,"name":"C"}],
 *  //    [{"id":1,"name":"A"}, {"id":2,"name":"B"}, {"id":3,"name":"C"}]
 *  //  ]
 */
export function transposeRow<T = any>(source: T[]): T[][] {
  const sourceLen = source.length;
  const newRow: T[][] = Array(sourceLen);
  for (let r = 0; r < sourceLen; r++) {
    const newColumn: T[] = Array(sourceLen);
    for (let c = 0; c < sourceLen; c++) {
      newColumn[c] = source[c];
    }
    newRow[r] = newColumn;
  }
  return newRow;
}
