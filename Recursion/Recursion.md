##  ✅Recursion

☑️ Recursion is a method to solve problems that consists of solving smaller portions of the same problem
until you solve the original, larger problem. It usually involves calling the function itself.

###  Calling Directly:
```JavaScript
function recursiveFunction(params){
    recursiveFunction(params);
}
```

### Calling Indirectly:
```JavaScript
function recursiveFunction1(params){
  recursiveFunction2(params);
}
function recursiveFunction2(params){
  recursiveFunction1(params);
}
```
