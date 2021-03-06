## Linked Lists Data Structure

✅Linked Lists store a sequential collection of elements but, unlike arrays, in linked lists the elements are not placed contiguously in memory.

Each element consists of a node that stores the element itself and also a reference(also known as a pointer or link) that points to the next element.

In __array__, we can directly access any element at any position; in the __linked lists__, if we want to access an element from the middle, we need to start from the beginning(__head__) and iterate the list until we find the desired element.  

####  ☑️Methods available for Linked Lists:

```
push(element):
This method adds a new element to the end of the list.
```
```
insert(element, position):
This method inserts a new element at a specified position in the list.
```
```
getElementAt(index):
This method returns the element of a specific position in the list.
If the element doesn't exist in the list, it returns undefined.
```
```
remove(element):
This method removes an element from the list.
```
```
indexOf(element):
This method returns the index of the element in the list.
If the element does not exist in the list, it returns -1
```
```
removeAt(position):
This method removes an item from a specified position in the list.
```
```
isEmpty():
This method returns
true if the linked list does not contain any elements,
false if the size of the linked list is bigger than 0
```
```
size():
This method returns the number of elements the linked list contains.
It is similar to the length property of the array.
```
```
toString():
This method returns a string representation of the linked list.
As the list uses a Node class as an element, we need to overwrite
the default toString method inherited from the JavaScript Object
class to output only the element values.
```
