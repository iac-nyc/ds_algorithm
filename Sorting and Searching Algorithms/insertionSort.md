## The Insertion Sort

✅The __insertion sort__ algorithm builds the final sorted array one value at a time. It assumes that the first element is already sorted. Then, a comparison with the second value is performed, should the second value stay in its place or be inserted before the first value.

The first two values will get sorted, then the comparison will take place with the third value(that is, should it be inserted in the first, second, or third position?) and so on.

__Implementation__:

```JavaScript
  function insertionSort(array, compareFn = defaultCompare){
    const { length } = array;
    let temp;
    for (let i = 1; i < length; i++){
      let j = i;
      temp = array[i];
      while ( j > 0 && compareFn(array[ j - 1 ], temp) === Compare.GREATER_THAN){
        array[j] = array[j - 1];
        j--;        
      }
      array[j] = temp;
    }
    return array;
  };
```
