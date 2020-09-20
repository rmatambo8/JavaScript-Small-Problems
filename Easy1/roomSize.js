let length = Number(prompt('Enter the length of the room in meters:'));
let width = Number(prompt('Enter the width of the room in meters:'));
let area = length * width;
let feet = (area * 10.7639);
console.log(`The area of the room is ${area.toFixed(2)} square meters (${feet.toFixed(2)} square feet).`);