/**
 * 콤마(,) 문자열을 배열로 반환합니다.
 * ex: "1,foo,bar" -> ['1','foo','bar']
 */
export const toStringsByComma = (source: string) => {
  return (source || '').split(',').filter((v) => !!v);
};
