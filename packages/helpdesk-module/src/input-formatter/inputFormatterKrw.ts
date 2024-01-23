import { toCurrencyFormat } from '@jood/helpdesk-string';
import { createInputFormatter } from './createInputFormatter';

/**
 * input 가격 표기 포맷터
 */
export const inputFormatterKrw = () => {
  const { setFormatter, setElement, getValue, setValue, handleKeydown, handleInput, toNumber, onUpdated } = createInputFormatter({});

  setFormatter((value) => {
    return toCurrencyFormat((value || '').replace(/[^\d]/g, ''));
  });

  return {
    getValue,
    setValue,
    setElement,
    handleKeydown,
    handleInput,
    toNumber,
    onUpdated,
  };
};
