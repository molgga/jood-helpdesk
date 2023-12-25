import { SizeDrawBound, getSizeMax } from './types';

/**
 * 원본 사이즈(sw, sh)의 비율을 유지 하면서,
 * 컨테이너 사이즈(cw, ch) 내부에 들어가는 바운더리 정보를 반환.
 * - dx, dy 는 음수가 나올 수 없다.
 * - dw, dh 가 cw, ch 보다 클 수 없다.
 * @export
 * @param {number} sw 원본 width
 * @param {number} sh 원본 height
 * @param {number} cw 컨테이너 width
 * @param {number} ch 컨테이너 height
 * @returns {DrawBound}
 */
export function sizeToContain(sw: number, sh: number, cw: number, ch: number): SizeDrawBound {
  const { maxWidth, maxHeight } = getSizeMax(sw, sh, cw, ch);
  let dx = 0;
  let dy = 0;
  let dw = 0;
  let dh = 0;
  const isLandscape = sh / ch <= sw / cw;
  if (isLandscape) {
    dw = Math.min(maxWidth, sw);
    dh = Math.floor((dw / sw) * sh);
  } else {
    dh = Math.min(maxHeight, sh);
    dw = Math.floor((dh / sh) * sw);
  }
  dx = (maxWidth - dw) * 0.5;
  dy = (maxHeight - dh) * 0.5;
  return { dx, dy, dw, dh };
}
