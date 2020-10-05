function sequence(number) {
  return Array(number).fill(0).map((_, idx) => idx + 1)
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]