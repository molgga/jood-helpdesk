/**
 * hex('#ff0000') 컬러값을 rgb([255,0,0]) 형태로 변환합니다.
 * @export
 * @param hex 변환할 컬러값
 * @example
 * console.log(hexToRgb("#ff0000")); // [255, 0, 0]
 * console.log(hexToRgb("#12ff34")); // [18, 255, 52]
 */
export function hexToRgb(hex: string): number[] {
  const hexColor = hex.replace(/^#/, '');
  const len = hexColor.length;
  let arr = [];
  if (len !== 3 && len !== 6) {
    throw new Error('not avaliable (avaliable ex: #f00, #ff000)');
  } else {
    if (len === 3) {
      arr = hexColor.split('').map((color) => '' + color + color);
    } else if (len === 6) {
      arr = [hexColor.substring(0, 2), hexColor.substring(2, 4), hexColor.substring(4, 6)];
    }
  }
  return arr.map((color) => {
    return parseInt(color, 16);
  });
}
