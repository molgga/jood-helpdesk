import { defineConfig } from 'vitepress';
import path from 'path';
import { fileURLToPath, URL } from 'node:url';

const IS_BUILD = process.env.BUILD;

const sidebar = [
  {
    text: 'Introduction',
    items: [{ text: '개요', link: '/index' }],
  },
  {
    text: '@jood/helpdesk-date',
    items: [
      { text: 'isDate', link: '/date/isDate' },
      { text: 'toAtByYyyymmdd', link: '/date/toAtByYyyymmdd' },
      { text: 'toBeLeft', link: '/date/toBeLeft' },
      { text: 'toFormat', link: '/date/toFormat' },
      { text: 'toFormat 심화', link: '/date/toFormat__2' },
      { text: 'toLeadingTime', link: '/date/toLeadingTime' },
      { text: 'toDiffHMS', link: '/date/toDiffHMS' },
      { text: 'toDiffHMS 심화', link: '/date/toDiffHMS__2' },
      { text: 'toPast', link: '/date/toPast' },
      { text: 'toPast 심화', link: '/date/toPast__2' },
      { text: 'toTimezoneOffsetAt', link: '/date/toTimezoneOffsetAt' },
      { text: 'toYyyymmddByAt', link: '/date/toYyyymmddByAt' },
    ],
  },
  {
    text: '@jood/helpdesk-timer',
    items: [
      { text: 'SecondTimer', link: '/timer/SecondTimer' },
      { text: 'MinuteTimer', link: '/timer/MinuteTimer' },
      { text: 'Timer 심화', link: '/timer/Timer__advance' },
    ],
  },
  {
    text: '@jood/helpdesk-number',
    items: [
      { text: 'getRandomizer', link: '/number/getRandomizer' },
      { text: 'isNumber', link: '/number/isNumber' },
      { text: 'randomRangeFloat', link: '/number/randomRangeFloat' },
      { text: 'randomRangeInt', link: '/number/randomRangeInt' },
      { text: 'toKoreanLabelNumber', link: '/number/toKoreanLabelNumber' },
      { text: 'toKoreanLabelNumberFormat', link: '/number/toKoreanLabelNumberFormat' },
    ],
  },
  {
    text: '@jood/helpdesk-string',
    items: [
      { text: 'collapseMutiline', link: '/string/collapseMutiline' },
      { text: 'escape', link: '/string/escape' },
      { text: 'insert', link: '/string/insert' },
      { text: 'leadingTime', link: '/string/leadingTime' },
      { text: 'padEnd', link: '/string/padEnd' },
      { text: 'padStart', link: '/string/padStart' },
      { text: 'refineSafeHtmlText', link: '/string/refineSafeHtmlText' },
      { text: 'refineWhitespace', link: '/string/refineWhitespace' },
      { text: 'removeTag', link: '/string/removeTag' },
      { text: 'replaceAll', link: '/string/replaceAll' },
      { text: 'toCamelFromKebab', link: '/string/toCamelFromKebab' },
      { text: 'toCamelFromSnake', link: '/string/toCamelFromSnake' },
      { text: 'toCurrency', link: '/string/toCurrency' },
      { text: 'toCurrencyFormat', link: '/string/toCurrencyFormat' },
      { text: 'toEllipsisEnd', link: '/string/toEllipsisEnd' },
      { text: 'toEllipsisMiddle', link: '/string/toEllipsisMiddle' },
      { text: 'toMasking', link: '/string/toMasking' },
      { text: 'toMaskingFirst', link: '/string/toMaskingFirst' },
      { text: 'toMaskingJustify', link: '/string/toMaskingJustify' },
      { text: 'toMaskingLast', link: '/string/toMaskingLast' },
      { text: 'toMaskingMiddle', link: '/string/toMaskingMiddle' },
      { text: 'toUpperCaseHead', link: '/string/toUpperCaseHead' },
      { text: 'toWordArray', link: '/string/toWordArray' },
      { text: 'trimEnd', link: '/string/trimEnd' },
      { text: 'trimStart', link: '/string/trimStart' },
    ],
  },
  {
    text: '@jood/helpdesk-point',
    items: [
      { text: 'intersect', link: '/point/intersect' },
      { text: 'isCollision', link: '/point/isCollision' },
      { text: 'isIntersect', link: '/point/isIntersect' },
      { text: 'sizeToContain', link: '/point/sizeToContain' },
      { text: 'sizeToCover', link: '/point/sizeToCover' },
    ],
  },
  {
    text: '@jood/helpdesk-functional',
    items: [
      { text: 'debounce', link: '/functional/debounce' },
      { text: 'throttle', link: '/functional/throttle' },
      { text: 'delay', link: '/functional/delay' },
    ],
  },
];

export default defineConfig({
  vite: {
    resolve: {
      alias: [
        {
          find: '@jood/helpdesk-module/',
          replacement: fileURLToPath(new URL('../../../packages/helpdesk-module/src/', import.meta.url)),
        },
      ],
    },
  },
  base: IS_BUILD ? '/jood-helpdesk' : '', // https://molgga.github.io/jood-helpdesk/,
  themeConfig: {
    siteTitle: 'jood-helpdesk',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/molgga/jood-helpdesk' },
    ],
    sidebar,
  },
});
