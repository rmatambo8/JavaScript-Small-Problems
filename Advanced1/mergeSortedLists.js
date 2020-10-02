function merge([left, right]) {
  let returnArray = [];
  let rindex = 0;
  let lindex = 0;
  while (rindex < right.length && lindex < left.length) {
    if (left[lindex] > right[rindex]) {
      returnArray.push(right[rindex]);
      rindex++;
    } else {
      returnArray.push(left[lindex]);
      lindex++;
    }
  }

  let finalIndex = rindex === right.length ? lindex : rindex;
  let finalArray = rindex === right.length ? left : right; 
  return returnArray.concat(finalArray.slice(finalIndex));
}