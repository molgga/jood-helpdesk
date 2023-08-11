/**
 * 마스킹 처리 옵션
 * @interface MaskingOptions
 * @property mask? {string} 마스킹 문자
 * @property maxShow? {number} 마스킹 되지 않는 최대 문자수
 */
export interface MaskingOptions {
  mask?: string;
  maxShow?: number;
}
