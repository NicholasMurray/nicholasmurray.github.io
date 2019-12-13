---
title: AngularJS - ngBind - Now you see it - now you don't...
date: '2015-07-03T00:00:00.000Z'
---

![alt text ](https://images-na.ssl-images-amazon.com/images/I/51TOm9SmokL._SX391_BO1,204,203,200_.jpg "Now you see it, now you don't")
  

# Prevent AngularJS displaying curly braces when your page is loading

## The problem
When your AngularJS website is loading if you are using double curly braces within a element to bind to a variable.

```
	<span>Hello {{ name }}!</span>
```
	
your user may for a split second (or longer) be presented with

{% raw %}
	Hello {{}}!
{% endraw %}

until the compilation occurs

```
	Hello Nicholas!
```

## ngBind - solution 1
ngBind does not show the curly braces before compilation as it is attribute based

```
	Hello <span ng-bind="name"></span>!
```

and so it tells Angular to replace the text within the HTML element when the value changes.Therefore if a template is momentarily displayed by the browser in its raw state before Angular compiles it, since ngBind is an element attribute, it makes the bindings invisible to the user while the page is loading.

uncompiled

{% raw %}
	Hello !
{% endraw %}


compiled

{% raw %}
	Hello Nicholas!
{% endraw %}


## ngBindTemplate - solution 2

Unlike ngBind, the ngBindTemplate can contain multiple {{ }} expressions.

{% raw %}
	<pre ng-bind-template="{{salutation}} {{name}}!"></pre> !
{% endraw %}


And also, importantly, this directive is needed since some HTML elements (such as TITLE and OPTION) cannot contain SPAN elements.

{% raw %}
	<title ng:bind-template="Hello: {{name}}"></title>
{% endraw %}


