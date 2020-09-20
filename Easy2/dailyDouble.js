function crunch(string) {
  let final = '';
  for (let i = 0; i < string.length; i++) {
    if (i === 0) final += string[i]
    if (i > 0 && string[i] !== string[i - 1]) final += string[i]
  }
  return final
}
console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));
