// Modify the function from the previous exercise so that it ignores non-alphabetic characters when determining whether a letter should be upper or lower case.
// Non-alphabetic characters should still be included in the output string,
// but should not be counted when determining the appropriate case.

// Examples:

// Copy Code
function staggeredCase(string) {
  let current = 0;
  let results = '';
  
  for (let index = 0; index < string.length; index++) {
    let char = string[index]
    if ((/[^a-zA-Z]/).test(char)) {
      results += char;
      continue;
    }

  results += current % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
  current += 1;
  }
  return results;
}
staggeredCase('I Love Launch School!');        // "I lOvE lAuNcH sChOoL!"
staggeredCase('ALL CAPS');                     // "AlL cApS"
staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 nUmBeRs"