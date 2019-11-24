//Several people are standing in a row and need to be divided into two teams. 
//The first person goes into team 1, the second goes into team 2,
// the third goes into team 1 again, the fourth into team 2, and so on.

//You are given an array of positive integers - the weights of the people.
// Return an array of two integers, where the first element is the total weight of team 1,
// and the second element is the total weight of team 2 after the division is complete.

const test1 = [50, 60, 60, 45, 70]; //[180, 105]
const test2 = [100, 50]; //[100, 50]
const test3 = [80]; //[80, 0]
const test4 = [100, 50, 50, 100] //[150, 150]

function alternatingSums(a) {
    const result = [0 , 0];
    //loop
    for (let i = 0; i < a.length; i++){
        //if even index or 0, add to first section
        if (i % 2 === 0) {
            result[0] += a[i];
        } else {
            result[1] += a[i];
        }
        //else add two second
    }
    return result;
}

console.log(alternatingSums(test1))
console.log(alternatingSums(test2))
console.log(alternatingSums(test3))
console.log(alternatingSums(test4))