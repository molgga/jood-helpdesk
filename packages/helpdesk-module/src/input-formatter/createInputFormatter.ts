type FnHandleUpdated = (value: string) => void;

type FnFormatter = (value: string, prevValue?: string) => string;

interface FormatterConfig {
  caretMoveMinPosition?: number;
}

/**
 * 포맷터 만들기
 */
export const createInputFormatter = (config: FormatterConfig) => {
  const { caretMoveMinPosition = 1 } = config;

  const state = {
    value: '',
    downKey: '',
  };

  let targetInput: HTMLInputElement = null;
  let fnFormatter: FnFormatter = () => '';
  let fnUpldated: FnHandleUpdated = () => {};

  const onUpdated = (fn: FnHandleUpdated) => {
    fnUpldated = fn;
  };

  const executeUpdated = () => {
    fnUpldated(state.value);
  };

  const getValue = () => {
    return state.value;
  };

  const setValue = (value: string, prevFormatValue?: string) => {
    const prevValue = targetInput?.value || '';
    const caret = targetInput?.selectionStart || 0;
    const formatValue = fnFormatter(value || '', prevFormatValue);
    const isNotChanged = prevFormatValue === formatValue;
    state.value = formatValue;
    if (targetInput) {
      targetInput.value = formatValue;
    }

    let moveCaret = Math.max(caretMoveMinPosition, caret + (formatValue.length - prevValue.length));
    if (isNotChanged) {
      if (state.downKey === 'Backspace') {
        moveCaret = Math.max(0, moveCaret - 1);
      }
    }
    if (typeof requestAnimationFrame !== 'undefined') {
      requestAnimationFrame(() => {
        targetInput?.setSelectionRange(moveCaret, moveCaret);
        executeUpdated();
      });
    }
  };

  const setElement = (element: HTMLInputElement) => {
    targetInput = element;
  };

  const setFormatter = (formatter: FnFormatter) => {
    fnFormatter = formatter;
  };

  const toNumber = (value: string) => {
    return Number(value.replace(/[^0-9]/g, ''));
  };

  const handleKeydown = (evt: KeyboardEvent) => {
    state.downKey = evt.key;
  };

  const handleInput = (evt: Event) => {
    const target = evt.target as HTMLInputElement;
    setValue(target.value, state.value);
  };

  return {
    setElement,
    getValue,
    setValue,
    setFormatter,
    handleKeydown,
    handleInput,
    onUpdated,
    toNumber,
  };
};
