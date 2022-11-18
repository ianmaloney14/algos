class Node {
    constructor(data) {
        this.data = data;
        this.next = null;              
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    addFront(data) {
        // if (this.head == null) {
        //     return this.head
        // }
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
        return this.head
    }
    removeFront() {
        if (this.head == null) {
            return this.head
        }
        const removeNode = this.head
        this.head = removeNode.next
        removeNode.next = null
        return this.head
    }
    front() {
        if (this.head == null) {
            return null
        } else {
            return this.head.data
        }
    }
}

let SLL = new LinkedList()

console.log(SLL.front())
SLL.addFront(14)
SLL.addFront(21)
SLL.addFront(94)
// console.log(SLL)
// SLL.removeFront()
// console.log(SLL)