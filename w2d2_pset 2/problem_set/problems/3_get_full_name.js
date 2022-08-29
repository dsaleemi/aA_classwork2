/***********************************************************************
Write a function `getFullName(person)` that takes in an person object
and returns a string containing their full name.

Examples:

var p1 = {firstName: 'John', lastName: 'Doe'};
getFullName(p1); // => 'John Doe'

var p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
getFullName(p2); // => 'Charlie Brown'
***********************************************************************/

// let person = {
//     first.name = name; 
//     last.name = name; 
//     return person; 
// }




function getFullName(person) {
    let fname = person['firstName'] ;
    let lname = person['lastName'];


    return fname + ' ' + lname;
}


var p1 = {firstName: 'John', lastName: 'Doe'};
console.log(getFullName(p1)); // => 'John Doe' 

var p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
console.log(getFullName(p2)); // => 'Charlie Brown'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = getFullName;
