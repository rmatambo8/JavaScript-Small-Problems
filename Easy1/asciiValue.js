console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));

function asciiValue(string) {
  let array = string.split('');
  let reduction = (acc, element) => acc + element.charCodeAt(0);
  return array.reduce(reduction, 0)
}