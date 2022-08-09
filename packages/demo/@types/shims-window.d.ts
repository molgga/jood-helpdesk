// @see https://github.com/microsoft/TypeScript/issues/33128
export {};
declare global {
  interface Window {
    [key: string]: any;
  }
}
