---
layout: post
title: Creating an AngularJS pulse directive
---

![alt text ]({{ site.baseurl }}/images/pulse.jpg "Creating an AngularJS pulse directive")


##Using animations to alert the user to value changes

When highlighting to the user a change of a value on a page with a noisy layout you are faced with two possibilities, 
either use a colour to highlight the change or add an animation to emphasize the transition 
between the initial value and the new value.

Using a colour can add to visual noise on page if the change in value is not crucial to the overall user experience, you may 
course want a value highlighted in red if a limit has been reached. If you want draw attention value changing but not the 
significance of the value then an animation can be effective.

One of the animations types we will explore is a CSS pulse animation.


##Pulse CSS with keyframes

The pulse animation will take the form of 3d scaling up the chosen element by 25% at the halfway point in the animation and 
then gradually transforming the element back to its initial state at the end of the animation. CSS3 us allows to use keyframes 
to specify the points in time at which we wish our effects to have taken place

Keyframes are steps in your animation that allow you define the stages of the transformation being specified, 
creating a smoother animation.

{% highlight html %}
.pulse {
  animation: pulse 1s infinite;
  animation-duration: 1s;
  animation-play-state: running;
  animation-iteration-count: 1;
}

@keyframes pulse {
  0% {
    transform: scale3d(1, 1, 1);
  }
  50% {
    transform: scale3d(1.25, 1.25, 1.25);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
}
{% endhighlight %}


##ngAnimate

In this AngularJS app we will have a dependency on <a href="https://docs.angularjs.org/api/ngAnimate" target="_blank">ngAnimate</a> 
so lets inject it into our app via dependency injection.

{% highlight html %}
var app = angular.module("app", ["ngAnimate"]);
{% endhighlight %}



##Control the value in the controller

As usual in an AngularJS app the value that we will be manipulating should have any operations located in the controller. So the 
currentVote variable will be initialised, incremented and decremented from our controller. 

In this implementation we will be using the 'controller as' syntax to identify methods with the controller scope indicated 
with the vm (view model).


{% highlight html %}
(function() {
  angular.module("app").controller("AppCtrl", function() {
      var vm = this;

      vm.currentVote = 0;

      vm.plusOne = function() {
        vm.currentVote = vm.currentVote + 1;
      }

      vm.minusOne = function() {
        vm.currentVote = vm.currentVote - 1;
      } 
      
      return vm;
  });
})();
{% endhighlight %}


##To use a directive or not use a directive

We could also invoke the animation from our *controller*, first by injecting $animation into the anonymous function and then 
by adding code to the plusOne and minusOne functions like below.

####Code Smell

In AngularJS this would give our code a 'code smell' as searching for elements by id or class is an anti-pattern as 
directives have been supplied to deal with this scenario. The *controller* should be controlling the value and the *directive* 
controlling the element to animate.

{% highlight html %}
(function() {
  angular.module("app").controller("AppCtrl", function($animate) {
      var vm = this;
    
      var elementToPulse = angular.element(document.getElementById('badge'));

      vm.currentVote = 0;

      vm.plusOne = function() {
        vm.currentVote = vm.currentVote + 1;
        $animate.addClass(elementToPulse, "pulse");
      }

      vm.minusOne = function() {
        vm.currentVote = vm.currentVote - 1;
        $animate.addClass(elementToPulse, "pulse");
      } 
      
      return vm;
  });
})();

{% endhighlight %}



##Watch the variable from our directive

We will create a directive called pulseOnChange that will watch for value changes in an element. Injecting $animate and 
$timeout provide the functionality to add the pulse class to the element on change and then to remove the pulse class after 
1 second in this case as we have specified our animation to last 1 second.

{% highlight html %}
(function() {
  angular.module("app").directive("pulseOnChange", function($animate, $timeout) {
    return function(scope, element, attrs) {
          scope.$watch(attrs.pulseOnChange, function() {
                  $animate.addClass(element, "pulse");
                  $timeout(function() {
                    $animate.removeClass(element, "pulse");
                  }, 1000);
          });
      };
  });
})();
{% endhighlight %}



##Lets create the HTML

There are fours part to our HTML

* declare our app and controller on the body and use the controller as snytax

* a button to control the increment

* a directive applied to the element containing the value

* a button to decrement the value


We will use <a href="http://getbootstrap.com/" target="_blank">bootstrap 3</a> to layout our page, add 
styles and icons to our app.


{% highlight html %}
<body ng-app="app" ng-controller="AppCtrl as vm">
  
  <div class="jumbotron vertical-center">
    <div class="container text-center">
      <button class="btn btn-success glyphicon glyphicon-thumbs-up" ng-click="vm.plusOne()"></button>
      <div class="badge-container vertical-center">
        <span class="badge" pulse-on-change="vm.currentVote">{{ vm.currentVote}}</span>
      </div>
      <button class="btn btn-success glyphicon glyphicon-thumbs-down" ng-click="vm.minusOne()"></button>
    </div>
  </div>
  
</body>
{% endhighlight %}


##Lets view the end product

As we can see all the moving parts come together to highlight the change in value to the user without adding any additional 
visual noise to the page.

<p data-height="268" data-theme-id="0" data-slug-hash="OMWBWj" data-default-tab="result" data-user="NicholasMurray" class='codepen'>See the Pen <a href='http://codepen.io/NicholasMurray/pen/OMWBWj/'>AngularJS Pulse on change Directive</a> by Nicholas Murray (<a href='http://codepen.io/NicholasMurray'>@NicholasMurray</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>


 



