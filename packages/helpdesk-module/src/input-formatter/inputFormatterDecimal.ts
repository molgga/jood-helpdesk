import { createInputFormatter } from './createInputFormatter';

/**
 * input 소수점 표기 포맷터
 */
export const inputFormatterDecimal = (options?: { max: number }) => {
  const { setFormatter, setElement, getValue, setValue, handleKeydown, handleInput, toNumber, onUpdated } = createInputFormatter({});

  setFormatter((value) => {
    const safeValue = (value || '').replace(/[^0-9\.]/g, '');
    const refine: string[] = [];
    const dots = safeValue.split('.');
    const intValue = dots[0];

    if (0 < safeValue.length && intValue === '') {
      // 쩜 칙혔는데, 맨 앞이 공백이면
      dots[0] = '0';
    } else if (1 < intValue.length && /^0/.test(intValue)) {
      // "0n" 과 같을 때 "0" 제거
      const firstNum = intValue.split('');
      firstNum.shift();
      dots[0] = firstNum.join('');
    }
    // 점 맨앞에 1개만 살리고 정리
    if (2 < dots.length) {
      refine.push(dots[0]);
      const tail = [...dots].filter((v) => v !== '.');
      tail.shift();
      refine.push(tail.join(''));
    } else {
      refine.push(...dots);
    }
    let calc: string = refine.join('.');
    if (0 < options?.max) {
      const lastDot = /(\.[0]*)$/.exec(calc);
      calc = Math.min(options.max, Number(calc)).toString();
      if (0 < lastDot?.length) {
        calc = calc + lastDot[0];
      }
    }
    return calc;
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
