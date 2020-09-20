console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168

function multisum(number){
  let total = 0;
  for (let integer = 3; integer <= number; integer += 1) {
    if (integer % 3 === 0 || integer % 5 === 0) total += integer;
  }
  return total
}