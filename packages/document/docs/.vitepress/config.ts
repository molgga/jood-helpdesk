import path from 'path';

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
  base: '/jood-helpdesk', // https://molgga.github.io/jood-helpdesk/
  themeConfig: {
    siteTitle: 'jood-helpdesk',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/molgga/jood-helpdesk' },
    ],
    sidebar: [
      {
        text: '@jood/helpdesk',
        items: [
          { text: '소개', link: '/' },
          { text: '빠른 시작', link: '/quick-started' },
        ],
      },
      {
        text: '@jood/helpdesk-timer',
        items: [
          { text: '설치 및 시작', link: '/timer/getting-started' },
          { text: '간단한 사용방법', link: '/timer/guide-quick' },
          { text: 'SecondTimer', link: '/timer/second-timer' },
          { text: 'MinuteTimer', link: '/timer/minute-timer' },
        ],
      },

      {
        text: 'vitepress-example',
        items: [{ text: 'example', link: '/example/index' }],
      },
    ],
  },
};
