import { toCamelFromKebab } from '../toCamelFromKebab';

describe('utils/string/toCamelFromKebab', () => {
  test('toCamelFromKebab', () => {
    expect(toCamelFromKebab('user-name')).toBe('userName');
    expect(toCamelFromKebab('user--name')).toBe('user-Name');
    expect(toCamelFromKebab('user-last-name')).toBe('userLastName');
  });
});
