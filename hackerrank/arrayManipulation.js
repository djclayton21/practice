// Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to each of the array element between two given indices, inclusive. Once all operations have been performed, return the maximum value in your array.

// For example, the length of your array of zeros . Your list of queries is as follows:

//     a b k
//     1 5 3
//     4 8 7
//     6 9 1
// Add the values of  between the indices  and  inclusive:

// index->	 1 2 3  4  5 6 7 8 9 10
// 	[0,0,0, 0, 0,0,0,0,0, 0]
// 	[3,3,3, 3, 3,0,0,0,0, 0]
// 	[3,3,3,10,10,7,7,7,0, 0]
// 	[3,3,3,10,10,8,8,8,1, 0]
// The largest value is  after all operations are performed.

// Function Description

// Complete the function arrayManipulation in the editor below. It must return an integer, the maximum value in the resulting array.

// arrayManipulation has the following parameters:

// n - the number of elements in your array
// queries - a two dimensional array of queries where each queries[i] contains three integers, a, b, and k.

// function arrayManipulation(n, queries) {
//   let max = 0;
//   for (let i = 1; i <= n; i++) {
//     //1 indexed to match queries
//     let result = 0;
//     for (let j = 0; j < queries.length; j++) {
//       if (queries[j][0] <= i && i <= queries[j][1]) {
//         result += queries[j][2];
//       }
//     }
//     if (result > max) {
//       max = result;
//     }
//   }
//   return max;
// }

function arrayManipulation(n, queries) {
  const results = new Array(n).fill(0);
  for (let i = 0; i < queries.length; i++) {
    for (let j = queries[i][0]; j <= queries[i][1]; j++) {
      results[j - 1] += queries[i][2];
    }
  }
  return Math.max(...results);
}

const test = [
  [1, 5, 3],
  [4, 8, 7],
  [6, 9, 1]
];
console.log(arrayManipulation(10, test));

//too slow
