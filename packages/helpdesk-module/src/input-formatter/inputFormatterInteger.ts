import { createInputFormatter } from './createInputFormatter';

/**
 * input 숫자만 표기 포맷터
 */
export const inputFormatterInteger = (options?: { max: number }) => {
  const { setFormatter, getValue, setValue, handleKeydown, handleInput, toNumber, onUpdated } = createInputFormatter({});

  setFormatter((value) => {
    const safeValue = (value || '').replace(/[^0-9]/g, '');
    let calc = Number(safeValue);
    if (0 < options?.max) {
      calc = Math.min(options.max, calc);
    }
    return calc.toString();
  });

  return {
    getValue,
    setValue,
    handleKeydown,
    handleInput,
    toNumber,
    onUpdated,
  };
};
