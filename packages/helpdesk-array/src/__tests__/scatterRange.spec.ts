import { scatterRange } from '../scatterRange';

describe('helpdesk-array: scatterRange', () => {

  it('range 는 2차 배열로 반환하고, min ~ max 값을 split 값으로 분배된 값의 범위어야 합니다. 마지막 범위는 x2 값 이어야 합니다.', () => {
    const result = scatterRange({
      source: [130, 128, 131, 134, 142, 150, 149, 147, 143],
      min: 100,
      max: 200,
      split: 11
    });
    console.log(result);
    expect(result.range[0][0]).toBe(100);
    expect(result.range[1][0]).toBe(110);
    expect(result.range[2][0]).toBe(120);
    expect(result.range[3][0]).toBe(130);
    expect(result.range[4][0]).toBe(140);
    expect(result.range[5][0]).toBe(150);
    expect(result.range[6][0]).toBe(160);
    expect(result.range[7][0]).toBe(170);
    expect(result.range[8][0]).toBe(180);
    expect(result.range[9][0]).toBe(190);
    expect(result.range[10][0]).toBe(200);

    expect(result.range[0][1]).toBe(110);
    expect(result.range[1][1]).toBe(120);
    expect(result.range[2][1]).toBe(130);
    expect(result.range[3][1]).toBe(140);
    expect(result.range[4][1]).toBe(150);
    expect(result.range[5][1]).toBe(160);
    expect(result.range[6][1]).toBe(170);
    expect(result.range[7][1]).toBe(180);
    expect(result.range[8][1]).toBe(190);
    expect(result.range[9][1]).toBe(200);
    expect(result.range[10][1]).toBe(400); // 마지막 값은 * 2
  });


  it('axis 는 1차 배열로 반환하고, min ~ max 값을 split 값으로 분배된 값이어야 합니다.', () => {
    const result = scatterRange({
      source: [130, 128, 131, 134, 142, 150, 149, 147, 143],
      min: 100,
      max: 200,
      split: 11
    });
    expect(result.axis[0]).toBe(100);
    expect(result.axis[1]).toBe(110);
    expect(result.axis[2]).toBe(120);
    expect(result.axis[3]).toBe(130);
    expect(result.axis[4]).toBe(140);
    expect(result.axis[5]).toBe(150);
    expect(result.axis[6]).toBe(160);
    expect(result.axis[7]).toBe(170);
    expect(result.axis[8]).toBe(180);
    expect(result.axis[9]).toBe(190);
    expect(result.axis[10]).toBe(200);
  });

  it('series 는 2차 배열로 반환하고, 각 원소의 첫번째 원소는 min ~ max 값을 split 값으로 분배된 값이어야 합니다.', () => {
    const result = scatterRange({
      source: [130, 128, 131, 134, 142, 150, 149, 147, 143],
      min: 100,
      max: 200,
      split: 11
    });
    expect(result.series[0][0]).toBe(100);
    expect(result.series[1][0]).toBe(110);
    expect(result.series[2][0]).toBe(120);
    expect(result.series[3][0]).toBe(130);
    expect(result.series[4][0]).toBe(140);
    expect(result.series[5][0]).toBe(150);
    expect(result.series[6][0]).toBe(160);
    expect(result.series[7][0]).toBe(170);
    expect(result.series[8][0]).toBe(180);
    expect(result.series[9][0]).toBe(190);
    expect(result.series[10][0]).toBe(200);
  });

  it('series 는 2차 배열로 반환하고, 각 원소의 두번째 원소는 source 가 포함되는 범위가 카운트 되어야 합니다.', () => {
    const result = scatterRange({
      source: [130, 128, 131, 134, 142, 150, 149, 147, 143],
      min: 100,
      max: 200,
      split: 11
    });
    expect(result.series[0][1]).toBe(0);
    expect(result.series[1][1]).toBe(0);
    expect(result.series[2][1]).toBe(1); // 128
    expect(result.series[3][1]).toBe(3); // 130, 131, 134
    expect(result.series[4][1]).toBe(4); // 142, 143, 147, 149
    expect(result.series[5][1]).toBe(1); // 150
    expect(result.series[6][1]).toBe(0);
    expect(result.series[7][1]).toBe(0);
    expect(result.series[8][1]).toBe(0);
    expect(result.series[9][1]).toBe(0);
    expect(result.series[10][1]).toBe(0);
  });
});