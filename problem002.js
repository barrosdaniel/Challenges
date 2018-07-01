// Sum in Loop
// Problem #2 

// Now our goal is to learn the loops - i.e. repeated actions. Let us find the sum of several numbers (more than two). It will be useful to do this in a loop. As shown in the picture above - you can create variable sum and add every value from the list to it. Perhaps "for" loop will suit nicely since the amount of numbers is known beforehand.
// If you have troubles, try Sums In Loop first - it is, probably, easier.
// Input data has the following format:
// first line contains N - amount of values to sum;
// second line contains N values themselves.
// Answer should contain a single value - the sum of N values.

var input = '626 351 819 248 240 265 453 1082 422 243 903 1128 692 661 1202 699 797 174 99 929 670 372 922 707 707 1214 1212 157 272 1189';

var inputArray = input.split(' ');
var inputArrayNum = [];
for (var i = 0; i < inputArray.length; i++) {
  inputArrayNum.push(parseInt(inputArray[i]));
}

var sum = inputArrayNum[0];
for (var i = 1; i < inputArrayNum.length; i++) {
  sum += inputArrayNum[i];
}
console.log(sum);
