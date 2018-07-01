var input = '17611 682 4513 1758 -1628643 3668946 9436745 597 6067 1834 4741 886 6236705 310 5340204 234 9669389 248 7891514 917 2486752 2681683 -1132970 3002521 8373792 -2811800'

var inputArray = input.split(' ');
var inputArrayNum = [];
for (var i = 0; i < inputArray.length; i++) {
  inputArrayNum.push(parseInt(inputArray[i]))
}

var result = '';

for (var i = 0; i < inputArrayNum.length; i += 2) {
  var dividend = inputArrayNum[i] / inputArrayNum[i+1];
  result += Math.round(dividend) + ' ';
}

console.log(result);
