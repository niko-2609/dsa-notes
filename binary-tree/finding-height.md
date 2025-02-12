### Maximum depth of a binary tree
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:
```
Input: root = [3,9,20,null,null,15,7]
Output: 3
```

Example 2:
```
Input: root = [1,null,2]
Output: 2
```  

### Algorithm
1. Use recursive approach here.
2. Check if the current node is null. If yes return 0. This is common return behaviour in depth related problems.
3. If the current node is not null, recursively check the depth of the left subtree.
4. Then recursively check the depth of the right subtree
5. The depth of tree at a particular node is determined by the following formular
    ```
    Depth at node N = 1 +  Maximum(depth of left subtree, depth of right subtree)
    ```
This is returned in the end so that when the recursion is passed to the previous function in the stack, it gives out correct depth


### Code
```
function maxDepth(root) {
    if (root === null) return 0;
    let leftHeight = maxDepth(root.left)
 }

```