import type { CollisionBound } from './types';
import { isIntersect } from './isIntersect';

/**
 * intersect 를 이용해 면 hitTest
 * @param {CollisionBound} one
 * @param {CollisionBound} other
 * @returns {boolean}
 * @example
 * let one = { x: 0, y: 0, w: 100, h: 100 };
 * let two = { x: 50, y: 50, w: 100, h: 100 };
 * isCollision(one, two); // true
 * one = { x: 0, y: 0, w: 100, h: 100 };
 * two = { x: 100, y: 100, w: 100, h: 100 };
 * isCollision(one, two)); // false
 */
export function isCollision(one: CollisionBound, other: CollisionBound): boolean {
  const hitX = isIntersect(
    { start: one.x, end: one.x + one.w },
    { start: other.x, end: other.x + other.w }
  );
  const hitY = isIntersect(
    { start: one.y, end: one.y + one.h },
    { start: other.y, end: other.y + other.h }
  );
  return hitX && hitY;
}
