const myArray = [1, 2, 3, 4];
let myOtherArray = [];

for (let i = 0; i < myArray.length; i += 1) {
  myOtherArray.push(myArray[i]);
} 
myOtherArray = myArray.slice();