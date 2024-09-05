// noinspection JSUnusedGlobalSymbols

import DefaultTheme from "vitepress/theme-without-fonts";
import "./style/global.css";
import "./style/theme.css";
import "./style/vars.css";

console.log("Availably free under CC BY-SA 4.0.");
console.log("Made with ❤️️ by all contributors.");

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
  }
};
