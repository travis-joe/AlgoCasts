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
    if (this.head === null) {
      return 0
    }

    function helper(head) {
      if (head.next === null) {
        return 1
      } else {
        head = head.next
        return 1 + helper(head)
      }
    }

    return helper(this.head)
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
    return helper(head)

  }

  clear() {
    this.head = null
  }

  removeFirst() {
    if (!this.head) {
      return
    }
    this.head = this.head.next
  }

  removeLast() {
    let head = this.head
    if (!head) {
      return 
    }
    function helper(head) {
      if (head.next === null) {
        head = null
      } else {
        helper(head.next)
      }
    }

    helper(head)
  }

  insertLast(data) {
    const node = new Node(data)
    let head = this.head
    if (!head) {
      this.head = node
    }
    function helper(head) {
      if (head.next.head === null) {
        node.next = head.next
        head.next = node
      } else {
        helper(head.next.head)
      }
    }

    helper(head)
  }
}

module.exports = {
  Node,
  LinkedList
};
