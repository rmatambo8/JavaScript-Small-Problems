function century(year) {
  let century = Math.ceil(year / 100);
  let measure = century % 20;
  console.log(findEnding(measure, century))
}

function findEnding(measure, century) {
  if (measure === 1) return `${century}st`
  if (measure === 2) return `${century}nd`
  if (measure === 3) return `${century}rd`
  return `${century}th`
}
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"