# Challenge

**Challenge A:**
Using the AVG(), select a person from your people table and get the average amount they spend and, at the same time, create a column that reads, “[first_name] spends “. Then print out the columns to provide the answers in the terminal.

**Challenge B:**
Create a new person in the people table and add in a profile row and two orders of random value.

**Challenge C:**
Once you’ve added them in use select to get their full name and the minimum amount they have spent.

**Challenge D:**
Choose a person and update ALL of his orders to have the amount 20.02.

**Challenge E:**
Look at this code:
```python
# Deleting a record
person = db.select('people',named_tuples=True)[0]
db.delete('orders', person_id="=%s" % person.id, id="=1")
```

If you were to leave out the id=”=1″ part what would happen?