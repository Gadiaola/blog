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
    
    // 添加平滑滚动效果
    ["script", {}, `
      document.addEventListener('DOMContentLoaded', function() {
        // 平滑滚动到锚点
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
            });
          });
        });
        
        // 卡片悬停效果
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
          card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
          });
          
          card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.boxShadow = '';
          });
        });
      });
    `]
  ],
  
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

