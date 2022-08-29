/***********************************************************************
Write a function `secondLargest(array)` that takes in an array of positive
numbers and returns the seconds largest number in the array. Assume that
there are no duplicate elements in the array. If there is no second
largest number, the function should return -1.

Examples:

secondLargest([3, 1, 5, 4, 7]) => 5;
secondLargest([10, 7]) => 7;
secondLargest([10]) => -1;
secondLargest([]) => -1;
***********************************************************************/

function secondLargest(array) {
    array.sort((a, b) => a - b);


    if (array[array.length - 2] !== undefined) {
        return array[array.length - 2]
    } else {
        return -1
    }

    /// *** alternative : syntatic way 
    // *** return array[array.length - 2] ? array [array.length - 2] : -1   // ** ? is if statement, : everything to the right is else statement

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = secondLargest;
