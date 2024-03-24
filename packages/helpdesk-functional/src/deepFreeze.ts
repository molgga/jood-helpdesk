/**
 * Object.freeze deep
 * @see https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
 */
export function deepFreeze<T = any>(object: T): T {
  const propNames = Object.getOwnPropertyNames(object);
  for (let name of propNames) {
    let value = object[name];
    if (value && typeof value === 'object') {
      deepFreeze(value);
    }
  }
  return Object.freeze<T>(object);
}
