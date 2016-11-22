# Challenge

- Try and write the correct code for give_change to work.
Let’s try this new version out:

coins = [100, 50, 20, 10, 5, 2, 1]
 
 
def give_change(amount):
    change = []
    for coin in coins:
        if coin <= amount:
            amount -= coin
            change.append(coin)
    return change
Line 1: We define our list of coins in pence.

Line 5: We define an empty list which will hold our list of coins.

Lines 6-8: We iterate through the coins, seeing if the coin is less than or equal to the amount. If it is, we take off the value of the coin and add it to the list. Remember that amount -= coin is just shorthand for amount = amount – coin. We skip £1, 50p and 20p because they’re too large, but when it comes to 10p, we take it off (and add it to the list) so we’re left with amount =17-10 = 7p, and change = [10]. We then take off 5p and 2p so that amount = 0 and change = [10,5,2], which is the right answer.

We can see that the tests pass, but there’s still a bug. Can you spot it? Each coin is only ever used once, so we just have to think of an amount that requires two or more of the same coin, for instance 4p. Add the following test method to the test class:

def test_multiple_same_coins(self):
    self.assertEqual(give_change(4), [2, 2])
Notice that this time we didn’t supply a message to assertEqual, so we get slightly different output, telling us how the lists differ. Sometimes it’s actually better not to supply a message, as the output can be quite helpful:

Failure
Traceback (most recent call last):
  File "C:\Users\will\PycharmProjects\untitled1\vending_machine.py", line 19, in 
test_return_change
    self.assertEqual(give_change(4), [2, 2])
AssertionError: Lists differ: [2, 1] != [2, 2]
 
First differing element 1:
1
2
 
- [2, 1]
?     ^
 
+ [2, 2]
?     ^
If the new test isn’t running, make sure you’re running the test class rather than the test method in the Run/Debug configuration:



