let bill = parceFloat(prompt('What is the bill?'));
const PERCENTAGE = parseFloat(prompt('What is the tip percentage?'));
let tip = bill *(PERCENTAGE/100)
let total = bill + tip
console.log(`The tip is $${tip.toFixed(2)}`)
console.log(`The total is $${total}`)