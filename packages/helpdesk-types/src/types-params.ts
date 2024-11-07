/**
 * 함수의 첫번째 타입 유추
 */
export type ExtractParamType<T> = T extends (param: infer Param) => unknown ? Param : unknown;

/**
 * 함수의 args 타입 유추
 */
export type ExtractArgsType<T> = T extends (...args: infer Args) => unknown ? Args : unknown;

/**
@TODO - 예제

function someFunc1(props: { foo: number; bar: string }) {}

function someFunc2(
  p1: { foo: number; bar: string },
  p2: number,
  p3?: string[]
) {}

type T1 = ExtractParamType<typeof someFunc1>;
type T2 = ExtractArgumentsType<typeof someFunc2>;

function myFunc1(param: T1) {
  // const { foo, bar } = param;
}
myFunc1({ foo: 1, bar: '' });

function myFunc2(...args: T2) {
  // const { foo, bar } = args[0];
  // const num = args[1]; // number
  // const str = args[2]; // string[] | undefined
}
myFunc2({ foo: 1, bar: '' }, 99, ['a', 'b']);

function myFunc3(p3: T2[2]) {
  // const str = p3; // string[] | undefined
}
myFunc3(['a', 'b']);
*/
