// @ts-check

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log('numbers', numbers);


numbers = numbers.reverse();
console.log('numbers.reverse()', numbers);

console.log('numbers.sort()', numbers.sort());

/* console.log(
  numbers.sort(function(a, b) {
    return a - b;
  })
); */ 

// ES5 syntax
console.log('numbers.sort((a, b) => a - b)', numbers.sort((a, b) => a - b));

/*
Output
------

numbers (15) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

numbers.reverse() (15) [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

numbers.sort() (15) [1, 10, 11, 12, 13, 14, 15, 2, 3, 4, 5, 6, 7, 8, 9]

numbers.sort((a, b) => a - b) (15) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

*/