from fractions import gcd
from decimal import Decimal

class Fraction:

    def __init__(self, numerator, denominator):
        # tuple to make a fraction of the numerator
        fractionNum = (0, 0)

        # tuple to make a fraction of the denominator
        fractionDen = (0, 0)

        # check if numerator or denominator are float
        if isinstance(numerator, float) or isinstance(denominator, float):

            # get fraction for numerator
            if isinstance(numerator, float):

                # multiplying variable
                i = 2
                # multiply numerator until it becomes a whole number
                newNum = numerator*i

                while True:
                    # check if whole number (account for floating point error)
                    if float(Decimal(str(newNum % 1))) == 0:
                        # change tuple for the numerator fraction
                        fractionNum = (numerator*i, i)
                        break
                    else:
                        # continue multiplication loop
                        i += 1
                        newNum += numerator
                        print 'newNum: ' + str(newNum)
                        print 'float(Decimal(str(newNum % 1)):' + str(float(Decimal(str(newNum % 1))))

            # get fraction for denominator
            if isinstance(denominator, float):

                # multiplying variable
                i = 2
                # multiply denominator until it becomes a whole number
                newNum = denominator * i

                while True:
                    # check if whole number (account for floating point error)
                    if float(Decimal(str(newNum % 1))) == 0:
                        # change tuple for the denominator fraction
                        fractionDen = (denominator * i, i)
                        break
                    else:
                        # continue multiplication loop
                        i += 1
                        newNum += denominator
                        # print statements to check if floating point error is fixed
                        print 'newNum: ' + str(newNum)
                        print 'float(Decimal(str(newNum % 1)):' + str(float(Decimal(str(newNum % 1))))

            # if numerator int, convert to fraction
            if fractionNum == (0,0):
                fractionNum = (numerator, 1)

            # if denominator int, convert to fraction
            if fractionDen == (0,0):
                fractionDen = (denominator, 1)

            # amend numerator and denominator by diving out
            self.num = fractionNum[0] * fractionDen[1]
            self.den = fractionNum[1] * fractionDen[0]

            # account for gcd
            divisor = gcd(self.num, self.den)
            self.num = int(self.num/divisor)
            self.den = int(self.den/divisor)

        else:
            # if both numbers are ints
            self.num = int(numerator/gcd(numerator, denominator))
            self.den = int(denominator/gcd(numerator, denominator))



    def __repr__(self):
        if self.num == 0:
            return str(0)
        elif self.num < self.den:
            return '%s/%s' % (self.num, self.den)
        else:
            numsplit = divmod(self.num, self.den)
            if numsplit[1] == 0:
                return '%s' % (numsplit[0])
            else:
                return '%s %s/%s' % (numsplit[0], numsplit[1], self.den)

    def __add__(self, other):
        num = self.num * other.den + self.den * other.num
        den = self.den * other.den
        return Fraction(num, den)

    def __sub__(self, other):
        num = self.num * other.den - self.den * other.num
        den = self.den * other.den
        return Fraction(num, den)

    def __mul__(self, other):
        return Fraction(self.num * other.num, self.den * other.den)

    def __div__(self, other):
        return Fraction(self.num * other.den, self.den * other.num)

    def __eq__(self, other):
            if float(self.num)/self.den == float(other.num)/other.den:
                return 'equals: true'
            else:
                return 'equals: false'

    def __ne__(self, other):
        if float(self.num) / self.den != float(other.num) / other.den:
            return 'not equals: true'
        else:
            return 'not equals: false'

    def __gt__(self, other):
        if float(self.num) / self.den > float(other.num) / other.den:
            return 'greater than: true'
        else:
            return 'greater than: false'

f1 = Fraction(5, 0.7)
f2 = Fraction(1, 4)
print 'addition: ' + str(f1 + f2)
print 'subtraction: ' + str(f1 - f2)
print 'multiplication: ' + str(f1 * f2)
print 'division: ' + str(f1 / f2)
print f1 == f2
print f1 != f2
print f1 > f2


