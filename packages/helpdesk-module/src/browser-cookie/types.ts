/**
 */
export interface CookieData {
  name: string;
  value: any;
  expires?: number | Date;
  path?: string;
  domain?: string;
  secure?: boolean;
}
