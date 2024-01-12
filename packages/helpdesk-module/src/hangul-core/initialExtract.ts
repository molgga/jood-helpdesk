import { KR_SOURCE_FIRST } from './types';
import { typingMatrix } from './typingMatrix';

export const initialExtract = (sourceStr: string) => {
  return typingMatrix(sourceStr)
    .map((row) => row[0])
    .filter((v) => KR_SOURCE_FIRST.includes(v));
};
