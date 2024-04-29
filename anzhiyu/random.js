var posts=["2024/04/29/hello-world/","2024/04/29/技术随想/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };