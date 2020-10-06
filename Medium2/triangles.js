let sum = (args) => args.reduce((acc, element) => acc + element)
function triangle(...arr) {
  let [max, min, sum] = [Math.max(...arr), Math.min(...arr), sum(arr)]
  if (arr.includes(0) || (max * 2) > sum) return 'invalid';
  if (max === min) return 'equilateral';
  if (arr.every((number) => arr.indexOf(number) === arr.lastIndexOf(number))) return 'scalene';
  return 'isosceles';
}
console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"