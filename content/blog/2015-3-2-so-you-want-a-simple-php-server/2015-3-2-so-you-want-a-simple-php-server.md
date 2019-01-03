---
title: So you want a simple PHP Server?
date: '2015-03-02T00:00:00.000Z'
---

![alt text ](http://i.imgur.com/rtSu3eu.jpg, "PHP Server Simples")

# 5 steps to create a simple PHP Server

## Step 1.

Install PHP 5 http://php.net/manual/en/install.php


## Step 2.

On a mac Open up a terminal and type:

$ cd Documents/somedir
$ sudo php -S 127.0.0.1:80 -t .

On windows Open up the console and type:

c:\Users\CurrentFolder>cd \Users\somedir
c:\Users\CurrentFolder>php -S 127.0.0.1:80 -t .


## Step 3.

Create a new index.html page in somedir then visit http://127.0.0.1:80


## Step 4.

View the http requests in your terminal/console

PHP 5.5.14 Development Server started at Mon Mar  2 08:33:26 2015   
Listening on http://127.0.0.1:80   
Document root is /../../../test   
Press Ctrl-C to quit.   
[Mon Mar  2 08:33:40 2015] 127.0.0.1:51466 [200]: /     
[Mon Mar  2 08:33:40 2015] 127.0.0.1:51467 [200]: /lib/jasmine-1.3.1/jasmine.css   
[Mon Mar  2 08:33:40 2015] 127.0.0.1:51468 [404]: /js/libs/require-2.1.5.min.js 


## Step 5. 

There is no step 5. Simples!
