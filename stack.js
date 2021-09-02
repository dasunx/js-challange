function Stack() {
	this._data = [];

	Stack.prototype.push = function (element) {
		this._data.push(element);
	};

	Stack.prototype.pop = function () {
		if (isEmpty()) {
			throw new Error('Error: Stack is empty');
		}
		return this._data.pop();
	};

	Stack.prototype.peek = function () {
		if (isEmpty()) {
			throw new Error('Error: Stack is empty');
		}
		return this._data[this._data.length - 1];
	};

	//refined as a private method
	const isEmpty = () => {
		return this._data.length === 0;
	};

	Object.defineProperty(Stack.prototype, 'count', {
		get: function count() {
			return this._data.length;
		}
	});
}

var stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop());
console.log(stack.peek());
