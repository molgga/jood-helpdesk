import { isNumber } from '@jood/helpdesk-core';

interface CurrencyOption {
  locale?: string;
}

/**
 * 문자열 포맷팅 방식 보다 간결한 방식인 Number.toLocaleString(locale) 를 사용하고, 부동소수로 인해 생기는 문제를 보완한다.
 *  - 문제: Number(0.9999).toLocaleString(locale); // '0.9999' 가 아닌 '1' 이 나온다.
 *
 * # 사실 한국 금액으로 표시할때는 소수점을 고려할 필요가 없다.
 * # Intl.NumberFormat 를 사용하는것도 고려.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 */
export const toCurrency = (num: number, options?: CurrencyOption) => {
  if (!isNumber(num)) return num;
  const { locale = 'kr' } = options || {};
  const safeStr = String(num);
  const safeNums = safeStr.split('.');
  const normal = Number(safeNums[0]).toLocaleString(locale);
  const decimal = safeNums[1] || '';
  return normal + (decimal ? '.' + decimal : '');
};
