var posts=["2026/04/18/HermesAgent/Hermes-Agent安装与快速上手教程/","2026/04/19/OpenclawTavilySearch/Openclaw集成TavilySearch/","2026/04/17/PlaywrightCLI/Playwright-CLI集成指南/","2024/04/29/工具分享/GPT搭建/","2024/06/02/工具分享/突破网盘下载速度限制/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };