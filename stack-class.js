class Stack {
	constructor() {
		this.items = [];
		this.count = 0;
	}

	push(element) {
		this.items.push(element);
		this.count++;
	}

	pop() {
		if (this.isEmpty()) {
			throw new Error('Stack is empty');
		}
		this.count--;
		return this.items.pop();
	}

	peek() {
		if (this.isEmpty()) {
			throw new Error('Stack is empty');
		}
		return this.items[this.items.length - 1];
	}

	isEmpty() {
		return this.items.length === 0;
	}
}

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(4);
console.log(stack.peek());
console.log(stack.count);
