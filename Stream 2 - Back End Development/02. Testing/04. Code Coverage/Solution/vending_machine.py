from decimal import Decimal

coins = [1, .50, .20, .10, .05, .02, .01]

quantities = [40, 25, 0, 33, 15, 24, 22]

available_items = {
    'coke': .73,
    'biscuits': 1.15,
    'apple': .43
}


def give_change(amount):
    change = []
    amount = Decimal(str(amount))
    position = 0
    for coin in coins:
        coin = Decimal(str(coin))
        while coin <= amount and quantities[position] > 0:
            amount -= coin
            change.append(float(coin))
        position += 1
    return change

"""note - the program can be updated to add new coins to the quantities, and take change coins away from the quantities. It was not part of the challenge, so I'm moving on."""



def give_item_and_change(item, amount):
    if item not in available_items:
        # changed to not return full amount
        change = amount - .10
        return None, change, "that item isn't available"

    cost = available_items[item]

    if amount < cost:
        return None, amount, 'not enough money'

    change_to_return = float(amount) - cost
    coins = give_change(change_to_return)
    return item, coins, "here's your change"


if __name__ == '__main__':
    while True:
        item = raw_input('choose item: %s' % available_items)

        # allow user to enter a list of coins
        string_input = raw_input('enter coins in pounds, separated by a space:')

        # splits the input string on spaces
        input_list = string_input.split()

        # process string elements in the list and make them Decimals
        input_list = [Decimal(a) for a in input_list]

        #calculate total amount paid
        amount = sum(input_list)

        print give_item_and_change(item, amount)


