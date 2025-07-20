import { defineClientConfig } from "vuepress/client";
import Blog from "./layouts/Blog.vue";

//为项目主页的特性添加闪光效果。
import "vuepress-theme-hope/presets/shinning-feature-panel.scss";
//将博主头像裁剪为圆形
import "vuepress-theme-hope/presets/round-blogger-avatar.scss";
//为页面图标添加鼠标悬停的跳动效果。
import "vuepress-theme-hope/presets/bounce-icon.scss";
export default defineClientConfig({
  //...

  layouts: {
    // ...
    Blog,
  },
});