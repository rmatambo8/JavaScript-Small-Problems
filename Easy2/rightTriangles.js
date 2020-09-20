function triangle(number) {
  for (i = 1; i <= number; i++) {
    console.log(' '.repeat(number - i) + '*'.repeat(i))
  }
}

triangle(9);