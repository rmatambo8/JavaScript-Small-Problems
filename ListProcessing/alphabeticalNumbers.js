const ARRAY_OF_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function alphabeticNumberSort(array) {
  cons workingArray = array.slice(0);
  workingArray.sort((a, b) => checkOrder(ARRAY_OF_WORDS[a], ARRAY_OF_WORDS[b]));
  console.log(workingArray);
}
function checkOrder(value1, value2) {
  if (value1 > value2) return 1;
  if (value1 < value2) return -1;
  return 0
}
alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]