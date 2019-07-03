/*

The fibonacci sequence using recursion

1. The fibonacci number at position 0 is 0
2. The fibonacci number at position 1 or 2 is 1
3. The fibonacci number at position n(for n > 2) is the
   Fibonacci of (n -1) + Fibonacci of (n -2)

*/


function fibonacci(n){
	if(n < 1) return 0;
	if(n <= 1) return 1;
	return fibonacci(n-1)+fibonacci(n-2);

}

fibonacci(8); // Output: 21