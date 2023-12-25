import { transposeRow } from '../transposeRow';

describe('utils/array/transposeRow', () => {

  it('1차원 행[]을 2차원 행열[][]로 만들어야 합니다.', () => {
    // 차트 같은것을 만들때 종종 필요
    const A = { id: 1, name: "A" };
    const B = { id: 2, name: "B" };
    const C = { id: 3, name: "C" };
    const D = { id: 4, name: "D" };
    const arr = [A, B, C, D];
    const rows = transposeRow(arr);
    expect(rows.length).toBe(4);
    expect(rows[0].length).toBe(4);
    expect(rows[1].length).toBe(4);
    expect(rows[2].length).toBe(4);
    expect(rows[3].length).toBe(4);
    expect(rows[0][0]).toBe(A);
    expect(rows[0][1]).toBe(B);
    expect(rows[0][2]).toBe(C);
    expect(rows[0][3]).toBe(D);
    expect(rows[1][0]).toBe(A);
    expect(rows[1][1]).toBe(B);
    expect(rows[1][2]).toBe(C);
    expect(rows[1][3]).toBe(D);
    expect(rows[2][0]).toBe(A);
    expect(rows[2][1]).toBe(B);
    expect(rows[2][2]).toBe(C);
    expect(rows[2][3]).toBe(D);
    expect(rows[3][0]).toBe(A);
    expect(rows[3][1]).toBe(B);
    expect(rows[3][2]).toBe(C);
    expect(rows[3][3]).toBe(D);
  });
});
