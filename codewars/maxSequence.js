//find the 

function maxSequence(numbers) {
  let currentSum = 0;
  let maxSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    currentSum += numbers[i];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  console.log(maxSum);
  return maxSum;
}
const test = [0, -3, 3, 2, 4, -1, 2, 1, 2, -3, -2, 2, -1, 2, 1];
console.log(maxSequence(test));
