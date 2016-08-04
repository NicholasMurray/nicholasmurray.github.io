---
layout: post
title: ES6 Let there be let
---

![alt text ]({{ site.baseurl }}/images/let-there-be-light.jpg "ES6 Let there be let")

# In the beginning there was var 

And ***var*** was a little bit tricky to understand. So, along came es6 with the new 
shiny ***let***.

## Block level scoping

In javascript the setting of a variable can be the cause of bugs due to way javascript allows 
the assigning of values. For example, in the code below you would think that declaring and 
assigning a value to a variable inside a block of code would isolate it from the rest of the 
code. But javascript does not have block level scoping. So, in the code below the variable 
***messageInBottle*** takes its value from the second assignment and not the first.

{% highlight html %}

var messageInBottle = 'Help me!';
{
  var messageInBottle = 'Would you like a pen pal?'; 
}
console.log(messageInBottle);

// output: Would you like a pen pal?

{% endhighlight %}


Javascript has function level scoping which encapsulates ***var*** declarations and assignments 
and therefore in the code below the first assignment of ***messageInBottle*** is unaffected by the 
second assignment.

{% highlight html %}

var messageInBottle = 'Help me!';

function bottle() {
  var messageInBottle = 'Would you like a pen pal?'; 
}

console.log(messageInBottle);

// output: Help me!

{% endhighlight %}

With es6 the introduction of the ***let*** keyword introduces block level variable scoping. This 
allows the declaration and assignment of variables that have block level scope. Now we can 
see that the first ***messageInBottle*** ***let*** variable retains its value as the second 
***messageInBottle*** ***let*** variable is restricted to the scope of its code block. 


{% highlight html %}

let messageInBottle = 'Help me!';
{
  let messageInBottle = 'Would you like a pen pal?'; 
}
console.log(messageInBottle);

// output: Help me!

{% endhighlight %}


## Hoisted by your own petard

In the code below we would expect the output to be the range of numbers 0-9 squared but 
the output is in fact the number 10 repeated 10 times. This occurs due to the reference 
of ***n*** pointing to the value of n in the loop which has exited when it incremented to 
the number 10. This variable hoisting moves the declaration of the variable ***n*** out 
of the loop and instead to the top of the function scope.


{% highlight html %}

var squares = [];

for (var n = 0; n < 10; n ++) {
   squares.push(function() {
     console.log(n * n);
   });
}

squares.forEach(function(s) { 
  s();
});

// output:
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10

{% endhighlight %}


This can be solved by using a closure which are nested functions that retain a reference to 
the enviroment in which they were created. The closure retains the value of n that it was 
passed during its creation. We now see the expected output of the range 0-9 squared.

{% highlight html %}

var squares = [];

for (var n = 0; n < 10; n ++) {
   squares.push(function(i) {
     console.log(i * i);
   }(n));
}

squares.forEach(function(s) {
});

// output:
// 0
// 1
// 4
// 9
// 16
// 25
// 36
// 49
// 64
// 81

{% endhighlight %}


The newly introduced ***let*** keyword can help us gain the expected output by its ability 
to create a new instance of ***n*** each time the code goes through the for loop.


{% highlight html %}

var squares = [];

for (let n = 0; n < 10; n ++) {
   squares.push(function() {
     console.log(n * n);
   });
}

squares.forEach(function(s) {
  s();
});

// output:
// 0
// 1
// 4
// 9
// 16
// 25
// 36
// 49
// 64
// 81


{% endhighlight %}


Photo Credit: <a href="https://unsplash.com/@celestekorol">Celeste Korol</a> via <a href="https://unsplash.com/">Unsplash</a>

