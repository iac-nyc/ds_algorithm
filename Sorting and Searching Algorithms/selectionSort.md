## Selection Sort

✅ The __selection sort__ algorithm is an in-place comparison sort algorithm. It is used to find the minimum value in the data structure, place it in the first position, then find the second minimum value, place it in the second position, and so on.

__Implementation__:

```JavaScript
  function selectionSort(array, compareFn = defaultCompare){
    const { length } = array;
    let indexMin;
    for (let i = 0; i < length - 1; i++){
      indexMin = i;

      for (let j = i; j < length; j++){
        if( compareFn(array[indexMin], array[j]) === Compare.GREATER_THAN){
          indexMin = j;
        }
      }
      if ( i !== indexMin){
        swap(array, i, indexMin);
      }
    }
    return array;
  };
```
