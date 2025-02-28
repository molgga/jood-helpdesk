// dom 의 offset 절대위치 반환
export const getElementOffset = (dom: HTMLElement) => {
  let element = dom;
  let top = 0;
  let left = 0;
  do {
    top += element.offsetTop || 0;
    left += element.offsetLeft || 0;
    element = element.offsetParent as HTMLElement;
  } while (element);
  return { top, left };
};
