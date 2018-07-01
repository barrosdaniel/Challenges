// Minimum of Two
// Problem #4 

// Most programs should be able to make some choices and decisions. And we are going to practice conditional programming now.
// This is usually done by a kind of if ... else statements which may look like:

// IF some_condition THEN
//     do_something
// ELSE
//     do_other_thing
// ENDIF
// Depending on your programming language syntax could be different and else part is almost always optional. You can read more in wikipedia article on Conditional statements.
// Of two numbers, please, select one with minimum value. Here are several pairs of numbers for thorough testing.
// Input data will contain number of test-cases in the first line.
// Following lines will contain a pair of numbers to compare each.

var input = '-1443275 -8096058 -9590146 -9399028 -5952013 -6184189 3480563 -8873585 -6366287 -5993406 6185282 -1929668 6526532 -3910985 -7596762 532614 -7581643 5538209 5696268 5894181 -2431494 -7757362 -3965224 589980 -6003355 -8111167 -2480588 7898568 -1041575 127196 1360853 7515149 2031138 1770706 8116120 6079124 5586517 1596683 7205538 9220229 5603277 3390820 -2709438 2129810 9479835 -306201 -7337576 -8101808 -4767991 8358692 7792372 2800514 -9398669 -6172852';

var inputArray = input.split(' ');
var inputArrayNum = [];
for (var i = 0; i < inputArray.length; i++) {
  inputArrayNum.push(parseInt(inputArray[i]));
}

var result = '';
for (var i = 0; i < inputArrayNum.length; i += 2) {
  if (inputArrayNum[i] < inputArrayNum[i+1]) {
    result += inputArrayNum[i] + ' ';
  } else {
    result += inputArrayNum[i+1] + ' ';
  }
}

console.log(result);
