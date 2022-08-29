/*******************************************************************************
Write a function magicNumbers(max) that returns an array of numbers up to
the max. Each number should be either divisible by 4 or 6, BUT NOT BOTH.

Example:

 console.log(magicNumbers(20)) => [4, 6, 8, 16, 18]
*******************************************************************************/

function magicNumbers(max) {
  let array = []; //defining the array
  for (i = 0; i < max; i += 1) { //defining our for loop 
    if (( i  % 4 === 0 || i % 6 === 0) && !( i % 4 === 0 && i % 6 === 0)) //setting the terms of for loop
      array.push(i) // allowing 'i' to go into the array
  }
  return array; // calling array
}
console.log(magicNumbers(20))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = magicNumbers;
