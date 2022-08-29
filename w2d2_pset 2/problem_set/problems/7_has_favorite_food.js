/***********************************************************************
Write a function `hasFavoriteFood(obj, food)` that takes in an object
and a food string. The function should return true if the object has
that favorite food. See the examples below.

Examples:

var dog = {
  name: 'Fido',
  favoriteFoods: ['chicken', 'sausage', 'scooby snacks']
}

hasFavoriteFood(dog, 'sausage'); // => true
hasFavoriteFood(dog, 'cat food'); // => false

var person = {
  name: 'Al',
  favoriteFoods: ['pizza', 'burgers', 'ramen']
}

hasFavoriteFood(person, 'burgers'); // => true
hasFavoriteFood(person, 'fish'); // => false
***********************************************************************/

//an object is being passed in 
//also knnow that a food string is being passed in
// fav food values is an array
//key into fav food to get array

function hasFavoriteFood(obj, food) {
  console.log(food)
  console.log(obj.favoriteFoods.includes(food))
  console.log(obj.favoriteFoods)
  console.log(obj)
}

















// function hasFavoriteFood(obj, food) {
//   let val1 = obj1[food]
//   let val2 = obj2[food]

//   return [val1, val2]
// } 

var dog = {
  name: 'Fido',
  favoriteFoods: ['chicken', 'sausage', 'scooby snacks']
}

console.log(hasFavoriteFood(dog, 'sausage')); // => true
console.log(hasFavoriteFood(dog, 'cat food')); // => false



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = hasFavoriteFood;
