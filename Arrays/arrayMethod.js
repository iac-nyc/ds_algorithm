// @ts-check

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

/* function isEven(x) {
  // returns true if x is a multiple of 2.
  console.log(x);
  return x % 2 === 0 ? true : false;
} */
// ES5 syntax
const isEven = x => x % 2 === 0;
console.log('numbers', numbers);


// it is going to execute the function only once
console.log('numbers.every(isEven)', numbers.every(isEven));

// is going to execute the function twice
console.log('numbers.some(isEven)', numbers.some(isEven));

/* numbers.forEach(function(x) {
  console.log(x % 2 == 0);
}); */ // ES5 sintax for function below

numbers.forEach(x => console.log(`numbers.forEach: ${x} % 2 === 0`, x % 2 === 0));


console.log('numbers.map(isEven)', numbers.map(isEven));

console.log('numbers.filter(isEven)', numbers.filter(isEven));

/* console.log('numbers.reduce',
  numbers.reduce(function(previous, current, index) {
    return previous + current;
  })
); */ 
// ES5 sintax for function below
console.log('numbers.reduce', numbers.reduce((previous, current) => previous + current));



/*
Output
------
numbers (15) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
numbers.every(isEven) false
numbers.some(isEven) true
numbers.forEach: 1 % 2 === 0 false
numbers.forEach: 2 % 2 === 0 true
numbers.forEach: 3 % 2 === 0 false
numbers.forEach: 4 % 2 === 0 true
numbers.forEach: 5 % 2 === 0 false
numbers.forEach: 6 % 2 === 0 true
numbers.forEach: 7 % 2 === 0 false
numbers.forEach: 8 % 2 === 0 true
numbers.forEach: 9 % 2 === 0 false
numbers.forEach: 10 % 2 === 0 true
numbers.forEach: 11 % 2 === 0 false
numbers.forEach: 12 % 2 === 0 true
numbers.forEach: 13 % 2 === 0 false
numbers.forEach: 14 % 2 === 0 true
numbers.forEach: 15 % 2 === 0 false
numbers.map(isEven) (15) [false, true, false, true, false, true, false, true, false, true, false, true, false, true, false]
numbers.filter(isEven) (7) [2, 4, 6, 8, 10, 12, 14]
numbers.reduce 120

*/