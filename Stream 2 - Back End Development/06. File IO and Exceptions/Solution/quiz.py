import sys

def get_questions():

    with open('questions.txt') as f:
        lines = f.readlines()

    return [(lines[i].strip(), lines[i+1].strip()) for i in range(0, len(lines), 2)]


try:
    questions = get_questions()
except IOError:
    print 'Questions file not found'
    sys.exit()
except IndexError:
    print 'Error: All questions in the questions file must have answers.'
    sys.exit()

score = 0
total = len(questions)
for question, answer in questions:
    # give 3 guesses for the user to get the right answer
    for i in range(3):
        guess = raw_input(question)
        if guess.lower() == answer.lower():
            score += 1
            print('correct')
            break
        if len(guess) == len(answer):
            # check if answer if close enough
            error = 0
            for index in range(0, (len(answer))):
                if guess[index].lower() != answer[index].lower():
                    error += 1
            if error <= 2:
                score += 1
                print('close enough')
                break
            if error > 2:
                if i < 2:
                    print('guess again')
                    break
                else:
                    print('wrong answer')
                    break
        else:
            print('wrong answer')


print 'You got %s out of %s questions right' % (score, total)