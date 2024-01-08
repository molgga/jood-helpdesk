import { toStringsByComma } from '../toStringsByComma';

describe('helpdesk-array: toStringsByComma', () => {
  test('toStringsByComma', () => {
    expect(toStringsByComma('1,2,3')).toEqual(['1','2','3']);
    expect(toStringsByComma('1,,3')).toEqual(['1','3']);
    expect(toStringsByComma('1,foo,bar')).toEqual(['1','foo', 'bar']);
    expect(toStringsByComma('1,null,3')).toEqual(['1','null','3']);
    expect(toStringsByComma('1,true,3')).toEqual(['1','true','3']);
    expect(toStringsByComma('1,true,false')).toEqual(['1','true','false']);
  });

  it('공백은 제외되어야 합니다.', () => {
    expect(toStringsByComma('1,,3')).toEqual(['1','3']);
  });

  it('null 은 문자열로 변환되어야 합니다.', () => {
    expect(toStringsByComma('1,null,3')).toEqual(['1','null','3']);
  });

  it('true, false 은 문자열로 변환되어야 합니다.', () => {
    expect(toStringsByComma('1,true,false')).toEqual(['1','true','false']);
  });
});