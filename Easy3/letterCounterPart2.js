'use strict';
let filtered = (word) => word.match(/\w/g);
function wordSizes(string) {
  let final = {};
  if (!string) return final
  let words = string.split(' ');

  words.forEach(word => {
    word = filtered(word);
    final[word.length] = final[word.length] || 0
    final[word.length] += 1
  });

  return final
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "5": 1, "2": 1, "3": 1 }
wordSizes('');                                            // {}