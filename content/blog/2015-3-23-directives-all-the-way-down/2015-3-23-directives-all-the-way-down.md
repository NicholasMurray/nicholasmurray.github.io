---
title: AngularJS - its turtles all the way down!
date: '2015-03-23T00:00:00.000Z'
---

![alt text ](../../assets/images/turtles.jpg "Turtles all the way down")

## AngularJS - it's directives all the way down

## data-ng-app

The first part of learning AngularJS is nearly always adding the attribute ng-app to your html that auto-bootstraps your AngularJS application.

```
	<html data-ng-app="app">
```

or 

```
	<body ng-app="app">
```

<em>You should of course use the data-* syntax if you want your html to be valid according to the [HTML5 specification](http://www.w3.org/TR/2011/WD-html5-20110525/elements.html#embedding-custom-non-visible-data-with-the-data-attributes).</em>

Adding the data-ng-app attribute to a html element is creating a ngApp directive that tells angular that this element is to be the root of the application.

## MVC - ngModel ngView ngController

AngularJS is built in a MVC software design pattern and the building blocks are ngModel ngView and ngController.

### ngModel

The ngModel directive takes responsibility for managing and binding data to html elements such as a text input 

```
	<input type="text" name="email" data-ng-model="data.email">
```

### ngView 

The ngView directive is used by angular as a container to switch between views when used in conjunction with [$route](https://docs.angularjs.org/api/ngRoute/service/$route) service.	
```
<div ng-app="app">
  	<ng-view></ng-view>
</div>
```

### ngController

The ngController directive specifies a Controller class; the class contains business logic behind the application to decorate the scope with functions and values. You can view the example below running on this [codepen](http://codepen.io/NicholasMurray/pen/PwVZbP).

```
var app = angular.module("app", []);

app.controller('userCtrl', function($scope) {
   	$scope.user = {
      		firstName: "",
      		lastName: "",
      		userName: function() {
         		var user;
         		user = $scope.user;
         		return user.firstName + user.lastName;
      		}
   	};
});
```

```
<div data-ng-app="app">
	<div data-ng-controller="userCtrl">
		Enter first name: <input type="text" data-ng-model="user.firstName"><br>
		Enter last name: <input type="text" data-ng-model="user.lastName"><br>
		Your user name: {{user.userName()}}
	</div>
</div>
```

## Directives all the way down

There is a whole world of directives to [explore](https://docs.angularjs.org/api/ng/directive) and if you can't find a directive to suit your needs you can create your own [custom](https://docs.angularjs.org/guide/directive) directives.