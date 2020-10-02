// const matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6]
// ];

// const newMatrix = transpose(matrix);
function transpose(matrix) {
  let result = matrix[0].slice()
  return result.map((element, colIndex) => matrix.map((value, rowIndex) => matrix[rowIndex][colIndex]));
}
// 1 X 4 => 4 X 1
// 1 X 1 becomes 1 X 1
// 3 X 5 => 5 X 3


console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]