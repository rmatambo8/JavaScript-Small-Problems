// Lettercase Counter
// Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.

// Examples:
function letterCaseCount(string) {
  let lowercase = (/[a-z]/).test(string) ? string.match(/[a-z]/g).length : 0
  let uppercase = (/[A-Z]/).test(string) ? string.match(/[A-Z]/g).length : 0
  let neither = string.length - lowercase - uppercase;
  return {lowercase, uppercase, neither};
}
letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }