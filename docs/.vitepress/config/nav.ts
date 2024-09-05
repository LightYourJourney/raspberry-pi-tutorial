import { DefaultTheme } from "vitepress/theme-without-fonts";

const navConfig: DefaultTheme.NavItem[] = [
  {
    text: "🏠 主页",
    link: "/",
  },
  {
    text: "🧭 上手指南",
    items: [
      {
        text: "ℹ️ 项目简介",
        link: "/guide/intro",
      },
      {
        text: "🌱 A",
        items: [
          {
            text: "💸 a1",
            link: "/guide/a/a1",
          },
          {
            text: "🔩 a2",
            link: "/guide/a/a2",
          },
        ],
      },
      {
        text: "🛠️ B",
        items: [
          {
            text: "⚙️ b1",
            link: "/guide/b/b1",
          },
          {
            text: "🌸 b2",
            link: "/guide/b/b2",
          },
        ],
      },
    ],
  },
  {
    text: "📦 百宝箱",
    items: [
      {
        text: "💽 A",
        items: [
          {
            text: "📐 A1",
            link: "/utils/a1",
          },
          {
            text: "🎯 A2",
            link: "/utils/a2",
          },
        ],
      },
      {
        text: "🔬 B",
        items: [
          {
            text: "🎹 B1",
            link: "/utils/b1",
          },
          {
            text: "🖥️ B2",
            link: "/utils/b2",
          },
        ],
      },
    ],
  },
  {
    text: "📝 计划待办",
    items: [
      {
        text: "💽 A",
        items: [
          {
            text: "📐 A1",
            link: "/todo/a1",
          },
          {
            text: "🎯 A2",
            link: "/todo/a2",
          },
        ],
      },
      {
        text: "🔬 B",
        items: [
          {
            text: "🎹 B1",
            link: "/todo/b1",
          },
          {
            text: "🖥️ B2",
            link: "/todo/b2",
          },
        ],
      },
    ],
  },
  {
    text: "🍰 写在后面",
    items: [
      {
        text: "🤝 贡献者公约",
        link: "/postface/contributor-covenant",
      },
      {
        text: "🙌 贡献指南",
        link: "/postface/contribute",
      },
      {
        text: "💼 版权说明",
        link: "/postface/copyright",
      },
      {
        text: "📎 附录",
        link: "/postface/about",
      },
    ],
  },
];

export default navConfig;
