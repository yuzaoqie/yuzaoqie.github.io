var posts=["2024/04/29/工具分享/GPT搭建/","2024/04/29/常见问题解决方案/博客的图片丢失问题/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };