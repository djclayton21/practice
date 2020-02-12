// John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

// Function Description

// Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

// sockMerchant has the following parameter(s):

// n: the number of socks in the pile
// ar: the colors of each sock

// // Input Format

// The first line contains an integer , the number of socks represented in .
// The second line contains  space-separated integers describing the colors  of the socks in the pile.
const test1 = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];
function sockMerchant(n, ar) {
  const seenOnce = Array(100).fill(false);
  let count = 0;

  ar.forEach(sock => {
    if (seenOnce[sock]) {
      count++;
      seenOnce[sock] = false;
    } else seenOnce[sock] = true;
  });
  return count;
}
console.log(sockMerchant(test1.length, test1));
