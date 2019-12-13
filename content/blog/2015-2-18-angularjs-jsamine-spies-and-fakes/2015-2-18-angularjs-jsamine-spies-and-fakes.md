---
title: AngularJS Jasmine Spies and Fakes
date: '2015-02-18T00:00:00.000Z'
---

![alt text ](../../assets/images/spiesandfakes.jpg "AngularJS Jasmine Spies and Fakes")

# One of the great things about angular is it's testability.

Say we have a directive that uses geolocation to display this information to the user if it is available
and to display a message if it is not available.

<script src="https://gist.github.com/NicholasMurray/a522f0fae5eb654c9a5a.js"></script>

So how can we test it using Jasmine and ensure that our test will work regardless if geolocation is 
available during our testing? We create a spy on the geolocation function and return a fake object instead.

<script src="https://gist.github.com/NicholasMurray/baeb1de0d4fcffe2fbe9.js"></script>

Similarly we can return a fake error object to test that our directive acts correctly if geolocation 
is not available.

<script src="https://gist.github.com/NicholasMurray/78f1c7be22715622f4ff.js"></script>

