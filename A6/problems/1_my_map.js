/*******************************************************************************
Write a function `myMap(arr, cb)` that accepts an array and a callback. It should
pass each element, its corresponding index, and the array itself to the callback.
Do not use the built in `Array.prototype.map` method. It should return an array
where each element is the return value of the callback given the element in the
corresponding position. See the examples.

Examples:

myMap([9, 25, 100, 36, 81], Math.sqrt); // => [ 3, 5, 10, 6, 9 ]

function multiply(num1, num2) {
  return num1 * num2;
}

myMap([2, 4, 6, 6], multiply); // => [ 0, 4, 12, 18 ]
*******************************************************************************/

// function multiply(num1, num2) {
//   return num1 * num2;
// }


// function myMap(arr, cb) {
//   for ( let i = 0; i < arr.length; i ++) {
  
//     let val = arr[i]
//     cb(arr)  
//   }

// }

function myMap(arr, cb){
  let num = [];

  for(let i = 0; i < arr.length; i++){
    let ele = arr[i];
    let newEle = cb(ele, i ,arr);
    num.push(newEle);
  }
  return num
}



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = myMap;
