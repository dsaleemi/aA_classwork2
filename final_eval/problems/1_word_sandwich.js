/**************************************************************************************
Write a function `wordSandwich(outerWord, innerWord)` that takes in two strings and
returns a string representing a word sandwich. See the examples below.

Examples:

wordSandwich('bread', 'cheese');  // => 'BREADcheeseBREAD'
wordSandwich('BREAD', 'CHEESE');  // => 'BREADcheeseBREAD'
wordSandwich('HeLLo', 'worLD');   // => 'HELLOworldHELLO'

Difficulty: Easy
*************************************************************************************/

function wordSandwich(outerWord, innerWord) {
  let capWord = outerWord.toUpperCase()
  let lowWord = innerWord.toLowerCase()
  return capWord + lowWord + capWord;
}

console.log(wordSandwich('bread', 'cheese'));
console.log(wordSandwich('HeLLo', 'worLD'));
console.log(wordSandwich('HeLLo', 'worLD'));

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = wordSandwich;
