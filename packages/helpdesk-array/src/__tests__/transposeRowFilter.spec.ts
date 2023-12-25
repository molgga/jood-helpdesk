import { transposeRowFilter } from '../transposeRowFilter';

describe('utils/array/transposeRowFilter', () => {

  it('1차원 행[]을 필터를 거쳐가는 2차원 행열[][]로 만듭니다.', () => {
    // 차트 같은것을 만들때 종종 필요
    const A = { id: 1, name: "A" };
    const B = { id: 2, name: "B" };
    const C = { id: 3, name: "C" };
    const D = { id: 4, name: "D" };
    const arr = [A, B, C, D];
    const rows = transposeRowFilter(arr, (params) => {
      const { rowIndex, columnIndex, item } = params;
      return {
        ...item,
        myValue1: item.name.toLowerCase(),
        rowIndex,
        columnIndex,
      };
    });
    expect(rows.length).toBe(4);
    expect(rows[0].length).toBe(4);
    expect(rows[1].length).toBe(4);
    expect(rows[2].length).toBe(4);
    expect(rows[3].length).toBe(4);
    expect(rows[0][0].myValue1).toBe("a");
    expect(rows[0][1].myValue1).toBe("b");
    expect(rows[0][2].myValue1).toBe("c");
    expect(rows[0][3].myValue1).toBe("d");
    expect(rows[0][0].rowIndex).toBe(0);
    expect(rows[0][1].rowIndex).toBe(0);
    expect(rows[0][2].rowIndex).toBe(0);
    expect(rows[0][3].rowIndex).toBe(0);
    expect(rows[0][0].columnIndex).toBe(0);
    expect(rows[0][1].columnIndex).toBe(1);
    expect(rows[0][2].columnIndex).toBe(2);
    expect(rows[0][3].columnIndex).toBe(3);
    expect(rows[1][0].myValue1).toBe("a");
    expect(rows[1][1].myValue1).toBe("b");
    expect(rows[1][2].myValue1).toBe("c");
    expect(rows[1][3].myValue1).toBe("d");
    expect(rows[1][0].rowIndex).toBe(1);
    expect(rows[1][1].rowIndex).toBe(1);
    expect(rows[1][2].rowIndex).toBe(1);
    expect(rows[1][3].rowIndex).toBe(1);
    expect(rows[1][0].columnIndex).toBe(0);
    expect(rows[1][1].columnIndex).toBe(1);
    expect(rows[1][2].columnIndex).toBe(2);
    expect(rows[1][3].columnIndex).toBe(3);
    expect(rows[2][0].myValue1).toBe("a");
    expect(rows[2][1].myValue1).toBe("b");
    expect(rows[2][2].myValue1).toBe("c");
    expect(rows[2][3].myValue1).toBe("d");
    expect(rows[2][0].rowIndex).toBe(2);
    expect(rows[2][1].rowIndex).toBe(2);
    expect(rows[2][2].rowIndex).toBe(2);
    expect(rows[2][3].rowIndex).toBe(2);
    expect(rows[2][0].columnIndex).toBe(0);
    expect(rows[2][1].columnIndex).toBe(1);
    expect(rows[2][2].columnIndex).toBe(2);
    expect(rows[2][3].columnIndex).toBe(3);
    expect(rows[3][0].myValue1).toBe("a");
    expect(rows[3][1].myValue1).toBe("b");
    expect(rows[3][2].myValue1).toBe("c");
    expect(rows[3][3].myValue1).toBe("d");
    expect(rows[3][0].rowIndex).toBe(3);
    expect(rows[3][1].rowIndex).toBe(3);
    expect(rows[3][2].rowIndex).toBe(3);
    expect(rows[3][3].rowIndex).toBe(3);
    expect(rows[3][0].columnIndex).toBe(0);
    expect(rows[3][1].columnIndex).toBe(1);
    expect(rows[3][2].columnIndex).toBe(2);
    expect(rows[3][3].columnIndex).toBe(3);
  });
});
