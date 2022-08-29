/*******************************************************************************
Write a function reverseRange(start, end) that returns an array that contains all
numbers between 'start' and 'end' (exclusive) in reverse-sequential order. Use a
loop to do this.

Examples:

console.log(reverseRange(2,7)) => [6, 5, 4, 3]
reverseRange(4,2) => []
*******************************************************************************/

// function reverseRange(start, end) {
//   var array = []; {                                     /// we have to DEFINE 
//     for (i = start ; i <= end - 1; i += 1)           // create a LOOP
//     console.log(array[i])
//   }   
//     return array;                                    //return an ARRAY
// } 

function reverseRange(start, end) {
  let array = []; ///defining array
  for ( let i = end - 1; i >= start + 1 ; i -= 1) { //defining our for loop
    array.push(i) // letting 'i' to go into array 
  }
  return array  // calling array 
}




console.log(reverseRange(2,7))
console.log(reverseRange(4,2))








/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseRange;
