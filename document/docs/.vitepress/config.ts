import path from 'path';

const IS_BUILD = process.env.BUILD;

const sidebar = [
  {
    text: 'Introduction',
    items: [{ text: '개요', link: '/index' }],
  },
  {
    text: '@jood/helpdesk-date',
    items: [
      { text: 'toDiffHMS', link: '/date/to-diff-hms' },
      { text: 'toPast', link: '/date/to-past' },
    ],
  },
  {
    text: '@jood/helpdesk-timer',
    items: [{ text: '시작하기', link: '/timer/getting-started' }],
  },
];

export default {
  vite: {
    resolve: {
      alias: {
        '@jood/helpdesk-core': path.resolve(__dirname, '../../../packages/helpdesk-core/src'),
        '@jood/helpdesk-date': path.resolve(__dirname, '../../../packages/helpdesk-date/src'),
        '@jood/helpdesk-number': path.resolve(__dirname, '../../../packages/helpdesk-number/src'),
        '@jood/helpdesk-storage': path.resolve(__dirname, '../../../packages/helpdesk-storage/src'),
        '@jood/helpdesk-string': path.resolve(__dirname, '../../../packages/helpdesk-string/src'),
        '@jood/helpdesk-timer': path.resolve(__dirname, '../../../packages/helpdesk-timer/src'),
      },
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
};
