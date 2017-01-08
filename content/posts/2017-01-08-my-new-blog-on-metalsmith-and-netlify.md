---
title: My new blog on Metalsmith and Netlify
date: 2017-01-08 11:00:00
---

It's been a long time since I've updated my blog. I've been busy with university and other projects so that I didn't write a single article last year. Eventually, my WordPress blog got hacked and my hoster shut it down because they don't allow hosting of infected websites.

In the last weeks, I've experimented with static site generation and different systems like Jekyll, Hexo, Wintersmith and Metalsmith. While Jekyll was the easiest to set up, I'm not really a Ruby guy, so I went with Metalsmith and decided to port my old blog over to this new system. Since the site doesn't contain any dynamic scripts anymore, I decided to host it on [Netlify](https://netlify.com) which allows you to connect your GitHub repository and host the contents of it, so every time I push a change to my blog, Netlify gets notified and builds my blog using a [Gulpfile](https://github.com/leolabs/leolabs-org-metalsmith/blob/master/Gulpfile.js) that I wrote.

The whole blog is open-source, so you can see its code on my [GitHub repository](https://github.com/leolabs/leolabs-org-metalsmith).
