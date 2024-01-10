import { toAtByYyyymmdd } from '../toAtByYyyymmdd';

describe('helpdesk-date: toAtByYyyymmdd', () => {
  it('YYYY-MM-DD 문자열이 at 시간으로 반환되어야 합니다.', () => {
    // 브라우저 환경 | 노드 환경 타임존 주의
    // 브라우저(한국)인 경우 at 시간은 +09:00 시간과 같음
    const at = new Date('2023-06-12T00:00:00+00:00').getTime(); 
    expect(toAtByYyyymmdd('2023-06-12')).toEqual(at);
  });

  it('시간까지 지정하는 경우 시간을 포함한 at 정보가 반환되어야 합니다.', () => {
    const at = new Date('2023-06-12T12:33:00+00:00').getTime(); 
    expect(toAtByYyyymmdd('2023-06-12T12:33:00+00:00')).toEqual(at);
  });
  
  it('Invalid Date 인 경우 null 을 반환해야 합니다.', () => {
    expect(toAtByYyyymmdd('')).toEqual(null);
    expect(toAtByYyyymmdd('foo')).toEqual(null);
    expect(toAtByYyyymmdd('2023-99-00')).toEqual(null);
    expect(toAtByYyyymmdd(null)).toEqual(null);
    expect(toAtByYyyymmdd(undefined)).toEqual(null);
  });
  
  it('YYYY-MM-DD HH:MM:SS인 경우 at 시간으로 반환되어야 합니다.', () => {
    const at = new Date('2023-06-12T13:23:33+00:00').getTime();
    expect(toAtByYyyymmdd('2023-06-12 13:23:33+00:00')).toEqual(at);
  });

});
