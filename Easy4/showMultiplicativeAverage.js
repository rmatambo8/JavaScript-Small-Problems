function showMultiplicativeAverage(array) {
  return parseFloat(array.reduce((acc, element) => acc * element) / array.length).toFixed(3);
}
showMultiplicativeAverage([3, 5]);                   // "7.500"
showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"