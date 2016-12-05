/**
 * Tell MySQL which Database we wish to use
 */
USE mydb;
 
/**
 * Create a table called people that will
 * have the following rows -
 * id, first_name, second_name, DOB
 */
CREATE TABLE people (
    id INTEGER,
    first_name VARCHAR(50),
    second_name VARCHAR(50),
    DOB DATE
);
