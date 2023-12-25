/**
 * 교차 범위
 * @export
 * @interface IntersectRange
 */
export interface IntersectRange {
  start: number;
  end: number;
}

/**
 * 충돌 영역 (교집합)
 * @export
 * @interface CollisionBound
 */
export interface CollisionBound {
  x: number;
  y: number;
  w: number;
  h: number;
}

/**
 * 사이즈 정보
 */
export interface SizeDrawBound {
  dx: number;
  dy: number;
  dw: number;
  dh: number;
}

interface ToSizeMax {
  maxWidth: number;
  maxHeight: number;
}

export function getSizeMax(sw: number, sh: number, cw: number, ch: number): ToSizeMax {
  let maxWidth = cw;
  let maxHeight = ch;
  if (cw <= 0 && ch <= 0) {
    maxWidth = sw;
    maxHeight = sh;
  } else if (cw <= 0) {
    maxWidth = maxHeight;
  } else if (ch <= 0) {
    maxHeight = maxWidth;
  }
  return { maxWidth, maxHeight };
}
