import { toNumbersByComma } from '../toNumbersByComma';

describe('helpdesk-array: toNumbersByComma', () => {
  test('toNumbersByComma', () => {
    expect(toNumbersByComma('1,2,3')).toEqual([1,2,3]);
    expect(toNumbersByComma('1,,3')).toEqual([1,3]);
    expect(toNumbersByComma('1,foo,3')).toEqual([1,3]);
    expect(toNumbersByComma('1,foo,null')).toEqual([1]);
    expect(toNumbersByComma('')).toEqual([]);
    expect(toNumbersByComma('null')).toEqual([]);
  });

  it('공백은 제외되어야 합니다.', () => {
    expect(toNumbersByComma('1,')).toEqual([1]);
  });

  it('null 은 제외되어야 합니다.', () => {
    expect(toNumbersByComma('1,null')).toEqual([1]);
  });

  it('숫자가 아닌것은 제외되어야 합니다.', () => {
    expect(toNumbersByComma('1,foo,null')).toEqual([1]);
  });
});