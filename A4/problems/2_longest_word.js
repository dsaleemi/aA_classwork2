/*******************************************************************************
Write a function longestWord(sentence) that returns the longest word of a sentence.
If there are ties, the function should return the later word.

Examples:

longestWord('app academy is cool'); // => 'academy'
longestWord('hate having hungry hippos'); // => 'hippos'
longestWord('bootcamp'); // => 'bootcamp'
longestWord(''); // => ''
*******************************************************************************/

function longestWord(sentence) {
    let array = [];
    let words = sentence.split(' ')
    console.log(words)
    for ( i = 0; i < words.length ; i++){
     array.push(i)
    
    } 
     if ( senLength > sentence ) {
        return sentence; 
      }
      return array[i];  
  }                
                                                                /// sentence split
                  // arr = [1,2 3]  
                  // for( i = 0; i < arr.length )   
                                                           /// sentence join 




console.log(longestWord('app academy is cool'))


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestWord;
