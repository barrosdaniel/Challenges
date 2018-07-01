// Maximum of array
// Problem #15 

// This problem introduces popular algorithm of the "linear search", which should be learnt thoroughly as it is often used in programming more complex tasks (sorting etc.)
// Very common operation on sequence of values, or arrays is to find its extremal value - maximum or minimum. To achieve this one need to store current maximum (or minimum respectively) in a separate variable, and then run through array, comparing each of its elements to this variable. Whenever next value is greater than this temporary variable, this value should be copied into it (as a new maximum).
// At the end of the pass this temporary variable will hold the extremum value.
// Input data will give you exactly 300 numbers in a single line.
// Answer should contain maximum and minimum of these values, separated by space.

var input = '-45208 -65452 78547 51150 17354 8530 69578 36025 118 14927 39081 -65948 -45985 23667 55231 51390 58185 -6744 28932 39543 22526 -63238 -11842 1040 7031 -34375 -37469 72917 41553 -32586 -49997 76344 -18039 -51450 47495 79314 37080 37074 35339 -42802 -27999 -5580 -28750 6015 -61912 -53519 -22594 76272 19737 -73662 35815 -37737 -56900 -56026 43302 30130 -10401 -74166 23047 -48848 -26753 53049 -52503 35208 -78400 74991 34522 38679 32066 -10138 75877 -75933 64282 -32873 10082 -77630 -6393 67487 78641 -66656 73825 34457 -24393 -63075 58430 -61090 47055 -31970 -55257 -9898 -819 -2010 -36848 26677 -46801 -35248 21669 67720 -76568 -26265 -22417 79308 -22198 -38134 -33565 67883 -35765 40041 55371 -37123 53385 49197 77333 -51007 66121 55764 -32098 33176 -56206 -7355 -56721 22975 70635 -13569 -30348 -56166 31183 71321 -68445 34614 -34944 -10863 33922 22857 31003 -79643 10741 75238 40398 -13887 -41885 13784 -44690 -44551 42776 -58568 -68786 -69321 54608 -44992 3323 77886 57982 -6041 -15682 -52365 17792 -64499 -61044 29346 50114 -15988 -61516 4036 -73130 49486 4393 17611 44724 -35209 -76276 -77160 58574 -40966 -41712 21351 -19535 -30498 32029 -44927 4509 -44647 -47040 -17508 29311 17278 10127 -32897 32778 29083 76449 2893 -66905 -65067 -73070 -60035 64419 11322 37575 29144 56113 41299 31983 34688 -79666 70271 -23961 -19202 -40227 -71931 15871 44282 -36578 48831 -53226 72732 -13891 36900 -40164 -61112 -14017 -43715 21780 -922 -28782 28709 19042 -44362 -39968 -23382 64781 -63855 -62083 16764 50833 -61750 7035 -53128 -952 46807 -45059 -65080 11090 -1638 63751 37863 -8905 -30139 -5236 30931 -11252 60747 67216 -69471 -20174 -41566 39238 78868 -5928 79270 -24514 -21147 -64584 -6597 75616 66248 11653 2652 -66879 -69299 -30540 -31939 -54379 60549 46423 -70627 18413 -42481 -20767 -66822 68449 47981 73924 55665 58510 -26249 -65900 17749 -27381 8171 17019 28104 67023 32434 -58492 62640 18682 33160 -14708 31802';

var inputArray = input.split(' ');
var inputArrayNum = [];
for (var i = 0; i < inputArray.length; i++) {
  inputArrayNum.push(parseInt(inputArray[i]));
}

var max = inputArrayNum[0];
for (var i = 1; i < inputArrayNum.length; i++) {
  if (inputArrayNum[i] > max) {
    max = inputArrayNum[i];
  }
}

var min = inputArrayNum[0];
for (var i = 1; i < inputArrayNum.length; i++) {
  if (inputArrayNum[i] < min) {
    min = inputArrayNum[i];
  }
}

var result = max.toString() + ' ' + min.toString();
console.log(result);
