
/*
Problem
Merge sort is a recursive sorting algorithm that works by breaking down an array's elements into nested subarrays,
then combining those nested subarrays back together in sorted order. 
It is best explained with an example. 
Given the array [9, 5, 7, 1], let's walk through the process of sorting it with merge sort. 
We'll start off by breaking the array down into nested subarrays:

[9, 5, 7, 1] -->
[[9, 5], [7, 1]] -->
[[[9], [5]], [[7], [1]]]
We then work our way back to a flat array by merging each pair of nested subarrays back together in the proper order:

[[[9], [5]], [[7], [1]]] -->
[[5, 9], [1, 7]] -->
[1, 5, 7, 9]
Write a function that takes an array, and returns a new array that contains the values from the input array in sorted order.
The function should sort the array using the merge sort algorithm as described above. 
You may assume that every element of the array will be of the same data type—either all numbers or all strings.
Aim: break down a nest of arrays into single set of numbers and then build them back up in order.
  - input: 1d array
  - output: 1d array

  Rules
    - have to follow the implementation steps
		- all elements will be the same type -> example says number or string.
    - algorithm breaks each element in two until you have nested elements that are singular
    - algorithm takes a set of nested elements and pairs them until all elements are sorted.
    - examples don't show repetition.
    -
Examples
mergeSort([9, 5, 7, 1]);           // [1, 5, 7, 9]
mergeSort([5, 3]);                 // [3, 5]
mergeSort([6, 2, 7, 1, 4]);        // [1, 2, 4, 6, 7]

mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
Data Structure
  - 2d arrays
Algorithm
  - break down an array into nested elements
    - separate each element until we have one element
    - recursive approach: use slice to split the array
  - build up an array of nested elements into one
    - need a way to merge two or more elements.
  -
*/
///          ----- first attempt  -------

// function separate(array) {
//   if (array.length === 1) return array;

//   return [separate(array.slice(0, array.length/2)), separate(array.slice(array.length/2))]
// }
// function sorted (array) {
//   let results = [];
//   let currentArray = array.slice(0);
//   for (let index = 0; index < array.length; index++) {
//     currentArray = findCurrentMin(currentArray, results)
//   }
//   return results
// }

// function findCurrentMin(array, results) {
//   let currentArray = array.slice(0);
//   let minimum = (input) => input.reduce((acc, element) => acc < element ? acc : element);
//   results.push(minimum(currentArray))
//   let newArray = array.filter((element) => element !== minimum(currentArray));
//   return newArray;
// }
// function merge(twoDArray, count) {
//   // if (twoDArray.length == count) return twoDArray;
//   let results = [];
//   twoDArray.forEach(subArray => {
//     subArray.forEach(element => {
//       results.push(element)
//     });
//   });
//   return sorted(results)
// }
// // console.log(separate([5, 3, 1]));

// function mergeSort(array) {
//   let result = separate(array);
//   result = merge(result)
//   console.log(result)
// }

function merge([left, right]) {
  let returnArray = [];
  let rindex = 0;
  let lindex = 0;
  while (rindex < right.length && lindex < left.length) {
    if (left[lindex] > right[rindex]) {
      returnArray.push(right[rindex]);
      rindex++;
    } else {
      returnArray.push(left[lindex]);
      lindex++;
    }
  }

  let finalIndex = rindex === right.length ? lindex : rindex;
  let finalArray = rindex === right.length ? left : right; 
  return returnArray.concat(finalArray.slice(finalIndex));
}


function mergeSort(arr) {
  let len = arr.length;
  if (len < 2) return arr;
  let dividedArray = [
    mergeSort(arr.slice(0, len / 2)),
    mergeSort(arr.slice(len / 2)),
  ];
  return merge(dividedArray);
}

mergeSort([9, 5, 7, 1]);           // [1, 5, 7, 9]
mergeSort([5, 3]);                 // [3, 5]
mergeSort([6, 2, 7, 1, 4]);        // [1, 2, 4, 6, 7]
console.log(mergeSort(["Sue", "Pete", "Alice", "Tyler", "Rachel", "Kim", "Bonnie"]));