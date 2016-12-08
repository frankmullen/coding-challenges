SELECT CONCAT(people.first_name, ' ', people.second_name)
AS fullname,
SUM(orders.amount) AS total_spend
FROM `mydb`.`people`
JOIN `mydb`.`orders`
ON people.id = orders.person_id
GROUP BY people.id;