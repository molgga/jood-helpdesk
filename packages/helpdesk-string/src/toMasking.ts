/**
 * 마스킹 처리 방향
 */
export type MaskingDirection = 'start' | 'middle' | 'end' | 'justify';

/**
 * 마스킹 처리 옵션
 */
export interface MaskingOption {
  mask?: string;
  direction?: MaskingDirection;
  overflowMax?: number;
}

/**
 * 마스킹 처리
 * @param str 
 * @param options 
 * @example
  console.log(toMasking('a')); // 'a'
  console.log(toMasking('ab')); // 'a*'
  console.log(toMasking('abc')); // 'a**'
  console.log(toMasking('abcdefgh')); // '****efgh'
  console.log(toMasking('ab', { direction: 'middle' })); // 'a*'
  console.log(toMasking('abc', { direction: 'middle' })); // 'a*c'
  console.log(toMasking('abcdefgh', { direction: 'middle' })); // 'a******h'
  console.log(toMasking('ab', { direction: 'start' })); // '*b'
  console.log(toMasking('abc', { direction: 'start' })); // '*bc'
  console.log(toMasking('abcdefgh', { direction: 'start' })); // '****efgh'
  console.log(toMasking('ab', { direction: 'justify' })); // 'a*'
  console.log(toMasking('abc', { direction: 'justify' })); // '*b*'
  console.log(toMasking('abcdefgh', { direction: 'justify' })); // '**cdef**'
 */
export const toMasking = (str: string, options: MaskingOption = {}): string => {
  if (!str) return str;
  const { mask = '*', direction = 'end', overflowMax } = options;
  const minOverflow = 2;
  const strLen = str.length;
  let refine: string;
  if (minOverflow < strLen) {
    let overflowNum;
    let replaceReg;
    let justM: number;
    let justS: number;
    let justE: number;
    switch (direction) {
      case 'middle':
        refine = str.replace(/^(.)(.+)(.)$/g, (full, m1, m2, m3) => {
          return `${m1}${m2.replace(/./g, mask)}${m3}`;
        });
        break;
      case 'justify':
        justM = Math.floor(strLen / 2);
        justS = Math.ceil(justM / 2);
        justE = strLen - (justM + justS);
        replaceReg = new RegExp(`^(.{${justS}})(.{${justM}})(.{${justE}})$`, 'g');
        refine = str.replace(replaceReg, (full, m1, m2, m3) => {
          return `${m1.replace(/./g, mask)}${m2}${m3.replace(/./g, mask)}`;
        });
        break;
      case 'start':
        overflowNum = Math.floor(strLen / 2);
        replaceReg = new RegExp(`^(.{${overflowNum}})(.+)$`, 'g');
        refine = str.replace(replaceReg, (full, m1, m2) => {
          return `${m1.replace(/./g, mask)}${m2}`;
        });
        break;
      default:
        overflowNum = Math.floor(strLen / 2);
        if (overflowMax && overflowMax < overflowNum) {
          overflowNum = overflowMax;
        }
        replaceReg = new RegExp(`^(.{${overflowNum}})(.+)$`, 'g');
        refine = str.replace(replaceReg, (full, m1, m2) => {
          return `${m1}${m2.replace(/./g, mask)}`;
        });
        break;
    }
  } else {
    refine = str.replace(/^(.)(.+)$/g, (full, m1, m2) => {
      if (direction === 'start') {
        return `${m1.replace(/./g, mask)}${m2}`;
      } else {
        return `${m1}${m2.replace(/./g, mask)}`;
      }
    });
  }
  return refine;
};
