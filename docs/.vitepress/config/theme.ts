import type { DefaultTheme } from "vitepress/theme-without-fonts";
import algolia from "./algolia";
import { LOGO as logo, REPO } from "./info";
import nav from "./nav";
import sidebar from "./sidebar";

const themeConfig: DefaultTheme.Config = {
  algolia,
  editLink: {
    pattern: `${REPO}/edit/main/docs/:path`,
    text: "在 GitHub 上编辑此页",
  },
  footer: {
    message:
      'Availably free under <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh" class="grabient-text">CC BY-SA 4.0</a>.',
    copyright: `Made with ❤️️ by <a href="${REPO}/graphs/contributors" class="grabient-text">all contributors</a>.`,
  },
  lastUpdatedText: "📑 最后更新",
  logo,
  nav,
  sidebar,
  siteTitle: "树莓派不完全指南",
  socialLinks: [{ icon: "github", link: REPO }],
};

export default themeConfig;
