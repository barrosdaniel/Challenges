// Rounding
// Problem #6 

// When program deals with numbers which have fraction part we sometimes want to round such values to whole integer. We'll need this for programming some later problems (to make answers simpler, for example), so let us have the following dedicated exercise to learn this trick.
// There are several pairs of numbers. For each pair you are to divide first by second and return the result, rounded to the nearest integer.
// In cases, when result contains exactly 0.5 as a fraction part, value should be rounded up (i.e. by adding another 0.5). Note that for negative values "greater" means "closer to zero". Refer to the Wikipedia page on Rounding for more thorough explanations.
// In any further problems, when rounding is mentioned - just the same rounding algorithm is supposed (unless other is explicitly specified).
// Input data will give a number of test-cases in the first line.
// Next lines will contain one test-case (i.e. the pair of numbers) each.
// Answer should contain division-and-rounding results for each pair, separated with spaces

var input = '17611 682 4513 1758 -1628643 3668946 9436745 597 6067 1834 4741 886 6236705 310 5340204 234 9669389 248 7891514 917 2486752 2681683 -1132970 3002521 8373792 -2811800';

var inputArray = input.split(' ');
var inputArrayNum = [];
for (var i = 0; i < inputArray.length; i++) {
  inputArrayNum.push(parseInt(inputArray[i]));
}

var result = '';

for (var i = 0; i < inputArrayNum.length; i += 2) {
  var dividend = inputArrayNum[i] / inputArrayNum[i+1];
  result += Math.round(dividend) + ' ';
}

console.log(result);
