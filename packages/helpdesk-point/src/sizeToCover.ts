import { SizeDrawBound, getSizeMax } from './types';

/**
 * 원본 사이즈(sw, sh)의 비율을 유지 하면서,
 * 컨테이너 사이즈(cw, ch)를 가득 채우는 바운더리 정보를 반환.
 * - dx, dy 는 양수가 나올 수 없다.
 * - dw, dh 가 cw, ch 보다 작을 수 없다.
 * @export
 * @param {number} sw
 * @param {number} sh
 * @param {number} cw
 * @param {number} ch
 * @returns {DrawBound}
 */
export function sizeToCover(sw: number, sh: number, cw: number, ch: number): SizeDrawBound {
  const { maxWidth, maxHeight } = getSizeMax(sw, sh, cw, ch);
  let dx = 0;
  let dy = 0;
  let dw = 0;
  let dh = 0;
  const expectRatio = maxWidth / maxHeight;
  const contentRatio = sw / sh;
  if (expectRatio < contentRatio) {
    dh = maxHeight;
    dw = maxHeight * contentRatio;
  } else {
    dw = maxWidth;
    dh = maxWidth / contentRatio;
  }
  dx = (maxWidth - dw) * 0.5;
  dy = (maxHeight - dh) * 0.5;
  return { dx, dy, dw, dh };
}
