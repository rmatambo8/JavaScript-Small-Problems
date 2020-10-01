
/*
Problem
You have a bank of switches before you, numbered from 1 to n.
Every switch is connected to exactly one light that is initially off.
You walk down the row of switches and toggle every one of them.
You walk back to the beginning of the row and start another pass.
On this second pass, you toggle switches 2, 4, 6, and so on.
On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on.
You continue to repeat this process until you have gone through n repetitions.

Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on
after n repetitions.
Aim: Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on
after n repetitions.(12:08)
  - input: number of rounds
  - output: array of switch numbers that are on.

  Rules
    - explicit
      - program accepts one argument
      - switches have numbers
      - the total number of switches can be expressed as a number
      - return will be an array
      - array includes lights that are on
  		- each switch has one number
      - each switch is initially turned off
      - each light must be toggled
      - stop repititions after you get to n repititions
    - Implicit
      - number should be positive integer
      - each pass is denoted as the current positive integer
      - toggle can turn a switch on or off
      - each round switches are either on or off for current number
      - n and total number of switches can be the same thing
    - start at turning all on
    - on the second round we move to numbers divisible by 2

Examples

function lightsOn(switches) {
  // ...
}

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

lightsOn(5) // n and switches are the same [1, 2, 3, 4, 5] => [1, 3, 5] => [1, 4, 5] => [1, 4]
lightsOn(5, 3) // n and switches are not the same [1, 2, 3, 4, 5] => [1, 3, 5] = [1, 5]
lightsOn(5, 6) // n is bigger than switches -> same as no n.
lightsOn(0) // there are no switches.


Data Structure
  - array would allow us to iterate through each value.
  - object would allow us to keep track of state (same with array, still an object.)
Algorithm
  - create an array of n elements and fill them with the off state.
    - off will be a string 'X'
    - on will be a string 'O'
  - iterate through and toggle each element based on whether it is evenly divisible by the criterion
    - create a toggle switch method that will change the value based on current value.
  - repeat the toggling n times
    - loop through the array n times and toggleSwitches based on criterion
  - return an array of elements that are still on at the end of the toggles.
*/

function lightsOn(switches, numberOfTimes = switches) {
  let allSwitches = [];
  addNewSwitches(allSwitches, switches)
  for (let index = 1; index <= numberOfTimes; index++) {
    oneIteration(allSwitches, index)
  }

  return allSwitches.filter((values) => typeof values === 'number');

}

function addNewSwitches(array, times) {
  for (let index = 0; index < times; index++) {
    array.push('X')
  }
}

function oneIteration(array, criterion) {
  array.forEach((element, index) => {
    if ((index + 1) % criterion === 0) array[index] = toggleSwitch(array[index], index)
  });
}
function toggleSwitch(currentValue, index) {
  return currentValue === 'X' ? index + 1 : 'X'
}

lightsOn(3) // [1]
console.log(lightsOn(100));
console.log(lightsOn(5, 3));
console.log(lightsOn(1000, 998));
