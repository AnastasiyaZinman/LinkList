class LinkedList {
    constructor() {
        this._length = 0;
        this.head = null;
    }
    print() {
        var currentNode = this.head;
        while (currentNode != null) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
    addToTheBeginning(newNode) {
        // var newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this._length++;
    }
    addToTheEnd(value) {
        var newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this._length++;
            return newNode;
        }
        var currentNode = this.head;
        while (currentNode.next != null) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        this._length++;
        return newNode;
    }
    DeleteNode(nodeToDelete) {

        if (this.head == nodeToDelete) {
            this.head = nodeToDelete.next;
            this._length--;
            return; // and our work is done, let's get out of here
        }

        var currentNode = this.head;
        for (let i = 0; i < this._length; i++) {
            if (currentNode.next == nodeToDelete) {
                currentNode = nodeToDelete.next;
                this._length--;
            }
            currentNode = currentNode.next;
        }
    }
    removeItemByIndex(index) {
        if (index === 0) {
            this.head = this.head.next;
            this._length--;
            return;
        }
        else if (index > this._length - 1) {
            return console.log("error");
        }
        else {
            var currentNode = this.head;
            for (let i = 1; i < index; i++) {
                currentNode = currentNode.next;
            }
            currentNode = currentNode.next.next;
            this._length--;
        }
    }
}
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
var list = new LinkedList();
var firstNode = new Node(4);
var secondNode = new Node(99);
list.addToTheEnd(7);
list.addToTheEnd(8);
list.addToTheBeginning(firstNode);
console.log("Before removing");
list.print();
list.removeItemByIndex(1);
list.DeleteNode(secondNode);
console.log("After removing");
list.print();