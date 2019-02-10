const fibonacci = []; 
fibonacci[1] = 1; 
fibonacci[2] = 1; 

for (let i = 3; i <=10; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; 
}

for (let i = 1; i < fibonacci.length; i++) { 
  console.log(`fibonacci[${i}]`, fibonacci[i]); 
}

console.log('fibonacci', fibonacci);


/*
output
------
console.log(`fibonacci[${i}]`, fibonacci[i]);

fibonacci[1] 1
fibonacci[2] 1
fibonacci[3] 2
fibonacci[4] 3
fibonacci[5] 5
fibonacci[6] 8
fibonacci[7] 13
fibonacci[8] 21
fibonacci[9] 34
fibonacci[10] 55

console.log('fibonacci', fibonacci);
fibonacci (11) [empty, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

*/