// Write a function that takes a string as an argument,
// and returns that string with every lowercase letter changed to
// uppercase and every uppercase letter changed to lowercase.
// Leave all other characters unchanged.
function swapCase(string) {
  let results = '';
  for (let index = 0; index < string.length; index++) {
    let char = string[index]
    let isUpperCase = char.toUpperCase() === char;
    results += isUpperCase ? char.toLowerCase() : char.toUpperCase();
  }

  console.log(results);
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"