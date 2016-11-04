describe("FizzBuzz", function() {
	
	describe('fizzBuzz function', function() {
		it('should return FizzBuzz if number is divisible by 5 and 3', function() {
			expect(fizzBuzz(15)).toBe("FizzBuzz");
		});
		it('should return Fizz if number is divisible by 3 but not 5', function() {
			expect(fizzBuzz(9)).toBe("Fizz");
		});
		it('should return Buzz if number is divisible by 5 and not 3', function() {
			expect(fizzBuzz(10)).toBe("Buzz");
		});
		it('should return the number if it is not divisible by 5 or 3', function() {
			expect(fizzBuzz(15)).toBe("FizzBuzz");
		});

		it('should have called the alert function if the number given is undefined', function() {
			spyOn(window, "alert");
			fizzBuzz();
			expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
		});
	});
});