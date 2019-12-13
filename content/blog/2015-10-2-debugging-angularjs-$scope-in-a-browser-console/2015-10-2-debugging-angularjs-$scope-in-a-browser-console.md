---
title: How to debug AngularJS $scope in a browser console
date: '2015-10-02T00:00:00.000Z'
---

![alt text ](../../assets/images/angular-scope.png "How to debug AngularJS $scope in a browser console")

# Inspect an element

All of the major browsers including, Chrome, Internet Explorer, Firefox, Safari and Opera include in their development tools the ability to
inspect an element. This allows you to right click on a web page, select "inspect element" from the context menu which will in turn open the 
browsers development tools to allow you to view the HTML, DOM tree and CSS associated with that element.

# Referencing an element

If you have inspected an element, the currently selected element is available via the reference **$0**. The developer tools will make available via 
references the last five elements (or heap objects) selected through the properties named **$0**, **$1**, **$2**, **$3**, **$4**. The most recently selected element or 
object can be referenced as **$0**, the second most recent as **$1** and so on.

So if you went to [www.google.com](https://www.google.com) and right clicked on the search text box, inspected the element then in the 
dev tools console tab typed **$0** and hit return.

```
$0
```

The console would return html such as below.

```
<input class="gsfi" id="lst-ib" maxlength="2048" name="q" autocomplete="off" title="Search" type="text" value="" aria-label="Search" 
aria-haspopup="false" role="combobox" aria-autocomplete="both" dir="ltr" spellcheck="false" 
style="border: none; padding: 0px; margin: 0px; height: auto; width: 100%; position: absolute; z-index: 6; 
left: 0px; outline: none; background: url(data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw%3D%3D) 
transparent;">
```


# Angular.element

When needing to find the scope of an element on a page when developing or debugging an angular application there are tools available 
such as [Batarang](https://github.com/angular/batarang) which allow you to visually click through a hierarchy of scopes. Although this is 
useful, I find that inspecting an element, then wrapping the reference in [angular.element](https://docs.angularjs.org/api/ng/function/angular.element) 
and utalizing the scope method to display the associated scope is an easier path to retrieving the required object.


```
var e = angular.element($0);
var s = e.scope();
s
```


# allrecipes.com

For instance, if we went to [allrecipes.com](http://allrecipes.com), inspected a recipe on the home page to find out if we were 
a registered as user in the current scope, we could type the following in the console.

```
var e = angular.element($0);
var s = e.scope();
s.visitorIsRegistered
```

Which returns the boolean value.

```
false
```

