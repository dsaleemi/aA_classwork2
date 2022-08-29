/*******************************************************************************
Write a function divisibleByFivePairSum(array), that takes an array of numbers.
It should return an array of all the pairs of indices whose sum is a multiple of five.

Examples:

divisibleByFivePairSum([1, 5, 2, 0, 4]); // => [ [ 0, 4 ], [ 1, 3 ] ]
divisibleByFivePairSum([13, 22, 8, -3, 12]); // => [[ 0, 1 ], [ 0, 3 ], [ 0, 4 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ]]
*******************************************************************************/

function divisibleByFivePairSum(array){
<<<<<<< HEAD
  // your code here...

}
=======
  let indices = [];

  for (let i = 0; i < array.length - 1; i++) {
    let num1 = array[i];

    for (let j = i + 1; j < array.length; j++) {

      let num2 = array[j];
      let sum = num1 + num2;
      
      if (sum % 5 === 0) {
        indices.push([i, j]);
      }
    }
  }

  return indices
}
//   array = []
//   for ( i = 0; i <= array; i ++ )  
//   if ( i % 5 === 0 )                            // need to word sum of 2 nums []
//                                                     // check to see if that sum is % 5 === 0
//                                                    // if it is return the indicies 
// }



// function divisibleByFivePairSum(array){
//   i = 0 {
//     while (i <= array); 
//   }





//     i ++
// }





>>>>>>> 250f6ec182d28766807b9162717c5c2da2e6b75e

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = divisibleByFivePairSum;
