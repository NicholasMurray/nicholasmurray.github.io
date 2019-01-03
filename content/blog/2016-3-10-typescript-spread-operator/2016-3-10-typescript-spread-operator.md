---
title: Typescript Spread Operator
date: '2016-03-10T00:00:00.000Z'
---

![alt text ](/images/spread-operator.jpg "Typescript Spread Operator")

# Spread Operator

Angular2 is now in beta and the Angular Team have built it upon Typescript. Typescript is a
typed superset of Javascript created and maintained by Microsoft. The usage of types allows the
code written in Typescript to have the advantage of compile time checking, code completion and ES6 compatibility.

While working through some introductory tutorials on Angular2 and Typescript a new operator
came to my attention which takes the form of an ellipsis and is called the Spread Operator.

## ES6

ECMAScript 6 was finalized in June 2015 and it introduced the spread operator as a better version of the the existing apply method.

Using the existing Function.prototype.apply you pass two arguments, a this parameter and a single array which is converted into a list of arguments to the function which apply is called on.

```

var argsArray = ["A", "B", "C"];

console.log.apply(console, argsArray);

// Which outputs the same as
console.log("A", "B", "C");

```

In ES6 using the spread operator you can instead prefix the arguments with *...*

```

var argsArray = ["A", "B", "C"];

console.log(...argsArray);

// Which outputs the same as
console.log("A", "B", "C");

```

## Angular2 and Typescript

When creating an Angular2 application using Typescript the spread operator becomes very useful. When updating an object in for example a todo list array it is recommended to replace the  array rather than to update it so any pipes that filter the array contents are informed that the contents have changed. In the toggle function below we can use splice combined with the spread operator to neatly update a todo object within our array of todo objects.

```

import {Injectable} from "angular2/core";
import {TodoModel} from "./todo-model";

@Injectable()   
export class TodoService{
    todos = [
        new TodoModel("eat"),
        new TodoModel("sleep"),
        new TodoModel("dance", "completed"),
        new TodoModel("party"),
        new TodoModel("work"),
        new TodoModel("play"),
        new TodoModel("record", "completed"),
        new TodoModel("earn"),
        new TodoModel("charm", "completed"),
        new TodoModel("exercise"),
        new TodoModel("swim", "completed"),
        new TodoModel("code")
    ];

    addTodo(todo: TodoModel) {
        this.todos = [...this.todos, todo];
    }

    toggleTodo(todo: TodoModel) {
        todo.toggle();

        const i = this.todos.indexOf(todo);

        this.todos = [
            ...this.todos.slice(0, i),
            todo,
            ...this.todos.slice(i + 1)
        ]

    }
};

```

Photo Credit: <a href="https://www.flickr.com/photos/71256895@N00/5491842479/">tomylees</a> via <a href="http://compfight.com">Compfight</a> <a href="https://creativecommons.org/licenses/by-nc-sa/2.0/">cc</a>
