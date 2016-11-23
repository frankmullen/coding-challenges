f = open('questions.txt', 'r')
lines = f.readlines()
f.close()
print lines

def get_questions():
    questions, answers = [], []
    with open('questions.txt') as f:
        for i, line in enumerate(f):
            answers.append(line.strip()) if i % 2 else questions.append(line)
    return zip(questions, answers)