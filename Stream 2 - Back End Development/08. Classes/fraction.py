from fractions import gcd
from decimal import Decimal

class Fraction:

    def __init__(self, numerator, denominator):

        fractionNum = (0, 0)
        fractionDen = (0, 0)

        if isinstance(numerator, float) or isinstance(denominator, float):

            if isinstance(numerator, float):

                i = 2
                newNum = numerator*i

                while True:

                    if newNum % 1 == 0:

                        fractionNum = (numerator*i, i)
                        break
                    else:
                        i += 1
                        newNum += numerator

            if isinstance(denominator, float):

                i = 2
                newNum = denominator * i

                while True:

                    if newNum % 1 == 0:
                        fractionDen = (denominator * i, i)
                        break
                    else:
                        i += 1
                        newNum += denominator

            if fractionNum == (0,0):
                fractionNum = (numerator, 1)

            if fractionDen == (0,0):
                fractionDen = (denominator, 1)

            self.num = fractionNum[0] * fractionDen[1]
            self.den = fractionNum[1] * fractionDen[0]
            divisor = gcd(self.num, self.den)
            self.num = int(self.num/divisor)
            self.den = int(self.den/divisor)

        else:
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

f1 = Fraction(0.2, 0.5)
f2 = Fraction(0.8, 1)
print 'addition: ' + str(f1 + f2)
print 'subtraction: ' + str(f1 - f2)
print 'multiplication: ' + str(f1 * f2)
print 'division: ' + str(f1 / f2)
print f1 == f2
print f1 != f2
print f1 > f2


