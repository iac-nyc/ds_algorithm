## Trees

✅A non-sequential data structure. A tree is an abstract model of a hierarchical structure. The most common example of a tree in real life would be a family tree or a company organization chart.

☑️Terminology:

A tree consists of __nodes__ with a __parent-child__ relationship. Each node has a parent(except for the first node at the top) and zero or more children.


✔ Binary Tree:

A node in a __binary tree__ has two children at most: one left child and one right child. This definition allows us to write more efficient algorithms to insert, search, and delete nodes to/from a tree.

✔ Binary Search Tree:

A __binary search tree(BST)__ is a binary tree, but it only allows you to store nodes with lesser values on the left-hand side and nodes with greater values on the right-hand side.

✔✔ __Methods__:

```
insert(key):
This method inserts a new key in the tree
```
```
search(key):
This method searches for the key in the tree and returns true if it exists
and false if the node does not exist
```
```
inOrderTraverse():
This method visits all nodes of the tree using in-order traverse
```
```
preOrderTraverse():
This method visits all the nodes of the tree using pre-order traverse
```
```
postOrderTraverse():
This method visits all the nodes of the tree using post-order traverse
```
