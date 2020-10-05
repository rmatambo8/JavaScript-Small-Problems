function multiplyList(arr1, arr2) {
  let results = [];
  arr1.forEach((number, index) => results.push(number * arr2[index]));
  return results
}
multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]