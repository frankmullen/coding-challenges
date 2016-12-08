# Challenge

**Challenge A:**

Using the example query:

```sql
/**
 * Using ORDER BY on the amount field
 */
SELECT * FROM my_db.orders
WHERE created_at
BETWEEN
'2015-09-08 14:48:00'
AND
'2016-09-08 15:34:00'
AND NOT
amount > 12.00;
Add in descending ordering on the amount column.
```

**Challenge B:**

If you don’t have more than one person in your people table, add one more and then add a few more orders for them into the orders table.

Next, run the previous query WITHOUT the GROUP BY clause and see what you get from your own unique results.

