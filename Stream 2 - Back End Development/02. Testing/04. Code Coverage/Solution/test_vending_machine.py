import unittest
from vending_machine import give_change, give_item_and_change


class TestVendingMachine(unittest.TestCase):
    def test_return_change(self):
        self.assertEqual(give_change(.17), [.10, .05, .02])
        self.assertEqual(give_change(.18), [.10, .05, .02, .01])
        self.assertEqual(give_change(.04), [.02, .02])

    def test_unavailable_item(self):
        """if user asks for an item that's unavailable, they should not be given the item, and their money should be returned"""
        item, change, _ = give_item_and_change('crisps', .50)
        self.assertIsNone(item)
        """changed the machine so it becomes evil and returns .10 less than the amount paid"""
        self.assertEqual(change, 0.4)

    def test_not_enough_money(self):
        """if user doesn't have enough money to pay, their money should be returned"""
        item, change, _ = give_item_and_change('coke', .60)
        self.assertIsNone(item)
        self.assertEqual(change, .60)

    def test_change_given(self):
        item, change, _ = give_item_and_change('biscuits', 1.50)
        self.assertEqual(item, 'biscuits')
        self.assertEqual(change, [0.2, 0.1, 0.05])
