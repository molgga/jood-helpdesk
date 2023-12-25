/**
 * 콤마(,) 문자열을 배열로 반환
 * ex: "1,foo,bar" -> ['1','foo','bar']
 */
export const toStringsByComma = (str: string) => {
  return (str || '').split(',').filter((v) => !!v);
};
