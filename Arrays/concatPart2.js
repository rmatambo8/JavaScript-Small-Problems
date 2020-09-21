function concat(...params) {
  return params.reduce((previous, current) => concatOne(previous, current));
}

function concatOne(array1, secondArgument) {
  let final = [];
  iterateThrough(array1, final);

  if (Array.isArray(secondArgument)) {
    iterateThrough(secondArgument, final);
  } else {
    final.push(secondArgument)
  }

  return final;
}

function iterateThrough(array, final) {
  for (let i = 0; i < array.length; i++) {
    final.push(array[i])
  }
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]