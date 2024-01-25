/**
 * source 배열의 분포도 정보를 반환합니다.
 *
 * @param config.source 소스배열
 * @param config.min 범위 최소
 * @param config.max 범위 최대
 * @param config.split 범위 분할값
 */
export const scatterRange = (config: { source: number[]; min: number; max: number; split: number }) => {
  const { source, min, max, split } = config;
  const xSize = Math.ceil((max - min) / Math.max(1, split - 1));

  const vAxis: number[] = [];
  let vValue: number = min;
  for (let i = 0; i < split; i++) {
    vAxis.push(vValue);
    vValue += xSize;
  }

  const vRange: number[][] = [];
  vAxis.forEach((value, i) => {
    const rmin = value;
    const rmax = vAxis[i + 1] || max * 2;
    vRange.push([rmin, rmax]);
  });

  const vSeries: number[][] = [];
  const sourceCopy: number[] = [...source];
  vRange.forEach((range, i) => {
    const rmin = i === 0 ? 0 : range[0]; // 맨 앞은 0 부터
    const rmax = range[1];
    const count = sourceCopy.filter((v) => rmin <= v && v < rmax).length;
    vSeries.push([i, count]);
  });
  return {
    min,
    max,
    axis: vAxis,
    range: vRange,
    series: vSeries,
  };
};
