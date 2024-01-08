/**
 * minRgb 과 maxRgb 값 사이의 percent 에 해당하는 rgb 값을 반환합니다.
 * @export
 * @param minRgb
 * @param maxRgb
 * @param percent
 * @example
 * const min = [200, 0, 0];
 * const max = [255, 255, 0];
 * console.log(inRgbRange(min, max, 0)); // [200, 0, 0]
 * console.log(inRgbRange(min, max, 0.25)); // [214, 64, 0]
 * console.log(inRgbRange(min, max, 0.5)); // [228, 128, 0]
 * console.log(inRgbRange(min, max, 0.75)); // [241, 191, 0]
 * console.log(inRgbRange(min, max, 1)); // [255, 255, 0]
 */
export function inRgbRange(minRgb: number[], maxRgb: number[], percent: number): number[] {
  const perColor = 1 - percent;
  const colors = maxRgb.map((max, index) => {
    const min = minRgb[index];
    return Math.round(max - (max - min) * perColor);
  });
  return colors;
}
