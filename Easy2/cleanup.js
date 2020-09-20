function cleanUp(str) {
  let final = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i].toUpperCase() === str[i] && str[i].toLowerCase() === str[i]){
      final += ' '
    } else {
      final += str[i]
    }
  }
  console.log(spaces(final));
}
function spaces(word) {
  word = word.trim();
  let final = '';
  for (let i = 0; i < word.length; i++) {
    if (i === 0) final += word[i];
    if (i > 0 && word[i] === word[i - 1]) continue;
    if (i > 0) final += word[i];
  }
  return final
}
cleanUp("---what's my +*& line?");