function repeater(string) {
  let result = '';
  for (let index = 0; index < string.length; index++) {
    result += string[index];
    result += string[index];
  }

  return result
}
repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""