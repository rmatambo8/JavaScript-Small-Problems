function leadingSubstrings(string) {
  console.log(string.split('').map((value, index) => string.slice(0, index + 1)));
}
leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]