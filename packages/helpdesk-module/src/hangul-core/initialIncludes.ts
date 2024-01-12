import { initialExtract } from './initialExtract';

export const initialIncludes = (sourceStr: string, initials: string) => {
  const initialCompare = initialExtract(sourceStr).join('');
  return initialCompare.includes(initials);
};
