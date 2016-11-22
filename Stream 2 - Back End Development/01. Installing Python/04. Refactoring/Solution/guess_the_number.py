import random

NUMBER_OF_GUESSES = 6
RANGE_BOTTOM = 10
RANGE_TOP = 30


def get_input():
    # give the user a certain amount of guesses
    for i in range(NUMBER_OF_GUESSES):
        guess = int(raw_input('guess the number between 10 and 30: '))
        if guess == random_number:
            print 'well done'
            break
        elif guess > random_number:
            print "too high"
        else:
            print "too low"
        print "you have " + str(NUMBER_OF_GUESSES-i-1) + " guesses left"


while True:
    # generate the random number
    random_number = random.randint(RANGE_BOTTOM, RANGE_TOP)

    get_input()

    print "let's try a new number!"