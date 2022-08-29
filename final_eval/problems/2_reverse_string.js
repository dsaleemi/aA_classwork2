/**************************************************************************************
Write a function `reverseString(str)` that takes in a string and returns the given string
with its characters in reverse order.

Examples:

reverseString('taco');        // => 'ocat'
reverseString('hello world'); // => 'dlrow olleh'

Difficulty: Easy
*************************************************************************************/

// function reverseString(str) {
//     for (let i = str.length ; i > 0 ; i -- );
//         return str;
// }

function reverseString(str){
    for ( let i = str.length; i > 0; i --)
    return str[i];
}

console.log(reverseString('taco'))

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = reverseString;
