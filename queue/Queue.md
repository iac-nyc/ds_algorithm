## ✅Queue Data Structure

A ***queue*** is an ordered collection of items that follows the __first in, first out (FIFO)__ also known as the __first come, first served__ principle.

The addition of new elements in a queue is at the tail, and the removal is from the front. The newest element added to the queue must wait at the end of the queue.

#### ☑️Methods available for Queue


```
enqueue(element)
This method adds a new element at the back of the queue.
```
```
dequeue()
This method removes the first element from the queue(the item that is in the
front of the queue).It also returns the removed element.
```
```
peek()
This method returns the first element from the queue, the first one added,
and the first one that will be removed from the queue.
The queue is not modified(it does not remove the element;
it only returns the element for information purposes - very similar to
peek method from the Stack class).
This method also works as the 'front' method, as it is know in other languages.
```
```
isEmpty()
This method returns 'true' if the queue does not contain any elements,
and 'false' if the size of the queue is bigger than 0.
```

```
size()
This method returns the number of elements that the queue contains.
It is similar to the length property of an array.
```
