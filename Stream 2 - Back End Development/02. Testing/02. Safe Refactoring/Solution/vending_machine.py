from decimal import *

coins = [1, .5, .2, .1, .05, .02, .01]

def give_change(amount):
    change = []
    amount = Decimal(str(amount))
    for coin in coins:
        coin = Decimal(str(coin))
        while coin <= amount:
            amount -= coin
            change.append(float(coin))
    return change

print(give_change(0.18))