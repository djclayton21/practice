// You are given an array of integers. On each move you are allowed to increase
// exactly one of its element by one. Find the minimal number of moves required
// to obtain a strictly increasing sequence from the input.

//tests

const test1 = [1, 1, 1];
const expected1 = 3;

const test2 = [-1000, 0, -2, 0];
const expected2 = 5;

const test3 = [2, 1, 10, 1];
const expected3 = 12;

const test4 = [2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15];
const expected4 = 13;

//solution
function arrayChange(inputArray) {
  let moveCount = 0;
  let i = 1;
  while (i < inputArray.length) {
    if (inputArray[i] <= inputArray[i - 1]) {
      inputArray[i]++;
      moveCount++;
    } else i++;
  }
  return moveCount;
}

//results
console.log('test 1', arrayChange(test1) === expected1);
console.log('test 2', arrayChange(test2) === expected2);
console.log('test 3', arrayChange(test3) === expected3);
console.log('test 4', arrayChange(test4) === expected4);
