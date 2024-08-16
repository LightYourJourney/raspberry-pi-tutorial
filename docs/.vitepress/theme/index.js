// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
// import DefaultTheme from 'vitepress/theme'
import DefaultTheme from "vitepress/theme-without-fonts";
import "./custom-font.css";
import "./custom.css";
// import "./jbmono.css";
// import "./lxgwscreen.css";
import "./style.css";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  },
};
