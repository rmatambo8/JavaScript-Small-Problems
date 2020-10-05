function doubleConsonants(string) {
  let result = '';
  for (let index = 0; index < string.length; index++) {
    result += string[index];
    if ((/[^AEIOU\W\d\s]/i).test(string[index])) result += string[index];
  }

  return result
}
doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""