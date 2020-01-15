// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// array_diff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// array_diff([1,2,2,2,3],[2]) == [1,3]

// eslint-disable-next-line no-unused-vars

function array_diff(a, b) {
  let result = [...a];
  b.forEach(itemB => {
    result = result.filter(itemA => itemA !== itemB);
  });
  return result;
}
