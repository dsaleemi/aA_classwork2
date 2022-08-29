/*******************************************************************************
Write a function highestScore(students) that takes in an array of student objects
as a parameter. It should return a string that corresponds to the student with
the highest score. The string should contain that student's initials
concatenated with their id. Assume the array contains at least 1 student object and
the student with the highest score is unique (there are no ties).
Example:

var students = [
 {name: 'Alvin Zablan', id: 128, score: -42},
 {name: 'Eliot Bradshaw', id: 32, score: 57},
 {name: 'Tommy Duek', id: 2, score: 99},
 {name: 'Fred Sladkey', id: 256, score: 94}
];

highestScore(students); //=> 'TD2'
*******************************************************************************/
var students = [
  {name: 'Alvin Zablan', id: 128, score: -42},
  {name: 'Eliot Bradshaw', id: 32, score: 57},
  {name: 'Tommy Duek', id: 2, score: 99},
  {name: 'Fred Sladkey', id: 256, score: 94}
 ];
 
 highestScore(students); //=> 'TD2'

function highestScore(students) {
  let highest = 0;
  let highestStudent 
  for(let i = 0; i < students.length; i ++){
    console.log(students[i].score)
    if (highest < students[i].score){
      highest = students[i].score;
      highestStudent = students[i]
    }
  }
  console.log(highest)
  console.log(highestStudent)
  console.log(highestStudent.name)
  console.log(highestStudent.id)
  let names = highestStudent.name.split(' ')
  console.log(names)
  let firstNames = names[0]
  let lastNames = names[1]
  console.log(firstNames[0])
  console.log(lastNames[0])
  return firstNames[0]+ lastNames[0]+ highestStudent.id; 
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = highestScore;
