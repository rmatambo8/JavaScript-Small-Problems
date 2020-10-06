function fibonacci(number) {
  if (number < 3) return 1
  let [first, second, third, counter] = [1, 1, 2, 3]
  while (counter < number) {
    [first, second, third] = [second, third, second + third]
    counter++
  }
  return third;
}
fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050