// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(data) {
        this.head = new Node(data, this.head)
    }

    size() {
        function helper(head) {
            if (head.next === null) {
                return 1
            } else {
                head = this.head.next
                return 1 + helper(head)
            }
        }

        helper(this.head)
    }

    getFirst() {
        return this.head
    }

    getLast() {
        let head = this.head
        if (!head) {
            return null
        }
        function helper(head) {
            if (head.next === null) {
                return head
            } else {
                return helper(head.next)
            }
        }
        helper(head)

    }

    clear() {
        this.head = null
    }
    
    removeFirst() {
        if(!this.head) {
            return
        }
        this.head = this.head.next
    }

    removeLast() {
        let head = this.head
        if(!head) {
            return null
        }
        function helper(head) {
            if(head.next.head === null){
                head.next = null
            }else {
                helper(head.next.head)
            }
        }

        helper(head)
    }

    insertLast(data) {
        const node = new Node(data)
        let head = this.head
        if(!head) {
            this.head = node
        }
        function helper(head) {
            if(head.next.head === null){
                node.next = head.next
                head.next = node
            }else {
                helper(head.next.head)
            }
        }

        helper(head)
    }
}

module.exports = { Node, LinkedList };
