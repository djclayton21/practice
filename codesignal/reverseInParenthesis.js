// Write a function that reverses characters in (possibly nested) parentheses in the input string.

// Input strings will always be well-formed with matching ()s.
const test1 = '(bar)';
const result1 = 'rab';

const test2 = 'foo(bar)baz';
const result2 = 'foorabbaz';

const test3 = 'foo(bar)baz(blim)';
const result3 = 'foorabbazmilb';

const test4 = 'foo(bar(baz))blim';
const result4 = 'foobazrabblim';

function reverseInParentheses(inputString) {
	//find parentheses
	let open = 0;
	let close = 0;
	let result = inputString;
	let isFlipped = false;
	for (let i = 0; i < inputString.length; i++) {
		if (inputString[i] === '(') {
			open = i;
		}
		if (inputString[i] === ')') {
			close = i;
			result =
				inputString.slice(0, open) +
				removeAndReverse(inputString.slice(open, close + 1)) +
				inputString.slice(close + 1);
			isFlipped = true;
			break;
		}
	}
	return isFlipped ? reverseInParentheses(result) : result;
}

//take section, remove (), return flipped
function removeAndReverse(inputSection) {
	let section = inputSection.slice(1, -1);
	return section
		.split('')
		.reverse()
		.join('');
}

console.log('test 1:', reverseInParentheses(test1) === result1);
console.log('test 2:', reverseInParentheses(test2) === result2);
console.log('test 3:', reverseInParentheses(test3) === result3);
console.log('test 4:', reverseInParentheses(test4) === result4);
