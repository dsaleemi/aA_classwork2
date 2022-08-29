/*******************************************************************************
Write a function magicCipher(sentence, cipher) that takes in an string(sentence)
and an object(cipher). Return a string where every character is replaced with its
corresponding value in the cipher. If the character doesn't exist in the
cipher, use the character.

Examples:

magicCipher("add me on facebook" , { a : "c", d : "q"}) => "cqq me on fccebook"
magicCipher("where are you?" , { v : "l", '?' : "!"}) => "where are you!"
magicCipher("twmce" , { m : "n", t : "d", w : "a"}) => "dance"
*******************************************************************************/

function magicCipher(sentence, cipher){
  // your code here...
<<<<<<< HEAD

=======
  let newSen = '';
  console.log(sentence)
  console.log(cipher)
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    // console.log(char);
    if (cipher[char] !== undefined) {
      newSen += cipher[char];
    } else {
      newSen += char;
    }
  }

  console.log(newSen)
  return newSen
>>>>>>> 250f6ec182d28766807b9162717c5c2da2e6b75e
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = magicCipher;
