---
title: Ternary Operators in Angular Templates
date: '2015-05-22T00:00:00.000Z'
---

![alt text ](http://i.imgur.com/zwRgfKG.jpg, "There are 10 types of people in this world: those who understand ternary, those who don't, and those who thought this was a binary joke")


# Ternary Operators in Angular Templates

Ternary Operators are part of the toolset of most programming languages and are available of course in Javascript.

The syntax for a ternary operator is

```
condition ? expr1 : expr2
```

Where the *condition* is any statement that evaluates to true or false and expressions *expr1* and *expr2* are values of any type.

If the *condition* is true then value of *expr1* is returned otherwise the value of *expr2* is returned.

So in the following code

```
var currentMember = {
  name: 'Joe Bloggs',
  isGoldMember: true
};
console.log("Price: " + (currentMember.isGoldMember ? "£5.00" : "£10.00"));
```

The output is

```
Price: £5.00
```


## How to use ternary operators in angular templates

The most useful use case I have found for ternary operators is within angular directives such as ng-class and ng-style.

Ternary operators were added to Angular [1.1.5](https://github.com/angular/angular.js/commit/6798fec4390a72b7943a49505f8a245b6016c84b) and can be used from version 1.1.5 and up.

### Using a ternary operator within ng-style

In the example we wish to apply to highlight every third item in a list.

The list to display contains the first names of users of a website.

So we will initialise our angular app in the usual way

```
var app = angular.module('ternaryExample', []);
```

And the main controller contains a list of first names

```
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
```

To simply display the user names with a greeting we use a template within our controller attached to the document body.



```
 <body ng-controller="MainCtrl">
    <div ng-repeat="person in persons">
      <h4>
      {% raw %}
        Hello {{ person }}!
      {% endraw %}
      </h4>
    </div>
  </body>
```


By adding track by $index we can use the current array index in our code.

```
person in persons track by $index
```

So how is this useful in a ternary operator where we want to apply a different style to every third person?

We can add one to $index, as it is a 0 based index, and then return either a green hex code value as the color if true

```
'#008141'
```

or a black hex code value if false

```
'#131313'
```

based on a ternary expression that utilizes a modulus operator to evaluate if the current $index mod 3 returns 0 and is indeed a 'third' element in the array. 

```
<h4 ng-style="{color : ($index + 1) % 3 == 0 ? '#008141' : '#131313'}">
```

Like so

```
 <body ng-controller="MainCtrl">
    <div ng-repeat="person in persons track by $index">
      <h4 ng-style="{color : ($index + 1) % 3 == 0 ? '#008141' : '#131313'}">
        {% raw %}
        Hello {{ person }}!
        {% endraw %}
      </h4>
    </div>
  </body>
```


A working demo of our example can be found on [codepen](http://codepen.io/NicholasMurray/pen/MajgQZ).


### Credits

The ternary joke used in the meme I found [here](https://www.allegro.cc/forums/thread/611052/2)