---
title: Big-O notation with Javascript
date: '2019-01-13T00:00:00.000Z'
---

![alt text ](../../assets/images/jeff-fielitz-120506-unsplash.jpg "Big O notation with Javascript - Photo by Jeff Fielitz on Unsplash")

# Big-O notation with Javascript

## Big-O notation

### What is Big-O notation?

Big-O notation is a special notation that is used to tell you how fast an algorithm runs. In that, it is not a measure of 
how fast in seconds it runs, but rather it tells you how fast it will grow in time to run. It tells is how the runtime of 
an algorithm will increase as the size of its input (n) increases. As the input can vary it will give the maximum runtime 
possible as we cannot be sure in advance the possible outcomes of running an algorithm.

### What is an algorithm?

Algorithms are methods (aka functions) that receive data as input, perform task against the data and return a result 
when the tasks are processed. Examples could be: pick winnning lottery numbers, find a user that is a admin or calculating 
the time required to cook a receipe.

## O(1) - Constant time

O(1) is an algorithm that has a constant run time regardless of the supplied dataset (n).  

So for example, an algorithm that takes the same amount of time to complete no matter what the
input supplied would be, finding an array item by its index.

```
// Big-O O(1) - Constant Time
function findByIndex(arr, index) {
  return arr[index];
}

var food = ['🍿', '🍔', '🍩', '🍗'];
var drinks = ['☕️', '🍺', '🍹', '🍷', '🍸', '🍵', '🍶'];

console.log(findByIndex(food, 2));   🍩
console.log(findByIndex(drinks, 5));   🍵
```

### Chart - O(1) - Constant time

As shown in the chart below the amount of time it takes to execute the algorithm does *not* increase with input size.

<svg width="600" height="600">
    <g>
      <rect x="0" y="0" width="600" height="600" fill="#a3cfd1"></rect>
      <!-- axis -->
      <path d="M50 50 L 50 550 L 551 550" fill="transparent" stroke="#5c5c5b" stroke-width="2"></path>
      <!-- labels -->
      <text x="0" y="0" transform="translate(16 400) rotate(-90)" style="font-size:16px; color: #5c5c5b; font-style: italic;">Time ---> (no. of operations)</text>
      <text x="0" y="0" transform="translate(188 595)" style="font-size:16px; color: #5c5c5b; font-style: italic;">Input Size ---> (no. of elements)</text>
      <!-- values x axis -->
      <text x="48" y="570" style="font-size:12px; color: #5c5c5b;">0</text>
      <line x1="100" y1="550" x2="100" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="92" y="570" style="font-size:12px; color: #5c5c5b;">10</text>
      <line x1="150" y1="550" x2="150" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="144" y="570" style="font-size:12px; color: #5c5c5b;">20</text>
      <line x1="200" y1="550" x2="200" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="194" y="570" style="font-size:12px; color: #5c5c5b;">30</text>
      <line x1="250" y1="550" x2="250" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="244" y="570" style="font-size:12px; color: #5c5c5b;">40</text>
      <line x1="300" y1="550" x2="300" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="294" y="570" style="font-size:12px; color: #5c5c5b;">50</text>
      <line x1="350" y1="550" x2="350" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="352" y="570" style="font-size:12px; color: #5c5c5b;">60</text>
      <line x1="400" y1="550" x2="400" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="394" y="570" style="font-size:12px; color: #5c5c5b;">70</text>
      <line x1="450" y1="550" x2="450" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="444" y="570" style="font-size:12px; color: #5c5c5b;">80</text>
      <line x1="500" y1="550" x2="500" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="494" y="570" style="font-size:12px; color: #5c5c5b;">90</text>
      <line x1="550" y1="550" x2="550" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="540" y="570" style="font-size:12px; color: #5c5c5b;">100</text>
      <!-- values y axis -->
      <text x="30" y="554" style="font-size:12px; color: #5c5c5b;">0</text>
      <line x1="40" y1="500" x2="50" y2="500" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="504" style="font-size:12px; color: #5c5c5b;">100</text>
      <line x1="40" y1="450" x2="50" y2="450" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="454" style="font-size:12px; color: #5c5c5b;">200</text>
      <line x1="40" y1="400" x2="50" y2="400" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="404" style="font-size:12px; color: #5c5c5b;">300</text>
      <line x1="40" y1="350" x2="50" y2="350" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="354" style="font-size:12px; color: #5c5c5b;">400</text>
      <line x1="40" y1="300" x2="50" y2="300" style="stroke:#5c5c5b;st roke-width:2" />
      <text x="19" y="304" style="font-size:12px; color: #5c5c5b;">500</text>
      <line x1="40" y1="250" x2="50" y2="250" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="254" style="font-size:12px; color: #5c5c5b;">600</text>
      <line x1="40" y1="200" x2="50" y2="200" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="204" style="font-size:12px; color: #5c5c5b;">700</text>
      <line x1="40" y1="150" x2="50" y2="150" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="154" style="font-size:12px; color: #5c5c5b;">800</text>
      <line x1="40" y1="100" x2="50" y2="100" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="104" style="font-size:12px; color: #5c5c5b;">900</text>
      <line x1="40" y1="50" x2="50" y2="50" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="12" y="54" style="font-size:12px; color: #5c5c5b;">1000</text>
      <!-- O(1) path -->
      <path d="M51 548 L 550 548" fill="transparent" stroke="#f05a1f" stroke-width="2"></path>
      <!-- O(1) path label -->
      <text x="500" y="540" fill="#5c5c5b">O(1)</text>
    </g>
</svg>

## 0(n) - Linear Time

O(n) is an algorithm that has a linear run time correlating to the size of the supplied dataset (n).  

So for example, an algorithm that has input of 10 items and each item runs 10 times, if it has an input of 1000 items it 
runs 1000 times.

```
// Big-O O(n) -  Linear Time
function bogoff(arr) {
  arr.forEach(a => 
       console.log(a,a)
  );
}

var food = ['🍿', '🍔', '🍩', '🍗'];
var drinks = ['☕️', '🍺', '🍹', '🍷', '🍸', '🍵', '🍶'];

bogoff(food); // 🍿🍿​​​​​ 🍔🍔​​​​​ ​​​​🍩🍩​​​​​ ​​​​​🍗🍗​​​​​
bogoff(drinks); // ☕️☕️​​​​​ ​​​​​🍺🍺​​​​​ ​​​​​🍹🍹​​​​​ ​​​​​🍷🍷​​​​​ ​​​​​🍸🍸​​​​​ ​​​​​🍵🍵​​​​​ ​​​​​🍶🍶​​​​​
```

### Chart - O(n) - Linear Time

As shown in the chart below the amount of time it takes to execute the algorithm increases in direct *correlation* to input size.

<svg width="600" height="600">
    <g>
      <rect x="0" y="0" width="600" height="600" fill="#a3cfd1"></rect>
      <!-- axis -->
      <path d="M50 50 L 50 550 L 551 550" fill="transparent" stroke="#5c5c5b" stroke-width="2"></path>
      <!-- labels -->
      <text x="0" y="0" transform="translate(16 400) rotate(-90)" style="font-size:16px; color: #5c5c5b; font-style: italic;">Time ---> (no. of operations)</text>
      <text x="0" y="0" transform="translate(188 595)" style="font-size:16px; color: #5c5c5b; font-style: italic;">Input Size ---> (no. of elements)</text>
      <!-- values x axis -->
      <text x="48" y="570" style="font-size:12px; color: #5c5c5b;">0</text>
      <line x1="100" y1="550" x2="100" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="92" y="570" style="font-size:12px; color: #5c5c5b;">10</text>
      <line x1="150" y1="550" x2="150" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="144" y="570" style="font-size:12px; color: #5c5c5b;">20</text>
      <line x1="200" y1="550" x2="200" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="194" y="570" style="font-size:12px; color: #5c5c5b;">30</text>
      <line x1="250" y1="550" x2="250" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="244" y="570" style="font-size:12px; color: #5c5c5b;">40</text>
      <line x1="300" y1="550" x2="300" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="294" y="570" style="font-size:12px; color: #5c5c5b;">50</text>
      <line x1="350" y1="550" x2="350" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="352" y="570" style="font-size:12px; color: #5c5c5b;">60</text>
      <line x1="400" y1="550" x2="400" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="394" y="570" style="font-size:12px; color: #5c5c5b;">70</text>
      <line x1="450" y1="550" x2="450" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="444" y="570" style="font-size:12px; color: #5c5c5b;">80</text>
      <line x1="500" y1="550" x2="500" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="494" y="570" style="font-size:12px; color: #5c5c5b;">90</text>
      <line x1="550" y1="550" x2="550" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="540" y="570" style="font-size:12px; color: #5c5c5b;">100</text>
      <!-- values y axis -->
      <text x="30" y="554" style="font-size:12px; color: #5c5c5b;">0</text>
      <line x1="40" y1="500" x2="50" y2="500" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="504" style="font-size:12px; color: #5c5c5b;">100</text>
      <line x1="40" y1="450" x2="50" y2="450" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="454" style="font-size:12px; color: #5c5c5b;">200</text>
      <line x1="40" y1="400" x2="50" y2="400" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="404" style="font-size:12px; color: #5c5c5b;">300</text>
      <line x1="40" y1="350" x2="50" y2="350" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="354" style="font-size:12px; color: #5c5c5b;">400</text>
      <line x1="40" y1="300" x2="50" y2="300" style="stroke:#5c5c5b;st roke-width:2" />
      <text x="19" y="304" style="font-size:12px; color: #5c5c5b;">500</text>
      <line x1="40" y1="250" x2="50" y2="250" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="254" style="font-size:12px; color: #5c5c5b;">600</text>
      <line x1="40" y1="200" x2="50" y2="200" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="204" style="font-size:12px; color: #5c5c5b;">700</text>
      <line x1="40" y1="150" x2="50" y2="150" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="154" style="font-size:12px; color: #5c5c5b;">800</text>
      <line x1="40" y1="100" x2="50" y2="100" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="104" style="font-size:12px; color: #5c5c5b;">900</text>
      <line x1="40" y1="50" x2="50" y2="50" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="12" y="54" style="font-size:12px; color: #5c5c5b;">1000</text>
      <!-- O(n) path -->
      <path d="M50 550 L 550 500" fill="transparent" stroke="#f05a1f" stroke-width="2"></path>
      <!-- O(n) path label -->
      <text x="500" y="490" fill="#5c5c5b">O(n)</text>
    </g>
</svg>


## O(log n) Logarithmic Time

O(log n) is an algorithm is the most efficient when the supplied dataset (n) is large. So for example with a dataset of one 
million we could find a specified element in 20 iterations and for one billion we could find it in 30 iterations.

An example of an O(log n) algorithm would be a binary search algorithm.

```
function binarySearch(array, element, start = 0, end = (array.length - 1)) {
  if (end < start) return -1;
  var middle = Math.floor((start + end) / 2);
  return element === array[middle]
    ? middle
    : element < array[middle]
      ? binarySearch(array, element, start, middle - 1)
      : binarySearch(array, element, middle + 1, end);
}

var unsortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Index of 2: ", binarySearch(unsortedArray, 2));    // Index of 2: 1
console.log("22 not found: ", binarySearch(unsortedArray, 22)); // 22 not found: -1
```


### Chart - O(log n) - Logarithmic Time

As shown in the chart below the amount of time it takes to execute the algorithm increases slightly with input size.

<svg width="600" height="600">
    <g>
      <rect x="0" y="0" width="600" height="600" fill="#a3cfd1"></rect>
      <!-- axis -->
      <path d="M50 50 L 50 550 L 551 550" fill="transparent" stroke="#5c5c5b" stroke-width="2"></path>
      <!-- labels -->
      <text x="0" y="0" transform="translate(16 400) rotate(-90)" style="font-size:16px; color: #5c5c5b; font-style: italic;">Time ---> (no. of operations)</text>
      <text x="0" y="0" transform="translate(188 595)" style="font-size:16px; color: #5c5c5b; font-style: italic;">Input Size ---> (no. of elements)</text>
      <!-- values x axis -->
      <text x="48" y="570" style="font-size:12px; color: #5c5c5b;">0</text>
      <line x1="100" y1="550" x2="100" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="92" y="570" style="font-size:12px; color: #5c5c5b;">10</text>
      <line x1="150" y1="550" x2="150" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="144" y="570" style="font-size:12px; color: #5c5c5b;">20</text>
      <line x1="200" y1="550" x2="200" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="194" y="570" style="font-size:12px; color: #5c5c5b;">30</text>
      <line x1="250" y1="550" x2="250" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="244" y="570" style="font-size:12px; color: #5c5c5b;">40</text>
      <line x1="300" y1="550" x2="300" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="294" y="570" style="font-size:12px; color: #5c5c5b;">50</text>
      <line x1="350" y1="550" x2="350" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="352" y="570" style="font-size:12px; color: #5c5c5b;">60</text>
      <line x1="400" y1="550" x2="400" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="394" y="570" style="font-size:12px; color: #5c5c5b;">70</text>
      <line x1="450" y1="550" x2="450" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="444" y="570" style="font-size:12px; color: #5c5c5b;">80</text>
      <line x1="500" y1="550" x2="500" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="494" y="570" style="font-size:12px; color: #5c5c5b;">90</text>
      <line x1="550" y1="550" x2="550" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="540" y="570" style="font-size:12px; color: #5c5c5b;">100</text>
      <!-- values y axis -->
      <text x="30" y="554" style="font-size:12px; color: #5c5c5b;">0</text>
      <line x1="40" y1="500" x2="50" y2="500" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="504" style="font-size:12px; color: #5c5c5b;">100</text>
      <line x1="40" y1="450" x2="50" y2="450" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="454" style="font-size:12px; color: #5c5c5b;">200</text>
      <line x1="40" y1="400" x2="50" y2="400" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="404" style="font-size:12px; color: #5c5c5b;">300</text>
      <line x1="40" y1="350" x2="50" y2="350" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="354" style="font-size:12px; color: #5c5c5b;">400</text>
      <line x1="40" y1="300" x2="50" y2="300" style="stroke:#5c5c5b;st roke-width:2" />
      <text x="19" y="304" style="font-size:12px; color: #5c5c5b;">500</text>
      <line x1="40" y1="250" x2="50" y2="250" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="254" style="font-size:12px; color: #5c5c5b;">600</text>
      <line x1="40" y1="200" x2="50" y2="200" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="204" style="font-size:12px; color: #5c5c5b;">700</text>
      <line x1="40" y1="150" x2="50" y2="150" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="154" style="font-size:12px; color: #5c5c5b;">800</text>
      <line x1="40" y1="100" x2="50" y2="100" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="104" style="font-size:12px; color: #5c5c5b;">900</text>
      <line x1="40" y1="50" x2="50" y2="50" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="12" y="54" style="font-size:12px; color: #5c5c5b;">1000</text>
      <!-- O(1) path -->
      <path d="M51 548 L 550 546" fill="transparent" stroke="#f05a1f" stroke-width="2"></path>
      <!-- O(1) path label -->
      <text x="500" y="540" fill="#5c5c5b">O(log n)</text>
    </g>
</svg>

## O(n log n)


An example of an O(n log n) algorithm would be a quicksort algorithm

```
function quicksort(arr) {
  if (arr.length < 2) return arr;
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr[pivotIndex];
  var less = [];
  var greater = [];
  arr.forEach((element, i) => {
    if (i != pivotIndex) {
      element > pivot ? greater.push(element) : less.push(element);
    }
  });
  return [
    ...quicksort(less),
    pivot,
    ...quicksort(greater)
  ];
}

console.log(quicksort([5, 7, 3, 8, 9]));  // [ 3, 5, 7, 8, 9]
```

### Chart - O(n log n) 

As shown in the chart below the amount of time it takes to execute the algorithm increases somewhat with input size.

<svg width="600" height="600">
    <g>
      <rect x="0" y="0" width="600" height="600" fill="#a3cfd1"></rect>
      <!-- axis -->
      <path d="M50 50 L 50 550 L 551 550" fill="transparent" stroke="#5c5c5b" stroke-width="2"></path>
      <!-- labels -->
      <text x="0" y="0" transform="translate(16 400) rotate(-90)" style="font-size:16px; color: #5c5c5b; font-style: italic;">Time ---> (no. of operations)</text>
      <text x="0" y="0" transform="translate(188 595)" style="font-size:16px; color: #5c5c5b; font-style: italic;">Input Size ---> (no. of elements)</text>
      <!-- values x axis -->
      <text x="48" y="570" style="font-size:12px; color: #5c5c5b;">0</text>
      <line x1="100" y1="550" x2="100" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="92" y="570" style="font-size:12px; color: #5c5c5b;">10</text>
      <line x1="150" y1="550" x2="150" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="144" y="570" style="font-size:12px; color: #5c5c5b;">20</text>
      <line x1="200" y1="550" x2="200" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="194" y="570" style="font-size:12px; color: #5c5c5b;">30</text>
      <line x1="250" y1="550" x2="250" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="244" y="570" style="font-size:12px; color: #5c5c5b;">40</text>
      <line x1="300" y1="550" x2="300" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="294" y="570" style="font-size:12px; color: #5c5c5b;">50</text>
      <line x1="350" y1="550" x2="350" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="352" y="570" style="font-size:12px; color: #5c5c5b;">60</text>
      <line x1="400" y1="550" x2="400" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="394" y="570" style="font-size:12px; color: #5c5c5b;">70</text>
      <line x1="450" y1="550" x2="450" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="444" y="570" style="font-size:12px; color: #5c5c5b;">80</text>
      <line x1="500" y1="550" x2="500" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="494" y="570" style="font-size:12px; color: #5c5c5b;">90</text>
      <line x1="550" y1="550" x2="550" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="540" y="570" style="font-size:12px; color: #5c5c5b;">100</text>
      <!-- values y axis -->
      <text x="30" y="554" style="font-size:12px; color: #5c5c5b;">0</text>
      <line x1="40" y1="500" x2="50" y2="500" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="504" style="font-size:12px; color: #5c5c5b;">100</text>
      <line x1="40" y1="450" x2="50" y2="450" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="454" style="font-size:12px; color: #5c5c5b;">200</text>
      <line x1="40" y1="400" x2="50" y2="400" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="404" style="font-size:12px; color: #5c5c5b;">300</text>
      <line x1="40" y1="350" x2="50" y2="350" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="354" style="font-size:12px; color: #5c5c5b;">400</text>
      <line x1="40" y1="300" x2="50" y2="300" style="stroke:#5c5c5b;st roke-width:2" />
      <text x="19" y="304" style="font-size:12px; color: #5c5c5b;">500</text>
      <line x1="40" y1="250" x2="50" y2="250" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="254" style="font-size:12px; color: #5c5c5b;">600</text>
      <line x1="40" y1="200" x2="50" y2="200" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="204" style="font-size:12px; color: #5c5c5b;">700</text>
      <line x1="40" y1="150" x2="50" y2="150" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="154" style="font-size:12px; color: #5c5c5b;">800</text>
      <line x1="40" y1="100" x2="50" y2="100" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="104" style="font-size:12px; color: #5c5c5b;">900</text>
      <line x1="40" y1="50" x2="50" y2="50" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="12" y="54" style="font-size:12px; color: #5c5c5b;">1000</text>
      <!-- O(1) path -->
      <path d="M51 550 L 550 350" fill="transparent" stroke="#f05a1f" stroke-width="2"></path>
      <!-- O(1) path label -->
      <text x="460" y="410" fill="#5c5c5b">O(n log n)</text>
    </g>
</svg>

## 0(n2) - Quadratic Time

0(n2) is an algorithm that has a quadratic run time where execution is proportional to the square of the input size (n).

For example, a bubble sort algorithm that has an input of 4 items runs 4 times on the outer loop 
and the inner loop runs 4 times for run of the outer loop, or n * n.

The inner loop does O(n) work on each iteration, and the outer loop runs for O(n) iterations, so the total work is O(n2). When n = 10 it is 10 * 10 = 100 steps, by adding one additional item (11 * 11 = 121 steps) you are adding 121 additional steps.

```
function bubbleSort(array){
  array = array.slice();
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

var array = [ 4, 3, 2, 1];

console.log(bubbleSort(array)); // [ 1, 2, 3, 4]
```

### Chart - O(n2) - Quadratic Time

As shown in the chart below the amount of time it takes to execute the algorithm increases in direct *correlation* to the 
square of the input size.

<svg width="600" height="600">
    <g>
      <rect x="0" y="0" width="600" height="600" fill="#a3cfd1"></rect>
      <!-- axis -->
      <path d="M50 50 L 50 550 L 551 550" fill="transparent" stroke="#5c5c5b" stroke-width="2"></path>
      <!-- labels -->
      <text x="0" y="0" transform="translate(16 400) rotate(-90)" style="font-size:16px; color: #5c5c5b; font-style: italic;">Time ---> (no. of operations)</text>
      <text x="0" y="0" transform="translate(188 595)" style="font-size:16px; color: #5c5c5b; font-style: italic;">Input Size ---> (no. of elements)</text>
      <!-- values x axis -->
      <text x="48" y="570" style="font-size:12px; color: #5c5c5b;">0</text>
      <line x1="100" y1="550" x2="100" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="92" y="570" style="font-size:12px; color: #5c5c5b;">10</text>
      <line x1="150" y1="550" x2="150" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="144" y="570" style="font-size:12px; color: #5c5c5b;">20</text>
      <line x1="200" y1="550" x2="200" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="194" y="570" style="font-size:12px; color: #5c5c5b;">30</text>
      <line x1="250" y1="550" x2="250" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="244" y="570" style="font-size:12px; color: #5c5c5b;">40</text>
      <line x1="300" y1="550" x2="300" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="294" y="570" style="font-size:12px; color: #5c5c5b;">50</text>
      <line x1="350" y1="550" x2="350" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="352" y="570" style="font-size:12px; color: #5c5c5b;">60</text>
      <line x1="400" y1="550" x2="400" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="394" y="570" style="font-size:12px; color: #5c5c5b;">70</text>
      <line x1="450" y1="550" x2="450" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="444" y="570" style="font-size:12px; color: #5c5c5b;">80</text>
      <line x1="500" y1="550" x2="500" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="494" y="570" style="font-size:12px; color: #5c5c5b;">90</text>
      <line x1="550" y1="550" x2="550" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="540" y="570" style="font-size:12px; color: #5c5c5b;">100</text>
      <!-- values y axis -->
      <text x="30" y="554" style="font-size:12px; color: #5c5c5b;">0</text>
      <line x1="40" y1="500" x2="50" y2="500" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="504" style="font-size:12px; color: #5c5c5b;">100</text>
      <line x1="40" y1="450" x2="50" y2="450" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="454" style="font-size:12px; color: #5c5c5b;">200</text>
      <line x1="40" y1="400" x2="50" y2="400" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="404" style="font-size:12px; color: #5c5c5b;">300</text>
      <line x1="40" y1="350" x2="50" y2="350" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="354" style="font-size:12px; color: #5c5c5b;">400</text>
      <line x1="40" y1="300" x2="50" y2="300" style="stroke:#5c5c5b;st roke-width:2" />
      <text x="19" y="304" style="font-size:12px; color: #5c5c5b;">500</text>
      <line x1="40" y1="250" x2="50" y2="250" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="254" style="font-size:12px; color: #5c5c5b;">600</text>
      <line x1="40" y1="200" x2="50" y2="200" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="204" style="font-size:12px; color: #5c5c5b;">700</text>
      <line x1="40" y1="150" x2="50" y2="150" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="154" style="font-size:12px; color: #5c5c5b;">800</text>
      <line x1="40" y1="100" x2="50" y2="100" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="104" style="font-size:12px; color: #5c5c5b;">900</text>
      <line x1="40" y1="50" x2="50" y2="50" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="12" y="54" style="font-size:12px; color: #5c5c5b;">1000</text>
      <!-- O(n) path -->
      <path d="M50 550 Q 140 500, 200 50" fill="transparent" stroke="black" stroke-width="2"></path>
      <!-- O(n) path label -->
      <text x="200" y="100" fill="#5c5c5b">O(n2)</text>
    </g>
</svg>


## 0(2n) - Exponential

O(n2) is an algorithm that has a run time that doubles for every element in the supplied dataset (n).

```
function fibonacci(n){
  if(n <= 2)
     return [0, 1].slice(0, n);
  var res = fibonacci(n - 1);
  res.push(res[res.length - 1] + res[res.length - 2])
  return res;
}


console.log(fibonacci(8)); // [ 0, 1, 1, 2, 3, 5, 8]
```

### Chart - O(2n) - Exponential

As shown in the chart below the amount of time it takes to execute the algorithm starts off shallow and then rises meteorically.

<svg width="600" height="600">
    <g>
      <rect x="0" y="0" width="600" height="600" fill="#a3cfd1"></rect>
      <!-- axis -->
      <path d="M50 50 L 50 550 L 551 550" fill="transparent" stroke="#5c5c5b" stroke-width="2"></path>
      <!-- labels -->
      <text x="0" y="0" transform="translate(16 400) rotate(-90)" style="font-size:16px; color: #5c5c5b; font-style: italic;">Time ---> (no. of operations)</text>
      <text x="0" y="0" transform="translate(188 595)" style="font-size:16px; color: #5c5c5b; font-style: italic;">Input Size ---> (no. of elements)</text>
      <!-- values x axis -->
      <text x="48" y="570" style="font-size:12px; color: #5c5c5b;">0</text>
      <line x1="100" y1="550" x2="100" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="92" y="570" style="font-size:12px; color: #5c5c5b;">10</text>
      <line x1="150" y1="550" x2="150" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="144" y="570" style="font-size:12px; color: #5c5c5b;">20</text>
      <line x1="200" y1="550" x2="200" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="194" y="570" style="font-size:12px; color: #5c5c5b;">30</text>
      <line x1="250" y1="550" x2="250" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="244" y="570" style="font-size:12px; color: #5c5c5b;">40</text>
      <line x1="300" y1="550" x2="300" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="294" y="570" style="font-size:12px; color: #5c5c5b;">50</text>
      <line x1="350" y1="550" x2="350" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="352" y="570" style="font-size:12px; color: #5c5c5b;">60</text>
      <line x1="400" y1="550" x2="400" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="394" y="570" style="font-size:12px; color: #5c5c5b;">70</text>
      <line x1="450" y1="550" x2="450" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="444" y="570" style="font-size:12px; color: #5c5c5b;">80</text>
      <line x1="500" y1="550" x2="500" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="494" y="570" style="font-size:12px; color: #5c5c5b;">90</text>
      <line x1="550" y1="550" x2="550" y2="560" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="540" y="570" style="font-size:12px; color: #5c5c5b;">100</text>
      <!-- values y axis -->
      <text x="30" y="554" style="font-size:12px; color: #5c5c5b;">0</text>
      <line x1="40" y1="500" x2="50" y2="500" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="504" style="font-size:12px; color: #5c5c5b;">100</text>
      <line x1="40" y1="450" x2="50" y2="450" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="454" style="font-size:12px; color: #5c5c5b;">200</text>
      <line x1="40" y1="400" x2="50" y2="400" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="404" style="font-size:12px; color: #5c5c5b;">300</text>
      <line x1="40" y1="350" x2="50" y2="350" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="354" style="font-size:12px; color: #5c5c5b;">400</text>
      <line x1="40" y1="300" x2="50" y2="300" style="stroke:#5c5c5b;st roke-width:2" />
      <text x="19" y="304" style="font-size:12px; color: #5c5c5b;">500</text>
      <line x1="40" y1="250" x2="50" y2="250" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="254" style="font-size:12px; color: #5c5c5b;">600</text>
      <line x1="40" y1="200" x2="50" y2="200" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="204" style="font-size:12px; color: #5c5c5b;">700</text>
      <line x1="40" y1="150" x2="50" y2="150" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="154" style="font-size:12px; color: #5c5c5b;">800</text>
      <line x1="40" y1="100" x2="50" y2="100" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="19" y="104" style="font-size:12px; color: #5c5c5b;">900</text>
      <line x1="40" y1="50" x2="50" y2="50" style="stroke:#5c5c5b;stroke-width:2" />
      <text x="12" y="54" style="font-size:12px; color: #5c5c5b;">1000</text>
      <!-- O(n) path -->
      <path d="M50 550 Q 140 550, 140 50" fill="transparent" stroke="black" stroke-width="2"></path>
      <!-- O(n) path label -->
      <text x="200" y="100" fill="#5c5c5b">O(n2)</text>
    </g>
</svg>
