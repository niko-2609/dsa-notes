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
    const queue = [root];
    while (queue.length > 0) {
        const currentNode = queue.shift();
        if (currentNode.left === null) {
            currentNode.left = new TreeNode(key)
            break;
        } else {
            queue.push(currentNode.left);
        }

        if (currentNode.right === null ) {
            currentNode.right = new TreeNode(key)
            break;
        } else {
            queue.push(currentNode.right);
        }
    }

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