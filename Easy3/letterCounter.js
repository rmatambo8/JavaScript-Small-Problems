function wordSizes(string) {
  let final = {};
  let words = string.split(' ');
  words.forEach(word => {
    final[word.length] = final[word.length] || 0
    final[word.length] += 1
  });
  console.log(final)
}
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}