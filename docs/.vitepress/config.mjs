import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/raspberry-pi-tutorial/", // 设置站点子路径
  title: "树莓派不完全指南", // 站点标题
  description: "从入门到入土", // 站点描述
  cleanUrls: true, // 是否去掉 .html 后缀
  head: [
    ["link", { rel: "icon", href: "/raspberry-pi-tutorial/favicon.ico" }], // 引用你的 favicon 文件
  ],
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
    // 全局设置容器自定义标题
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.svg",
    nav: [
      { text: "🏠 主页", link: "/" },
      { text: "🧭 指南", link: "/guide" },
      { text: "📦 百宝箱", link: "/utils" },
      { text: "🍰 写在后面", link: "/postscript" },
    ],

    sidebar: {
      // 当用户位于 `guide` 目录时，会显示此侧边栏
      "/guide/": [
        {
          text: "ℹ️ 简介",
          items: [
            { text: "🤔 什么是树莓派？", link: "/guide/what" },
            { text: "🧐 为什么是树莓派？", link: "/guide/why" },
          ],
        },
        {
          text: "🧭 指南",
          items: [
            {
              text: "选购树莓派",
              collapsed: true,
              items: [
                { text: "综合建议", link: "/guide/buy/" },
                { text: "树莓派 4B", link: "/guide/buy/4b" },
                { text: "树莓派 Zero", link: "/guide/buy/zero" },
              ],
            },
            {
              text: "安装系统",
              items: [
                {
                  text: "系统选择",
                  collapsed: true,
                  items: [
                    { text: "综合建议", link: "/guide/install/os/" },
                    { text: "Raspberry Pi OS", link: "/guide/install/os/rpos" },
                    { text: "Ubuntu", link: "/guide/install/os/ubuntu" },
                  ],
                },
                {
                  text: "系统安装步骤",
                  collapsed: true,
                  items: [
                    {
                      text: "Raspberry Pi OS",
                      link: "/guide/install/step/rpos",
                    },
                    { text: "Ubuntu", link: "/guide/install/step/ubuntu" },
                  ],
                },
              ],
            },
          ],
        },
      ],

      // 当用户位于 `utils` 目录时，会显示此侧边栏
      "/utils/": [
        {
          text: "📦 百宝箱",
          items: [
            { text: "防吃灰汇总", link: "/utils/" },
            { text: "远程桌面", link: "/utils/remote-desktop" },
          ],
        },
      ],
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/LightYourJourney/raspberry-pi-tutorial",
      },
    ],
  },
});
