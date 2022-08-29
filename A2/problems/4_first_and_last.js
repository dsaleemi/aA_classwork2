/******************************************************************************
Write a function firstAndLast(array) that takes in an array of numbers and
returns either:

- the sum of the first and last elements of the array if there is an even
 number of elements

- the difference between the first and last elements of the array if there is an
 odd number of elements.

You can assume the array contains at least one number.

Examples:

firstAndLast([1, 2, 3, 4]); // => 5
firstAndLast([1, 2, 3, 4, 5]); // => -4
firstAndLast([12, 5]); // => 17
firstAndLast([12]); // => 0
firstAndLast([7, 11, 3]); // => 4
*******************************************************************************/

// function firstAndLast(array) {
//   var array = 0 

  function firstAndLast(array) {
    // if even or odd
    let len = array.length
    if (len % 2 === 0 ) { //even
      return array [0] + array[ len - 1]
    } else { //odd 
      return array [0]- array [len -1] }
   }

   console.log( firstAndLast2([1,2,3,4]))


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = firstAndLast;
