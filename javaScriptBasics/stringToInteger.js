// const DIGITS = {
//   '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
//   '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
// };

// function stringToInteger(string) {
//   let chars = string.split('');
//   let final = 0;
//   for (let index = 0; index < chars.length; index++) {
//     final = final * 10 + DIGITS[chars[index]];
//   }
//   console.log(final);
//   return final;
// }

// stringToInteger('4321');      // 4321
// stringToInteger('570');       // 570

let arr = [1,2,3,4,5]

arr.length = 2;
arr.length = 3;

console.log(arr);

console.log(arr[0]);