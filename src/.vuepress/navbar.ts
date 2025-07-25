import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",

  {
    text: "博文",
    icon: "streamline-ultimate-color:app-window-text",
    prefix: "/posts/",
    children: [
      {
        text: "苹果",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          // { text: "苹果1", icon: "pen-to-square", link: "1" },
          // { text: "苹果2", icon: "pen-to-square", link: "2" },
          // "3",
          // "4",
        ],
      },
      {
        text: "香蕉",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          // {
          //   text: "香蕉 1",
          //   icon: "pen-to-square",
          //   link: "1",
          // },
          // {
          //   text: "香蕉 2",
          //   icon: "pen-to-square",
          //   link: "2",
          // },
          // "3",
          // "4",
        ],
      },
      { text: "樱桃", icon: "pen-to-square", link: "cherry" },
    ],
  },
  "/internet/",
  // {
  //   text: "计算机网络",
  //   icon: "streamline-ultimate-color:network-browser",
  //   link: "internet.md",
  // },
  {
    text: "更多信息",
    icon: "streamline-ultimate-color:party-confetti",
    link: "README.md",
  },

  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
