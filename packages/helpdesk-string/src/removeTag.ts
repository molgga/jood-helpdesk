import { replaceAll } from './replaceAll';

/**
 * 태그 문자열에서 태그를 모두 제거
 * @param tagText 소스 문자열
 * @param removeTabSpace 탭 문자를 제거할지 여부
 * @example
 * console.log(removeTag(`<div><h1>Complete beginners</h1> <h2>first steps</h2></div>`)); // "Complete beginners first steps"
 */
export const removeTag = (tagText: string, removeTabSpace = true) => {
  let refine = tagText.replace(/(<([^>]+)>)/gi, '');
  if (removeTabSpace) refine = replaceAll(refine, '\t', '');
  return refine;
};
