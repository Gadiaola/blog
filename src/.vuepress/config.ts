import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  lang: "zh-CN",
  title: "博客演示",
  description: "vuepress-theme-hope 的博客演示",

  head: [
    // 添加Inter和Fira Code字体
    ["link", { 
      rel: "stylesheet", 
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap" 
    }],
    
    // 添加Font Awesome图标库
    ["link", {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    }],
    
  ],

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

