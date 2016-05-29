---
layout: post
title: How to check for an empty AngularJS $scope object
---

![alt text ]({{ site.baseurl }}/images/empty-property.jpg "How to check for an empty AngularJS $scope object")

# Creating an empty $scope object

In AngularJS there are many cases where you will create a $scope object and initialise it as an empty object.

A typical case would be when you are going to open a form modal to allow the addition of a new person.

{% highlight html %}
vm.showAddPersonModal = function() {                   	
  $scope.person = {};
  $scope.action = 'Add';
  $scope.isAdd = true;
  $scope.modal.show();	
};
{% endhighlight %}

# Checking if object is still empty

One of the ways in which a modal can be dismissed is by clicking outside the modal area and that can leave us with an empty object 
if no data has been entered and saved.

So, if we are listening to the modal being hidden and we wish to take some action if the object is empty, 
how can we verify this?

We can check if the object is empty by looping over the properties explicitly

{% highlight html %}
function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }
    return true;
}	
{% endhighlight %}

or by, my preferred method, counting the object keys length 

{% highlight html %}
var obj = {};
return Object.keys(obj).length; //returns 0 if empty or an integer > 0 if non-empty
{% endhighlight %}


So let's see this in action

{% highlight html %}
$scope.$on('modal.hidden', function() {
  if (Object.keys($scope.person).length == 0) {
    // object empty
    // logic
  }
});
{% endhighlight %}


