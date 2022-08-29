/*******************************************************************************
Write a function evenRange(start, end) that returns an array containing all even
numbers between 'start' and 'end' in sequential order.

Examples:

evenRange(13, 20) => [ 14, 16, 18, 20 ]
evenRange(4, 11) => [ 4, 6, 8, 10 ]
evenRange(8, 5) => []
*******************************************************************************/

function evenRange(start, end) {
  var array = [];  //define the array first 
  for ( var i = start; i <= end; i += 1)  { //set up our loop so it continues
    array.push(i);
  }
  return array; 
}
evenRange(13,20)


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = evenRange;
