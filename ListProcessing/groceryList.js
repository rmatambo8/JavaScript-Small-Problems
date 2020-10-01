// 
// create a results array
// add a fruit the number of times specified
  // takes three arguments
  // takes the 
// return array.

function buyFruit(array) {
  let results = [];
  
  function addOne(fruit, array) {
    for (let index = 0; index < fruit[1]; index++) {
      array.push(fruit[0]);
    }
  }

  array.forEach(fruit => {
    addOne(fruit, results)
  });

  return results;
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]