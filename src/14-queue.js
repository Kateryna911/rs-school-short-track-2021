const ListNode = require('../extensions/list-node');

class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    const node = new ListNode(element);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
    return node.value;
  }

  dequeue() {
    const removed = this.head;
    this.head = this.head.next;
    this.length--;
    return removed.value;
  }
}

module.exports = Queue;
