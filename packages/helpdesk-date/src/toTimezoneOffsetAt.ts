/**
 * 지정된 시간(at)의 지정된 타임존(offset)을 더해 offset 타임존으로 Date 를 반환한다.
 * 한국의 timezoneOffset 은 -540 이다 offset 에 +540 을 해주면 다른 타임존에서 한국 시간으로 출력이 가능하다.
 * (크롬 개발자툴의 location 을 변경해서 확인)
 * @param at 시간
 * @param offset 계산될 타임존 (+540을 하면 한국 시간으로 출력이 가능하다)
 * @example
 * console.log(toTimezoneOffsetAt(new Date().getTime(), 540).toLocaleString()); // 타임존이 다른 위치(예: 런던)여도 한국 시간으로 출력된다.
 * console.log(new Date().toLocaleString()); // 예: 런던에서 호출했을때 해당 출력이 오전 7시라면 위의 출력은 오후 3시로 출력된다. // 시차가 8시간이다.
 */
export const toTimezoneOffsetAt = (at: number, offset: number = 540) => {
  const dateZone = new Date(at);
  const timezoneOffset = (dateZone.getTimezoneOffset() + offset) * 60 * 1000;
  return new Date(dateZone.getTime() + timezoneOffset);
};
