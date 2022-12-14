console.log('hi everyone');
console.log(10 + 3);                         // 13
console.log(10 * 3);                         // 30
console.log(10 - 3);                         // 7
console.log(10 / 3);                         // 3.3333

console.log(10 % 3);                         // 1
console.log(10 % 2);                         // 0; evenly divisible
console.log(2 % 5);                          // 2

// Operators:
// Or (||)
console.log(true || true);                   // true
console.log(true || false);                  // true
console.log(false || true);                  // true
console.log(false || false);                 // false



console.log(true && true);                   // true
console.log(true && false);                  // false
console.log(false && true);                  // false   
console.log(false && false);                 // false


// Bang (!) - negate
console.log(!true);                          // false
console.log(!false);                         // true
console.log(!!true);                         // true

console.log("hello"[0]);                     // "h"
console.log("hello"[1]);                     // "e"
console.log("hello"[2]);                     // "l"
console.log("hello"[6]);                     // undefined; default value when no value present
console.log("hi bye"[2]);                    // " "

console.log("hello".indexOf('e'));           // 1
console.log("hello".indexOf("l"));           // 2; returns the left-most char for duplicates
console.log("hello".indexOf('llo'));         // 2; returns index where substring starts
console.log("hello".indexOf('x'));           // -1; returns -1 if char is not present

console.log("race".concat("car"));           // "racecar"
console.log("race" + "car");                 // "racecar"
console.log("hello" + " " + "world");        // "hello world"

console.log(4 + "hi");                       // "4hi"
console.log(4 * "hi");                       // NaN; not a number
console.log(4 * "10");                       // 40

console.log("hello".toUpperCase());          // "HELLO"
console.log("HI".toLowerCase());             // "hi"
console.log("hello".slice());                // "hello"
console.log("hello".slice(1));               // "ello"
console.log("hello".slice(1, 3));            // "el"

let str = "bootcamp prep";
const food = "pizza";

if (num > 5) {
  console.log("num is greater than 2");
} else if (num > 0) {
  console.log("num is positive");
} else if (num < 0) {
  console.log("num is negative");
} else {
  console.log("else num is less than 2, is not positive, nor negative");
} 


