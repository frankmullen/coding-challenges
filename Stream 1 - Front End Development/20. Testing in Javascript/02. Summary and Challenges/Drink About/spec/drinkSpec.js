describe("Drink", function() {
    describe('What Can I Drink function', function() {
        it('should return an error if age is less than zero', function() {
            expect(whatCanIDrink(-1)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        it('should return Toddy if age is less than 14', function() {
            expect(whatCanIDrink(12)).toBe("Drink Toddy");
        });
        it('should return Coke if age is less than 18', function() {
            expect(whatCanIDrink(14)).toBe("Drink Coke");
        });
        it('should return Beer if age is less than 21', function() {
            expect(whatCanIDrink(20)).toBe("Drink Beer");
        });
        it('should return Whisky if age is less than 130', function() {
            expect(whatCanIDrink(75)).toBe("Drink Whisky");
        });
        it('should return an error if age is anything else', function() {
        	expect(whatCanIDrink(130)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
    });
});

