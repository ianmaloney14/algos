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
    display() {
        let list = ''
        if (this.head == null) {
            return "list is empty"
        }
        list += this.head.data
        let runner = this.head.next
        while (runner != null) {
            list += ", " + runner.data
            runner = runner.next
        }
        return list
    }
}

let SLL = new LinkedList()


SLL.addFront(14)
SLL.addFront(21)
SLL.addFront(94)
console.log(SLL.display())
// console.log(SLL.front())
// console.log(SLL)
// SLL.removeFront()
// console.log(SLL)