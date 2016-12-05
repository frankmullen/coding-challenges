SELECT COUNT(amount) AS total_sales,
AVG(amount) AS average_amount_spent FROM mydb.orders
WHERE person_id = 1;