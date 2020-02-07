function palindromeRearranging(inputString) {
  let foundUnique = false;
  const letters = inputString.split('');
  while (letters.length > 0) {
    const firstLetter = letters.shift();
    const match = letters.indexOf(firstLetter);
    if (match >= 0) {
      letters.splice(match, 1);
    } else if (!foundUnique) {
      foundUnique = true;
    } else {
      return false;
    }
  }
  return true;
}

const test = 'aabbcc';
const test2 = 'aabbccde';
console.log(palindromeRearranging(test));
console.log(palindromeRearranging(test2));
