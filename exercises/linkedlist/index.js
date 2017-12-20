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
    if (head.next === null) {
      this.head = null
    } else {
      helper(head)
    }

    function helper(head) {
      if (head.next.next === null) {
        head.next = null
      } else {
        helper(head.next)
      }
    }

  }

  insertLast(data) {
    const node = new Node(data)
    const last = this.getLast()

    if (last) {
      last.next = node
    } else {
      this.head = node
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return
    }

    if (index === 0) {
      this.head = this.head.next
      return
    }

    const previous = this.getAt(index - 1)
    if (!previous || !previous.next) {
      return
    }
    previous.next = previous.next.next
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data)
      return
    }

    if (index === 0) {
      this.head = new Node(data, this.head)
      return
    }

    const previous = this.getAt(index - 1) || this.getLast()
    previous.next = new Node(data, previous.next)
  }

  forEach(fn) {
    let node = this.head
    let counter = 0
  
    while(node) {
      fn(node, counter)
      node = node.next
      counter++
    }
    
  }

  *[Symbol.iterator]() {
    let node =this.head
    while(node) {
      yield node
      node= node.next
    }
  }
}


module.exports = {
  Node,
  LinkedList
};
