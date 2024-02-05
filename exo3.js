class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const myStack = new Stack();

myStack.push(10);
myStack.push(20);
myStack.push(30);

console.log("Stack:", myStack.items);
console.log("Pop:", myStack.pop());
console.log("Peek:", myStack.peek());
console.log("Size:", myStack.size());
console.log("Is Empty:", myStack.isEmpty());
