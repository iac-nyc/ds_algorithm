/*

Intersection (a ∩ b): 
create a set that contains those elements of set a that are also in set b.

*/

const a = new Set([1,2,3]);
const b = new Set([2,3,4]);
const intersection = new Set([...a].filter(x => b.has(x)));
console.log(intersection); // Set(2) {2, 3}