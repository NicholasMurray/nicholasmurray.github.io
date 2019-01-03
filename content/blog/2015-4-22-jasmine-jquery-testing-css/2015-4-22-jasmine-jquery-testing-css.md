---
title: Testing CSS classes with Jasmine-JQuery
date: '2015-04-03T00:00:00.000Z'
---

![alt text ](http://i.imgur.com/NmVNJdW.jpg, "Now test your CSS classess")


# If you would like to test your CSS classes with Jasmine you can use Jasmine Jquery.

jasmine-jquery provides two extensions for the [Jasmine](http://jasmine.github.io/) JavaScript Testing Framework:

- a set of custom matchers for jQuery framework
- an API for handling HTML, CSS, and JSON fixtures in your specs

Using the loadStyleFixtures or setStyleFixtures global shortcuts we can add the css we want to test either from a relative url

```
  loadStyleFixtures('css/stylesheet.css');
```

or append the classes directly to the document head

```
  setStyleFixtures('.btn-success { color: #fff; background-color: #5cb85c; border-color: #4cae4c; }');
```

Then load the fixtures using the loadFixtures or setFixtures global shortcuts either from a relative url

```
  loadFixtures('templates/success.html');
```

or append the fixture directly to the document body

```
  fixture = setFixtures('<button type="button" class="btn btn-success">Success</button>');
```

Then use the custom matchers to retrieve the element you would like to test against

```
  var successButton = fixture.find('.btn-success');
```

and then test against your expectation

```
  expect(successButton.css('color')).toEqual('rgb(255, 255, 255)');
```

You can see the test below working in this  [jsfiddle](https://jsfiddle.net/Nicholas_Murray/2488cm7k/)

<script src="https://gist.github.com/NicholasMurray/ca68a50a7c6a3954d74a.js"></script>

with all tests passing

<iframe width="320" height="240" style="width: 100%; height: 240px;" src="https://jsfiddle.net/Nicholas_Murray/2488cm7k/embedded/result/"></iframe>
