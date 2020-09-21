function pop(array) {
  if (!array.length) return undefined;
  let value = array[array.length - 1];
  array.length = array.length - 1;
  return value;

}
console.log(pop([]));
function push(start, ...elements) {
  if(!start.length) return elements.length
  elements.reduce((acc, current) => start[start.length] = current);
  return start.length
}

const array2 = [1, 2, 3];
push(array2, 4, 5, 6);              // 6
console.log(array2);                // [1, 2, 3, 4, 5, 6]
push([1, 2], ['a', 'b']);          // 3
console.log(push([], 1));                       // 1
push([]);