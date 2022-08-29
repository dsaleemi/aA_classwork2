/***********************************************************************
Write a function greatestCommonFactor(num1, num2) that returns the
greatest common factor between num1 and num2. This means that the
function should return the largest number that divides both num1 and
num2.

Examples:

greatestCommonFactor(6, 10); // => 2
greatestCommonFactor(10, 15); // => 5
greatestCommonFactor(4, 7); // => 1
greatestCommonFactor(4, 8); // => 4
greatestCommonFactor(45, 30); // => 15
***********************************************************************/

// function greatestCommonFactor(num1, num2) {
//     largestNum = 0;

//     for( i = 0; i <= num2; i++){
//         return largestNum[i]
//     }
//     if (num1 === 0) return 0;
//     return num2 + greatestCommonFactor(largestNum % num1 === 0, num2)
// }


function greatestCommonFactor(num1, num2){
    for ( let i = num1; i >= 1; i++){
        if ( num1 % i === 0 && num2 % i === 0){
            return i; 
        }
    }
}

greatestCommonFactor(6, 10); // => 2

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = greatestCommonFactor;
