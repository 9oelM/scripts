# write-a-post
little shell script that helps you create a jekyll post (YAML based) for github blog.

Usage
```
chmod u+x writeAPost.sh
./writeAPost.sh [title] [categories] 

$ ls
today-date-title.md

$ cat today-date-title.md
---
layout: post
categories: categories
title: "title"
date: today-date 09:00:00 -0100
---
```

Example
```
./writeAPost.sh "testing post" "general test"
$ ls
2017-10-02-testing-post.md
$ cat 2017-10-02-testing-post.md
---
layout: post
categories: general test
title: "testing post"
date: 2017-10-02 09:00:00 -0100
---
```

Note: [title] and [categories] must be enclosed in double quotes if they contain multiple words.
