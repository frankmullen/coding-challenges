SELECT CONCAT("Wally West spent a total of ") AS full_name,
SUM(amount) AS total FROM `mydb`.`orders` WHERE person_id=1;