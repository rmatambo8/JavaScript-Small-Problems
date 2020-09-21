function reverse(inputForReversal) {
  let final;
  if (typeof inputForReversal == 'string') {
    final = ''
    for (let i = inputForReversal.length - 1; i >= 0; i -= 1) {
      final += inputForReversal[i];
    }
  } else {
    final = [];
    for (let i = inputForReversal.length - 1; i >= 0; i -= 1) {
      final.push(inputForReversal[i]);
    }
  }
  console.log(final);
  return final;
}

reverse('Hello');           // "olleH"
reverse('a');               // "a"
reverse([1, 2, 3, 4]);      // [4, 3, 2, 1]
reverse([]);                // []

const array = [1, 2, 3];
reverse(array);             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]