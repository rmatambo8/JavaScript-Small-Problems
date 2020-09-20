const words = prompt('Please enter a phrase:');
const chars = String(words.replace(/\W/gi, '').length);
console.log(`There are ${chars} characters in '${words}'.`);