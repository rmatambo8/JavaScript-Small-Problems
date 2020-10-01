/*
# Problem(1:50)
# 
# Vigenere Cipher
# 
# The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution. It uses a series of Caesar Ciphers based on the letters of a keyword. Each letter of the keyword is treated as a shift value. For instance, the letter 'B' corresponds to a shift value of 1, and the letter 'd' corresponds to a shift value of 3. In other words, the shift value used for a letter is equal to its index value in the alphabet. This means that the letters 'a'-'z' are equivalent to the numbers 0-25. The uppercase letters 'A'-'Z' are also equivalent to 0-25.
# 
# Applying the Vigenere Cipher is done sequentially for each character by applying the current shift value to a Caesar Cipher for that particular character. To make this more concrete, let's look at the following example:
# 
# Copy Code
# plaintext: Pineapples don't go on pizzas!
# keyword: meat
# 
# Applying the Vigenere Cipher for each alphabetic character:
# plaintext : Pine appl esdo ntgo onpi zzas
# shift     : meat meat meat meat meat meat
# ciphertext: Bmnx mtpe qwdh zxgh arpb ldal
# 
# result: Bmnxmtpeqw dhz'x gh ar pbldal!
# Notice that in the example, the key isn't moved forward if the character isn't in the alphabet. Like the Caesar Cipher, the Vigenere Cipher only encrypts alphabetic characters.
# 
# Write a function that implements the Vigenere Cipher. The case of the keyword doesn't matter—in other words, the resulting encryption won't change depending on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').
# 
# For a quick lookup of a ciphertext per character, you may consult this tabula recta. Each row of the table corresponds to a Caesar Cipher encryption using the columns' character letter as a shift value.
# 
# - uses polyalphabetic substitution
#   - series of Caesar ciphers based on the letters of a keyword(needed input?).
#   - shift value? example - b = 1, d = 3, shift value is index of alphabet.( note: indexOf(letter))
#   - application: done by applying the current shift value to a caesar cipher.
#     - text
#     - kw 
#     - splits into chunks same size as keyword
#     - shifts by the value ( circular - at 25 % 26)
#     - only encodes
# Aim: create a function that will use this cipher system. encryption is case indepenent.
#   - input: plaintext, keyword
#   - output: ciphertext
# 
#   Rules
#     - input word can have different cases
#     - letters are transformed based on keyword's shift value.(note: change the keyword into an array and then find index
#     - shift value is indexed. 
#     - spaces and all other non-word characters are ignored
#     - NON-WORD CHARACTERS NEED TO BE PLACED BACK INTO FINAL RESULT
#     - capitalization does not matter in terms of shift value
#     - cap matter in terms of final letter is a cap if orig is cap.
#     - shift > plaintext (length) then only use letters that matter.
# Examples
#   plaintext: Pineapples don't go on pizzas!
# keyword: meat
# 
# Applying the Vigenere Cipher for each alphabetic character:
# plaintext : Pine appl esdo ntgo onpi zzas
# shift     : meat meat meat meat meat meat
# ciphertext: Bmnx mtpe qwdh zxgh arpb ldal
# 
# result: Bmnxmtpeqw dhz'x gh ar pbldal!
# happy
# 
# Hi => bat => Ii
# hi => BAT => ii
# 
# Data Structure
#   - array of 26 letters ( 0 - 25)
#   - plaintext - Array
#   - shift - array of values
#   - ciphertext - array
#   - results - string (built string)
# Algorithm
#   - declare a results array;
#   - declare a constant that has all letters indexed.
#   - Plaintext: filter out all of the non-word characters
#     - simple
#   - Transform all values of the shift values into numbers
#     - shiftValue = ALPHABET.indexOf(letter.toLowerCase())
#   - Transform the  values for cyphertext equivalents
      - take the current value add the shift value and then find the new value
      - findLetter((current + shiftValue) % 26)
      - guard clause - if orig was upper, then change to upper.
#   - iterate through the original string and push all values into results (in order)
      - if it is a non letter then just += (concat)
      - else += ciphertext.shift();
      
      PROS
        Creates a very solid understanding of problem

        Uses high level thinking to split problem into smaller problems. 

        Understands where he may have trouble and spends extra time to make sure that any trouble areas are understood

        Spending good amount of time for each step, to maintain understanding and fill gaps

        This is a long problem, I don’t expect you to finish it in 40 minutes. With that being said, you did a great job of preparing to code. 

        I was able to follow along with your algorithm. 

        Good job checking your code in REPL

POTENTIAL

        Stick to algorithm

        no magic numbers
      
        
      
# */
const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

function cipher(text, shift) {
  let results = [];
  
  let plaintext = makePlain(text);
  let shiftValue = makeNumberBlock(shift);
  let cipherBlocks = makeCipherBlocks(plaintext, shift);
  let cipherCode = makeCipherText(cipherBlocks, shiftValue).join('')
  let ciphertext = finalize(cipherCode.split(''), text)
  
  return ciphertext.join('');
}


function finalize(cipherChars, originalText) {
  let result = []
  for (let index = 0; index < originalText.length; index += 1) {
    let currentChar = originalText[index]
    if (!makePlain(currentChar)) {
        result.push(currentChar)
    } else if (checkUpperCase(currentChar)) {
      result.push(cipherChars.shift().toUpperCase());
    } else {
      result.push(cipherChars.shift());
    }
  }
  
  return result
}

function process(currentChar) {
  currentChar.match(/[^A-Z]/ig)
}

function checkUpperCase(letter) {
 return letter.toUpperCase === letter 
}

function makeNumberBlock(word) {
  return word.split('').map((element) => findLetter(element));
}

function makePlain(text) {
  return text.match(/[a-z]/ig);
}

function makeCipherBlocks(plaintext, shift) {
  let cipherBlocks = []

  for (let index = 0; index < plaintext.length; index += shift.length) {
    cipherBlocks.push(plaintext.slice(index, index + shift.length).join(''));
  }
  
  return cipherBlocks;
}
function makeCipherText(plaintextBlocks, shiftValue) {
  let numberBlocks = plaintextBlocks.map((block) => makeNumberBlock(block));
  let cipherBlocks = numberBlocks.map((block) => {
    return block.map((number, index) => {
      return convertFromShiftToCipher(number, shiftValue[index]);
    }).join('');
  })
  
  return cipherBlocks

  
}

function convertFromShiftToCipher(blockNumber, shiftNumber) {
  const ALPHA_SIZE = 26
  return ALPHABET[(blockNumber + shiftNumber) % ALPHA_SIZE]
}

function findLetter(letter) {
  return ALPHABET.indexOf(letter.toLowerCase()); 
}

cipher("Pineapples don't go on pizzas!", "meat")

/*
function shifter(letter) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let key = alphabet.indexOf(letter.toUpperCase());
  return function (char) {
    char = char.toUpperCase();
    let index = alphabet.indexOf(char);
    index = (index + key) % 26;
    return alphabet[index];
  };
}

function generatePattern(string, keyArray) {
  let keyIndex = 0;
  let keyPattern = new Array(string.length);
  string.split("").forEach((char, index) => {
    if (/[A-Z]/i.test(char)) {
      keyPattern[index] = keyArray[keyIndex];
      keyIndex = keyIndex === keyArray.length - 1 ? 0 : keyIndex + 1;
    }
  });
  return keyPattern;
}

function viginereEncode(string, keyString) {
  let keyArray = keyString.split("").map((letter) => shifter(letter));
  let keyPattern = generatePattern(string, keyArray);
  return string
    .split("")
    .map((char, index) => {
      if (keyPattern[index]) {
        if (/[A-Z]/.test(char)) {
          return keyPattern[index](char);
        } else {
          return keyPattern[index](char).toLowerCase();
        }
      } else {
        return char;
      }
    })
    .join("");
}
*/



function makeAdder(adder) {
  
  return function(number) {
    return adder + number;
  }
}

const addFive = makeAdder(5);
const addSix = makeAdder(6);
console.log(addSix(5));