/**
 * source 배열의 분포도 정보를 반환합니다. 범위값은 source 의 값을 찾습니다.
 *
 * @param config.source 소스배열
 * @param config.split 범위 분할값
 */
export const scatterRangeBySource = (config: { source: number[]; split: number }) => {
  const { source, split } = config;
  const min = Math.min(...source);
  const max = Math.max(...source);
  const xSize = Math.ceil((max - min) / Math.max(1, split - 1));

  const vAxis: number[] = [];
  let vValue: number = min;
  for (let i = 0; i < split; i++) {
    vAxis.push(vValue);
    vValue += xSize;
  }

  const vRange: number[][] = [];
  vAxis.forEach((value, i) => {
    vRange.push([value, vAxis[i + 1] || max * 2]);
  });

  const vSeries: number[][] = [];
  const sourceCopy: number[] = [...source];
  vRange.forEach((range, i) => {
    const count = sourceCopy.filter((v) => range[0] <= v && v < range[1]).length;
    vSeries.push([range[0], count]);
  });
  return {
    min,
    max,
    axis: vAxis,
    range: vRange,
    series: vSeries,
  };
};
