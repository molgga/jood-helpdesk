import { toYyyymmddByAt } from '../toYyyymmddByAt';

describe('helpdesk-date: toYyyymmddByAt', () => {
  it('at 시간이 YYYY-MM-DD 로 반환되어야 합니다.', () => {
    const at = new Date('2023-06-12T13:23:33+00:00').getTime();
    expect(toYyyymmddByAt(at)).toEqual('2023-06-12');
  });

  it('Invalid Date 인 경우 공백을 반환해야 합니다.', () => {
    const at = new Date('abcde').getTime();
    expect(toYyyymmddByAt(at)).toEqual('');
    expect(toYyyymmddByAt(null)).toEqual('');
    expect(toYyyymmddByAt(undefined)).toEqual('');
  });

  it('partition 옵션을 지정하지 않으면 "-"으로 들어가야 합니다.', () => {
    const at = new Date('2023-06-12T13:23:33+00:00').getTime();
    expect(toYyyymmddByAt(at)).toEqual('2023-06-12');
  });

  it('partition 옵션은 치환될 날짜 사이 문자로 들어가야 합니다.', () => {
    const at = new Date('2023-06-12T13:23:33+00:00').getTime();
    expect(toYyyymmddByAt(at, { partition: '.' })).toEqual('2023.06.12');
    expect(toYyyymmddByAt(at, { partition: '@' })).toEqual('2023@06@12');
    expect(toYyyymmddByAt(at, { partition: '###' })).toEqual('2023###06###12');
  });
});
