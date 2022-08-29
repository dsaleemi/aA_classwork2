/******************************************************************************
Write a function reverseSentence(sentence) that returns a string where all the
words in the input sentence are reversed. Don't use Array#reverse.

Examples:

reverseSentence("Go to the store") => "store the to Go"
reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*******************************************************************************/


// function reverseSentence(sentence); {
//   return reverseSentence( 1, 2, 3, 4 )
// }

// inti a words array by splitiing the sent string @ the spaces 
// inti newSen arr
// loop through the words array backwards
// at every iteration i want to push to the newSen
// rerutn newSen joined at the spaces

function reverseSentence( sentence ){
  // console.log(sentence)
  let words = sentence.split('  ')
  // console.log(words) 
  let newSen =[];


    for (let i = 0; i < words.length; i++)
    let word = words [i]
    console.log(word)
    newSen.unshift
}



















/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseSentence;
