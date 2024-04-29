var posts=["2024/04/28/工具分享/GPT搭建/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };