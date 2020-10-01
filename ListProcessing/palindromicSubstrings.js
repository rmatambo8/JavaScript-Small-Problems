/*
Problem
list of all substrings of a string that are palindromes.
use substrings function from prior(or make a new one.)
Aim: create a case sensitive function that will return all palindromic substrings.
  - input: string
  - output: array

  Rules
    - substrings are considered a smaller portion of the code 
		- 
    - 
    -
    -
    -
Examples
	-
Data Structure
	-
Algorithm
  - find all substrings
  - filter for substrings that are palindromes
  -
  -
*/
function leadingSubstrings(string) {
  return string.split('').map((value, index) => string.slice(0, index + 1));
}

function substrings(string) {
  let final = []
  string.split('').forEach((value, index) => leadingSubstrings(string.slice(index)).forEach(element => final.push(element)));
  return final;
}

function palindromes(string) {
  let chars = string.split('')
  let isPalindrome = (word) => word === word.split('').reverse().join('') && word.length > 1;
  return substrings(string).filter(isPalindrome);
}
palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]