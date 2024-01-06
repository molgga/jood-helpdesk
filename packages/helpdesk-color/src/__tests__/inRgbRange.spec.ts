import { inRgbRange } from '../inRgbRange';

describe('helpdesk-color: inRgbRange', () => {
  test("inRgbRange", () => {
    let min = [200, 0, 0];
    let max = [255, 255, 0];
    expect(inRgbRange(min, max, 0)).toEqual([200, 0, 0]);
    expect(inRgbRange(min, max, 0.25)).toEqual([214, 64, 0]);
    expect(inRgbRange(min, max, 0.5)).toEqual([228, 128, 0]);
    expect(inRgbRange(min, max, 0.75)).toEqual([241, 191, 0]);
    expect(inRgbRange(min, max, 1)).toEqual([255, 255, 0]);
    min = [0, 0, 0];
    max = [255, 200, 0];
    expect(inRgbRange(min, max, 0)).toEqual([0, 0, 0]);
    expect(inRgbRange(min, max, 0.25)).toEqual([64, 50, 0]);
    expect(inRgbRange(min, max, 0.5)).toEqual([128, 100, 0]);
    expect(inRgbRange(min, max, 0.75)).toEqual([191, 150, 0]);
    expect(inRgbRange(min, max, 1)).toEqual([255, 200, 0]);
  });
});
