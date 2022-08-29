/*******************************************************************************
Write a function `minMaxDifference(array)` that return the difference between the
largest value and the smallest value in the array. Assume `array` is an array of
numbers. Assume an array of at least two numbers.

Examples:

minMaxDifference([1,2,3,4,5]) => 4
minMaxDifference([5,4,3,2,1]) => 4
minMaxDifference([4,2,5,1,-5]) => 10
*******************************************************************************/

function minMaxDifference(array){
<<<<<<< HEAD
  // your code here...

}

=======

    // for(let i = 0; i <= array.length; i++);
    // let firstNum = array[0];
    let minNumber = Infinity;
    let maxNumber = -Infinity;

    for (let i = 0; i < array.length; i++) {
      let ele = array[i];
      if (ele < minNumber) {
        minNumber = ele;
      }
      if (ele > maxNumber) {
        maxNumber = ele;
      }
    }
    
    return maxNumber - minNumber;
}


// console.log(minMaxDifference([1,2,3,4,5]))
>>>>>>> 250f6ec182d28766807b9162717c5c2da2e6b75e
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = minMaxDifference;
