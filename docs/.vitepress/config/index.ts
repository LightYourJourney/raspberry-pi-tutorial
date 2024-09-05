import { defineConfig } from "vitepress";
import head from "./head";
import {
  DESCRIPTION as description,
  LANG as lang,
  TITLE as title,
} from "./info";
import themeConfig from "./theme";

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  // base: "/raspberry-pi-tutorial/",
  cleanUrls: true, // 是否去掉 .html 后缀
  sitemap: {
    hostname: "https://pi.yanjinli.fun/",
  },
  description,
  head,
  ignoreDeadLinks: true, // TODO: remove this line when all links are fixed
  lang,
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
    math: true,
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true,
    },
    // 全局设置容器自定义标题
    container: {
      tipLabel: "TIP",
      warningLabel: "WARNING",
      dangerLabel: "DANGER",
      infoLabel: "INFO",
      detailsLabel: "DETAILS",
    },
  },
  themeConfig,
  title,
});
