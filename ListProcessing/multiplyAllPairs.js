function multiplyAllPairs(array1, array2) {
  let final = [];

  array1.forEach(element => {
    for (let index = 0; index < array2.length; index++) {
       final.push(element * array2[index]);
    }
  });

  return final.sort((a,b) => a - b);
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]