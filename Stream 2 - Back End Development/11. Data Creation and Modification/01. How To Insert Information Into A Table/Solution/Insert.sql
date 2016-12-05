INSERT INTO `mydb`.`people` (
    `first_name`,
    `second_name`,
    `DOB`
) VALUES (
    'John',
    'Lennon',
    STR_TO_DATE('1/01/2012', '%d/%m/%Y')
);