function Stack() {
	this.count = 0;
	this.data = [];

	this.push = function (element) {
		this.data.push(element);
		this.count++;
	};

	this.pop = function () {
		if (this.isEmpty()) {
			throw new Error('Stack is empty');
		}
		this.count--;
		return this.data.pop();
	};

	this.peek = function () {
		if (this.isEmpty()) {
			throw new Error('Stack is empty');
		}
		return this.data[this.count - 1];
	};

	this.isEmpty = function () {
		return this.count === 0;
	};
}

var stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.peek());
