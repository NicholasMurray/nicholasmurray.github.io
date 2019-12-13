---
title: Psst! Wanna Monkey Patch?
date: '2015-02-07T00:00:00.000Z'
---

![alt text ](../../assets/images/monkeypatch.jpg "Psst! Wanna Monkey Patch?")

#If you ever wanted to Monkey Patch Javascript here's how...

## Step 1.
Pop open your javascript console, alt+cmd+i (mac) / ctrl_shift+i (pc) for dev tools then select the console tab.

## Step 2.
Let's monkey path console.log to use a function that alerts instead.

Type console.log = function(message) { alert(message) }; and hit return

## Step 3.
Now let's use our monkey patched console.log.

Type console.log('Hello Monkey Patched World!');

## Step 4.
Press return and now we can are now alerted our console.log 'Hello Monkey Patched World!' instead.
