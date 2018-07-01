var input = '626 351 819 248 240 265 453 1082 422 243 903 1128 692 661 1202 699 797 174 99 929 670 372 922 707 707 1214 1212 157 272 1189'

var inputArray = input.split(' ');
var inputArrayNum = [];
for (var i = 0; i < inputArray.length; i++) {
  inputArrayNum.push(parseInt(inputArray[i]))
}

var sum = inputArrayNum[0];
for (var i = 1; i < inputArrayNum.length; i++) {
  sum += inputArrayNum[i];
}
console.log(sum);
