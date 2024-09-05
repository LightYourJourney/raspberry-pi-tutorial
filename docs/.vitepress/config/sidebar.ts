import { DefaultTheme } from "vitepress/theme-without-fonts";

const sidebarConfig: DefaultTheme.Sidebar = {
  "/guide/": [
    {
      text: "🎐 千里之行",
      items: [
        {
          text: "ℹ️ 项目简介",
          link: "/guide/intro",
        },
        {
          text: "🤔 什么是树莓派？",
          link: "/guide/what",
        },
        {
          text: "🧐 为什么是树莓派？",
          link: "/guide/why",
        },
      ],
    },
    {
      text: "🌱 XXX",
      items: [
        {
          text: "💽 A",
          items: [
            {
              text: "a1",
              link: "/guide/a/a1",
            },
            {
              text: "a2",
              link: "/guide/a/a2",
            },
          ],
        },
      ],
    },
    {
      text: "🛠️ YYY",
      items: [
        {
          text: "⚙️ B",
          items: [
            {
              text: "b1",
              link: "/guide/b/b1",
            },
            {
              text: "b2",
              link: "/guide/b/b2",
            },
          ],
        },
      ],
    },
  ],
  "/utils/": [
    {
      text: "💽 XXX",
      items: [
        {
          text: "📐 A",
          items: [
            {
              text: "A1",
              link: "/utils/a1",
            },
            {
              text: "A2",
              link: "/utils/a2",
            },
          ],
        },
        {
          text: "🎯 B",
          items: [
            {
              text: "B1",
              link: "/utils/b1",
            },
            {
              text: "B2",
              link: "/utils/b2",
            },
          ],
        },
      ],
    },
  ],
  "/todo/": [
    {
      text: "💽 XXX",
      items: [
        {
          text: "📐 A",
          items: [
            {
              text: "A1",
              link: "/todo/a1",
            },
            {
              text: "A2",
              link: "/todo/a2",
            },
          ],
        },
        {
          text: "🎯 B",
          items: [
            {
              text: "B1",
              link: "/todo/b1",
            },
            {
              text: "B2",
              link: "/todo/b2",
            },
          ],
        },
      ],
    },
  ],
  "/postface/": [
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
  ],
};

export default sidebarConfig;
