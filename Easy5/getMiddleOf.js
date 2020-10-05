function centerOf(string) {
  if (string.length % 2 === 1) {
    let centerIndex = (string.length - 1) / 2;
    console.log(string[centerIndex]);
  } else {
    let leftIndex = string.length / 2 - 1;
    console.log(string.substring(leftIndex, leftIndex + 2));
  }
}
centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"