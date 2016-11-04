Calculator = function() {
	this.value = 0;
}

Calculator.prototype.add = function(number) {
	if (typeof(number) == "number") {
		this.value += number;
	} else {
		alert("Argument must be a number");
	}
};

Calculator.prototype.subtract = function(number) {
	if (typeof(number) == "number") {
		this.value -= number;
	} else {
		alert("Argument must be a number");
	}
};

Calculator.prototype.multiply = function(number) {
	if (typeof(number) == "number") {
		this.value *= number;
	} else {
		alert("Argument must be a number");
	}
};

Calculator.prototype.divide = function(number) {
	if (typeof(number) == "number" && number != 0) {
		this.value /= number;
	} else if (number == 0) {
		alert("Cannot divide by zero")
	} else {
		alert("Argument must be a number");
	}
};
