##  ✅Dictionary Data Structure:

A dictionary is used to store __[key, value]__ pairs, where the key could be used to find a particular element.

A dictionary is very similar to a set; a __set__ stores a __[key, key]__ collection of elements, and a __dictionary__ stores a __[key, value]__ collection of elements.

A dictionary is also known as a ***map***, ***symbol table***, and an ***associative array***.

## ☑️map/dictionary methods:

```
set(key, value):
This methods adds a new element to the dictionary.
If the key already exists, the existing value will be
overwritten with the new one.
```
```
remove(key):
This method removes the value from the dictionary
using the 'key' as the search parameter
```
```
hasKey(key):
This method returns 'true' if the key exists in
the dictionary and 'false' otherwise.
```
```
get(key):
This method returns a specific 'value' from the
dictionary using the 'key' as the search parameter.
```
```
clear():
This method removes all the values from the dictionary.
```
```
size():
This method returns how many values the dictionary contains.
It is similar to the length property of the Array class.
```
```
isEmpty():
This method returns 'true' if the size equals to zero
and 'false' otherwise.
```
```
keys():
This method returns an array of all the keys the dictionary contains.
```
```
values():
This method returns an array of the values of the dictionary.
```
```
keyValues():
This method returns an array of all value pairs[key, value] of the dictionary.
```
```
forEach(callBackFn):
This method iterates every value pair in the dictionary.
The callBackFn function has two parameters: key and value.
This method can also be interrupted in case the callback function
returns 'false'(similar to the 'every' method from the Array class).
```
