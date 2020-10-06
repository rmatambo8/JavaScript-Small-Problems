memo = {}
function fibonacci(number) {
  if (number < 3) return 1;
  if (memo[number]) return memo[number];
  memo[number] = fibonacci(number - 1) + fibonacci(number - 2);
  return memo[number];
}

console.log(fibonacci(20));