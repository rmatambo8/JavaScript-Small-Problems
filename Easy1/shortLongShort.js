function shortLongShort(str1, str2) {
  if (str1.length > str2.length) [str1, str2] = [str2, str1];
  console.log(str1 + str2 + str1);
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"
