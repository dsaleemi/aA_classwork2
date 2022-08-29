/*******************************************************************************
Write a function `isPrime(number)` that returns a boolean indicating if `number`
is prime or not.

Examples:

isPrime(-7): // => false
isPrime(2); // => true
isPrime(11); // => true
isPrime(15); // => false
*******************************************************************************/

// function isPrime(number) {
//        if ( number % 2 === 0 )
//   return true; 
// }       else {
//     return false;}
// } 


function isPrime ( number ) {
  if (number % 2 === 0 )
  return true;
} else if (number < 2){
    return false
}
for (i = 2; i < number; i++){
    if (number % i === 0 ) {
        return false
    }
}
// console.log(isPrime(-7))


// function isPrime(number) 

// A Prime Number is a number only divisible by itself and 1
//check number divisible by every number less than it
// for loop from 2 to number 
// check if number is divisible by every number in loop






//   if (number === 2) {
//     return ture 
//   } else if 
// }






/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = isPrime;
