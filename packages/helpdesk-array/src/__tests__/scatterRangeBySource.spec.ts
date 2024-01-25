import { scatterRangeBySource } from '../scatterRangeBySource';

describe('helpdesk-array: scatterRangeBySource', () => {

  it('range 는 2차 배열로 반환하고, min ~ max 값을 split 값으로 분배된 값의 범위어야 합니다. 마지막 범위는 x2 값 이어야 합니다.', () => {
    const result = scatterRangeBySource({
      source: [130, 128, 131, 134, 142, 150, 149, 147, 143],
      split: 5
    });
    expect(result.range[0][0]).toBe(128);
    expect(result.range[1][0]).toBe(134);
    expect(result.range[2][0]).toBe(140);
    expect(result.range[3][0]).toBe(146);
    expect(result.range[4][0]).toBe(152);

    expect(result.range[0][1]).toBe(134);
    expect(result.range[1][1]).toBe(140);
    expect(result.range[2][1]).toBe(146);
    expect(result.range[3][1]).toBe(152);
    expect(result.range[4][1]).toBe(300); // 마지막 값은 * 2
  });

  it('axis 는 1차 배열로 반환하고, min ~ max 값을 split 값으로 분배된 값이어야 합니다.', () => {
    const result = scatterRangeBySource({
      source: [130, 128, 131, 134, 142, 150, 149, 147, 143],
      split: 5
    });
    expect(result.axis[0]).toBe(128);
    expect(result.axis[1]).toBe(134);
    expect(result.axis[2]).toBe(140);
    expect(result.axis[3]).toBe(146);
    expect(result.axis[4]).toBe(152);
  });

  it('series 는 2차 배열로 반환하고, 각 원소의 첫번째 원소는 min ~ max 값을 split 값으로 분배된 값이어야 합니다.', () => {
    const result = scatterRangeBySource({
      source: [130, 128, 131, 134, 142, 150, 149, 147, 143],
      split: 5
    });
    expect(result.series[0][0]).toBe(128);
    expect(result.series[1][0]).toBe(134);
    expect(result.series[2][0]).toBe(140);
    expect(result.series[3][0]).toBe(146);
    expect(result.series[4][0]).toBe(152);
  });

  it('series 는 2차 배열로 반환하고, 각 원소의 두번째 원소는 source 가 포함되는 범위가 카운트 되어야 합니다.', () => {
    const result = scatterRangeBySource({
      source: [130, 128, 131, 134, 142, 150, 149, 147, 143],
      split: 5
    });
    expect(result.series[0][1]).toBe(3); // 128, 130, 131
    expect(result.series[1][1]).toBe(1); // 134
    expect(result.series[2][1]).toBe(2); // 142, 143
    expect(result.series[3][1]).toBe(3); // 147, 149, 150
    expect(result.series[4][1]).toBe(0); //
  });
});