import { isKeyEnter, isKeyEscape } from '../matchKeyCode';

describe('utils/code/matchKeyCode - isKeyEnter', () => {
  it('code 값이 맞으면 keyCode 값은 맞지 않아도 true 를 반환해야 합니다.', () => {
    expect(isKeyEnter('Enter', 13)).toBe(true);
    expect(isKeyEnter('Enter', 99)).toBe(true);
    expect(isKeyEnter('Enter', undefined)).toBe(true);
    expect(isKeyEnter('Enter', null)).toBe(true);
  });

  it('keyCode 를 지정하고 값이 맞으면 code 값은 맞지 않아도 true 를 반환해야 합니다.', () => {
    expect(isKeyEnter('unknown', 13)).toBe(true);
    expect(isKeyEnter(null, 13)).toBe(true);
    expect(isKeyEnter(undefined, 13)).toBe(true);
  });

  it('code 는 대소문자를 구별해야 합니다.', () => {
    expect(isKeyEnter('Enter')).toBe(true);
    expect(isKeyEnter('ENTER')).toBe(false);
    expect(isKeyEnter('enter')).toBe(false);
  });
});

describe('utils/code/matchKeyCode - isKeyEscape', () => {
  it('code 값이 맞으면 keyCode 값은 맞지 않아도 true 를 반환해야 합니다.', () => {
    expect(isKeyEscape('Escape', 27)).toBe(true);
    expect(isKeyEscape(undefined, 27)).toBe(true);
    expect(isKeyEscape('Enter', 27)).toBe(true);
    expect(isKeyEscape('Escape', undefined)).toBe(false);
  });
});
