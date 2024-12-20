class BSTNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    toString() {
        return `[Left: ${this.left}| data: ${this.data} | Right: ${this.right}]`;
    }
}


class BST {
    constructor() {
        this.root = null;
    }

    insert(root_node, data) {
        const new_node = new BSTNode(data);
        if (!root_node) {
            return new_node;
        }
        else if (data < root_node.data) {
            root_node.left = this.insert(root_node.left, data);
        }
        else {
            root_node.right = this.insert(root_node.right, data);
        }
        return root_node;
    }


    search(root_node, data) {
        if(!root_node) {
            return false;
        }
        else if (root_node.data === data) {
            return true;
        }
        else if (data < root_node.data) {
            return this.search(root_node.left, data);
        }
        else {
            return this.search(root_node.right, data);
        }
    }


    findMax(node) {
        while(node.right) {
            node = node.right
        }
        return node;
    }

    delete(root_node, data) {
        if (!root_node) {
            return null;
        }
        else if (data < root_node.data) {
            root_node.left = this.delete(root_node.left, data);
        }
        else if(data > root_node.data) {
            root_node.right = this.delete(root_node.right, data);
        }
        else {
            let temp = null;

            if(!root_node.left && !root_node.right) {
                root_node = null;
            }
            else if(!root_node.left) {
                root_node = root_node.right;
            }
            else if(!root_node.right) {
                root_node = root_node.left;
            }
            else {
                temp = this.findMax(root_node.left);
                root_node.data = temp.data;
                root_node.left = this.delete(root_node.left, temp.data);
            }
        }

        return root_node;
    }




    toString() {
        let result = "";
        function inOrder(node) {
            if (node) {
                inOrder(node.left);
                result += `${node.data} `;
                inOrder(node.right);
            }
        }
        inOrder(this.root);
        return result;
    }


}



// const b = new BST();
// b.root = b.insert(b.root, 70); // Set the root initially
// b.insert(b.root, 12);
// b.insert(b.root, 14);
// b.insert(b.root, 67);
// b.insert(b.root, 100);
// b.insert(b.root, 120);
// b.insert(b.root, 1000);
// b.insert(b.root, 80);
// b.insert(b.root, 23);
// b.insert(b.root, 59);
// b.insert(b.root, 90);


// console.log(b.toString());
// console.log(b.search(b.root, 900));
// b.delete(b.root, 80);
// b.delete(b.root, 1000);
// b.delete(b.root, 90);
// b.delete(b.root, 70);
// b.delete(b.root, 12);
// console.log(b.toString());

// module.exports = {BSTNode, BST};
