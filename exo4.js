class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const myQueue = new Queue();

myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);

console.log("Queue:", myQueue.items);
console.log("Dequeue:", myQueue.dequeue());
console.log("Peek:", myQueue.peek());
console.log("Size:", myQueue.size());
console.log("Is Empty:", myQueue.isEmpty());
