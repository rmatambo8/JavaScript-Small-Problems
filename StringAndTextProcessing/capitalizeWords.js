function wordCap(string) {
  return string.split(' ').map((word) => word[0].toUpperCase() + word.slice(1, word.length).toLowerCase()).join(' ');
}
wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'