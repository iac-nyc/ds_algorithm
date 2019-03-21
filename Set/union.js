/*

Union (a ∪ b):
create a set that contains the elements of both set a and set b.

*/

const a = new Set([1,2,3]);
const b = new Set([2,3,4]);
const union = new Set([...a, ...b]); // Set(4) {1, 2, 3, 4}