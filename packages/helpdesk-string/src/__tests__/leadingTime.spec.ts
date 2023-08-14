import { leadingTime } from '../leadingTime';

describe('helpdesk-string: leadingTime', () => {
  test('leadingTime', () => {
    expect(leadingTime(0)).toBe('00');
    expect(leadingTime(5)).toBe('05');
    expect(leadingTime(10)).toBe('10');
    expect(leadingTime('0')).toBe('00');
    expect(leadingTime('5')).toBe('05');
    expect(leadingTime('10')).toBe('10');
    expect(leadingTime('00')).toBe('00');
    expect(leadingTime(-1)).toBe('-1');
  });
});
