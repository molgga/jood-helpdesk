import { fileURLToPath, URL } from 'node:url';

const IS_BUILD = process.env.BUILD;

const sidebar = [
  {
    text: 'Introduction',
    items: [{ text: '개요', link: '/index' }],
  },
  {
    text: '@jood/helpdesk-array',
    items: [
      { text: 'availableOr', link: '/array/availableOr' },
      { text: 'distinct', link: '/array/distinct' },
      { text: 'extract', link: '/array/extract' },
      { text: 'insert', link: '/array/insert' },
      { text: 'shuffle', link: '/array/shuffle' },
      { text: 'tail', link: '/array/tail' },
      { text: 'toNumbersByComma', link: '/array/toNumbersByComma' },
      { text: 'toStringsByComma', link: '/array/toStringsByComma' },
      { text: 'transposeRow', link: '/array/transposeRow' },
      { text: 'transposeRowFilter', link: '/array/transposeRowFilter' },
      { text: 'uniqueFilter', link: '/array/uniqueFilter' },
    ],
  },
  {
    text: '@jood/helpdesk-date',
    items: [
      { text: 'isDate', link: '/date/isDate' },
      { text: 'toBeLeft', link: '/date/toBeLeft' },
      { text: 'toFormat', link: '/date/toFormat' },
      { text: 'toFormat 심화', link: '/date/toFormat__2' },
      { text: 'toLeadingTime', link: '/date/toLeadingTime' },
      { text: 'toDiffHMS', link: '/date/toDiffHMS' },
      { text: 'toDiffHMS 심화', link: '/date/toDiffHMS__2' },
      { text: 'toPast', link: '/date/toPast' },
      { text: 'toPast 심화', link: '/date/toPast__2' },
      { text: 'toTimezoneOffsetAt', link: '/date/toTimezoneOffsetAt' },
      { text: 'toAtByYyyymmdd', link: '/date/toAtByYyyymmdd' },
      { text: 'toYyyymmddByAt', link: '/date/toYyyymmddByAt' },
    ],
  },
  {
    text: '@jood/helpdesk-color',
    items: [
      { text: 'hexToRgb', link: '/color/hexToRgb' },
      { text: 'rgbToHex', link: '/color/rgbToHex' },
      { text: 'inHexRange', link: '/color/inHexRange' },
      { text: 'inRgbRange', link: '/color/inRgbRange' },
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
    text: '@jood/helpdesk-module',
    items: [
      {
        text: 'timer',
        items: [
          { text: 'SecondTimer', link: '/module/timer/SecondTimer' },
          { text: 'MinuteTimer', link: '/module/timer/MinuteTimer' },
          { text: 'Timer 심화', link: '/module/timer/Timer__advance' },
        ],
      },
      {
        text: 'browser-scroll',
        items: [
          { text: 'BrowserScroll', link: '/module/browser-scroll/BrowserScroll' },
          { text: 'DomScroll', link: '/module/browser-scroll/DomScroll' },
        ],
      },
      {
        text: 'storage-archive',
        items: [
          { text: 'ArchiveData', link: '/module/storage-archive/ArchiveData' },
          { text: 'ArchiveList', link: '/module/storage-archive/ArchiveList' },
        ],
      },
      {
        text: 'hangul-core',
        items: [
          { text: 'characterToken', link: '/module/hangul-core/characterToken' },
          { text: 'characterMatrixt', link: '/module/hangul-core/characterMatrixt' },
          { text: 'typingToken', link: '/module/hangul-core/typingToken' },
          { text: 'typingMatrix', link: '/module/hangul-core/typingMatrix' },
          { text: 'initialExtract', link: '/module/hangul-core/initialExtract' },
          { text: 'initialIncludes', link: '/module/hangul-core/initialIncludes' },
        ],
      },
      {
        text: 'hangul-typist',
        items: [{ text: '한글 타이핑 애니메이션', link: '/module/hangul-typist/index' }],
      },
      {
        text: 'input-formatter',
        items: [
          { text: 'input 가격 입력 포맷터', link: '/module/input-formatter/inputFormatterKrw' },
          { text: 'input 핸드폰 입력 포맷터', link: '/module/input-formatter/inputFormatterPhone' },
        ],
      },
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
];

export default {
  title: '@jood/helpdesk',
  vite: {
    resolve: {
      alias: [
        {
          find: '@jood/helpdesk-array',
          replacement: fileURLToPath(new URL('../../../packages/helpdesk-array/src', import.meta.url)),
        },
        {
          find: '@jood/helpdesk-color',
          replacement: fileURLToPath(new URL('../../../packages/helpdesk-color/src', import.meta.url)),
        },
        {
          find: '@jood/helpdesk-core',
          replacement: fileURLToPath(new URL('../../../packages/helpdesk-core/src', import.meta.url)),
        },
        {
          find: '@jood/helpdesk-date',
          replacement: fileURLToPath(new URL('../../../packages/helpdesk-date/src', import.meta.url)),
        },
        {
          find: '@jood/helpdesk-functional',
          replacement: fileURLToPath(new URL('../../../packages/helpdesk-functional/src', import.meta.url)),
        },
        {
          find: '@jood/helpdesk-number',
          replacement: fileURLToPath(new URL('../../../packages/helpdesk-number/src', import.meta.url)),
        },
        {
          find: '@jood/helpdesk-point',
          replacement: fileURLToPath(new URL('../../../packages/helpdesk-point/src', import.meta.url)),
        },
        {
          find: '@jood/helpdesk-string',
          replacement: fileURLToPath(new URL('../../../packages/helpdesk-string/src', import.meta.url)),
        },

        // sub 모듈
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
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
};
