const { BST } = require('./binarySearchTree');
let b = new BST();
b.root = b.insert(b.root, 100);
b.insert(b.root, 900);
b.insert(b.root, 500);
b.insert(b.root, 400);
b.insert(b.root, 300);
b.insert(b.root, 50);
b.insert(b.root, 10);
b.insert(b.root, 80);

const findMin = (bstRootNode) => {
    if (!bstRootNode) {
        return null
    }
    else if( bstRootNode.left === null) {
        return bstRootNode.data
    }
    let current = bstRootNode;
    current = current.left;
    while(current.left !== null) {
        current = current.left;
    }
    return current.data;
}


const findMinByRecursion = (bstRootNode) => {
    if (!bstRootNode) {
        return -1
    }
    else if(!bstRootNode.left) {
        return bstRootNode.data;
    }
    return findMinByRecursion(bstRootNode.left);
}


const findMax = (bstRootNode) => {
    if (!bstRootNode) {
        return null;
    }
    else if(!bstRootNode.right) {
        return bstRootNode.data;
    }
    let current = bstRootNode;

    while(current.right !== null) {
        current = current.right;
    }
    return current.data;
}

const findMaxByRecursion = (bstRootNode) => {
    if (!bstRootNode) {
        return null;
    }
    else if(!bstRootNode.right) {
        return bstRootNode.data;
    }
    return findMaxByRecursion(bstRootNode.right);
}

console.log(`[Iterative] => The min is: ${findMin(b.root)}`);
console.log(`[Recursive] => The min is: ${findMinByRecursion(b.root)}`);
console.log(`[Iterative] => The max is: ${findMax(b.root)}`);
console.log(`[Recursive] => The max is: ${findMaxByRecursion(b.root)}`);