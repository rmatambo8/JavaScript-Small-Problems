function logInBox(string) {
  let repeater = string.length
  console.log(`+${'-'.repeat(repeater + 2)}+`)
  console.log(`|${' '.repeat(repeater + 2)}|`)
  console.log(`| ${string} |`)
  console.log(`|${' '.repeat(repeater + 2)}|`)
  console.log(`+${'-'.repeat(repeater + 2)}+`)
}
logInBox('To boldly go where no one has gone before.');
logInBox('');