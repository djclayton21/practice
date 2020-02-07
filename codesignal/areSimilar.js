//Two arrays are called similar if one can be obtained from another
// by swapping at most one pair of elements in one of the arrays.

// Given two arrays a and b, check whether they are similar.

//tests
const test1 = { a: [1, 2, 3], b: [1, 2, 3] };
const expected1 = true;
const test2 = { a: [1, 2, 3], b: [2, 1, 3] };
const expected2 = true;
const test3 = { a: [1, 2, 2], b: [2, 1, 1] };
const expected3 = false;
const test4 = { a: [1, 1, 4], b: [1, 2, 3] };
const expected4 = false;
const test5 = { a: [1, 2, 3], b: [1, 10, 2] };
const expected5 = false;
const test6 = { a: [2, 3, 1], b: [1, 3, 2] };
const expected6 = true;

function areSimilar(a, b) {
	// check each index for equality
	const mismatches = [];
	for (let i = 0; i < a.length; i++) {
		//if they don't match, save the index
		if (a[i] !== b[i]) {
			mismatches.push(i);
		}
	}
	//if they all match, return true
	if (mismatches.length === 0) return true;
	//if exactly 2 don't match, check if they're flipped
	if (mismatches.length === 2) {
		const [index1, index2] = mismatches;
		if (a[index1] === b[index2] && a[index2] === b[index1]) return true;
	}
	return false;
}

console.log('test 1', areSimilar(test1.a, test1.b) === expected1);
console.log('test 2', areSimilar(test2.a, test2.b) === expected2);
console.log('test 3', areSimilar(test3.a, test3.b) === expected3);
console.log('test 4', areSimilar(test4.a, test4.b) === expected4);
console.log('test 5', areSimilar(test5.a, test5.b) === expected5);
console.log('test 6', areSimilar(test6.a, test6.b) === expected6);
