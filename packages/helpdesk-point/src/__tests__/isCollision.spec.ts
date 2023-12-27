import { isCollision } from '../isCollision';

describe('helpdesk-point: isCollision', () => {
  test("isCollision", () => {
    let one = { x: 0, y: 0, w: 100, h: 100 };
    let two = { x: 50, y: 50, w: 100, h: 100 };
    expect(isCollision(one, two)).toBe(true);
    one = { x: 0, y: 0, w: 100, h: 100 };
    two = { x: 99, y: 99, w: 100, h: 100 };
    expect(isCollision(one, two)).toBe(true);
    one = { x: 0, y: 0, w: 100, h: 100 };
    two = { x: 100, y: 100, w: 100, h: 100 };
    expect(isCollision(one, two)).toBe(false);
    one = { x: 0, y: 0, w: 100, h: 100 };
    two = { x: 150, y: 150, w: 100, h: 100 };
    expect(isCollision(one, two)).toBe(false);
    one = { x: 100, y: 100, w: 100, h: 100 };
    two = { x: 50, y: 50, w: 50, h: 50 };
    expect(isCollision(one, two)).toBe(false);
    one = { x: 100, y: 100, w: 100, h: 100 };
    two = { x: 50, y: 50, w: 100, h: 100 };
    expect(isCollision(one, two)).toBe(true);
  });
});
