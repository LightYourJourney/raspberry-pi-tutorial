import type { DefaultTheme } from "vitepress/theme-without-fonts";
import { LOGO as logo, REPO } from "./info";
import nav from "./nav";
import sidebar from "./sidebar";

const themeConfig: DefaultTheme.Config = {
  // algolia,
  search: {
    provider: "local",
    options: {
      locales: {
        root: {
          translations: {
            button: {
              buttonText: "搜索",
              buttonAriaLabel: "搜索",
            },
            modal: {
              displayDetails: "显示详细列表",
              resetButtonTitle: "重置搜索",
              backButtonTitle: "关闭搜索",
              noResultsText: "没有结果",
              footer: {
                selectText: "选择",
                selectKeyAriaLabel: "输入",
                navigateText: "导航",
                navigateUpKeyAriaLabel: "上箭头",
                navigateDownKeyAriaLabel: "下箭头",
                closeText: "关闭",
                closeKeyAriaLabel: "esc",
              },
            },
          },
        },
      },
    },
  },
  darkModeSwitchLabel: "颜色选择",
  lightModeSwitchTitle: "切换至亮色模式",
  darkModeSwitchTitle: "切换至暗色模式",
  sidebarMenuLabel: "目录",
  returnToTopLabel: "回到顶部",
  externalLinkIcon: true,
  outline: {
    label: "目录",
    level: [1, 5],
  },
  editLink: {
    pattern: `${REPO}/edit/main/docs/:path`,
    text: "在 GitHub 上编辑此页",
  },
  footer: {
    message:
      'Availably free under <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh" class="grabient-text">CC BY-SA 4.0</a>.',
    copyright: `Made with ❤️️ by <a href="${REPO}/graphs/contributors" class="grabient-text">all contributors</a>.`,
  },
  docFooter: {
    prev: "上一节",
    next: "下一节",
  },
  lastUpdatedText: "📑 最后更新",
  logo,
  nav,
  sidebar,
  siteTitle: "树莓派不完全指南",
  socialLinks: [{ icon: "github", link: REPO }],
};

export default themeConfig;
