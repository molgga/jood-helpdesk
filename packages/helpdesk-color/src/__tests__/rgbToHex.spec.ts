import { rgbToHex } from '../rgbToHex';

describe('helpdesk-color: rgbToHex', () => {
  test("rgbToHex", () => {
    expect(rgbToHex([255, 0, 0])).toBe("#ff0000");
    expect(rgbToHex([12, 0, 0])).toBe("#0c0000");
    expect(rgbToHex([12, 12, 12])).toBe("#0c0c0c");
    expect(rgbToHex([16, 17, 18])).toBe("#101112");
  });
});
