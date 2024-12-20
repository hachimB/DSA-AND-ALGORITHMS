// Circular linked_list implementation


class Node {

    data;
    constructor(data) {
        this.data = data
        this.next_node = null;
    }

    toString() {
        return `< Data: ${this.data} >`
    }
}


class linkedList {

    constructor() {
        this.head = null;
    }

    size() {
        let current = this.head;
        let size = 0
        if (current === null) {
            console.log("The linked list is empty");
            return;
        }
        do {
            size += 1;
            current = current.next_node;
        } while(current !== this.head)
        return size;
    }

    append(data) {
        const new_node = new Node(data);
        let current = this.head;
        if (current === null) {
            this.head = new_node;
            new_node.next_node = this.head;
        }
        else {
            while(current.next_node !== this.head) {
                current = current.next_node;
            }
            current.next_node = new_node;
            new_node.next_node = this.head;
        }
    }

    addAtIndex(data, index) {
        const newNode = new Node(data);
        let count = 1;

        if (index === 0) {
            if(this.head === null) {
                this.head = newNode;
                newNode.next_node = this.head;
            }
            else {
                let current = this.head;
                while(current.next_node !== this.head) {
                    current = current.next_node;
                }
                let tail = current;
                newNode.next_node = this.head;
                tail.next_node = newNode;
                this.head = newNode;
            }
        }
        else {
            let current = this.head;
            do {
                if (count === index) {
                    newNode.next_node = current.next_node;
                    current.next_node = newNode;
                    break;
                }
                count += 1;
                current = current.next_node;
            }while(current !== this.head)
        }
    }

    removeAtIndex(index) {
        let current = this.head;
        if (index == 0) {
            while(current.next_node !== this.head) {
                current = current.next_node;
            }
            let tail = current;
            tail.next_node = this.head.next_node;
            this.head = this.head.next_node;
        }
        else {
            let count = 1;
            let prev = null
            while(current.next_node != this.head) {
                prev = current;
                current = current.next_node;
                if (count == index) {
                    prev.next_node = current.next_node;
                    break;
                }
                count += 1;
            }

        }
    }



    toString() {
        let current = this.head;
        let str = "";
        let bool = true;
        if (!current) {
            console.log("the linked list is empty");
            return;
        }
        while(current.next_node !== this.head) {
            if(bool) {
                str += `[Head: ${current.data}] -> `;
                bool = false;
            }
            else {
                str += `[${current.data}] -> `
            }
            current = current.next_node;
        }
        str += `[tail: ${current.data}]`;
        return str;
    }


}

module.exports = { Node, linkedList };
