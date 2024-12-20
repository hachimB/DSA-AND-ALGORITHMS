// Stack implementation using linked_list

class Node {
    constructor(data) {
        this.data = data;
        this.next_node = null
    }

    toString() {
        return `<Data: ${this.data}>`;
    }
}


class Stack {
    /**
     * We will implement 4 operations for The Stack DS:
     * 
     * push(): To add an element at the top of the stack
     * pop(): To remove an element from the top of the stack
     * isEmpty(): To check if the stack is empty or not
     * top(): Which will return the element at the top of the stack
     * 
     * NB: The toString() method has been implemented just for visual purpose
     */

    constructor() {
        this.head = null;
    }

    push(data) {
        const new_node = new Node(data);
        if (this.head === null) {
            this.head = new_node;
        }
        else {
            new_node.next_node = this.head;
            this.head = new_node
        }

    }

    pop() {
        if (this.head === null) {
            console.log("The stack is empty");
            return;
        }
        let current = this.head;
        let d = current.data;
        this.head = current.next_node;
        return d;
    }

    
    isEmpty() {
        return this.head === null;
    }


    top() {
        if (this.head === null) {
            return;
        }
        return this.head.data;
    }



    toString() {
        if(this.head === null) {
            console.log("The Stack is empty");
            return;
        }
        let str = ``;
        let current = this.head;
        let bool = true;
        
        while(current.next_node !== null) {
            if (bool) {
                str += `[Top: ${current.data}] -> `;
                bool = false;
            }
            else{
                str += `[${current.data}] -> `;
            }
            current = current.next_node;
        }
        str += `[Bottom: ${current.data}]`;
        return str;
    }


}


module.exports = {Node, Stack};
