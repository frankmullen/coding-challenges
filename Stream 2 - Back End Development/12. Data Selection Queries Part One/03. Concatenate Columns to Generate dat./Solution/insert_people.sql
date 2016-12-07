INSERT INTO `mydb`.`people` (
    `first_name`,
    `second_name`,
    `DOB`
) VALUES 
    ('John','Lennon', STR_TO_DATE('1/01/2012', '%d/%m/%Y')),
	('Paul','McCartney', STR_TO_DATE('1/01/2011', '%d/%m/%Y')),
	('George','Harrison', STR_TO_DATE('1/01/2010', '%d/%m/%Y')),
	('Ringo','Starr', STR_TO_DATE('1/01/2009', '%d/%m/%Y'));