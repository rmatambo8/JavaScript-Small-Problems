// Delete Vowels
// Write a function that takes an array of strings, and returns an array of the same strings values without the vowels (a, e, i, o, u).

// Examples:

// Copy Code

function removeVowels(array) {
  return array.map(string => (string.match(/[^aeiou]/gi) || [string]).join(''))
}
removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]