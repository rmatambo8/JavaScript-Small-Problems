const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = '';

if (myBoolean) {
  console.log('Hello');
}

if (!myString) {
  console.log('World');
}

if (!!myArray) {
  console.log('World');
}

if (myOtherString || myArray) {
  console.log('!');
}

// line 6 will log, because the expression of a conditional statement must evaluate to a truthy statement
// since myBoolean evaluates to true then the if statement will run.
// line 11 will not log because on line 10 the ! will change a truthy statement to a falsy one
// myString is not one of the 6 falsey values and with the bang there, it will now become falsey.
// line 15 will log because an empty array is still a truthy value, there are only six values
// that are falsey
// line 19 will log because in line 18 we have put an or statement which means only one of the conditions
// needs to evaluate to true.
// 6 falsy values: null, undefined, false, '', NaN, 0