---
layout: post
title: AngularJS how to execute a custom directive link or compile function after ngBind or interpolation
---

![alt text ]({{ site.baseurl }}/images/tworonnies.jpg "AngularJS how to execute a custom directive link or compile function after ngBind or interpolation")

When creating your own custom angularjs directives you may wish to append a value to a variable that is being evaluated within the 
element that you are attaching your directive to. 

If you are using a [link](https://docs.angularjs.org/guide/directive) function to manipulate a vm variable

{% highlight html %}
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
{% endhighlight %}


{% highlight html %}
<body ng-app="app">
  <div ng-controller="AppCtrl as vm">
    <span regular-farewell-directive>{{vm.farewell}}</span>
  </div>
</body>

{% endhighlight %}


The output would look like this as the value has not yet been evaluated.

{% highlight html %}
{{vm.farewell}} and goodbye! 
{% endhighlight %}

If you used a [compile](https://docs.angularjs.org/api/ng/service/$compile) function instead

{% highlight html %}
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
{% endhighlight %}

The output would be different containing just the evaluated variable value.

{% highlight html %}
And it's Goodnight 
{% endhighlight %}




##Executing a custom directive link function where there is a value to be evaluated in ngBind

One way around this issue would be to move the variable to the built in [ngBind](https://docs.angularjs.org/api/ng/directive/ngBind) directive and then watch for the value
to be evaluated and then executing our code.


{% highlight html %}
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
{% endhighlight %}


{% highlight html %}
<body ng-app="app"> 
  <div ng-controller="AppCtrl as vm">
    <span corbett-farewell-directive ng-bind="vm.farewell"></span>
  </div>  
</body>
{% endhighlight %}

This would result in the desired outcome.


{% highlight html %}
And it's Goodnight from me! 
{% endhighlight %}


##Executing a custom directive link function where there is a value to be evaluated in ngBind

If we are not able to or, do not wish to, move the variable to an ngBind element attribute we can still watch the 
variable being evaluated using a combination of a compile function and the [$interpolate](https://docs.angularjs.org/api/ng/service/$interpolate) service.

{% highlight html %}
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

{% endhighlight %}


{% highlight html %}
<body ng-app="app"> 
  <div ng-controller="AppCtrl as vm">
    <span barker-farewell-directive>{{vm.farewell}}</span>
  </div>  
</body>
{% endhighlight %}

Gaining the ouput that we require.

{% highlight html %}
And it's Goodnight from him!
{% endhighlight %}



{% highlight html %}

{% endhighlight %}

