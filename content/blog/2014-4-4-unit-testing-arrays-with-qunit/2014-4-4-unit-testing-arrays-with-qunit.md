---
title: Unit Testing arrays with QUnit
date: '2014-04-04T01:01:01.000Z'
---

![alt text ](/images/comparingpears.png "Are these pears the same as these pears")

# How to test Array equality

When testing arrays with QUnit you may wish to assert that one array is equal to another array.

Qunit provides the equal( actual, expected, message ) method for asserting that actual value is equal to the expected value.

so what happens in the following test scenario

<iframe width="320" height="240" style="width: 100%; height: 150px;" src="http://www.unittest.it/embed/QxQx1Bj/1/unittestcode/"></iframe>

this...

<iframe width="320" height="240" style="width: 100%; height: 400px;" src="http://www.unittest.it/embed/QxQx1Bj/1/unittestresult/"></iframe>

It fails horribly onscreen with an error from the sourceStackTrace() output from within QUnit.push

So how can we test arrays with QUnit?

We can use the deepEqual() assert method. 

Qunit provides the deepEqual( actual, expected, message ) method for a deep recursive comparison, working on primitive types, arrays, objects, regular expressions, dates and functions.

So let’s test with deepEqual instead

<iframe width="320" height="240" style="width: 100%; height: 150px;" src="http://www.unittest.it/embed/75hM6Wq/1/unittestcode/"></iframe>

It passes

<iframe width="320" height="280" style="width: 100%; height: 400px;" src="http://www.unittest.it/embed/75hM6Wq/1/unittestresult/"></iframe>

due to the implementation of the deepEqual() method there is a call innerEquiv which recursively compares each item within the array
