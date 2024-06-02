var posts=["2024/05/25/AI绘画学习笔记/AI绘画/","2024/05/29/AI绘画学习笔记/AI绘画常用模型/","2024/06/02/AI绘画学习笔记/ComfyUI工作流AI绘画/","2024/04/29/工具分享/GPT搭建/","2024/05/22/杂谈/SSM/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };