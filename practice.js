// // console.log("Hello")
// var myArray = []
// console.log (myArray)

// console.log (myArray.push(42))
// console.log(myArray)
// console.log(myArray.push(1200))


//////////*********************PRACTICE: 8/05***********************//////

// // *******************CONDITIONAL.PRACTICE *******************
// // var age = 30;{ 
//     if ( age > 30) {
//         console.log ("older than 30"); }
//         else {
//             console.log ("younger than 30")}
//     }
    
    // var str = 'pizza';{
    //     if ( str.length > 10) {
    //         console.log ("long af");}
    //             else {
    //                 console.log (" short af" ) }
    //             }
    //     if (str[0] ==='p') {
    //         console.log('starts with p');
    //     }


    

    // var num = 0;
    // if (num % 3 === 0) {
    //     console.log ('divisible by 3')};
    // if (num % 5 === 0) {
    //     console.log ('divisible by 5')};
        
    // var str = 'App academY'
    // if (str[0] === str[0].toUpperCase () ){
    //     console.log ('starts with a capital!');}
    //     if (str[str.length -1 ]=== str[str.length -1].toUpperCase ()){
    //         console.log ('ends with a capital!')};

///MUSCLE MEMORY
// var num = 11;
// if (num < 5) {
//     console.log ('if');
// }
// var num = 11 
// if (num < 5) {
//     console.log ('if');
// }
// var num = 11 
// if (num < 5 ) {
//     console.log ('if');
// }
// var num = 11
// if (num < 5); { 
//     console.log ('if')
// }
// var num = 11
// if (num < 5 ); {
//     console.log ('if')
// }

// var num = 5;
// if (num < 5) {
//     console.log ('if');
// } else {
//     console.log('else');
// }

// var num = 5; 
// if (num < 5) {
//     console.log ('if') ;
// } else {
//     console.log ('else');
// }

// var num = 0;
// if (num < 0) {
//     console.log ('if');
// } else if (num >0) {
//     console.log ('else if');
// }else {
//     console.log ('else');
// }

//***FUNCTIONS.PRACTICE*******//

//create func that averages 2 numbers

// function average(num1, num2) {
//     var sum = num1 + num2; 
//     var avg = sum / 2;
//     return avg;
// }

// console.log (average( 30, 40));


// Write a function `isOdd` that takes in a number as an argument and returns `true`
// if the number is odd and returns `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
// isOdd(2);    // => false
// isOdd(5);    // => true
// isOdd(-17);  // => true


//w conditionals
// function isOdd( num ) 
    // if (num % 3 === 0);
    //  {
    //     console.log ("true"); } 
    // else {
    //     console.log ("false");} 

// w/o conditionals 
// function isOdd (num) {
//         var avg = num % 2 !== 0;
//         return avg ;
// }
//  console.log(isOdd(5))


// Write a function `plusFive` that takes in a number as an argument and returns
// the sum of that number and 5.
//
// Examples:
// plusFive(2);   // => 7
// plusFive(-8);  // => -3
//

// function plusFive(num) { 
//     return num + 5; }
 
//     console.log (plusFive(-8))


// function threeorSeven(num) {
//    var avg = num % 3 === 0 || num % 7 === 0;
//    return avg 
// } 

// console.log(threeorSeven(8))

///******LOOPS PRACTICE*******/
//class work 
// ---------------------------------for loop:
// function printTen () { 
//     for ( var num = 0; num <= 8; num += 4){
//         console.log (num); 
//     }
// }
// printTen() // -> this is static

// function printNums ( start, end ) {
//     for ( var i = start; i < end; i += 1) {
//         console.log(i)
//     }
// }   
   
// console.log (printNums ( 0, 100))

// ---------------------------------while loop:
// function printNums (start, end) {
//     var i = start;
//     while(i < end) {
//         console.log (i);
//         i += 1; 
//     }
// }

// printNums (2,12)

//-----------------infinte loop
// initializer; while conditional; incramentor
// for (var i= 1; i <= 10 ; i += 1 ) {

//     console.log(i);
// }


//// *******************PRACTICE 8/06**************************

// Define a function `logBetween(lowNum, highNum)` that will print every number
// from `lowNum` to `highNum`, inclusive. Inclusive means that the range includes
// `lowNum` and `highNum`. Hint: this function only needs to print using `console.log`,
// it does not need to return.

function logBetween(lowNum, highNum) {
    // need to figure out loop 
    for ( var i = lowNum; i <= 2; i += 1 ) 
    console.log(highNum)
}

console.log(logBetween(-1, 2))
// logBetween(-1, 2); // prints
// -1
// 0
// 1
// 2
//
// logBetween(14, 6); // prints nothing
//
// logBetween(4,6); // prints
// 4
// 5
// 6
