var posts=["2024/04/29/工具分享/GPT搭建/","2024/04/30/杂谈/SSM/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };