---
title: AngularJS how to execute a custom directive link or compile function after ngBind or interpolation
date: '2015-11-11T00:00:00.000Z'
---

![alt text ](/images/tworonnies.jpg "AngularJS how to execute a custom directive link or compile function after ngBind or interpolation")

When creating your own custom angularjs directives you may wish to append a value to a variable that is being evaluated within the 
element that you are attaching your directive to. 

If you are using a [link](https://docs.angularjs.org/guide/directive) function to manipulate a vm variable

```
(function() {
  angular.module("app", []); 
})();

(function() {
  angular.module("app").controller("AppCtrl", [AppCtrl]);
    function AppCtrl() {  
      var vm = this; 
      vm.farewell = "And it's Goodnight ";
      return vm;
    }; 
})();

(function() {
  angular.module("app").directive("regularFarewellDirective", function() {
    return {
      link: function(scope,element,attrs) {
          var currentValue = element.text();
          element.text(currentValue + " and goodbye!");
      }
     };  
  });
})();
```


```
<body ng-app="app">
  <div ng-controller="AppCtrl as vm">
    <span regular-farewell-directive>{{vm.farewell}}</span>
  </div>
</body>

```


The output would look like this as the value has not yet been evaluated.

```
{{vm.farewell}} and goodbye! 
```

If you used a [compile](https://docs.angularjs.org/api/ng/service/$compile) function instead

```
(function() {
  angular.module("app").directive("regularFarewellDirective", function() {
    return {
      compile: function(scope,element,attrs) {
          var currentValue = element.text();
          element.text(currentValue + " and goodbye!");
      }
     };  
  });
})();
```

The output would be different containing just the evaluated variable value.

```
And it's Goodnight 
```




## Executing a custom directive link function where there is a value to be evaluated in ngBind

One way around this issue would be to move the variable to the built in [ngBind](https://docs.angularjs.org/api/ng/directive/ngBind) directive and then watch for the value
to be evaluated and then executing our code.


```
(function() {
  angular.module("app").directive("corbettFarewellDirective", function() {
    return {
      link: function(scope,element,attrs) {
        scope.$watch(attrs.ngBind, function(newvalue) {
          element.text(newvalue + " from me!");
        });           
      }
     };  
  });
})();
```


```
<body ng-app="app"> 
  <div ng-controller="AppCtrl as vm">
    <span corbett-farewell-directive ng-bind="vm.farewell"></span>
  </div>  
</body>
```

This would result in the desired outcome.


```
And it's Goodnight from me! 
```


## Executing a custom directive link function where there is a value to be evaluated in ngBind

If we are not able to or, do not wish to, move the variable to an ngBind element attribute we can still watch the 
variable being evaluated using a combination of a compile function and the [$interpolate](https://docs.angularjs.org/api/ng/service/$interpolate) service.

```
(function() {
  angular.module("app").directive("barkerFarewellDirective",   function($interpolate) {
      return {
        compile: function (tElem, tAttrs) {
          var interpolateFn = $interpolate(tElem.html(), true);
          tElem.empty();
          return function(scope, elem, attrs){
            scope.$watch(interpolateFn, function (value) {
              var currentText = value;
              elem.text(currentText + " from him!");
            });
          }
        }
      };
   }) 
})();

```


```
<body ng-app="app"> 
  <div ng-controller="AppCtrl as vm">
    <span barker-farewell-directive>{{vm.farewell}}</span>
  </div>  
</body>
```

Gaining the ouput that we require.

```
And it's Goodnight from him!
```
