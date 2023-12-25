import type { IntersectRange } from './types';
import { intersect } from './intersect';

/**
 * intersect 를 이용해 축 hitTest
 * @param {IntersectRange} one
 * @param {IntersectRange} other
 * @returns {boolean}
 * @example
 * isIntersect({ start: 0, end: 100 }, { start: 20, end: 120 }); // true
 * isIntersect({ start: 120, end: 200 }, { start: 20, end: 120 }); // true
 */
export function isIntersect(one: IntersectRange, other: IntersectRange): boolean {
  const sect = intersect(one, other);
  return sect.start !== 0 || sect.end !== 0;
}
