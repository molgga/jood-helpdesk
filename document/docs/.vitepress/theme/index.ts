import DefaultTheme from 'vitepress/theme';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './custom.scss';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus);
  },
};
