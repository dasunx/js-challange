class Stack {
	#items;

	constructor() {
		this.#items = [];
	}

	push(element) {
		this.#items.push(element);
	}

	pop() {
		if (this.#items.length === 0) {
			throw new Error('Error: Stack is empty');
		}
		return this.#items.pop();
	}

	peek() {
		if (this.#items.length === 0) {
			throw new Error('Error: Stack is empty');
		}
		return this.#items[this.#items.length - 1];
	}

	get count() {
		return this.#items.length;
	}
}

var stack = new Stack();
stack.push(1);
stack.push(6);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.count);
