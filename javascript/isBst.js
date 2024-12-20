const { BST } = require('./binarySearchTree');


const isBst = (root, min=-Infinity, max=Infinity) => {
    if (!root) return true;
    if(root.data <= min || root.data >= max) {
        return false
    }
    return isBst(root.left, min, root.data) && isBst(root.right, root.data, max);
}


let b = new BST();
b.root = b.insert(b.root, 90);
b.insert(b.root, 900);
b.insert(b.root, 500);
b.insert(b.root, 400);
b.insert(b.root, 300);
b.insert(b.root, 50);
b.insert(b.root, 0);
b.insert(b.root, 80);

console.log(b.toString()); 
console.log(isBst(b.root));