function findFibonacciIndexByLength(number) {
  let currentLength = 1;
  let index = 3;

  for (let first = 1, second = 1, third = 2; currentLength < number; index += 1) {
    [first, second, third] = [second, third, second + third];
    currentLength = String(third).length;
  }
  console.log(index)
}
findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74