function stringy(num) {
  let final = '';

  for (let i = 0, current = '1', other = '0'; i < num; i++) {
    final += current;
    [current, other] = [other, current];
  }
  return final;
}


console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"