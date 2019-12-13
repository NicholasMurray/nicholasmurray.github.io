---
title: Shuffle a Javascript Array
date: '2015-07-13T00:00:00.000Z'
---

![alt text ](https://i.imgur.com/DAqGSop.jpg, "Shuffle a Javascript Array")


## Sorting

When you have a javascript array that you need to sort you can use the sort method as it is simple to read, use and understand.

If you call sort on a simple array of strings or numbers it will sort them alphabetically or numerically. Also, if you pass in an optional anonymous function parameter you can custom sort the array as long as your function returns a negative, zero or positive value.

```
var colours = ['Red', 'Yellow', 'Blue'];
colours.sort();
// results
// ["Blue", "Red", "Yellow"]

var frequencyArray = [{ n: 3, name: 'Brown' }, { n: 2, name: 'Blue' }, { n: 4, name: 'Red'  }];
frequencyArray.sort(function(a,b) { return a.n - b.n; });

// results
// [{ n: 2, name: 'Blue' }, { n: 3, name: 'Brown' }, { n: 4, name: 'Red'  }];
```



## Random Sorting

A simple way of randomly sorting a simple array of numbers is

```
var numbers = [12,4,16,3];
numbers.sort(function() {
  return .5 - Math.random();
});
// results from sorting 5 times
//[3, 16, 4, 12]
//[16, 4, 3, 12]
//[16, 12, 4, 3]
//[16, 12, 3, 4]
//[3, 12, 16, 4]
```

but this is the least efficient and <a href="http://jsfiddle.net/rcmp0aLL/" target="_blank">biased</a> way of sorting randomly as it has a strong bias toward keeping each element in its initial starting position in addition to the edges of the array having slightly more bias than the middle.

## Random Shuffling An Array the Fisher-Yates (aka Knuth) Way

Originally designed by Fisher and Yates as pencil and paper method using a table of random numbers for randomness and then popularized by Donald E. Knuth in The Art of Computer Programming (<a href="https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle" target="_blank">source</a>). This shuffling algorithm provides with a more efficient and more random result set.

```
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var arr = [2, 11, 37, 42];
shuffle(arr);
// results
// [42, 2, 37, 11]
```