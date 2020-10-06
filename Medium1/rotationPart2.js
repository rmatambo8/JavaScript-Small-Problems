// Write a function that rotates the last n digits of a number. For the rotation, rotate by one digit to the left, moving the first digit to the end.

// Examples:
function rotateRightmostDigits(number, rotations) {
  let rotate = (string) => [string.slice(1, string.length), string[0]].join('');
  let string = number.toString();
  string = string.slice(0, string.length - rotations) + rotate(string.slice(string.length - rotations, string.length));
  return Number(string)
}
rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917