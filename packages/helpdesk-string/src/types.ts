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
