import { isNumber } from '@jood/helpdesk-number';

/**
 * 가격 포맷 옵션
 * @interface CurrencyPriceOption
 * @property fixed? {number} 소숫점 까지 표시되어야 하는 경우 지정된 숫자만큼 표시. (예: fixed = 1 -> 99.0, fixed = 2 -> 99.00)
 * @property replaceChar? {string} 가격 표시 중간에 들어가 대치 문자
 */
export interface CurrencyPriceOption {
  fixed?: number;
  replaceChar?: string;
}

/**
 * 지정된 숫자(문자)를 가격 표시용 문자로 변경
 * (예: 1000 -> 1,000)
 * @param price 가격 문자 | 숫자
 * @param options 옵션
 * @example
 * console.log(toCurrencyFormat(1234)); // "1,234"
 * console.log(toCurrencyFormat(1234.9, { fixed: 2 })); // "1,234.90"
 */
export const toCurrencyFormat = (price: string | number, options: CurrencyPriceOption = {}): string | any => {
  if (!isNumber(price)) {
    return price;
  }
  const { fixed = 0, replaceChar = ',' } = options;
  const safeStr = String(price);
  const splits = safeStr.split('.');
  let refine = '';
  let decimal = '';
  let normal = splits[0];
  normal = Number(normal)
    .toFixed(1)
    .replace(/\d(?=(\d{3})+\.)/g, `$&${replaceChar}`);
  normal = normal.substring(0, normal.length - 2);

  const isZeroMinus = Number(price) < 0 && normal === '0';
  const hasPoint = /\./.test(safeStr);
  if (hasPoint) {
    decimal = splits[1];
  }

  if (0 < fixed) {
    const decimalLen = decimal.length;
    if (decimalLen < fixed) {
      const pad = Array.from(Array(fixed - decimalLen))
        .map(() => '0')
        .join('');
      decimal = `${decimal}${pad}`;
    } else {
      decimal = decimal.substring(0, fixed);
    }
    refine = `${normal}.${decimal}`;
  } else {
    refine = hasPoint ? `${normal}.${decimal}` : normal;
  }
  if (isZeroMinus) {
    refine = `-${refine}`;
  }
  return refine;
};
