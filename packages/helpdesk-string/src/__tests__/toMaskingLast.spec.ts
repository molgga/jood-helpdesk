import { toMaskingLast } from '../toMaskingLast';

describe('helpdesk-string: toMaskingLast', () => {
  test('toMaskingLast', () => {
    expect(toMaskingLast('0')).toBe('0');
    expect(toMaskingLast('01')).toBe('0*');
    expect(toMaskingLast('012')).toBe('0**');
    expect(toMaskingLast('0123')).toBe('01**');
    expect(toMaskingLast('01234')).toBe('01***');
    expect(toMaskingLast('012345')).toBe('012***');
    expect(toMaskingLast('0123456')).toBe('012****');
    expect(toMaskingLast('01234567')).toBe('0123****');
    expect(toMaskingLast('012345678')).toBe('0123*****');
    expect(toMaskingLast('0123456789')).toBe('01234*****');
    expect(toMaskingLast('0', { maxShow: 2 })).toBe('0');
    expect(toMaskingLast('01', { maxShow: 2 })).toBe('0*');
    expect(toMaskingLast('012', { maxShow: 2 })).toBe('0**');
    expect(toMaskingLast('0123', { maxShow: 2 })).toBe('01**');
    expect(toMaskingLast('01234', { maxShow: 2 })).toBe('01***');
    expect(toMaskingLast('012345', { maxShow: 2 })).toBe('01****');
    expect(toMaskingLast('0123456', { maxShow: 2 })).toBe('01*****');
    expect(toMaskingLast('01234567', { maxShow: 2 })).toBe('01******');
    expect(toMaskingLast('012345678', { maxShow: 2 })).toBe('01*******');
    expect(toMaskingLast('0123456789', { maxShow: 2 })).toBe('01********');
    expect(toMaskingLast('0', { maxShow: 3 })).toBe('0');
    expect(toMaskingLast('01', { maxShow: 3 })).toBe('0*');
    expect(toMaskingLast('012', { maxShow: 3 })).toBe('0**');
    expect(toMaskingLast('0123', { maxShow: 3 })).toBe('01**');
    expect(toMaskingLast('01234', { maxShow: 3 })).toBe('01***');
    expect(toMaskingLast('012345', { maxShow: 3 })).toBe('012***');
    expect(toMaskingLast('0123456', { maxShow: 3 })).toBe('012****');
    expect(toMaskingLast('01234567', { maxShow: 3 })).toBe('012*****');
    expect(toMaskingLast('012345678', { maxShow: 3 })).toBe('012******');
    expect(toMaskingLast('0123456789', { maxShow: 3 })).toBe('012*******');
    expect(toMaskingLast('0', { maxShow: 4 })).toBe('0');
    expect(toMaskingLast('01', { maxShow: 4 })).toBe('0*');
    expect(toMaskingLast('012', { maxShow: 4 })).toBe('0**');
    expect(toMaskingLast('0123', { maxShow: 4 })).toBe('01**');
    expect(toMaskingLast('01234', { maxShow: 4 })).toBe('01***');
    expect(toMaskingLast('012345', { maxShow: 4 })).toBe('012***');
    expect(toMaskingLast('0123456', { maxShow: 4 })).toBe('012****');
    expect(toMaskingLast('01234567', { maxShow: 4 })).toBe('0123****');
    expect(toMaskingLast('012345678', { maxShow: 4 })).toBe('0123*****');
    expect(toMaskingLast('0123456789', { maxShow: 4 })).toBe('0123******');
    expect(toMaskingLast('0', { maxShow: 5 })).toBe('0');
    expect(toMaskingLast('01', { maxShow: 5 })).toBe('0*');
    expect(toMaskingLast('012', { maxShow: 5 })).toBe('0**');
    expect(toMaskingLast('0123', { maxShow: 5 })).toBe('01**');
    expect(toMaskingLast('01234', { maxShow: 5 })).toBe('01***');
    expect(toMaskingLast('012345', { maxShow: 5 })).toBe('012***');
    expect(toMaskingLast('0123456', { maxShow: 5 })).toBe('012****');
    expect(toMaskingLast('01234567', { maxShow: 5 })).toBe('0123****');
    expect(toMaskingLast('012345678', { maxShow: 5 })).toBe('0123*****');
    expect(toMaskingLast('0123456789', { maxShow: 5 })).toBe('01234*****');
    expect(toMaskingLast('0123456789', { maxShow: 6 })).toBe('01234*****');
    expect(toMaskingLast('0123456789', { maxShow: 7 })).toBe('01234*****');
    expect(toMaskingLast('0123456789', { maxShow: 8 })).toBe('01234*****');
    expect(toMaskingLast('0123456789', { maxShow: 9 })).toBe('01234*****');
  });
});