/**
 * rgb([255,0,0]) 컬러값을 hex(#ff0000) 형태로 변환합니다.
 * @export
 * @param rgb 변환할 컬러값
 * @example
 * console.log(rgbToHex([255, 0, 0])); // "#ff0000"
 * console.log(rgbToHex([12, 0, 0])); // "#0c0000"
 */
export function rgbToHex(rgb: number[]): string {
  const hexArr = rgb.map((color) => {
    const hex = color.toString(16);
    return color < 16 ? '0' + hex : hex;
  });
  return '#' + hexArr.join('');
}
