## The Bubble Sort

Worst-Case sorting algorithm with respect to runtime.


✅The __bubble sort__ algorithm compares every two adjacent values and swaps them if the first one is bigger than the second one. It has this name because the values tend to move up into the correct order, like bubbles rising to the surface.

__Implementation:__

```JavaScript
  function bubbleSort(array, compareFn = defaultCompare){
    const { length } = array;
    for(let i = 0; i < length; i++){
      for(let j= 0; j < length-1; j++){
        if(compareFn(array[j], array[j + 1]) === Compare.GREATER_THAN){
          swap(array, j, j + 1);
        }
      }
    }
    return array;
  }
```
