var posts=["2023/10/18/article-title/","2023/10/23/hello-world/","2023/10/24/基于hexo-github搭建博客/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};