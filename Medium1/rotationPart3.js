function rotateRightmostDigits(number, rotations) {
  let rotate = (string) => [string.slice(1, string.length), string[0]].join('');
  let string = number.toString();
  string = string.slice(0, string.length - rotations) + rotate(string.slice(string.length - rotations, string.length));
  return Number(string)
}
// Take the number 735291 and rotate it by one digit to the left, getting 352917.
// Next, keep the first digit fixed in place and rotate the remaining digits to get 329175.
// Keep the first two digits fixed in place and rotate again to get 321759.
// Keep the first three digits fixed in place and rotate again to get 321597.
// Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579.
// The resulting number is called the maximum rotation of the original number.

// Write a function that takes an integer as an argument, and returns the maximum rotation of that integer.
// You can (and probably should) use the rotateRightmostDigits function from the previous exercise.


// iteration
// first rotate theleftmost digit, then skip 1, and rotate the digits from 
function maxRotation(number) {
  rotate = (string) => string.slice(1) + string[0];
  let string = String(number);
  let length = string.length
  for (let index = 0; index < length; index++) {
    string = string.slice(0, index) + rotate(string.slice(index))
  }
  return Number(string);
}
maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845