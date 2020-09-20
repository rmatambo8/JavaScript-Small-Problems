function twice(number) {
  let size = String(number).length;
  for (let i = 0, string = String(number); i < size/2; i += 1) {
    if (string[i] !== string[size/2 + i]) return number * 2
  }
  return number
}
console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676