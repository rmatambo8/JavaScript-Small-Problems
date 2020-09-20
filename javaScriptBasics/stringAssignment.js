// let name = 'Bob';
// const saveName = name; // once a constant is initialized it cannot be changed.
// name = 'Alice'; // options - error - since we are trying to change a constant, name is reassigned - variables as pointers.
// console.log(name, saveName); // - name will be reassigned and const will stay as saveName;

const name = 'Bob';
const saveName = name;
name.toUpperCase();
console.log(name, saveName);

// Bob Bob
// Primitive types are immutable

// The data types string, number and boolean contain a String, Number and Boolean object counterpart respectively.
// When we call a method or a property (such as the length property) on a primitive value, Javascript temporarily coerces the primitive value to it's object counterpart.
// This temporary coercion allows us to use object methods and properties on primitive values instead of manually creating a String, Number or a Boolean object and then calling the methods and properties on them.
// null and undefined do not have any object counterpart, therefore we cannot use any of the object methods and properties on these 2 data type values.
