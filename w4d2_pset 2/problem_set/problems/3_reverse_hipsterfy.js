/***********************************************************************
Write a function `reverseHipsterfy(sentence)` that takes in a sentence
and removes all vowels, except the last vowels of every word.

Examples:

reverseHipsterfy("proper"); // => 'prper'
reverseHipsterfy("proper tonic panther"); // => 'prper tnic pnther'
reverseHipsterfy("bootcamp prep"); // => 'btcamp prep'
reverseHipsterfy("towel flicker banana"); // => 'twel flcker bnna'
reverseHipsterfy("runner anaconda"); // => 'rnner ncnda'
reverseHipsterfy("turtle cheeseburger fries"); // => 'trtle chsbrger fres'
***********************************************************************/
//NOTES ON PROBLEMS
// remove all but last vowel of each word
// let vowels = 'aeiou'
// let words = sentence.split('') -> words = [ **splits words and turns them into array**]
// loop through array
// loop through the individual word
// *** new str = chr + newStr



function reverseHipsterfy(sentence) {
    let words = sentence.split 
    console.log(words)

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let newWord = handleWord(word);
    }
}

function handleWord(word) {
    let vowels = 'aeiou';
    let seenlastVowel = false;
    let newWord = '';

    for (let i = word.length; i >= 0; i --){
        let char = word[i];
        if (!vowels.includes(char) || (vowels.includes(char) && seenlastVowel)){
            newWord = char + newWord;
        }
        if(vowels.includes(char)){
            seenVowel = false;
        }
    }
    return newWord;
}



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = reverseHipsterfy;
