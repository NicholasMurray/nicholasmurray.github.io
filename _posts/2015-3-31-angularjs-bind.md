---
layout: post
title: AngularJS - ngBind - Now you see it - now you don't...
---


<a href="http://www.amazon.com/Now-You-See-Dont-Lessons/dp/0394722027/ref=sr_1_1?s=books&ie=UTF8&qid=1427822892&sr=1-1&keywords=Now+you+see+it+-+now+you+don%27t"  target="_blank">
	<img src="{{ site.baseurl }}/images/nowyouseeit.jpg" />
</a>

  

# Prevent AngularJS displaying curly braces when your page is loading

## The problem
When your AngularJS website is loading if you are using double curly braces within a element to bind to a variable.

{% highlight html %}
	<span>Hello {{ name }}!</span>
{% endhighlight %}
	
your user may for a split second (or longer) be presented with

{% raw %}
	Hello {{}}!
{% endraw %}

until the compilation occurs

{% highlight html %}
	Hello Nicholas!
{% endhighlight %}

## ngBind - solution 1
ngBind does not show the curly braces before compilation as it is attribute based

{% highlight html %}
	Hello <span ng-bind="name"></span>!
{% endhighlight %}

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


