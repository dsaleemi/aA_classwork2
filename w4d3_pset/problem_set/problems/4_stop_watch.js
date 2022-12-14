/***********************************************************************
Write a function stopWatch(totalSeconds) that takes in a number of
seconds. The function should return the time string based on that number
of seconds. The time should be formatted in hours (H), minutes (M), and
seconds(S) in the form HH:MM:SS.

Hint: the seconds and minutes count of the time should never
be greater than 59. How can we use modulo % to accomplish this?

Examples:

stopWatch(0); // => '00:00:00'
stopWatch(4); // => '00:00:04'
stopWatch(128); // => '00:02:08'
stopWatch(1234); // => '00:20:34'
stopWatch(3612); // => '01:00:12'
stopWatch(7640); // => '02:07:20'
stopWatch(86400); // => '24:00:00'
stopWatch(86522); // => '24:02:02'
stopWatch(99999); // => '27:46:39'
***********************************************************************/

function stopWatch(totalSeconds) {
    console.log(totalSeconds)
    let totalHours = Math.floor(totalSeconds / 3600);
    totalSeconds = totalSeconds - (totalHours * 3600);
    let totalMinutes = Math.floor(totalSeconds / 60);
    console.log(`totalHours = ${totalHours}`)
    //console.log(`totalSeconds = ${totalSeconds}`)
    console.log(`totalMinutes = ${totalMinutes}`)
    console.log(`totalSeconds = ${totalSeconds}`)
    let str= '';

    if (totalHours < 10){
        str += '0' + totalHours;
    } else {
        str += totalHours;
    }

    str += ':';

    if (totalMinutes < 10){
        str += '0' + totalMinutes;
    }else{
        str
    }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = stopWatch;
