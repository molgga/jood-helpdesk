import { isDate } from '../isDate';

describe('helpdesk-core: isDate', () => {
  test('isDate 확인', () => {
    expect(isDate(new Date())).toBe(true);
    expect(isDate(new Date('2023-12-31T01:59:33'))).toBe(true);
    expect(isDate(new Date('ABCD'))).toBe(false);
    expect(isDate(null)).toBe(false);
    expect(isDate(undefined)).toBe(false);
  });
});