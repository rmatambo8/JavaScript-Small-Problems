function reverse(string) {
  return string.split('').reverse().join('')
}
function reverseWords(string) {
  return string.split(' ').map((word => word.length > 5 ? reverse(word) : word)).join(' ');
}
reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"