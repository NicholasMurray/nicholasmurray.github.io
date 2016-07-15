---
layout: post
title: ES6 String Template Literals
---

![alt text ]({{ site.baseurl }}/images/stringballs.jpg "es6 String Template Literals")

# Template Literals 

ES6 has introduced Template Literals as a new way of working with strings and string 
templates. Template Literals have ensured that working with strings will no longer be 
as painful as it once was.

The main benefits are:

- Back ticks - no more escaping
- Multi-line - now less characters 
- Interpolation - not only variables but any expressions


## No more escaping

The clever use of the ` back tick character to enclose text means that the common problem 
of escaping your double quotes or single quotes is not longer an issue.

Before whether you used single or double quotes to wrap text you eventually end up 
escaping quotes within the text.

{% highlight html %}

var lyric = 'I\'m a lumberjack and I\'m ok';

var button = "<button class=\"btn btn-primary\">Save</button>";

{% endhighlight %}

Now the back ticks negate the escaping problem.

{% highlight html %}

var Q = `'Have you any idea', he said, 'what "dillygrout" is?'`;

{% endhighlight %}


## Multi-line formating

There are traditionally two ways to format strings over multiple lines, without using a 
function, which involved either string concatenation or the lesser known method of adding 
a backslash to the end of a line.


{% highlight html %}

var exampleHTML = "<body>\n" +
"  <h1>Header Text</h1>\n" +
"  <p>Paragraph Text</p>\n" +
"</body>";

var exampleHTML2 = "<body>\n\
  <h1>Header Text</h1>\n\
  <p>Paragraph Text</p>\n\
</body>";

{% endhighlight %}

Which can be now resolved by the neater wrapping text with back ticks.

{% highlight html %}

var exampleHTML3 = `<body>
  <h1>Header Text</h1>
  <p>Paragraph Text</p>
</body>`;

{% endhighlight %}


## Interpolation

ES6 facilitates interpolation by using the ${expession} notation to replace the syntax of 
a variable preceded and/or succeeded by a plus sign.

Plus syntax.

{% highlight html %}

var a = 4;
alert(a + ' cubed is ' + (a * a * a));

{% endhighlight %}

The more readable new ${expession} syntax.

{% highlight html %}

var a = 4;
alert(`${a} cubed is ${a * a * a}`);

{% endhighlight %}
