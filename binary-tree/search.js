class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Creating new binary tree
const root = new TreeNode(2);
root.left = new TreeNode(3);
root.right = new TreeNode(4);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(6);

// Test cases
const value = 9;
if (searchDFS(root, value)) {
    console.log(`${value} is found in the binary tree`);
} else {
    console.log(`${value} is not found in the binary tree`);
}

// Function to search for an element 
// Uses Depth First Search algorithm
function searchDFS(root, key) {
    if (root === null ) return;
   
    if (root.data === key) {
        return true
    }

    const left_res = searchDFS(root.left, key)
    const right_res = searchDFS(root.right, key)

    return left_res || right_res;
}