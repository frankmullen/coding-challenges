/**
 * Using the AS keyword to return more readable column names
 * for the COUNT and SUM functions
 */
SELECT COUNT(amount) AS total_sales,
SUM(amount) AS total_amount_spent FROM mydb.orders
WHERE person_id = 1;