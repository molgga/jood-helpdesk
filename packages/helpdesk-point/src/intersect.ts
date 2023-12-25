import type { IntersectRange } from './types';

/**
 * 축 교차점 비교
 * one 의 { start, end } 와 other 의 { start, end } 를 비교
 * @param {IntersectRange} one
 * @param {IntersectRange} other
 * @returns {IntersectRange}
 * @example
 * intersect({ start: 0, end: 100 }, { start: 20, end: 120 }); // { start: 20,end: 100 }
 * intersect({ start: 120, end: 200 }, { start: 20, end: 120 }); // { start: 0, end: 0 }
 */
export function intersect(one: IntersectRange, other: IntersectRange): IntersectRange {
  if (other.end <= one.start || one.end <= other.start) {
    return { start: 0, end: 0 };
  }
  const start = Math.max(one.start, other.start);
  const end = Math.min(one.end, other.end);
  return { start, end };
}
