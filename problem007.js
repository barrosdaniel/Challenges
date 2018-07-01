// Fahrenheit to Celsius
// Problem #7 

// This programming exercise is roughly the same as counting sums in loop, but it needs bit more calculations.
// fahrenheit and celsius
// Note: the problem Rounding explains the rounding algorithm which is used in this task.
// There are two widespread systems of measuring temperature - Celsius and Fahrenheit. First is quite popular in Europe and second is well in use in United States for example.
// By Celsius scale water freezes at 0 degrees and boils at 100 degrees. By Fahrenheit water freezes at 32 degrees and boils at 212 degrees. You may learn more from wikipedia on Fahrenheit. Use these two points for conversion of other temperatures.
// You are to write program to convert degrees of Fahrenheit to Celsius.
// Input data contains N+1 values, first of them is N itself (Note that you should not try to convert it).
// Answer should contain exactly N results, rounded to nearest integer and separated by spaces.

var input = '433 487 80 236 359 565 398 155 390 238 297 146 556 553 366 77 70 412 255 382 506 582 337 335 461 426 310 297 114 358 576 516 245 55 151';

var inputArray = input.split(' ');
var inputArrayNum = [];
for (var i = 0; i < inputArray.length; i++) {
  inputArrayNum.push(parseInt(inputArray[i]));
}

var result = '';

// Fahrenheit to Celcius formula. c = ((f + 40) / 1.8) - 40 
function convertFahrenheitToCelsius(f) {
    var c = ((f + 40) / 1.8) - 40;
    return c;
}

for (var i = 0; i < inputArrayNum.length; i++) {
    var add = Math.round(convertFahrenheitToCelsius(inputArrayNum[i]));
    var addString = add.toString();
    // console.log(addString);
    result += addString + ' ';
}

console.log(result);