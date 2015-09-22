---
layout: post
title: Ternary Operators in Angular Templates
---

![alt text ](http://i.imgur.com/zwRgfKG.jpg, "There are 10 types of people in this world: those who understand ternary, those who don't, and those who thought this was a binary joke")


#Ternary Operators in Angular Templates

Ternary Operators are part of the toolset of most programming languages and are available of course in Javascript.

The syntax for a ternary operator is

{% highlight html %}
condition ? expr1 : expr2
{% endhighlight %}

Where the *condition* is any statement that evaluates to true or false and expressions *expr1* and *expr2* are values of any type.

If the *condition* is true then value of *expr1* is returned otherwise the value of *expr2* is returned.

So in the following code

{% highlight html %}
var currentMember = {
  name: 'Joe Bloggs',
  isGoldMember: true
};
console.log("Price: " + (currentMember.isMember ? "£5.00" : "£10.00"));
{% endhighlight %}

The output is

{% highlight html %}
Price: £10.00
{% endhighlight %}


##How to use ternary operators in angular templates

The most useful use case I have found for ternary operators is within angular directives such as ng-class and ng-style.

Ternary operators were added to Angular [1.1.5](https://github.com/angular/angular.js/commit/6798fec4390a72b7943a49505f8a245b6016c84b) and can be used from version 1.1.5 and up.

###Using a ternary operator within ng-style

In the example we wish to apply to highlight every third item in a list.

The list to display contains the first names of users of a website.

So we will initialise our angular app in the usual way

{% highlight html %}
var app = angular.module('ternaryExample', []);
{% endhighlight %}

And the main controller contains a list of first names

{% highlight html %}
app.controller('MainCtrl', function($scope) {
  $scope.persons = [
    'Allison',
    'Arthur',
    'Ana',
    'Alex',
    'Arlene',
    'Alberto',
    'Barry',
    'Bertha',
    'Bill',
    'Bonnie',
    'Bret',
    'Beryl',
    'Chantal',
    'Cristobal',
    'Claudette',
    '...
    ];
});
{% endhighlight %}

To simply display the user names with a greeting we use a template within our controller attached to the document body.



{% highlight html %}
 <body ng-controller="MainCtrl">
    <div ng-repeat="person in persons">
      <h4>
      {% raw %}
        Hello {{ person }}!
      {% endraw %}
      </h4>
    </div>
  </body>
{% endhighlight %}


By adding track by $index we can use the current array index in our code.

{% highlight html %}
person in persons track by $index
{% endhighlight %}

So how is this useful in a ternary operator where we want to apply a different style to every third person?

We can add one to $index, as it is a 0 based index, and then return either a green hex code value as the color if true

{% highlight html %}
'#008141'
{% endhighlight %}

or a black hex code value if false

{% highlight html %}
'#131313'
{% endhighlight %}

based on a ternary expression that utilizes a modulus operator to evaluate if the current $index mod 3 returns 0 and is indeed a 'third' element in the array. 

{% highlight html %}
<h4 ng-style="{color : ($index + 1) % 3 == 0 ? '#008141' : '#131313'}">
{% endhighlight %}

Like so

{% highlight html %}
 <body ng-controller="MainCtrl">
    <div ng-repeat="person in persons track by $index">
      <h4 ng-style="{color : ($index + 1) % 3 == 0 ? '#008141' : '#131313'}">
        {% raw %}
        Hello {{ person }}!
        {% endraw %}
      </h4>
    </div>
  </body>
{% endhighlight %}


A working demo of our example can be found on [codepen](http://codepen.io/NicholasMurray/pen/MajgQZ).


###Credits

The ternary joke used in the meme I found [here](https://www.allegro.cc/forums/thread/611052/2)