// Binary tree 

// Node of a tree
class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


// Initialize and allocate memory for the nodes of the tree
let firstChild = new TreeNode(2);
let secondChild = new TreeNode(3);
let thirdChild = new TreeNode(4);
let fourthChild = new TreeNode(5);


// Connect the nodes

firstChild.left = secondChild
firstChild.right = thirdChild;
secondChild.left = fourthChild



// Depth first search 
function InOrderDFS(node) {
    if (node === null) return;
    InOrderDFS(node.left)
    console.log(node.data)
    InOrderDFS(node.right) 
}


function PreOrderDFS(node) {
    if (node === null) return;
    console.log(node.data)    
    PreOrderDFS(node.left)
    PreOrderDFS(node.right)
}


function PostOrderDFS(node) {
    if (node === null ) return;
    PostOrderDFS(node.left)
    PostOrderDFS(node.right)
    console.log(node.data)
}


// Breadth first search 
function BFS(root) {
    if (root === null) return;

    // Initialize a queue with root as the first element
    const queue = [root]
    while (queue.length >  0) {
        // Remove the first element from the array and return it
        const node = queue.shift();

        // Print the data of the node
        console.log(node.data)

        // Add the left and right child to the queue
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }

}


// Test the functions
console.log("In-order DFS: ");
InOrderDFS(firstChild);
console.log("\nPre-order DFS: ");
PreOrderDFS(firstChild);
console.log("\nPost-order DFS: ");
PostOrderDFS(firstChild);
console.log("\nLevel order: ");
BFS(firstChild);
