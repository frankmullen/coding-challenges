# Challenge

- Implement the magic methods necessary to allow comparisons such as =, !=, , and > between two fractions

- It would be better if our Fraction class converted fractions down to their lowest common denominator, so that 4/2 became 2/1. This can be achieved by finding the greatest common denominator (GCD) between the numerator and denominator. Use the gcd function in the fractions module to do this in the initialiser.

- Difficult: modify __repr__ so that vulgar fractions are displayed properly, e.g. 2 ¼ instead of 9/4. You can use the built in divmod function to get quotient and remainder.

- Very difficult: modify the initialiser to accept floating point numbers such as 0.2 and create a fraction out of them. You could try multiplying the number by an increasing value until it becomes an integer, e.g. 0.2 * 5 = 1 so you know that it equals ⅕. Watch out for floating point issues though!