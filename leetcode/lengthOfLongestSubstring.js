// /**
//  * @param {string} s
//  * @return {number}
//  */

function lengthOfLongestSubstring(s) {
  let currentChunk = s[0];
  let longestSubString = s[0];
  for (let i = 1; i < s.length; i++) {
    currentChunk += s[i];
    const setFromChunk = new Set(currentChunk.split(''));
    if (currentChunk.length === setFromChunk.size) {
      longestSubString = currentChunk;
    } else {
      currentChunk = currentChunk.substring(1);
    }
  }
  return s ? longestSubString.length : 0;
}

//this is slow
