import { createInputFormatter } from './createInputFormatter';

/**
 * input (한국)핸드폰 번호 표기 포맷터
 */
export const inputFormatterPhone = () => {
  const { setFormatter, getValue, setValue, handleKeydown, handleInput, onUpdated } = createInputFormatter({});

  setFormatter((value, prevValue) => {
    const safeValue = value || '';
    const hasDash = /\-/.test(safeValue);
    const comareLen1 = hasDash ? 13 : 11;
    const comareLen2 = hasDash ? 12 : 10;
    const isReg13 = comareLen1 <= safeValue.length && (prevValue === undefined || comareLen2 <= prevValue?.length);
    const regDash = isReg13 ? /(\d{0,3})(\d{0,4})(\d{0,4})/ : /(\d{0,3})(\d{0,3})(\d{0,4})/;
    console.log(isReg13);
    let result = safeValue
      .replace(/[^0-9]/g, '')
      .replace(regDash, '$1-$2-$3')
      .replace(/-+$/g, '');
    const doubtBackDash13 = prevValue?.length === comareLen1 && result.split('-').some((v) => 4 < v.length);
    if (doubtBackDash13) result = prevValue;
    return result;
  });

  return {
    getValue,
    setValue,
    handleKeydown,
    handleInput,
    onUpdated,
  };
};
