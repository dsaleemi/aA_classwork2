/*******************************************************************************
Write a function numberPrimes(n) that takes in a number, `n`. The function should
return the number of prime numbers less than or equal to `n`. For example,
there are 4 prime numbers less than or equal to 10: 2, 3, 5, 7.

Examples:

numberPrimes(10); // => 4
numberPrimes(12); // => 5
numberPrimes(20); // => 8
numberPrimes(100); // => 25
*******************************************************************************/

function numberPrimes(n) {
  // let nPrimes = [];
  let count = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      count++;
    }
  }

  return count;
}

// function numberPrimes (n){
//   for ( )
// }
function isPrime(num) {
  if (num < 2) return false;

  for (let n = 2; n < num; n++) {
    if (num % n === 0) {
      return false;
    }
  }

  return true;
}

console.log(numberPrimes(10))


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = numberPrimes;
