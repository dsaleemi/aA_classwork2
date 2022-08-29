/**************************************************************************************
Write a function `usernames(names)` that takes in an array of names. The function
should return an array containing the corresponding usernames. See the examples.

Examples:

var names = [
  'Oscar Alvarez',
  'Danny Catalano',
  'Kurstie Ozuna',
  'Matt Haws'
];

usernames(names); // => [ 'oalvarez', 'dcatalano', 'kozuna', 'mhaws' ]

Difficulty: Medium
*************************************************************************************/


var names = [
  'Oscar Alvarez',
  'Danny Catalano',
  'Kurstie Ozuna',
  'Matt Haws'
];


function usernames(names) {
  let array = [];
  let obj = {};
  let newNames= names.split(' ')

  for ( i = 0; i < newNames.length; i++){
    return newNames[0] /// idx of [0] and last name
  }
}

console.log(usernames(names))

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = usernames;
