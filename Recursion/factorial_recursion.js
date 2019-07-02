// The factorial function using recursion


function factorial(n){
	if( n === 1 || n === 0 ){
		return 1;
	}
	return n * factorial(n - 1);
}

factorial(5); // Output: 120