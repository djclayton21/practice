// Write a function that reverses characters in (possibly nested) parentheses in the input string.

// Input strings will always be well-formed with matching ()s.
const test1 = "(bar)"; 
const result1 = "rab";

const test2 = "foo(bar)baz";
const result2 = "foorabbaz";

const test3 = "foo(bar)baz(blim)"; 
const result3 = "foorabbazmilb";

const test4 = "foo(bar(baz))blim";
const result4 = "foobazrabblim";

function reverseInParentheses(inputString) {
    //find parentheses (right to left)
    //take out section, flip, replace
    //recursively for funsies?
}

//take section, remove (), return flipped
function removeAndReverse(inputSection) {
    let section = inputSection.slice(1, -1);
    return section.split("").reverse().join("");
}

console.log(removeAndReverse(test1))

console.log("test 1:", reverseInParentheses(test1) === result1);
console.log("test 2:", reverseInParentheses(test2) === result2);
console.log("test 3:", reverseInParentheses(test3) === result3);
console.log("test 4:", reverseInParentheses(test4) === result4);
