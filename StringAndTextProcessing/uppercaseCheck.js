function isUppercase(string) {
  if (string === '') return true;
  return !(/[a-z]/).test(string);
}
isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true
isUppercase('@#!$@#$')          // true