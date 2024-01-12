import { KR_SOURCE_FIRST } from './types';
import { typingMatrix } from './typingMatrix';

/**
 * 한글 초성만 추출합니다.
 * @param sourceStr
 */
export const initialExtract = (sourceStr: string) => {
  return typingMatrix(sourceStr)
    .map((row) => row[0])
    .filter((v) => KR_SOURCE_FIRST.includes(v));
};
