---
layout: post
title: Testing CSS classes with Jasmine-JQuery
---

![alt text ](http://i.imgur.com/NmVNJdW.jpg, "Now test your CSS classess")


# If you would like to test your CSS classes with Jasmine you can use Jasmine Jquery.

jasmine-jquery provides two extensions for the [Jasmine](http://jasmine.github.io/) JavaScript Testing Framework:

- a set of custom matchers for jQuery framework
- an API for handling HTML, CSS, and JSON fixtures in your specs

Using the loadStyleFixtures or setStyleFixtures global shortcuts we can add the css we want to test either from a relative url

{% highlight html %}
  loadStyleFixtures('css/stylesheet.css');
{% endhighlight %}

or append the classes directly to the document head

{% highlight html %}
  setStyleFixtures('.btn-success { color: #fff; background-color: #5cb85c; border-color: #4cae4c; }');
{% endhighlight %}

Then load the fixtures using the loadFixtures or setFixtures global shortcuts either from a relative url

{% highlight html %}
  loadFixtures('templates/success.html');
{% endhighlight %}

or append the fixture directly to the document body

{% highlight html %}
  fixture = setFixtures('<button type="button" class="btn btn-success">Success</button>');
{% endhighlight %}

Then use the custom matchers to retrieve the element you would like to test against

{% highlight html %}
  var successButton = fixture.find('.btn-success');
{% endhighlight %}

and then test against your expectation

{% highlight html %}
  expect(successButton.css('color')).toEqual('rgb(255, 255, 255)');
{% endhighlight %}

You can see the test below working in this  [jsfiddle](https://jsfiddle.net/Nicholas_Murray/2488cm7k/)

<script src="https://gist.github.com/NicholasMurray/ca68a50a7c6a3954d74a.js"></script>

with all tests passing

<iframe width="320" height="240" style="width: 100%; height: 240px;" src="https://jsfiddle.net/Nicholas_Murray/2488cm7k/embedded/result/"></iframe>
