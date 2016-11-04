describe("Calculator", function() {
	
	beforeEach(function() {
        calc = new Calculator();
    });

	describe('Addition function', function() {
		it('should add two numbers together and return the result', function() {
			calc.add(2);
			calc.add(2);
			expect(calc.value).toBe(4);
		});
		it ("should not return 4 if the numbers given don't add up to 4", function() {
			calc.add(12);
			calc.add(7);
			expect(calc.value).toBe(19);
		});

		it('should have called the alert function if the number given is undefined', function() {
			spyOn(window, "alert");
			calc.add();
			expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
		});
	});

	describe('Subtraction function', function() {
		it('should subtract one number from another and return the result', function() {
			calc.add(4);
			calc.subtract(2);
			expect(calc.value).toBe(2);
		});
		it ("should not return 2 if the second number subtracted from the first does not equal 4", function() {
			calc.add(25);
			calc.subtract(11);
			expect(calc.value).toBe(14);
		});
		it('should have called the alert function if the number given is undefined', function() {
			spyOn(window, "alert");
			calc.subtract();
			expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
		});
	})

	describe('Multiplication function', function() {
		it('should multiply one number by another and return the result', function() {
			calc.add(4);
			calc.multiply(2);
			expect(calc.value).toBe(8);
		});
		it ("should not return 8 if the numbers given don't multiply to 8", function() {
			calc.add(5);
			calc.multiply(6);
			expect(calc.value).toBe(30);
		});
		it('should have called the alert function if the number given is undefined', function() {
			spyOn(window, "alert");
			calc.multiply();
			expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
		});
	})

	describe('Division function', function() {
		it('should divide one number by another and return the result', function() {
			calc.add(4);
			calc.divide(2);
			expect(calc.value).toBe(2);
		});
		it ("should not return 2 if the numbers given don't divide to 2", function() {
			calc.add(24);
			calc.divide(6);
			expect(calc.value).toBe(4);
		});
		it('should have called the alert function if the number given is undefined', function() {
			spyOn(window, "alert");
			calc.divide();
			expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
		});
		it('should have called the alert function if the number given is 0', function() {
			spyOn(window, "alert");
			calc.divide(0);
			expect(window.alert).toHaveBeenCalledWith("Cannot divide by zero");
		});
	})
});