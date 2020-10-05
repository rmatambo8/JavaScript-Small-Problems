function interleave(array1, array2) {
  let results = [];
  for (let index = 0; index < array1.length; index++) {
    results.push(array1[index]);
    results.push(array2[index]);
  }
  return results;
}
interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]