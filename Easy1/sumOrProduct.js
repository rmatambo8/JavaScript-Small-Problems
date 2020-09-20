let integer;
let question;

function sum(number) {
  let total = 0;
  for(let initial = 1; initial <= number; initial +=1) total += initial;
  return total;
}

function product(number){
  let total = 1;
  for(let initial = 1; initial <= number; initial +=1) total *= initial;
  return total;
}
function askQuestion(){
  if (question) console.log('please enter a valid entry');
  question = prompt(`Enter "s" to compute the sum, or "p" to compute the product.`)
  if (question) return question;
}

while (integer < 1 || integer === undefined ) {
  integer = parseInt(prompt('Please enter an integer greater than 0:'), 10);
  if (integer > 0) break;
  console.log('invalid entry')
}

while (question !== 's' && question !== 'p') askQuestion();

if (question === 's') {
  console.log(`The sum of the integers between 1 and ${integer} is ${sum(integer)}.`)
} else {
  console.log(`The product of the integers between 1 and ${integer} is ${product(integer)}.`)
}

