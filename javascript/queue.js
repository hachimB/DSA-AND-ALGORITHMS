// Queue implementation with Linked list

class Node {
    constructor(data) {
        this.data = data;
        this.next_node = null;
    }

    toString() {
        return `<Data: ${this.data}>`
    }
}

class Queue {
    /**
     * For the queue DS we will implement 4 operations:
     * isEmpty() : To check if the queue is empty or not.
     * enQueue() : To add a node at the end of the queue.
     * deQueue() : To remove the first node of the queue.
     * peek() or front(): which will return the data of the first node of the queue.
     * NB: The toString() method has been implemented just for visual purpose
     */
    constructor() {
        this.front = null;
        this.rear = null;
    }


    isEmpty() {
        return this.front === null && this.rear === null;
    }


    enQueue(data) {
        const new_node = new Node(data);
        if (this.rear === null) {
            this.rear = new_node;
            this.front = new_node;
            return;
        }
        else {
            this.rear.next_node = new_node;
            this.rear = new_node;
        }
    }


    deQueue() {
        if(this.front === null && this.rear === null) {
            console.log("The Queue is empty");
            return;
        }

        else if(this.front === this.rear) {
            this.front = null;
            this.rear = null;
        }

        else {
            this.front = this.front.next_node;
        }
    }


    peek() {
        if(this.front === null && this.rear === null){
            console.log("The queue is empty");
            return;
        }
        return this.front.data;
    }

    toString() {
        if (this.front === null) {
            console.log("The queue is empty");
            return;
        }

        else if (this.front === this.rear) {
            return `[Front-Rear: ${this.front.data}]`;
        }

        let first = this.front;
        let str = `[Front: ${first.data}] -> `;
        while(first.next_node !== this.rear) {
            first = first.next_node;
            str += `[${first.data}] -> `;
        }
        str += `[Rear: ${this.rear.data}]`;
        return str;
    }
}




// Tests

const q = new Queue();

q.enQueue(12);
q.enQueue(13);
q.enQueue(14);
q.enQueue(15);
q.enQueue(16);
q.enQueue(30);
q.deQueue();
console.log(q);
console.log(q.peek());
console.log(q.toString());



module.exports = { Node, Queue };
