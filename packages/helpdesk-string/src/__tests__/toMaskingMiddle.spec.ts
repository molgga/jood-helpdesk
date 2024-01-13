import { toMaskingMiddle } from '../toMaskingMiddle';

describe('helpdesk-string: toMaskingMiddle', () => {
  test('toMaskingMiddle', () => {
    expect(toMaskingMiddle('0')).toBe('0');
    expect(toMaskingMiddle('01')).toBe('0*');
    expect(toMaskingMiddle('012')).toBe('0**');
    expect(toMaskingMiddle('0123')).toBe('0**3');
    expect(toMaskingMiddle('01234')).toBe('0***4');
    expect(toMaskingMiddle('012345')).toBe('01***5');
    expect(toMaskingMiddle('0123456')).toBe('01****6');
    expect(toMaskingMiddle('01234567')).toBe('01****67');
    expect(toMaskingMiddle('012345678')).toBe('01*****78');
    expect(toMaskingMiddle('0123456789')).toBe('012*****89');
    expect(toMaskingMiddle('0', { maxShow: 2 })).toBe('0');
    expect(toMaskingMiddle('01', { maxShow: 2 })).toBe('0*');
    expect(toMaskingMiddle('012', { maxShow: 2 })).toBe('0**');
    expect(toMaskingMiddle('0123', { maxShow: 2 })).toBe('0**3');
    expect(toMaskingMiddle('01234', { maxShow: 2 })).toBe('0***4');
    expect(toMaskingMiddle('012345', { maxShow: 2 })).toBe('0****5');
    expect(toMaskingMiddle('0123456', { maxShow: 2 })).toBe('0*****6');
    expect(toMaskingMiddle('01234567', { maxShow: 2 })).toBe('0******7');
    expect(toMaskingMiddle('012345678', { maxShow: 2 })).toBe('0*******8');
    expect(toMaskingMiddle('0123456789', { maxShow: 2 })).toBe('0********9');
    expect(toMaskingMiddle('0', { maxShow: 3 })).toBe('0');
    expect(toMaskingMiddle('01', { maxShow: 3 })).toBe('0*');
    expect(toMaskingMiddle('012', { maxShow: 3 })).toBe('0**');
    expect(toMaskingMiddle('0123', { maxShow: 3 })).toBe('0**3');
    expect(toMaskingMiddle('01234', { maxShow: 3 })).toBe('0***4');
    expect(toMaskingMiddle('012345', { maxShow: 3 })).toBe('01***5');
    expect(toMaskingMiddle('0123456', { maxShow: 3 })).toBe('01****6');
    expect(toMaskingMiddle('01234567', { maxShow: 3 })).toBe('01*****7');
    expect(toMaskingMiddle('012345678', { maxShow: 3 })).toBe('01******8');
    expect(toMaskingMiddle('0123456789', { maxShow: 3 })).toBe('01*******9');
    expect(toMaskingMiddle('0', { maxShow: 4 })).toBe('0');
    expect(toMaskingMiddle('01', { maxShow: 4 })).toBe('0*');
    expect(toMaskingMiddle('012', { maxShow: 4 })).toBe('0**');
    expect(toMaskingMiddle('0123', { maxShow: 4 })).toBe('0**3');
    expect(toMaskingMiddle('01234', { maxShow: 4 })).toBe('0***4');
    expect(toMaskingMiddle('012345', { maxShow: 4 })).toBe('01***5');
    expect(toMaskingMiddle('0123456', { maxShow: 4 })).toBe('01****6');
    expect(toMaskingMiddle('01234567', { maxShow: 4 })).toBe('01****67');
    expect(toMaskingMiddle('012345678', { maxShow: 4 })).toBe('01*****78');
    expect(toMaskingMiddle('0123456789', { maxShow: 4 })).toBe('01******89');
    expect(toMaskingMiddle('0', { maxShow: 5 })).toBe('0');
    expect(toMaskingMiddle('01', { maxShow: 5 })).toBe('0*');
    expect(toMaskingMiddle('012', { maxShow: 5 })).toBe('0**');
    expect(toMaskingMiddle('0123', { maxShow: 5 })).toBe('0**3');
    expect(toMaskingMiddle('01234', { maxShow: 5 })).toBe('0***4');
    expect(toMaskingMiddle('012345', { maxShow: 5 })).toBe('01***5');
    expect(toMaskingMiddle('0123456', { maxShow: 5 })).toBe('01****6');
    expect(toMaskingMiddle('01234567', { maxShow: 5 })).toBe('01****67');
    expect(toMaskingMiddle('012345678', { maxShow: 5 })).toBe('01*****78');
    expect(toMaskingMiddle('0123456789', { maxShow: 5 })).toBe('012*****89');
    expect(toMaskingMiddle('0123456789', { maxShow: 6 })).toBe('012*****89');
    expect(toMaskingMiddle('0123456789', { maxShow: 7 })).toBe('012*****89');
    expect(toMaskingMiddle('0123456789', { maxShow: 8 })).toBe('012*****89');
    expect(toMaskingMiddle('0123456789', { maxShow: 9 })).toBe('012*****89');
  });
});