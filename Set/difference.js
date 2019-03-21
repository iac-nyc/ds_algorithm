/*

Difference (a - b) 
Difference (b - a): 
create a set that contains those elements of set a that are not in set b. This operation is also sometimes called minus (-).

*/

const a = new Set([1,2,3]);
const b = new Set([2,3,4]);
const difference = new Set([...a].filter(x => !b.has(x)));
const difference2 = new Set([...b].filter(x=> !a.has(x)));
console.log(difference); // Set(1) {1}
console.log(difference2); // Set(1) {4}