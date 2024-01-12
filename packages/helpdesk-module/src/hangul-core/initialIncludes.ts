import { initialExtract } from './initialExtract';

/**
 * 한글 초성 포함 여부를 확인합니다.
 * @param sourceStr
 * @param initials
 */
export const initialIncludes = (sourceStr: string, initials: string) => {
  const initialCompare = initialExtract(sourceStr).join('');
  return initialCompare.includes(initials);
};
