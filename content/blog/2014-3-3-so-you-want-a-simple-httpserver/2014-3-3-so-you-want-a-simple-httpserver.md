---
title: So you want a simple HTTPServer?
date: '2014-04-04T00:00:00.000Z'
---

![alt text ](http://i.imgur.com/gdzl8OD.jpg, 'Python simpleHTTPServer Simples')

# 5 steps to create a simple HTTP Server with python

## Step 1.

Install Python 2.7 https://wiki.python.org/moin/BeginnersGuide/Download

## Step 2.

On a mac Open up a terminal and type:

$ cd Documents/somedir
$ python -m SimpleHTTPServer

On windows Open up the console and type:

c:\Users\CurrentFolder>cd \Users\somedir
c:\Users\CurrentFolder>python -m SimpleHTTPServer

## Step 3.

Create a new index.html page in somedir then visit http://127.0.0.1:8000/

## Step 4.

View the http requests in your terminal/console

Serving HTTP on 0.0.0.0 port 8000 ...  
127.0.0.1 - - [15/Feb/2014 14:13:45] "GET / HTTP/1.1" 200 -  
127.0.0.1 - - [15/Feb/2014 14:18:38] "GET / HTTP/1.1" 200 -  
127.0.0.1 - - [15/Feb/2014 14:18:39] "GET /hello_world.gif HTTP/1.1" 200 -

## Step 5.

There is no step 5. Simples!
