import { hexToRgb } from '../hexToRgb';

describe('helpdesk-color: hexToRgb', () => {
  test("hexToRgb", () => {
    expect(hexToRgb("#ff0000")).toEqual([255, 0, 0]);
    expect(hexToRgb("#ffff00")).toEqual([255, 255, 0]);
    expect(hexToRgb("#ffffff")).toEqual([255, 255, 255]);
    expect(hexToRgb("#12ff34")).toEqual([18, 255, 52]);
    expect(hexToRgb("#f00")).toEqual([255, 0, 0]);
    expect(hexToRgb("#ff0")).toEqual([255, 255, 0]);
    expect(hexToRgb("#fff")).toEqual([255, 255, 255]);
    expect(hexToRgb("#123")).toEqual([17, 34, 51]);
    expect(() => hexToRgb('')).toThrow();
  });
});
