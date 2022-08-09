import { toMasking } from '../toMasking';

describe('toMasking', () => {
  test('default', () => {
    expect(toMasking('a')).toBe('a');
    expect(toMasking('ab')).toBe('a*');
    expect(toMasking('abc')).toBe('a**');
    expect(toMasking('abcdefgh')).toBe('abcd****');
  });

  test('options - direction: start', () => {
    expect(toMasking('ab', { direction: 'start' })).toBe('*b');
    expect(toMasking('abc', { direction: 'start' })).toBe('*bc');
    expect(toMasking('abcdefgh', { direction: 'start' })).toBe('****efgh');
  });

  test('options - direction: middle', () => {
    expect(toMasking('ab', { direction: 'middle' })).toBe('a*');
    expect(toMasking('abc', { direction: 'middle' })).toBe('a*c');
    expect(toMasking('abcdefgh', { direction: 'middle' })).toBe('a******h');
  });

  test('options - direction: justify', () => {
    expect(toMasking('ab', { direction: 'justify' })).toBe('a*');
    expect(toMasking('abc', { direction: 'justify' })).toBe('*b*');
    expect(toMasking('abcdefgh', { direction: 'justify' })).toBe('**cdef**');
  });

  test('options - mask', () => {
    expect(toMasking('abcdefgh', { mask: '#' })).toBe('abcd####');
    expect(toMasking('abc', { mask: '#' })).toBe('a##');
    expect(toMasking('abc', { mask: '#', direction: 'start' })).toBe('#bc');
    expect(toMasking('abc', { mask: '#', direction: 'middle' })).toBe('a#c');
    expect(toMasking('abc', { mask: '#', direction: 'justify' })).toBe('#b#');
  });

  test('options - overflowMax', () => {
    expect(toMasking('abcdefgh', { overflowMax: 2 })).toBe('ab******');
    expect(toMasking('abcdefgh', { overflowMax: 3 })).toBe('abc*****');
    expect(toMasking('abcdefgh', { overflowMax: 4 })).toBe('abcd****');
  });
});
