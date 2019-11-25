//Given a rectangular matrix of characters, add a border of asterisks(*) to it.
const test1 = [
    "abc",
     "ded"
];
const test2 = [
    "***", 
    "*a*", 
    "***"
]
const test3 = [
    "aa", 
    "**", 
    "zz"
]
function addBorder(picture) {
    //map to add sides
    const result = picture.map(row => "*" + row + "*")
    //add top and bottom
    const borderRow = "*".repeat(picture[0].length + 2)
    result.unshift(borderRow);
    result.push(borderRow);
    return result
}
console.log(addBorder(test1))
console.log(addBorder(test2))
console.log(addBorder(test3))