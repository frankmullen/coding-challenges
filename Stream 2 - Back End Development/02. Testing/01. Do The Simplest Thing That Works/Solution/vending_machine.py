coins = [100, 50, 20, 10, 5, 2, 1]

def give_change(amount):
    change = []
    for coin in coins:
        if coin <= amount:
            amount -= coin
            change.append(coin)
            if coin == amount:
                amount-= coin
                change.append(coin)
    return change

print(give_change(4))