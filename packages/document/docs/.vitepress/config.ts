import path from 'path';

const IS_BUILD = process.env.BUILD;

const sidebar = [
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

(() => {
  if (!IS_BUILD) {
    sidebar.push({
      text: 'vitepress-example',
      items: [{ text: 'example', link: '/example/index' }],
    });
  }
})();

export default {
  vite: {
    resolve: {
      alias: {
        '@jood/helpdesk-core': path.resolve(__dirname, '../../../helpdesk-core/src'),
        '@jood/helpdesk-date': path.resolve(__dirname, '../../../helpdesk-date/src'),
        '@jood/helpdesk-storage': path.resolve(__dirname, '../../../helpdesk-storage/src'),
        '@jood/helpdesk-string': path.resolve(__dirname, '../../../helpdesk-string/src'),
        '@jood/helpdesk-timer': path.resolve(__dirname, '../../../helpdesk-timer/src'),
      },
    },
  },
  base: IS_BUILD ? '/jood-helpdesk' : '', // https://molgga.github.io/jood-helpdesk/
  themeConfig: {
    siteTitle: 'jood-helpdesk',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/molgga/jood-helpdesk' },
    ],
    sidebar,
  },
};
