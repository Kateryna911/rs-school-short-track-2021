class Stack {
  constructor() {
    this.arr = [];
    this.index = 0;
  }

  push(element) {
    this.arr[this.index] = element;
    this.index += 1;
  }

  pop() {
    if (this.arr[1]) {
      const popEl = this.arr[this.index - 1];
      this.arr = this.arr.slice(0, this.index - 1);
      this.index -= 1;
      return popEl;
    } return undefined;
  }

  peek() {
    return this.arr[this.index - 1];
  }
}

module.exports = Stack;
