var input = '876014 353913 409707 595590 671892 998490 139999 119643 288509 524165 600937 558669 286728 506357 777277 340375 534356 232398 141708 998860 795040 642281 582410 335256'

var inputArray = input.split(' ');
var inputArrayNum = [];
for (var i = 0; i < inputArray.length; i++) {
  inputArrayNum.push(parseInt(inputArray[i]))
}

var resultsString = '';
for (var i = 0; i < inputArrayNum.length; i += 2) {
  var result = inputArrayNum[i] + inputArrayNum[i+1];
  resultsString += result + ' ';
}
console.log(resultsString);
