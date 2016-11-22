import unittest
from vending_machine import give_change

class TestVendingMachine(unittest.TestCase):
    def test_return_change(self):
        coins = give_change(.17)
        self.assertEqual(coins, [.10, .05, .02], 'wrong change given')
        self.assertEqual(give_change(.18), [.10, .05, .02, .01],)

    def test_multiple_same_coins(self):
        self.assertEqual(give_change(.04), [.02, .02])

