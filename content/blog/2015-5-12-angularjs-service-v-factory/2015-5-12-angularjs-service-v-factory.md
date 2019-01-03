---
title: AngularJS Service versus Factory
date: '2015-05-04T00:00:00.000Z'
---


![alt text ](/images/service-v-factory.png "Service versus Factory")


AngularJS has 5 ways to create services

1. Provider - used by the other services except constant

2. Factory - constructs a new service using a function that returns an object

3. Value - for storing simple values or objects

4. Service - works the same a factory except as it is *newed* internally it uses *this* properties

5. Constants - for providing configuration services

When I am using angular to construct a web app I create a folder called services and add my services there that are constructed using factory functions.

But why do we use factory functions instead of service functions?

John Papa says, as they are so similar, we should [use a factory instead for consistency.](https://github.com/johnpapa/angular-styleguide#style-y040)

In the angular source we can see that a service uses a factory internally

```
function factory(name, factoryFn, enforce) {
    return provider(name, {
      $get: enforce !== false ? enforceReturnValue(name, factoryFn) : factoryFn
    });
}

function service(name, constructor) {
    return factory(name, ['$injector', function($injector) {
      return $injector.instantiate(constructor);
    }]);
}
```

The typical examples of a service and factory demonstrate basic functionality in which they look virtually the same.

<script src="https://gist.github.com/NicholasMurray/d4c16a38f65489d01c6a.js"></script>


But how do we make better use of a service and factory?


An example of an appropriate use of a services ability to return a new object, would be, where prototype inheritance would allow us to call methods from a base class as well as the child class.

<script src="https://gist.github.com/NicholasMurray/1706ed6e967fdf79e9a9.js"></script>

Below is an example of an appropriate use of factory service, which is more suited, to returning data via the functions defined in the object it returns.

<script src="https://gist.github.com/NicholasMurray/3e14a8df444f38022b46.js"></script>
