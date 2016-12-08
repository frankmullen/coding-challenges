SELECT * FROM mydb.orders
WHERE created_at
BETWEEN
'2016-12-05 12:42:27'
AND
'2016-12-05 12:42:29'
AND NOT
amount > 15.00
group by person_id
