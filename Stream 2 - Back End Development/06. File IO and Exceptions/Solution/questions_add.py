import sys

def prompt_ques():
    ask = raw_input('Add a question/answer? (Y/N)\n')
    if ask.lower() == 'y':
        question = raw_input('Add a new question\n')
        f.write(question + "\n")
        answer = raw_input('Add the answer\n')
        f.write(answer + "\n")
        prompt_ques()
    elif ask.lower() == 'n':
        print('OK, see you later')
        sys.exit()
    else:
        print('Not a valid reply, try again:\n')
        prompt_ques()


with open("question.txt", "a") as f:
    prompt_ques()



