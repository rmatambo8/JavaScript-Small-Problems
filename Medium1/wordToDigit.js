function wordToDigit(string) {
  const NUMBERS = ['zero', 'one','two','three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  let words = string.split(/\b/)
  return words.map((word) => NUMBERS.indexOf(word) >= 0 ? NUMBERS.indexOf(word) : word).join('');
}
wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."