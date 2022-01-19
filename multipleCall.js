// cal(2).add(3).add(1).sub(3).mul(2).val()

function cal(input) {
	this.input = input;
	this.add = function (addInput) {
		this.input = this.input + addInput;
		return this;
	};

	this.sub = function (subInput) {
		this.input = this.input - subInput;
		return this;
	};

	this.mul = function (mulInput) {
		this.input = this.input * mulInput;
		return this;
	};

	this.val = function () {
		console.log(this.input);
	};

	return this;
}

cal(2).add(3).add(1).sub(3).mul(2).val();
