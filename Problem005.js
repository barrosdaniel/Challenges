// Minimum of Three
// Problem #5 

// To have more practice with conditional statements we are going to write a program which uses complex condition. I.e. one if ... else statement could be (and should be) nested inside other to solve this problem.
// Several triplets of numbers are given to you. Your task is to select minimum among each of triplets.
// Input data will contain in the first line the number of triplets to follow.
// Next lines will contain one triplet each.

var input = '4825792 5268158 -8191002 4679735 4751637 -2050211 -6152033 -1372642 4312864 -8530759 -8902545 -3880826 -3901317 6252742 -7918010 9419045 3903962 -4782123 2009445 -515496 -1842345 -8089249 9299131 162172 -4174125 1226072 907921 4160234 -3256924 5368236 -9986911 -8431132 636394 -8177913 6248603 -4611968 -228125 -9903430 4015390 -5915260 -8434189 5112844 203913 -2335507 1365587 2285902 -2916461 -4730450 7503779 9092984 4754053 -4338566 -8996264 4053185 5823606 -3170390 -4720742 -3268472 -9010156 2022333 -7900236 -8997067 3591200 2736158 -7174981 -160197 8124190 2596894 -63627';

var inputArray = input.split(' ');
var inputArrayNum = [];
for (var i = 0; i < inputArray.length; i++) {
  inputArrayNum.push(parseInt(inputArray[i]));
}

var result = '';
var min12 = 0;
for (var i = 0; i < inputArrayNum.length; i += 3) {
  if (inputArrayNum[i] < inputArrayNum[i+1]) {
    min12 = inputArrayNum[i];
  } else {
    min12 = inputArrayNum[i+1];
  }
  if (min12 < inputArrayNum[i+2]) {
    result += min12 + ' ';
  } else {
    result += inputArrayNum[i+2] + ' ';
  }
}

console.log(result);
