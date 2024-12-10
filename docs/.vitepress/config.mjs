import { defineConfig } from "vitepress";
// import HomeDesign from "./装修";
import Digital from "./数码";
import Coding from "./代码";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "随便⛏",
  description: "随便记点 有趣好玩有用的",
  themeConfig: {
    // search: {
    //   provider: "algolia",
    //   options: {
    //     appId: "OG2WKLPLDF",
    //     apiKey: "60bfb44fa67fe45610e4d82bfa3e2f34",
    //     indexName: "⛏不赢",
    //   },
    // },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "代码", link: "/代码/" },
      { text: "数码", link: "/数码/" },
      // { text: "装修", link: "/装修/" },
    ],

    sidebar: {
      // ...HomeDesign,
      ...Digital,
      ...Coding,
    },

    socialLinks: [{ icon: "github", link: "https://github.com/gofxas" }],
  },
  head: [
    ["script", { src: "https://www.googletagmanager.com/gtag/js?id=G-FCP66FDJEF" }],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-FCP66FDJEF');`,
    ],
  ],
});
