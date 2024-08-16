import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/raspberry-pi-tutorial/", // 设置站点子路径
  title: "树莓派不完全指南", // 站点标题
  description: "从入门到入土", // 站点描述
  cleanUrls: true, // 是否去掉 .html 后缀
  sitemap: {
    hostname: "https://lightyourjourney.github.io/raspberry-pi-tutorial/",
  },
  markdown: {
    lineNumbers: true,
    math: true,
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true,
    },
  },
  // 全局设置容器自定义标题
  // markdown: {
  //   container: {
  //     tipLabel: "提示",
  //     warningLabel: "警告",
  //     dangerLabel: "危险",
  //     infoLabel: "信息",
  //     detailsLabel: "详细信息",
  //   },
  // },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.svg",
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/LightYourJourney/raspberry-pi-tutorial",
      },
    ],
  },
});
