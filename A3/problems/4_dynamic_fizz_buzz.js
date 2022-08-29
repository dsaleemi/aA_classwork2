/*******************************************************************************
Write a function that dynamicFizzBuzz(max, num1, num2) that returns an array
of numbers up to the max. Each number should be either divisible by num1 or num2,
BUT NOT BOTH.

Examples:

dynamicFizzBuzz(20, 5, 3) => [3, 5, 6, 9, 10, 12, 18]
dynamicFizzBuzz(20, 4, 6) => [4, 6, 8, 16, 18]
*******************************************************************************/

function dynamicFizzBuzz(max, num1, num2){
<<<<<<< HEAD
  // your code here...

}

=======
  let arr = [];
  // console.log('IM IN THE FUNCTION')
  for (let i = Math.min(num1, num2); i < max; i++) {
    // console.log(i)         /// array of numbers max 20 
    if ((i % num1 === 0 || i % num2 === 0) && !(i % num1 === 0 && i % num2 === 0)) {
      arr.push(i)
    }
  }

  return arr;
}

  // console.log(dynamicFizzBuzz(20, 5, 3))
>>>>>>> 250f6ec182d28766807b9162717c5c2da2e6b75e
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = dynamicFizzBuzz;
