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

  const setValue = (value: string) => {
    state.value = fnFormatter(value || '');
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
    const caret = target.selectionStart;
    const prevValue = target.value;
    const prevFormatValue = state.value;
    const formatValue = fnFormatter(target.value, prevFormatValue);
    const isNotChanged = prevFormatValue === formatValue;
    state.value = formatValue;
    target.value = formatValue;
    let moveCaret = Math.max(caretMoveMinPosition, caret + (formatValue.length - prevValue.length));
    if (isNotChanged) {
      if (state.downKey === 'Backspace') {
        moveCaret = Math.max(0, moveCaret - 1);
      }
    }
    requestAnimationFrame(() => {
      target.setSelectionRange(moveCaret, moveCaret);
      executeUpdated();
    });
  };

  return {
    getValue,
    setValue,
    setFormatter,
    handleKeydown,
    handleInput,
    onUpdated,
    toNumber,
  };
};
