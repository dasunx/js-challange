function Stack() {
	let count = 0;
	let data = [];

	Stack.prototype.push = function (element) {
		data.push(element);
		count++;
	};

	Stack.prototype.pop = function () {
		if (isEmpty()) {
			throw new Error('Stack is empty');
		}
		count--;
		return data.pop();
	};

	Stack.prototype.peek = function () {
		if (isEmpty()) {
			throw new Error('Stack is empty');
		}
		return data[count - 1];
	};

	//refined as a private method
	const isEmpty = () => {
		return count === 0;
	};
}

var stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop());
console.log(stack.peek());
