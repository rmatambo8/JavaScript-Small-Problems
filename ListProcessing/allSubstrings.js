function leadingSubstrings(string) {
  return string.split('').map((value, index) => string.slice(0, index + 1));
}

function substrings(string) {
  let final = []
  console.log(string.split('').forEach((value, index) => leadingSubstrings(string.slice(index)).forEach(element => final.push(element))));
  console.log(final);
}

substrings('abcde');