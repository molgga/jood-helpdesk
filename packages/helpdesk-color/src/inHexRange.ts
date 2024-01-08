import { hexToRgb } from './hexToRgb';
import { inRgbRange } from './inRgbRange';

/**
 * minHex 와 maxHex 값 사이의 percent 에 해당하는 rgb 값을 반환합니다.
 * @export
 * @param minHex
 * @param maxHex
 * @param percent
 * @example
 * const min = "#c80000";
 * const max = "#ffff00";
 * console.log(inHexRange(min, max, 0)); // [200, 0, 0]
 * console.log(inHexRange(min, max, 0.25)); // [214, 64, 0]
 * console.log(inHexRange(min, max, 0.5)); // [228, 128, 0]
 * console.log(inHexRange(min, max, 0.75)); // [241, 191, 0]
 * console.log(inHexRange(min, max, 1)); // [255, 255, 0]
 */
export function inHexRange(minHex: string, maxHex: string, percent: number): number[] {
  return inRgbRange(hexToRgb(minHex), hexToRgb(maxHex), percent);
}
