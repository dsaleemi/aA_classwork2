/*******************************************************************************
Write a function myIndexOf(array, ele) that takes an array and an element.
Return the index of the element in the array, or -1 if it doesn't exist. Assume
the `ele` will be a primitive data type (no arrays or objects).
DO NOT USE THE BUILT-IN `indexOf` METHOD IN YOUR SOLUTION!

Examples:

myIndexOf([1,2,3,4,5], 5) => 4
myIndexOf(["a", "b", "c"], "a") => 0
myIndexOf(["a", "b", "c"], "d") => -1
*******************************************************************************/

<<<<<<< HEAD
function myIndexOf(array, ele){
  // your code here...

}

=======
function myIndexOf(array, ele) {
  // let arr1 = [];                                  //define array

  // console.log(ele)
  // console.log(array)
  for (let i = 0; i < array.length; i++) {            // go through the loop 
    // console.log(array[i])
    if (array[i] === ele) {
      return i;
    }
    // if (arr1 === i ) {
    //   return arr1[i];                //or i++?   // if it contains: return index of the element
    // } else {
    //   return 
    // }                                            // return undefined (-1) if it doesnt 
  }

  return -1
}

// console.log(myIndexOf([1,2,3,4,5], 5))

>>>>>>> 250f6ec182d28766807b9162717c5c2da2e6b75e
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = myIndexOf;
