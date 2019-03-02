// @ts-check
/* eslint-disable */

// Default Parameter Values
function sum(x = 1, y = 2, z = 3) {
  return x + y + z;
}
console.log(sum(4, 2)); // outputs 9

// function above is the same as
function sum2(x, y, z) {
  if (x === undefined) x = 1;
  if (y === undefined) y = 2;
  if (z === undefined) z = 3;
  return x + y + z;
}
console.log(sum2(4, 2)); // outputs 9

// or
function sum3() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

  return x + y + z;
}
console.log(sum3(4, 2)); // outputs 9

// spread operator ('...') 
let params = [3, 4, 5];
console.log(sum(...params)); // ES2015
console.log(sum.apply(undefined, params)); // ES5

let numbers = [1, 2, ...params]; // pushing values into array
console.log(numbers);

// rest parameter ('...') 
function restParamaterFunction(x, y, ...a) {
  return (x + y) * a.length;
}
console.log(restParamaterFunction(1, 2, 'hello', true, 100)); // outputs 9;

// code above is the same as ES5:
function restParamaterFunction2(x, y) {
  var a = Array.prototype.slice.call(arguments, 2);
  return (x + y) * a.length;
}
console.log(restParamaterFunction2(5, 2, 'hello', true, 7)); //  outputs 21
