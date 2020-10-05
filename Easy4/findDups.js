function findDup(array) {
  for (let index = 0; index < array.length; index += 1) {
   if (array.lastIndexOf(array[index]) !== array.indexOf(array[index])) return array[index] 
  }
 }
 