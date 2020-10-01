function reversed(string) {
  return string.split(' ').reverse().join('')
}

function swap(string) {
let words = string.split(' ');

for (let i = 0; i < words.length; i++) {
 if (words[i].length > 1) words[i] = reversed(words[i]);
}

return words.join(' ');
}
swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"