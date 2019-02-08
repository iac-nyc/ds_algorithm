// @ts-check

//* ************** Joining multiple arrays
const zero = 0;
const positiveNumbers = [1, 2, 3];
const negativeNumbers = [-3, -2, -1];
let numbers = negativeNumbers.concat(zero, positiveNumbers);

console.log('zero', zero);
console.log('positiveNumbers', positiveNumbers);
console.log('negativeNumbers', negativeNumbers);
console.log('negativeNumbers.concat(zero, positiveNumbers)', numbers);


/*

Output
------
zero 0
positiveNumbers (3) [1, 2, 3]
negativeNumbers (3) [-3, -2, -1]
negativeNumbers.concat(zero, positiveNumbers) (7) [-3, -2, -1, 0, 1, 2, 3]

*/