class TreeNode {
    constructor(data) {
        this.data = data
        this.left = null;
        this.right = null;
    }
}


// Function to insert a new node into the tree
function insertData(root, key) {
    if (root === null) {
        return new TreeNode(key);
    }

    // Create new queue to work with the tree
    const queue = [root];
    while (queue.length > 0) {

        // Takes out the first element from the queue and returns it
        const currentNode = queue.shift();

        // If the left child of currentNode is null, add data there
        if (currentNode.left === null) {
            currentNode.left = new TreeNode(key)
            break;
        } else {
            // Else, push the left child of currentNode to the queue
            queue.push(currentNode.left);
        }

        // If the right child of currentNode is null, add data there 
        if (currentNode.right === null ) {
            currentNode.right = new TreeNode(key)
            break;
        } else {
            // Else, push the right child of currentNode to the queue
            queue.push(currentNode.right);
        }
    }

    // Return the root of the tree after insertion
    return root;
}

function InOrderDFS(root) {
    if (root === null) return;
    InOrderDFS(root.left)
    console.log(root.data)
    InOrderDFS(root.right)
}

let root = new TreeNode(2);
root.left = new TreeNode(3);
root.right = new TreeNode(4)
root.left.left = new TreeNode(5)

console.log("Inorder traversal before addition")
InOrderDFS(root)
console.log()


insertData(root, 6)
console.log("Inorder traversal after addition")
InOrderDFS(root)
console.log()