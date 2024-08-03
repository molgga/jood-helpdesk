/**
 * KeyboardEvent 의 keyCode deprecated 되어
 * KeyboardEvent 의 code, keyCode 둘 다 값을 비교하는 용도로 사용한다.
 */
export const matchKey = (option: { code: string; keyCode?: number; expectCode: string; expectKeyCode?: number }) => {
  const { code, keyCode, expectCode, expectKeyCode } = option;
  return code === expectCode || !!(keyCode && keyCode === expectKeyCode);
};

/**
 * 키보드 엔터 키코드 체크
 */
export const isKeyEnter = (code: string, keyCode?: number) => {
  return matchKey({ code, keyCode, expectCode: 'Enter', expectKeyCode: 13 });
};

/**
 * 키보드 Esc 키코드 체크
 */
export const isKeyEscape = (code: string, keyCode?: number) => {
  return matchKey({ code, keyCode, expectCode: 'Escpae', expectKeyCode: 27 });
};

/**
 * 키보드 Backspace 키코드 체크
 */
export const isKeyBackspace = (code: string, keyCode?: number) => {
  return matchKey({ code, keyCode, expectCode: 'Backspace', expectKeyCode: 8 });
};

/**
 * 키보드 좌측 화살표 키코드 체크
 */
export const isKeyArrowLeft = (code: string, keyCode?: number) => {
  return matchKey({ code, keyCode, expectCode: 'ArrowLeft', expectKeyCode: 37 });
};

/**
 * 키보드 우측 화살표 키코드 체크
 */
export const isKeyArrowRight = (code: string, keyCode?: number) => {
  return matchKey({ code, keyCode, expectCode: 'ArrowRight', expectKeyCode: 39 });
};

export default {
  isKeyEnter,
  isKeyEscape,
  isKeyBackspace,
  isKeyArrowLeft,
  isKeyArrowRight,
};
