import {toCamelFromSnake } from '../toCamelFromSnake';

describe('helpdesk-string: toCamelFromSnake', () => {
  test('toCamelFromSnake', () => {
    expect(toCamelFromSnake('user_name')).toBe('userName');
    expect(toCamelFromSnake('user__name')).toBe('user_Name');
    expect(toCamelFromSnake('user_last_name')).toBe('userLastName');
  });
});
