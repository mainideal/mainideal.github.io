var posts=["2023/10/18/article-title/","2023/10/23/hello-world/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};